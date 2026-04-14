import { Link } from 'react-router-dom';
import { FormationThumbnail } from '../../../components/dashboard/FormationThumbnail';
import { usePurchases } from '../../../hooks/usePurchases';
import { useProgress } from '../../../hooks/useProgress';

function FormationCard({ purchase }) {
  const formation = purchase.expand?.formation_id;
  const { completionPercent } = useProgress(formation?.id ?? null);

  if (!formation) return null;

  const isDone = completionPercent === 100;

  return (
    <Link
      to={`/dashboard/client/formations/${formation.id}`}
      className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-violet-200 hover:shadow-md transition-all"
    >
      {/* Thumbnail */}
      <div className="relative">
        <FormationThumbnail title={formation.title} size="md" />
        {isDone && (
          <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50/95 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm">
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Terminé
          </span>
        )}
      </div>

      {/* Contenu */}
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <h2 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base leading-snug group-hover:text-violet-700 transition-colors">
          {formation.title}
        </h2>
        {formation.description && (
          <p className="text-xs sm:text-sm text-gray-400 mb-4 line-clamp-2 flex-1">
            {formation.description}
          </p>
        )}

        {/* Progression */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs text-gray-400">Progression</span>
            <span className={`text-xs font-bold ${isDone ? 'text-emerald-600' : 'text-violet-600'}`}>
              {completionPercent} %
            </span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-1.5">
            <div
              className={`h-1.5 rounded-full transition-all duration-500 ${isDone ? 'bg-emerald-500' : 'bg-violet-500'}`}
              style={{ width: `${completionPercent}%` }}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export function MyFormationsPage() {
  const { data: purchases = [], isLoading } = usePurchases();

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Mes formations</h1>
        <p className="text-sm text-gray-500 mt-0.5">
          {purchases.length} formation{purchases.length !== 1 ? 's' : ''} disponible{purchases.length !== 1 ? 's' : ''}
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
        <div className="flex flex-col items-center justify-center py-16 sm:py-20 text-center px-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
          </div>
          <p className="text-gray-700 font-semibold text-base sm:text-lg">Aucune formation disponible</p>
          <p className="text-sm text-gray-400 mt-1 mb-5">Vous n&apos;avez pas encore accès à une formation.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-violet-600 hover:text-violet-700 font-semibold bg-violet-50 hover:bg-violet-100 px-4 py-2.5 rounded-xl transition-colors"
          >
            Découvrir les formations
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      )}

      {/* Grille — 1 col mobile, 2 col sm, 3 col lg */}
      {!isLoading && purchases.length > 0 && (
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {purchases.map((p) => (
            <FormationCard key={p.id} purchase={p} />
          ))}
        </div>
      )}
    </div>
  );
}
