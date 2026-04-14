import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useToast } from '../components/dashboard/ToastContext';
import pb from '../lib/pocketbase';

export function useFormations() {
  return useQuery({
    queryKey: ['formations'],
    queryFn: () => pb.collection('formations').getFullList({ sort: 'title' }),
  });
}

export function useFormation(id) {
  return useQuery({
    queryKey: ['formations', id],
    queryFn: () => pb.collection('formations').getOne(id),
    enabled: !!id,
  });
}

export function useCreateFormation() {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: (data) => pb.collection('formations').create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['formations'] });
      toast.success('Formation créée avec succès.');
    },
    onError: () => toast.error('Impossible de créer la formation.'),
  });
}

export function useUpdateFormation() {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: ({ id, data }) => pb.collection('formations').update(id, data),
    onSuccess: (record) => {
      queryClient.invalidateQueries({ queryKey: ['formations'] });
      queryClient.invalidateQueries({ queryKey: ['formations', record.id] });
      toast.success('Formation enregistrée.');
    },
    onError: () => toast.error('Impossible de sauvegarder la formation.'),
  });
}

export function useDeleteFormation() {
  const queryClient = useQueryClient();
  const toast = useToast();
  return useMutation({
    mutationFn: (id) => pb.collection('formations').delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['formations'] });
      toast.success('Formation supprimée.');
    },
    onError: () => toast.error('Impossible de supprimer la formation.'),
  });
}
