import { Link } from 'react-router-dom';
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

function StatCard({ label, value, sub, color, icon, to }) {
  const content = (
    <div className={`bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md hover:border-${color}-200 transition-all group`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-xl bg-${color}-50 flex items-center justify-center`}>
          <span className={`text-${color}-600`}>{icon}</span>
        </div>
        {to && (
          <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        )}
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm font-medium text-gray-600 mt-0.5">{label}</p>
      {sub && <p className="text-xs text-gray-400 mt-1">{sub}</p>}
    </div>
  );

  return to ? <Link to={to}>{content}</Link> : content;
}

export function AdminDashboardPage() {
  const { data: formations = [] } = useFormations();
  const { data: purchases = [] } = useAllPurchases();
  const { data: students = [] } = useStudents();

  const publishedCount = formations.filter(f => f.published).length;
  const revenue = purchases
    .filter(p => p.payment_ref !== 'MANUEL')
    .reduce((acc, p) => {
      const f = formations.find(f => f.id === p.formation_id);
      return acc + (f?.price || 0);
    }, 0);

  const recentPurchases = [...purchases]
    .sort((a, b) => new Date(b.purchased_at) - new Date(a.purchased_at))
    .slice(0, 5);

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl">

      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-sm text-gray-500 mt-0.5">Vue d&apos;ensemble de votre activité</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-8">
        <StatCard
          label="Formations"
          value={formations.length}
          sub={`${publishedCount} publiée${publishedCount !== 1 ? 's' : ''}`}
          color="violet"
          to="/dashboard/admin/formations"
          icon={

            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          }
        />
        <StatCard
          label="Clients"
          value={students.length}
          sub="inscrits"
          color="blue"
          to="/dashboard/admin/clients"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          }
        />
        <StatCard
          label="Commandes"
          value={purchases.length}
          sub="total"
          color="emerald"
          to="/dashboard/admin/commandes"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          }
        />
        <StatCard
          label="Revenus"
          value={`${revenue} €`}
          sub="PayPal uniquement"
          color="amber"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
        />
      </div>

      {/* Activité récente */}
      <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 className="text-sm font-semibold text-gray-900">Dernières commandes</h2>
          <Link to="/dashboard/admin/commandes" className="text-xs text-violet-600 font-medium hover:text-violet-700">
            Voir tout →
          </Link>
        </div>

        {recentPurchases.length === 0 ? (
          <div className="py-12 text-center text-gray-400 text-sm">Aucune commande pour l&apos;instant.</div>
        ) : (
          <div className="divide-y divide-gray-50">
            {recentPurchases.map((p) => {
              const student = students.find(s => s.id === p.user_id);
              const formation = formations.find(f => f.id === p.formation_id);
              const date = p.purchased_at
                ? new Date(p.purchased_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
                : '—';
              return (
                <div key={p.id} className="flex items-center gap-4 px-5 py-3.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {(student?.name || student?.email || '?').charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-800 truncate">{student?.name || student?.email || 'Client inconnu'}</p>
                    <p className="text-xs text-gray-400 truncate">{formation?.title || 'Formation inconnue'}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-sm font-semibold text-gray-900">{formation?.price || 0} €</p>
                    <p className="text-xs text-gray-400">{date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
