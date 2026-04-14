import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { usePurchases } from '../../../hooks/usePurchases';
import { useProgress } from '../../../hooks/useProgress';
import { useLessons } from '../../../hooks/useLessons';
import { FormationThumbnail } from '../../../components/dashboard/FormationThumbnail';

function LastFormationCard({ purchase }) {
  const formation = purchase.expand?.formation_id;
  const { completionPercent, completedIds } = useProgress(formation?.id ?? null);
  const { data: lessons = [] } = useLessons(formation?.id ?? null);

  if (!formation) return null;
  const isDone = completionPercent === 100;

  return (
    <Link
      to={`/dashboard/client/formations/${formation.id}`}
      className="group flex items-center gap-4 p-4 bg-white border border-gray-100 rounded-2xl hover:border-violet-200 hover:shadow-md transition-all"
    >
      <div className="w-14 h-14 shrink-0 rounded-xl overflow-hidden">
        <FormationThumbnail title={formation.title} size="sm" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-sm text-gray-900 truncate group-hover:text-violet-700 transition-colors">
          {formation.title}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">
          {completedIds.size} / {lessons.length} leçon{lessons.length !== 1 ? 's' : ''} · {completionPercent}%
        </p>
        <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
          <div
            className={`h-1.5 rounded-full transition-all duration-500 ${isDone ? 'bg-emerald-500' : 'bg-violet-500'}`}
            style={{ width: `${completionPercent}%` }}
          />
        </div>
      </div>
      <svg className="w-4 h-4 text-gray-300 group-hover:text-violet-400 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </Link>
  );
}

function StatCard({ label, value, icon, color }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5">
      <div className={`w-9 h-9 rounded-xl bg-${color}-50 flex items-center justify-center mb-3`}>
        <span className={`text-${color}-500`}>{icon}</span>
      </div>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-sm text-gray-500 mt-0.5">{label}</p>
    </div>
  );
}

export function ClientDashboardPage() {
  const { user } = useAuth();
  const { data: purchases = [], isLoading } = usePurchases();

  const totalFormations = purchases.length;
  // Trier par date d'achat pour la dernière en cours
  const sorted = [...purchases].sort((a, b) => new Date(b.purchased_at) - new Date(a.purchased_at));
  const recent = sorted.slice(0, 3);

  const firstName = user?.name?.split(' ')[0] || user?.email?.split('@')[0] || 'vous';

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-3xl">

      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          Bonjour {firstName} 👋
        </h1>
        <p className="text-sm text-gray-500 mt-0.5">Bienvenue dans votre espace personnel</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-8">
        <StatCard
          label="Formations"
          value={totalFormations}
          color="violet"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          }
        />
        <StatCard
          label="Commandes"
          value={purchases.length}
          color="emerald"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
          }
        />
      </div>

      {/* Loading */}
      {isLoading && (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-[3px] border-violet-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {/* Formations récentes */}
      {!isLoading && purchases.length > 0 && (
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <h2 className="text-sm font-semibold text-gray-900">Mes formations récentes</h2>
            <Link to="/dashboard/client/formations" className="text-xs text-violet-600 font-medium hover:text-violet-700">
              Voir tout →
            </Link>
          </div>
          <div className="divide-y divide-gray-50 p-3 space-y-1">
            {recent.map((p) => (
              <LastFormationCard key={p.id} purchase={p} />
            ))}
          </div>
        </div>
      )}

      {/* Empty state */}
      {!isLoading && purchases.length === 0 && (
        <div className="text-center py-16 px-4">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
            <svg className="w-7 h-7 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          </div>
          <p className="font-semibold text-gray-700">Aucune formation pour l&apos;instant</p>
          <p className="text-sm text-gray-400 mt-1 mb-5">Découvrez nos formations et commencez votre parcours.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-violet-600 font-semibold bg-violet-50 hover:bg-violet-100 px-4 py-2.5 rounded-xl transition-colors"
          >
            Voir les formations
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
}
