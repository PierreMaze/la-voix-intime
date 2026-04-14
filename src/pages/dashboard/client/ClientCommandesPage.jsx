import { usePurchases } from '../../../hooks/usePurchases';

export function ClientCommandesPage() {
  const { data: purchases = [], isLoading } = usePurchases();

  const sorted = [...purchases].sort((a, b) => new Date(b.purchased_at) - new Date(a.purchased_at));

  const total = purchases.reduce((acc, p) => {
    const formation = p.expand?.formation_id;
    return acc + (formation?.price || 0);
  }, 0);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-3xl">

      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Mes commandes</h1>
        <p className="text-sm text-gray-500 mt-0.5">
          {purchases.length} commande{purchases.length !== 1 ? 's' : ''}
          {total > 0 && (
            <span className="text-emerald-600 font-medium"> · {total} € dépensé{purchases.length !== 1 ? 's' : ''}</span>
          )}
        </p>
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-20 gap-3">
          <div className="w-8 h-8 border-[3px] border-violet-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-gray-400">Chargement…</p>
        </div>
      )}

      {/* Empty */}
      {!isLoading && purchases.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center px-4">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          </div>
          <p className="font-semibold text-gray-700">Aucune commande</p>
          <p className="text-sm text-gray-400 mt-1">Vos achats apparaîtront ici.</p>
        </div>
      )}

      {/* Liste */}
      {!isLoading && sorted.length > 0 && (
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
          {/* Header tableau desktop */}
          <div className="hidden sm:grid grid-cols-[1fr_120px_100px] gap-4 px-5 py-3 border-b border-gray-100 bg-gray-50">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Formation</p>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Montant</p>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Date</p>
          </div>

          <div className="divide-y divide-gray-50">
            {sorted.map((p) => {
              const formation = p.expand?.formation_id;
              const isManuel = p.payment_ref === 'MANUEL';
              const date = p.purchased_at
                ? new Date(p.purchased_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
                : '—';

              return (
                <div key={p.id} className="px-4 sm:px-5 py-4 sm:grid sm:grid-cols-[1fr_120px_100px] sm:gap-4 sm:items-center flex flex-col gap-1.5">
                  {/* Formation */}
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {formation?.title || 'Formation inconnue'}
                    </p>
                    <p className="text-xs text-gray-400 sm:hidden mt-0.5">{date}</p>
                  </div>

                  {/* Montant + badge */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900">
                      {formation?.price || 0} €
                    </span>
                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      isManuel
                        ? 'bg-gray-100 text-gray-500'
                        : 'bg-blue-50 text-blue-600'
                    }`}>
                      {isManuel ? 'Offert' : 'PayPal'}
                    </span>
                  </div>

                  {/* Date desktop */}
                  <p className="hidden sm:block text-xs text-gray-400">{date}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
