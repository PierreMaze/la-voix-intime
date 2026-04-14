import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import pb from '../lib/pocketbase';

export function usePurchases() {
  return useQuery({
    queryKey: ['purchases'],
    queryFn: () =>
      pb.collection('purchases').getFullList({
        filter: `user_id = "${pb.authStore.record?.id}"`,
        expand: 'formation_id',
        sort: '-purchased_at',
      }),
    enabled: pb.authStore.isValid,
  });
}

export function useAllPurchases() {
  return useQuery({
    queryKey: ['purchases', 'all'],
    queryFn: () =>
      pb.collection('purchases').getFullList({ expand: 'user_id,formation_id', sort: '-purchased_at' }),
  });
}

export function useGrantAccess() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ userId, formationId }) =>
      pb.collection('purchases').create({
        user_id: userId,
        formation_id: formationId,
        purchased_at: new Date().toISOString(),
        payment_ref: 'MANUEL',
      }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['purchases'] }),
  });
}
