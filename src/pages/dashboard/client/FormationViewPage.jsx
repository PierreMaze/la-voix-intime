import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FormationThumbnail } from '../../../components/dashboard/FormationThumbnail';
import { useFormation } from '../../../hooks/useFormations';
import { useLessons } from '../../../hooks/useLessons';
import { useMarkComplete, useProgress } from '../../../hooks/useProgress';

function getYouTubeId(url) {
  if (!url) return null;
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\s]+)/);
  return match ? match[1] : null;
}

function LessonItem({ lesson, formationId, isCompleted, index }) {
  const { mutate: markComplete, isPending } = useMarkComplete();
  const [open, setOpen] = useState(false);
  const videoId = getYouTubeId(lesson.video_url);

  return (
    <div className={`bg-white border rounded-2xl overflow-hidden transition-all ${
      open ? 'border-violet-200 shadow-sm' : 'border-gray-100 hover:border-gray-200'
    }`}>
      {/* Header de la leçon */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4 text-left"
      >
        {/* Numéro / check */}
        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 text-xs sm:text-sm font-bold transition-colors ${
          isCompleted
            ? 'bg-emerald-500 text-white'
            : open
            ? 'bg-violet-100 text-violet-700'
            : 'bg-gray-100 text-gray-400'
        }`}>
          {isCompleted ? (
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          ) : (
            index + 1
          )}
        </div>

        <div className="flex-1 min-w-0">
          <p className={`font-medium text-sm leading-snug ${isCompleted ? 'text-gray-400 line-through' : 'text-gray-900'}`}>
            {lesson.title}
          </p>
          {lesson.video_url && !open && (
            <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
              <svg className="w-3 h-3 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
              Vidéo incluse
            </p>
          )}
        </div>

        <svg className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {/* Contenu expandé */}
      {open && (
        <div className="px-4 sm:px-5 pb-4 sm:pb-5 border-t border-gray-100 pt-4">
          {/* Lecteur vidéo */}
          {videoId && (
            <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden mb-4">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={lesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          )}

          {/* Texte */}
          {lesson.content && (
            <p className="text-sm text-gray-600 leading-relaxed mb-4 sm:mb-5">{lesson.content}</p>
          )}

          {/* Action */}
          {isCompleted ? (
            <div className="inline-flex items-center gap-2 text-sm text-emerald-600 font-medium bg-emerald-50 px-3 py-2 rounded-xl">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Leçon terminée
            </div>
          ) : (
            <button
              onClick={() => markComplete({ lessonId: lesson.id, formationId })}
              disabled={isPending}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-violet-600 hover:bg-violet-700 disabled:opacity-50 text-white text-sm font-semibold rounded-xl transition-colors"
            >
              {isPending ? (
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              )}
              Marquer comme vu
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export function FormationViewPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: formation } = useFormation(id);
  const { data: lessons = [], isLoading } = useLessons(id);
  const { completedIds, completionPercent } = useProgress(id);

  const isDone = completionPercent === 100;

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-2xl">

      {/* Retour */}
      <button
        onClick={() => navigate('/dashboard/client/formations')}
        className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 mb-5 sm:mb-6 transition-colors font-medium"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Mes cours
      </button>

      {/* Card formation */}
      {formation && (
        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden mb-4 sm:mb-6 shadow-sm">
          {/* Thumbnail compact */}
          <FormationThumbnail title={formation.title} size="md" />

          <div className="p-4 sm:p-6">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{formation.title}</h1>
            {formation.description && (
              <p className="text-sm text-gray-500 mb-4 sm:mb-5 leading-relaxed">{formation.description}</p>
            )}

            {/* Barre de progression */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Progression</span>
                <div className="flex items-center gap-2">
                  {isDone && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Terminé !
                    </span>
                  )}
                  <span className={`text-sm font-bold ${isDone ? 'text-emerald-600' : 'text-violet-600'}`}>
                    {completionPercent} %
                  </span>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className={`h-2 rounded-full transition-all duration-500 ${isDone ? 'bg-emerald-500' : 'bg-violet-500'}`}
                  style={{ width: `${completionPercent}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">
                {completedIds.size} / {lessons.length} leçon{lessons.length !== 1 ? 's' : ''} terminée{lessons.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Loading */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-12 gap-3">
          <div className="w-8 h-8 border-[3px] border-violet-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-gray-400">Chargement des leçons…</p>
        </div>
      )}

      {/* Empty */}
      {!isLoading && lessons.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p className="text-sm">Aucune leçon disponible pour l&apos;instant.</p>
        </div>
      )}

      {/* Liste des leçons */}
      <div className="space-y-2">
        {lessons.map((lesson, i) => (
          <LessonItem
            key={lesson.id}
            lesson={lesson}
            formationId={id}
            isCompleted={completedIds.has(lesson.id)}
            index={i}
          />
        ))}
      </div>
    </div>
  );
}
