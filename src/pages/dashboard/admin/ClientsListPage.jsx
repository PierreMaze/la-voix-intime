import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useToast } from '../../../components/dashboard/ToastContext';
import { useFormations } from '../../../hooks/useFormations';
import { useAllPurchases, useGrantAccess } from '../../../hooks/usePurchases';
import pb from '../../../lib/pocketbase';

function useStudents() {
  return useQuery({
    queryKey: ['users', 'students'],
    queryFn: () =>
      pb.collection('users').getFullList({ filter: 'role = "student"', sort: 'name' }),
  });
}

function getInitials(student) {
  const name = student.name || student.email || '?';
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

function avatarColor(str) {
  const colors = [
    'from-violet-400 to-purple-600',
    'from-blue-400 to-indigo-600',
    'from-pink-400 to-rose-600',
    'from-teal-400 to-emerald-600',
    'from-amber-400 to-orange-500',
  ];
  const s = str || '';
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return colors[h % colors.length];
}

// ── Fiche client (modale) ─────────────────────────────────────────────────────
function ClientModal({ student, purchases, formations, onClose, onGrant }) {
  const [selectedFormation, setSelectedFormation] = useState('');
  const { mutate: grantAccess, isPending } = useGrantAccess();
  const toast = useToast();

  const studentPurchases = purchases.filter((p) => p.user_id === student.id);
  const purchasedIds = new Set(studentPurchases.map((p) => p.formation_id));
  const availableFormations = formations.filter((f) => !purchasedIds.has(f.id));

  const joinDate = student.created
    ? new Date(student.created).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
    : null;

  function handleGrant() {
    if (!selectedFormation) return;
    grantAccess(
      { userId: student.id, formationId: selectedFormation },
      {
        onSuccess: () => {
          toast.success('Accès accordé avec succès.');
          setSelectedFormation('');
          onGrant?.();
        },
        onError: () => toast.error('Impossible d\'accorder l\'accès.'),
      }
    );
  }

  function copyEmail() {
    navigator.clipboard.writeText(student.email);
    toast.success('Email copié dans le presse-papiers.');
  }

  function openMailTo() {
    window.open(`mailto:${student.email}`, '_blank');
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        {/* Drag handle */}
        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mt-3 mb-1 sm:hidden shrink-0" />

        {/* Header */}
        <div className="px-5 pt-4 pb-5 border-b border-gray-100 shrink-0">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${avatarColor(student.email)} flex items-center justify-center text-white text-base font-bold shrink-0`}>
                {getInitials(student)}
              </div>
              <div>
                <h2 className="text-base font-bold text-gray-900">{student.name || 'Sans nom'}</h2>
                <p className="text-sm text-gray-500">{student.email}</p>
                {joinDate && (
                  <p className="text-xs text-gray-400 mt-0.5">Inscrit·e le {joinDate}</p>
                )}
              </div>
            </div>
            <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Contenu scrollable */}
        <div className="overflow-y-auto flex-1 p-5 space-y-5">

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Contact</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={openMailTo}
                className="flex items-center gap-2 px-3 py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-xl text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Envoyer un email
              </button>
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 px-3 py-2.5 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl text-sm font-medium transition-colors"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                </svg>
                Copier l&apos;email
              </button>
            </div>

            {/* Templates de message rapide */}
            <div className="mt-3 space-y-2">
              <p className="text-xs text-gray-400 mb-1.5">Messages rapides</p>
              {[
                {
                  label: '👋 Message de bienvenue',
                  subject: 'Bienvenue sur La Voix Intime',
                  body: `Bonjour ${student.name || ''},\n\nBienvenue sur La Voix Intime ! Je suis ravie de vous accueillir dans cet espace dédié à votre développement intérieur.\n\nN'hésitez pas à me contacter si vous avez la moindre question.\n\nÀ bientôt,\nLa Voix Intime`,
                },
                {
                  label: '🔔 Relance douce',
                  subject: 'Votre formation vous attend',
                  body: `Bonjour ${student.name || ''},\n\nJe voulais prendre de vos nouvelles et vous rappeler que votre formation est disponible et vous attend sur La Voix Intime.\n\nPrenez soin de vous,\nLa Voix Intime`,
                },
                {
                  label: '🎁 Offre spéciale',
                  subject: 'Une offre exclusive pour vous',
                  body: `Bonjour ${student.name || ''},\n\nJ'ai une offre exclusive à vous proposer en tant que cliente fidèle de La Voix Intime...\n\nÀ très bientôt,\nLa Voix Intime`,
                },
              ].map((tpl) => (
                <button
                  key={tpl.label}
                  onClick={() => window.open(`mailto:${student.email}?subject=${encodeURIComponent(tpl.subject)}&body=${encodeURIComponent(tpl.body)}`, '_blank')}
                  className="w-full text-left px-3 py-2 bg-gray-50 hover:bg-violet-50 hover:text-violet-700 text-gray-700 rounded-xl text-sm transition-colors border border-transparent hover:border-violet-200"
                >
                  {tpl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Formations achetées */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
              Formations achetées ({studentPurchases.length})
            </p>
            {studentPurchases.length === 0 ? (
              <p className="text-sm text-gray-400 italic">Aucune formation achetée.</p>
            ) : (
              <div className="space-y-2">
                {studentPurchases.map((p) => {
                  const formation = formations.find((f) => f.id === p.formation_id);
                  const date = p.purchased_at
                    ? new Date(p.purchased_at).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })
                    : null;
                  return (
                    <div key={p.id} className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2.5">
                      <div>
                        <p className="text-sm font-medium text-gray-800">{formation?.title || p.formation_id}</p>
                        {date && <p className="text-xs text-gray-400 mt-0.5">Acheté le {date}</p>}
                      </div>
                      <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full shrink-0 ml-2">
                        {p.payment_ref === 'MANUEL' ? 'Manuel' : 'PayPal'}
                      </span>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Accorder accès */}
          {availableFormations.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Accorder l&apos;accès</p>
              <div className="flex gap-2">
                <select
                  value={selectedFormation}
                  onChange={(e) => setSelectedFormation(e.target.value)}
                  className="flex-1 px-3 py-2.5 border border-gray-200 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500 bg-gray-50"
                >
                  <option value="">Sélectionner une formation…</option>
                  {availableFormations.map((f) => (
                    <option key={f.id} value={f.id}>{f.title}</option>
                  ))}
                </select>
                <button
                  onClick={handleGrant}
                  disabled={!selectedFormation || isPending}
                  className="px-4 py-2.5 bg-violet-600 hover:bg-violet-700 disabled:opacity-50 text-white text-sm font-semibold rounded-xl transition-colors shrink-0"
                >
                  {isPending ? '…' : 'Accorder'}
                </button>
              </div>
            </div>
          )}

          {availableFormations.length === 0 && formations.length > 0 && (
            <div className="flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 px-3 py-2.5 rounded-xl">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Ce client a accès à toutes les formations.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Page principale ────────────────────────────────────────────────────────────
export function ClientsListPage() {
  const { data: students = [], isLoading } = useStudents();
  const { data: purchases = [] } = useAllPurchases();
  const { data: formations = [] } = useFormations();
  const [modal, setModal] = useState(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all'); // all | active | inactive

  function getPurchasedCount(userId) {
    return purchases.filter((p) => p.user_id === userId).length;
  }

  const filtered = students.filter((s) => {
    const matchSearch = (s.name || s.email || '').toLowerCase().includes(search.toLowerCase());
    const count = getPurchasedCount(s.id);
    const matchFilter =
      filter === 'all' ||
      (filter === 'active' && count > 0) ||
      (filter === 'inactive' && count === 0);
    return matchSearch && matchFilter;
  });

  const activeCount = students.filter((s) => getPurchasedCount(s.id) > 0).length;

  return (
    <div className="p-4 sm:p-6 lg:p-8 max-w-4xl">

      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">Clients</h1>
        <p className="text-sm text-gray-500 mt-0.5">
          {students.length} client{students.length !== 1 ? 's' : ''} ·{' '}
          <span className="text-emerald-600 font-medium">{activeCount} avec formation{activeCount !== 1 ? 's' : ''}</span>
          {students.length - activeCount > 0 && (
            <> · <span className="text-gray-400">{students.length - activeCount} sans achat</span></>
          )}
        </p>
      </div>

      {/* Recherche + filtre */}
      {students.length > 0 && (
        <div className="flex flex-col gap-3 mb-5">
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher par nom ou email…"
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white"
            />
          </div>
          <div className="flex gap-1.5 bg-gray-100 rounded-xl p-1 self-start">
            {[
              { key: 'all', label: 'Tous' },
              { key: 'active', label: 'Avec formation' },
              { key: 'inactive', label: 'Sans achat' },
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
      {!isLoading && students.length === 0 && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center mb-4">
            <svg className="w-7 h-7 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
          <p className="text-gray-700 font-semibold">Aucun client inscrit</p>
          <p className="text-sm text-gray-400 mt-1">Les clients apparaîtront ici après leur inscription.</p>
        </div>
      )}

      {/* Empty filtre */}
      {!isLoading && students.length > 0 && filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-sm">Aucun client ne correspond.</p>
          <button onClick={() => { setSearch(''); setFilter('all'); }} className="mt-2 text-sm text-violet-600 font-medium">
            Réinitialiser
          </button>
        </div>
      )}

      {/* Liste */}
      <div className="space-y-2 sm:space-y-3">
        {filtered.map((student) => {
          const count = getPurchasedCount(student.id);
          const joinDate = student.created
            ? new Date(student.created).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })
            : null;

          return (
            <button
              key={student.id}
              onClick={() => setModal(student)}
              className="w-full text-left bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 hover:border-violet-200 hover:shadow-sm transition-all group"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                {/* Avatar */}
                <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br ${avatarColor(student.email)} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                  {getInitials(student)}
                </div>

                {/* Infos */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base truncate">
                      {student.name || 'Sans nom'}
                    </p>
                    {count > 0 ? (
                      <span className="text-xs bg-violet-50 text-violet-600 font-medium px-2 py-0.5 rounded-full shrink-0">
                        {count} formation{count !== 1 ? 's' : ''}
                      </span>
                    ) : (
                      <span className="text-xs bg-gray-100 text-gray-400 font-medium px-2 py-0.5 rounded-full shrink-0">
                        Sans achat
                      </span>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 truncate mt-0.5">{student.email}</p>
                </div>

                {/* Date + flèche */}
                <div className="shrink-0 text-right hidden sm:block">
                  {joinDate && <p className="text-xs text-gray-400">{joinDate}</p>}
                  <p className="text-xs text-violet-500 font-medium mt-0.5 group-hover:text-violet-700 transition-colors">Voir la fiche →</p>
                </div>
                <svg className="w-4 h-4 text-gray-300 group-hover:text-violet-500 transition-colors shrink-0 sm:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </button>
          );
        })}
      </div>

      {/* Modale fiche client */}
      {modal && (
        <ClientModal
          student={modal}
          purchases={purchases}
          formations={formations}
          onClose={() => setModal(null)}
          onGrant={() => setModal(null)}
        />
      )}
    </div>
  );
}
