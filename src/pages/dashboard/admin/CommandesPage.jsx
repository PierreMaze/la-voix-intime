import { useState } from 'react';
import { useFormations } from '../../../hooks/useFormations';
import { useAllPurchases } from '../../../hooks/usePurchases';
import { useQuery } from '@tanstack/react-query';
import pb from '../../../lib/pocketbase';

function useStudents() {
  return useQuery({
    queryKey: ['users', 'students'],
    queryFn: () => pb.collection('users').getFullList({ filter: 'role = "student"' }),
  });
}

export function CommandesPage() {
  const { data: purchases = [], isLoading } = useAllPurchases();
  const { data: formations = [] } = useFormations();
  const { data: students = [] } = useStudents();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all'); // all | paypal | manuel

  const enriched = purchases.map((p) => ({
    ...p,
    student: students.find(s => s.id === p.user_id),
    formation: formations.find(f => f.id === p.formation_id),
  }));

  const filtered = enriched.filter((p) => {
    const name = p.student?.name || p.student?.email || '';
    const title = p.formation?.title || '';
    const matchSearch = name.toLowerCase().includes(search.toLowerCase()) ||
      title.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === 'all' ||
      (filter === 'paypal' && p.payment_ref !== 'MANUEL') ||
      (filter === 'manuel' && p.payment_ref === 'MANUEL');
    return matchSearch && matchFilter;
  }).sort((a, b) => new Date(b.purchased_at) - new Date(a.purchased_at));

  const revenue = enriched
    .filter(p => p.payment_ref !== 'MANUEL')
    .reduce((acc, p) => acc + (p.formation?.price || 0), 0);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl">

      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Commandes</h1>
        <p className="text-sm text-gray-500 mt-0.5">
          {purchases.length} commande{purchases.length !== 1 ? 's' : ''} ·{' '}
          <span className="text-emerald-600 font-medium">{revenue} € de revenus PayPal</span>
        </p>
      </div>

      {/* Filtres */}
      {purchases.length > 0 && (
        <div className="flex flex-col gap-3 mb-5">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher par client ou formation…"
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"
            />
          </div>
          <div className="flex gap-1.5 bg-gray-100 rounded-xl p-1 self-start">
            {[
              { key: 'all', label: 'Toutes' },
              { key: 'paypal', label: 'PayPal' },
              { key: 'manuel', label: 'Manuel' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all whitespace-nowrap ${
                  filter === tab.key ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Loading */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <div className="w-8 h-8 border-[3px] border-violet-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-gray-400">Chargement…</p>
        </div>
      )}

      {/* Empty */}
      {!isLoading && purchases.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
          <p className="text-gray-700 font-semibold">Aucune commande</p>
          <p className="text-sm text-gray-400 mt-1">Les commandes apparaîtront ici après les premiers achats.</p>
        </div>
      )}

      {/* Tableau */}
      {!isLoading && filtered.length > 0 && (
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
          {/* Header tableau — desktop seulement */}
          <div className="hidden sm:grid grid-cols-[1fr_1fr_100px_90px] gap-4 px-5 py-3 border-b border-gray-100 bg-gray-50">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Client</p>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Formation</p>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Montant</p>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Date</p>
          </div>

          <div className="divide-y divide-gray-50">
            {filtered.map((p) => {
              const date = p.purchased_at
                ? new Date(p.purchased_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })
                : '—';
              const isManuel = p.payment_ref === 'MANUEL';

              return (
                <div key={p.id} className="px-4 sm:px-5 py-3.5 sm:grid sm:grid-cols-[1fr_1fr_100px_90px] sm:gap-4 sm:items-center flex flex-col gap-1">
                  {/* Client */}
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                      {(p.student?.name || p.student?.email || '?').charAt(0).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-800 truncate">{p.student?.name || 'Client inconnu'}</p>
                      <p className="text-xs text-gray-400 truncate sm:hidden">{p.student?.email}</p>
                    </div>
                  </div>

                  {/* Formation */}
                  <p className="text-sm text-gray-600 truncate pl-9 sm:pl-0">{p.formation?.title || 'Formation inconnue'}</p>

                  {/* Montant + badge */}
                  <div className="flex items-center gap-2 pl-9 sm:pl-0">
                    <span className="text-sm font-semibold text-gray-900">{p.formation?.price || 0} €</span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      isManuel
                        ? 'bg-gray-100 text-gray-500'
                        : 'bg-blue-50 text-blue-600'
                    }`}>
                      {isManuel ? 'Manuel' : 'PayPal'}
                    </span>
                  </div>

                  {/* Date */}
                  <p className="text-xs text-gray-400 pl-9 sm:pl-0">{date}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Empty filtre */}
      {!isLoading && purchases.length > 0 && filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-sm">Aucune commande ne correspond.</p>
          <button onClick={() => { setSearch(''); setFilter('all'); }} className="mt-2 text-sm text-violet-600 font-medium">
            Réinitialiser
          </button>
        </div>
      )}
    </div>
  );
}
