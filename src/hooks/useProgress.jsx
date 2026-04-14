import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import pb from '../lib/pocketbase';

export function useProgress(formationId) {
  const { data: lessons = [] } = useQuery({
    queryKey: ['lessons', formationId],
    queryFn: () =>
      pb.collection('lessons').getFullList({
        filter: `formation_id = "${formationId}"`,
        sort: 'order',
      }),
    enabled: !!formationId,
  });

  const { data: progresses = [], ...rest } = useQuery({
    queryKey: ['progress', formationId],
    queryFn: () =>
      pb.collection('progress').getFullList({
        filter: `user_id = "${pb.authStore.record?.id}"`,
      }),
    enabled: !!formationId && pb.authStore.isValid,
  });

  const completedIds = new Set(
    progresses.filter((p) => p.completed).map((p) => p.lesson_id)
  );

  const completionPercent =
    lessons.length > 0 ? Math.round((completedIds.size / lessons.length) * 100) : 0;

  return { progresses, completedIds, completionPercent, ...rest };
}

export function useMarkComplete() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ lessonId }) => {
      const existing = await pb
        .collection('progress')
        .getFirstListItem(
          `user_id = "${pb.authStore.record?.id}" && lesson_id = "${lessonId}"`
        )
        .catch(() => null);

      if (existing) {
        return pb.collection('progress').update(existing.id, { completed: true });
      }
      return pb.collection('progress').create({
        user_id: pb.authStore.record?.id,
        lesson_id: lessonId,
        completed: true,
        completed_at: new Date().toISOString(),
      });
    },
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['progress'] }),
  });
}
