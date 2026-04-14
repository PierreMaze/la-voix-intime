import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormationThumbnail } from "../../../components/dashboard/FormationThumbnail";
import {
  useCreateFormation,
  useFormation,
  useUpdateFormation,
} from "../../../hooks/useFormations";
import {
  useCreateLesson,
  useDeleteLesson,
  useLessons,
  useUpdateLesson,
} from "../../../hooks/useLessons";

// ── Ligne de leçon ─────────────────────────────────────────────────────────────
function LessonRow({ lesson, formationId, index, total }) {
  const { mutate: updateLesson } = useUpdateLesson();
  const { mutate: deleteLesson } = useDeleteLesson();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({
    title: lesson.title,
    content: lesson.content || "",
    video_url: lesson.video_url || "",
  });

  function save() {
    updateLesson({ id: lesson.id, data: form });
    setEditing(false);
  }

  function cancel() {
    setForm({ title: lesson.title, content: lesson.content || "", video_url: lesson.video_url || "" });
    setEditing(false);
  }

  function moveUp() {
    updateLesson({ id: lesson.id, data: { order: lesson.order - 1 } });
  }

  function moveDown() {
    updateLesson({ id: lesson.id, data: { order: lesson.order + 1 } });
  }

  if (editing) {
    return (
      <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5 space-y-3">
        <div className="flex items-center gap-2 mb-1">
          <span className="w-6 h-6 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
            {index + 1}
          </span>
          <span className="text-sm font-semibold text-violet-700">Édition de la leçon</span>
        </div>
        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          placeholder="Titre de la leçon"
          className="w-full px-3.5 py-2.5 border border-violet-200 bg-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 text-gray-800 font-medium"
        />
        <textarea
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          placeholder="Contenu texte de la leçon…"
          rows={4}
          className="w-full px-3.5 py-2.5 border border-violet-200 bg-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none text-gray-700"
        />
        <div className="relative">
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2">
            <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.84 4.84 0 01-1.01-.07z"/>
            </svg>
          </div>
          <input
            value={form.video_url}
            onChange={(e) => setForm({ ...form, video_url: e.target.value })}
            placeholder="URL vidéo (YouTube, Vimeo…)"
            className="w-full pl-9 pr-3.5 py-2.5 border border-violet-200 bg-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 text-gray-700"
          />
        </div>
        <div className="flex gap-2 pt-1">
          <button
            onClick={save}
            className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            Enregistrer
          </button>
          <button
            onClick={cancel}
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 text-sm font-medium rounded-xl transition-colors"
          >
            Annuler
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-4 flex items-center gap-4 hover:border-violet-200 hover:shadow-sm transition-all">
      {/* Numéro */}
      <span className="w-7 h-7 rounded-full bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center shrink-0 group-hover:bg-violet-100 group-hover:text-violet-700 transition-colors">
        {index + 1}
      </span>

      {/* Contenu */}
      <div className="flex-1 min-w-0">
        <p className="font-medium text-gray-900 text-sm truncate">{lesson.title}</p>
        <div className="flex items-center gap-2 mt-0.5">
          {lesson.video_url ? (
            <span className="inline-flex items-center gap-1 text-xs text-red-500 font-medium">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.84 4.84 0 01-1.01-.07z"/>
              </svg>
              Vidéo
            </span>
          ) : (
            <span className="text-xs text-gray-400">Texte uniquement</span>
          )}
          {lesson.content && (
            <span className="text-gray-200">·</span>
          )}
          {lesson.content && (
            <span className="text-xs text-gray-400 truncate max-w-[200px]">{lesson.content.slice(0, 60)}{lesson.content.length > 60 ? '…' : ''}</span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={moveUp}
          disabled={index === 0}
          title="Monter"
          className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
        <button
          onClick={moveDown}
          disabled={index === total - 1}
          title="Descendre"
          className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        <div className="w-px h-4 bg-gray-200 mx-0.5" />
        <button
          onClick={() => setEditing(true)}
          title="Éditer"
          className="p-1.5 text-violet-600 hover:bg-violet-50 rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
          </svg>
        </button>
        <button
          onClick={() => {
            if (confirm(`Supprimer la leçon "${lesson.title}" ?`)) {
              deleteLesson({ id: lesson.id, formationId });
            }
          }}
          title="Supprimer"
          className="p-1.5 text-red-400 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ── Page principale ─────────────────────────────────────────────────────────────
export function FormationEditPage() {
  const { id } = useParams();
  const isNew = !id || id === "new";
  const navigate = useNavigate();

  const { data: existing } = useFormation(isNew ? null : id);
  const { data: lessons = [] } = useLessons(isNew ? null : id);
  const { mutate: createFormation, isPending: creating } = useCreateFormation();
  const { mutate: updateFormation, isPending: updating } = useUpdateFormation();
  const { mutate: createLesson } = useCreateLesson();

  const [form, setForm] = useState({ title: "", description: "", price: "", published: false });
  const [newLessonTitle, setNewLessonTitle] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (existing) {
      setForm({
        title: existing.title || "",
        description: existing.description || "",
        price: existing.price || "",
        published: existing.published || false,
      });
    }
  }, [existing]);

  function handleSubmit(e) {
    e.preventDefault();
    const data = { ...form, price: Number(form.price) };
    if (isNew) {
      createFormation(data, {
        onSuccess: (rec) => navigate(`/dashboard/admin/formations/${rec.id}`),
      });
    } else {
      updateFormation({ id, data }, {
        onSuccess: () => {
          setSaved(true);
          setTimeout(() => setSaved(false), 2500);
        },
      });
    }
  }

  function addLesson() {
    if (!newLessonTitle.trim() || isNew) return;
    createLesson({
      formation_id: id,
      title: newLessonTitle.trim(),
      content: "",
      video_url: "",
      order: lessons.length,
    });
    setNewLessonTitle("");
  }

  const isSaving = creating || updating;

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-3xl">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <button
          onClick={() => navigate("/dashboard/admin/formations")}
          className="hover:text-violet-600 transition-colors font-medium"
        >
          Formations
        </button>
        <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
        <span className="text-gray-900 font-semibold">
          {isNew ? "Nouvelle formation" : (existing?.title || "Édition")}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">

        {/* Colonne gauche — aperçu thumbnail */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white border border-gray-100 rounded-2xl p-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Aperçu</p>
            <FormationThumbnail title={form.title || "Nouvelle formation"} size="lg" />
            <p className="text-xs text-gray-400 text-center mt-3">
              La miniature est générée automatiquement d&apos;après le titre.
            </p>
          </div>

          {/* Statut rapide */}
          {!isNew && (
            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Statut</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{form.published ? 'Publié' : 'Brouillon'}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{form.published ? 'Visible par les clients' : 'Non visible par les clients'}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setForm({ ...form, published: !form.published })}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${form.published ? 'bg-emerald-500' : 'bg-gray-200'}`}
                >
                  <span className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition-transform ${form.published ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            </div>
          )}

          {/* Stats leçons */}
          {!isNew && (
            <div className="bg-white border border-gray-100 rounded-2xl p-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Contenu</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Leçons</span>
                  <span className="text-sm font-bold text-gray-900">{lessons.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Avec vidéo</span>
                  <span className="text-sm font-bold text-gray-900">{lessons.filter(l => l.video_url).length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Prix</span>
                  <span className="text-sm font-bold text-violet-600">{form.price || 0} €</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Colonne droite — formulaire + leçons */}
        <div className="lg:col-span-2 space-y-5">

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="bg-white border border-gray-100 rounded-2xl p-6 space-y-5">
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-base font-semibold text-gray-900">Informations générales</h2>
              {saved && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  Enregistré
                </span>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Titre *</label>
              <input
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
                placeholder="Ex : Éveiller votre intuition"
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-900"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={4}
                placeholder="Décrivez le contenu et les objectifs de cette formation…"
                className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none text-gray-700"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Prix (€)</label>
                <div className="relative">
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: e.target.value })}
                    placeholder="0"
                    className="w-full pl-3.5 pr-8 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-900"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium">€</span>
                </div>
              </div>
              {isNew && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Statut</label>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, published: !form.published })}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 border rounded-xl text-sm font-medium transition-colors ${
                      form.published
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                        : 'border-gray-200 bg-gray-50 text-gray-600'
                    }`}
                  >
                    {form.published ? 'Publié' : 'Brouillon'}
                    <span className={`w-2 h-2 rounded-full ${form.published ? 'bg-emerald-500' : 'bg-gray-400'}`} />
                  </button>
                </div>
              )}
            </div>

            <div className="pt-2 border-t border-gray-100">
              <button
                type="submit"
                disabled={isSaving}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-700 disabled:opacity-50 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm"
              >
                {isSaving ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Enregistrement…
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {isNew ? "Créer la formation" : "Enregistrer les modifications"}
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Gestion des leçons */}
          {!isNew && (
            <div className="bg-white border border-gray-100 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h2 className="text-base font-semibold text-gray-900">Leçons</h2>
                  <p className="text-xs text-gray-400 mt-0.5">Glissez pour réordonner · cliquez pour éditer</p>
                </div>
                <span className="text-sm font-bold text-violet-600 bg-violet-50 px-3 py-1 rounded-full">
                  {lessons.length}
                </span>
              </div>

              {/* Liste des leçons */}
              <div className="space-y-2 mb-5">
                {lessons.map((lesson, i) => (
                  <LessonRow
                    key={lesson.id}
                    lesson={lesson}
                    formationId={id}
                    index={i}
                    total={lessons.length}
                  />
                ))}
                {lessons.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-10 text-center border-2 border-dashed border-gray-200 rounded-2xl">
                    <svg className="w-8 h-8 text-gray-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                    <p className="text-sm text-gray-400 font-medium">Aucune leçon pour l&apos;instant</p>
                    <p className="text-xs text-gray-300 mt-0.5">Ajoutez votre première leçon ci-dessous</p>
                  </div>
                )}
              </div>

              {/* Ajouter une leçon */}
              <div className="flex gap-2 pt-4 border-t border-gray-100">
                <div className="flex-1 relative">
                  <input
                    value={newLessonTitle}
                    onChange={(e) => setNewLessonTitle(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addLesson())}
                    placeholder="Titre de la nouvelle leçon…"
                    className="w-full px-3.5 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent text-gray-900"
                  />
                </div>
                <button
                  onClick={addLesson}
                  disabled={!newLessonTitle.trim()}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-violet-600 hover:bg-violet-700 disabled:opacity-40 disabled:cursor-not-allowed text-white text-sm font-semibold rounded-xl transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                  Ajouter
                </button>
              </div>
            </div>
          )}

          {/* Hint si nouvelle formation */}
          {isNew && (
            <div className="bg-violet-50 border border-violet-100 rounded-2xl p-4 flex items-start gap-3">
              <svg className="w-5 h-5 text-violet-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              <p className="text-sm text-violet-700">
                Créez la formation d&apos;abord, puis vous pourrez ajouter des leçons.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
