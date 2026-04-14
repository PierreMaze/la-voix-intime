import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FormationThumbnail } from '../../../components/dashboard/FormationThumbnail';
import { useDeleteFormation, useFormations, useUpdateFormation } from '../../../hooks/useFormations';
import { useLessons } from '../../../hooks/useLessons';

function StatusBadge({ published }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${
      published ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
    }`}>
      <span className={`w-1.5 h-1.5 rounded-full ${published ? 'bg-emerald-500' : 'bg-amber-400'}`} />
      {published ? 'Publié' : 'Brouillon'}
    </span>
  );
}

// ── Modale preview ─────────────────────────────────────────────────────────────
function PreviewModal({ formation, onClose, onTogglePublish }) {
  const { data: lessons = [] } = useLessons(formation.id);

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white w-full sm:max-w-lg rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Drag handle mobile */}
        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mt-3 mb-1 sm:hidden shrink-0" />

        {/* Thumbnail */}
        <div className="relative shrink-0">
          <FormationThumbnail title={formation.title} size="lg" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="absolute bottom-3 left-3 flex gap-2">
            <StatusBadge published={formation.published} />
            <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-bold px-2.5 py-1 rounded-full shadow-sm">
              {formation.price} €
            </span>
          </div>
        </div>

        {/* Contenu scrollable */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{formation.title}</h2>

          {formation.description && (
            <p className="text-sm text-gray-600 leading-relaxed mb-5">{formation.description}</p>
          )}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-xl font-bold text-violet-600">{lessons.length}</p>
              <p className="text-xs text-gray-500 mt-0.5">leçon{lessons.length !== 1 ? 's' : ''}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-xl font-bold text-violet-600">{lessons.filter(l => l.video_url).length}</p>
              <p className="text-xs text-gray-500 mt-0.5">vidéo{lessons.filter(l => l.video_url).length !== 1 ? 's' : ''}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <p className="text-xl font-bold text-violet-600">{formation.price}€</p>
              <p className="text-xs text-gray-500 mt-0.5">tarif</p>
            </div>
          </div>

          {/* Liste des leçons */}
          {lessons.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Programme</p>
              <div className="space-y-2">
                {lessons.map((lesson, i) => (
                  <div key={lesson.id} className="flex items-start gap-3 py-2 border-b border-gray-100 last:border-0">
                    <span className="w-6 h-6 rounded-full bg-violet-100 text-violet-700 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-800">{lesson.title}</p>
                      {lesson.content && (
                        <p className="text-xs text-gray-400 mt-0.5 line-clamp-2">{lesson.content}</p>
                      )}
                    </div>
                    {lesson.video_url && (
                      <svg className="w-4 h-4 text-red-400 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Actions fixes en bas */}
        <div className="shrink-0 p-4 sm:p-5 border-t border-gray-100 flex gap-2">
          <Link
            to={`/dashboard/admin/formations/${formation.id}`}
            onClick={onClose}
            className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
            </svg>
            Éditer
          </Link>
          <button
            onClick={() => { onTogglePublish(formation); onClose(); }}
            className={`px-4 py-2.5 text-sm font-semibold rounded-xl transition-colors border ${
              formation.published
                ? 'text-amber-600 bg-amber-50 border-amber-200 hover:bg-amber-100'
                : 'text-emerald-600 bg-emerald-50 border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            {formation.published ? 'Dépublier' : 'Publier'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Page principale ────────────────────────────────────────────────────────────
export function FormationsListPage() {
  const { data: formations = [], isLoading, isError } = useFormations();
  const { mutate: deleteFormation } = useDeleteFormation();
  const { mutate: updateFormation } = useUpdateFormation();
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');
  const [preview, setPreview] = useState(null);

  function handleDelete(id, title) {
    if (confirm(`Supprimer définitivement "${title}" ?\n\nCette action est irréversible.`)) {
      deleteFormation(id);
    }
  }

  function togglePublish(f) {
    updateFormation({ id: f.id, data: { published: !f.published } });
  }

  const filtered = formations.filter((f) => {
    const matchSearch = f.title.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === 'all' ||
      (filter === 'published' && f.published) ||
      (filter === 'draft' && !f.published);
    return matchSearch && matchFilter;
  });

  const publishedCount = formations.filter((f) => f.published).length;
  const draftCount = formations.filter((f) => !f.published).length;

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-5xl">

      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Formations</h1>
        <p className="text-sm text-gray-500 mt-0.5">
          {formations.length} formation{formations.length !== 1 ? 's' : ''} ·{' '}
          <span className="text-emerald-600 font-medium">{publishedCount} publiée{publishedCount !== 1 ? 's' : ''}</span>
          {draftCount > 0 && (
            <> · <span className="text-amber-600 font-medium">{draftCount} brouillon{draftCount !== 1 ? 's' : ''}</span></>
          )}
        </p>
        <Link
          to="/dashboard/admin/formations/new"
          className="inline-flex items-center gap-2 mt-3 px-4 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm shadow-violet-200"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Nouvelle formation
        </Link>
      </div>

      {/* Erreur */}
      {isError && (
        <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-2xl px-4 py-4 mb-5">
          <svg className="w-5 h-5 text-red-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
          <div>
            <p className="text-sm font-semibold text-red-700">Impossible de charger les formations</p>
            <p className="text-xs text-red-500 mt-0.5">Vérifiez que PocketBase est bien lancé sur le port 8090.</p>
          </div>
        </div>
      )}

      {/* Filtres */}
      {formations.length > 0 && (
        <div className="flex flex-col gap-3 mb-5">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher une formation…"
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"
            />
          </div>
          <div className="flex gap-1.5 bg-gray-100 rounded-xl p-1 self-start">
            {[
              { key: 'all', label: 'Toutes' },
              { key: 'published', label: 'Publiées' },
              { key: 'draft', label: 'Brouillons' },
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

      {/* Empty global */}
      {!isLoading && formations.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 sm:py-24 text-center px-4">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-violet-50 flex items-center justify-center mb-4">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <p className="text-gray-800 font-semibold text-base sm:text-lg">Aucune formation pour l&apos;instant</p>
          <p className="text-sm text-gray-400 mt-1 mb-6">Créez votre première formation pour commencer.</p>
          <Link to="/dashboard/admin/formations/new" className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-xl transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Créer une formation
          </Link>
        </div>
      )}

      {/* Empty filtre */}
      {!isLoading && formations.length > 0 && filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="text-gray-500 font-medium text-sm">Aucune formation ne correspond.</p>
          <button onClick={() => { setSearch(''); setFilter('all'); }} className="mt-2 text-sm text-violet-600 font-medium">
            Réinitialiser les filtres
          </button>
        </div>
      )}

      {/* Grille */}
      {!isLoading && filtered.length > 0 && (
        <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((f) => (
            <div
              key={f.id}
              className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-violet-200 hover:shadow-md transition-all flex flex-col"
            >
              {/* Thumbnail cliquable → preview */}
              <button
                onClick={() => setPreview(f)}
                className="relative block w-full text-left focus:outline-none"
              >
                <FormationThumbnail title={f.title} size="md" />
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Aperçu
                  </span>
                </div>
                <div className="absolute top-2.5 left-2.5">
                  <StatusBadge published={f.published} />
                </div>
                <div className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-bold px-2.5 py-1 rounded-lg shadow-sm">
                  {f.price} €
                </div>
              </button>

              {/* Contenu */}
              <div className="p-4 sm:p-5 flex flex-col flex-1">
                <h2 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base leading-snug">{f.title}</h2>
                {f.description && (
                  <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 flex-1 mb-4">{f.description}</p>
                )}

                {/* Actions */}
                <div className="flex items-center gap-2 mt-auto pt-3 border-t border-gray-100">
                  <Link
                    to={`/dashboard/admin/formations/${f.id}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-sm font-medium text-violet-700 bg-violet-50 hover:bg-violet-100 rounded-xl transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
                    </svg>
                    Éditer
                  </Link>
                  <button
                    onClick={() => togglePublish(f)}
                    title={f.published ? 'Dépublier' : 'Publier'}
                    className={`p-2 rounded-xl transition-colors ${
                      f.published ? 'text-amber-600 bg-amber-50 hover:bg-amber-100' : 'text-emerald-600 bg-emerald-50 hover:bg-emerald-100'
                    }`}
                  >
                    {f.published ? (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={() => handleDelete(f.id, f.title)}
                    title="Supprimer"
                    className="p-2 text-red-500 bg-red-50 hover:bg-red-100 rounded-xl transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modale preview */}
      {preview && (
        <PreviewModal
          formation={preview}
          onClose={() => setPreview(null)}
          onTogglePublish={togglePublish}
        />
      )}
    </div>
  );
}
