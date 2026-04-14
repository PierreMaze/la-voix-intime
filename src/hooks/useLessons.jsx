import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useToast } from '../components/dashboard/ToastContext';
import pb from '../lib/pocketbase';

export function useLessons(formationId) {
  return useQuery({
    queryKey: ['lessons', formationId],
    queryFn: () =>
      pb.collection('lessons').getFullList({
        filter: `formation_id = "${formationId}"`,
        sort: 'order',
      }),
    enabled: !!formationId,
  });
}

export function useCreateLesson() {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: (data) => pb.collection('lessons').create(data),
    onSuccess: (record) => {
      queryClient.invalidateQueries({ queryKey: ['lessons', record.formation_id] });
      toast.success('Leçon ajoutée.');
    },
    onError: () => toast.error('Impossible d\'ajouter la leçon.'),
  });
}

export function useUpdateLesson() {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: ({ id, data }) => pb.collection('lessons').update(id, data),
    onSuccess: (record) => {
      queryClient.invalidateQueries({ queryKey: ['lessons', record.formation_id] });
      toast.success('Leçon mise à jour.');
    },
    onError: () => toast.error('Impossible de modifier la leçon.'),
  });
}

export function useDeleteLesson() {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: ({ id, formationId }) =>
      pb.collection('lessons').delete(id).then(() => formationId),
    onSuccess: (formationId) => {
      queryClient.invalidateQueries({ queryKey: ['lessons', formationId] });
      toast.success('Leçon supprimée.');
    },
    onError: () => toast.error('Impossible de supprimer la leçon.'),
  });
}
