import { useState } from "react";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { LuPanelLeftClose, LuPanelLeftOpen } from "react-icons/lu";
import { Link, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const adminLinks = [
  {
    to: "/dashboard/admin",
    label: "Dashboard",
    end: true,
    icon: (
      <svg
        className="w-5 h-5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
        />
      </svg>
    ),
  },
  {
    to: "/dashboard/admin/formations",
    label: "Formations",
    icon: (
      <svg
        className="w-5 h-5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0118 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
  },
  {
    to: "/dashboard/admin/clients",
    label: "Clients",
    icon: (
      <svg
        className="w-5 h-5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    to: "/dashboard/admin/commandes",
    label: "Commandes",
    icon: (
      <svg
        className="w-5 h-5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    ),
  },
];

const clientLinks = [
  {
    to: "/dashboard/client",
    label: "Dashboard",
    end: true,
    icon: (
      <svg
        className="w-5 h-5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
        />
      </svg>
    ),
  },
  {
    to: "/dashboard/client/formations",
    label: "Mes cours",
    icon: (
      <svg
        className="w-5 h-5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
        />
      </svg>
    ),
  },
  {
    to: "/dashboard/client/commandes",
    label: "Commandes",
    icon: (
      <svg
        className="w-5 h-5 shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.8}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    ),
  },
];

function getInitials(user) {
  if (user?.name) {
    return user.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }
  if (user?.email) return user.email.charAt(0).toUpperCase();
  return "?";
}

function SidebarContent({
  user,
  isAdmin,
  links,
  onLogout,
  onClose,
  collapsed,
}) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* ── Logo ── */}
      <div className={`pt-5 pb-4 shrink-0 ${collapsed ? "px-3" : "px-5"}`}>
        <div
          className={`flex items-center ${collapsed ? "flex-col gap-2" : "justify-between"}`}
        >
          <Link
            to="/"
            onClick={onClose}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shrink-0 shadow-sm shadow-violet-200">
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            {!collapsed && (
              <div>
                <p className="text-sm font-bold text-gray-900 leading-none">
                  La Voix Intime
                </p>
                <p className="text-[10px] text-gray-400 mt-0.5 leading-none">
                  Espace personnel
                </p>
              </div>
            )}
          </Link>
          {/* Bouton fermer mobile */}
          {onClose && !collapsed && (
            <button
              onClick={onClose}
              className="lg:hidden p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <HiX className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* ── Séparateur ── */}
      <div className="mx-4 border-t border-gray-100 mb-4 shrink-0" />

      {/* ── Section nav label ── */}
      {!collapsed && (
        <div className="px-3 mb-2 shrink-0">
          <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-2 mb-1">
            {isAdmin ? "Administration" : "Mon espace"}
          </p>
        </div>
      )}

      {/* ── Nav ── */}
      <nav
        className={`flex-1 space-y-0.5 overflow-y-auto ${collapsed ? "px-2" : "px-3"}`}
      >
        {links.map(({ to, label, end, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={onClose}
            title={collapsed ? label : undefined}
            className={({ isActive }) =>
              `flex items-center gap-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                collapsed ? "justify-center px-2" : "px-3"
              } ${
                isActive
                  ? "bg-violet-600 text-white shadow-sm shadow-violet-200"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span className={isActive ? "text-white" : "text-gray-400"}>
                  {icon}
                </span>
                {!collapsed && label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* ── Profil utilisateur ── */}
      <div className="shrink-0 mt-auto">
        <div className="mx-4 border-t border-gray-100 mb-3" />
        <div className={`pb-4 ${collapsed ? "px-2" : "px-3"}`}>
          {collapsed ? (
            /* Mode collapsed : juste l'avatar centré + logout au hover */
            <div className="flex flex-col items-center gap-2">
              <div
                title={user?.name || user?.email}
                className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white text-sm font-bold shadow-sm cursor-default"
              >
                {getInitials(user)}
              </div>
              <button
                onClick={onLogout}
                title="Déconnexion"
                className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
              </button>
            </div>
          ) : (
            /* Mode expanded */
            <>
              <div className="flex items-center gap-3 px-3 py-2.5 rounded-2xl hover:bg-gray-50 transition-colors group">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white text-sm font-bold shrink-0 shadow-sm">
                  {getInitials(user)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-gray-800 truncate leading-tight">
                    {user?.name || "Utilisateur"}
                  </p>
                  <p className="text-xs text-gray-400 truncate leading-tight mt-0.5">
                    {user?.email}
                  </p>
                </div>
                <button
                  onClick={onLogout}
                  title="Déconnexion"
                  className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0 opacity-0 group-hover:opacity-100"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                    />
                  </svg>
                </button>
              </div>
              {/* Déconnexion visible sur mobile */}
              <button
                onClick={onLogout}
                className="lg:hidden mt-1 w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-red-500 hover:bg-red-50 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
                Déconnexion
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Breadcrumb({ links }) {
  const location = useLocation();
  const active = links.find((l) => l.end
    ? location.pathname === l.to
    : location.pathname.startsWith(l.to)
  );

  // Segments après /dashboard/admin ou /dashboard/client
  const parts = location.pathname.split('/').filter(Boolean).slice(1); // ['admin', 'formations', 'xxx']

  return (
    <nav className="flex items-center gap-1.5 text-sm text-gray-400">
      <span className="font-medium text-gray-500">Dashboard</span>
      {active && active.label !== 'Dashboard' && (
        <>
          <span className="text-gray-300">/</span>
          <span className="font-medium text-gray-800">{active.label}</span>
        </>
      )}
      {/* Sous-page (ex: édition d'une formation) */}
      {parts.length > 2 && active && (
        <>
          <span className="text-gray-300">/</span>
          <span className="text-gray-500 truncate max-w-[200px]">
            {parts[2] === 'new' ? 'Nouvelle formation' : 'Détail'}
          </span>
        </>
      )}
    </nav>
  );
}

export function DashboardLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const isAdmin = user?.role === "admin";
  const links = isAdmin ? adminLinks : clientLinks;
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  function handleLogout() {
    logout();
    navigate("/dashboard/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* ── Sidebar desktop ── */}
      <aside
        className={`hidden lg:flex bg-white border-r border-gray-100 flex-col shrink-0 shadow-sm transition-all duration-300 ${collapsed ? "w-16" : "w-56"}`}
      >
        <SidebarContent
          user={user}
          isAdmin={isAdmin}
          links={links}
          onLogout={handleLogout}
          onClose={null}
          collapsed={collapsed}
          onToggleCollapse={null}
        />
      </aside>

      {/* ── Sidebar mobile overlay ── */}
      {sidebarOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />
          <aside className="lg:hidden fixed inset-y-0 left-0 z-50 w-64 shadow-xl flex flex-col">
            <SidebarContent
              user={user}
              isAdmin={isAdmin}
              links={links}
              onLogout={handleLogout}
              onClose={() => setSidebarOpen(false)}
              collapsed={false}
            />
          </aside>
        </>
      )}

      {/* ── Contenu ── */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Topbar desktop */}
        <header className="hidden lg:flex h-12 bg-white border-b border-gray-100 items-center gap-3 px-5 shrink-0">
          {/* Bouton collapse */}
          <button
            onClick={() => setCollapsed((v) => !v)}
            title={collapsed ? "Agrandir" : "Réduire"}
            className="p-1.5 rounded-lg text-gray-400 hover:text-violet-600 hover:bg-violet-50 transition-colors"
          >
            {collapsed ? <LuPanelLeftOpen className="w-4 h-4" /> : <LuPanelLeftClose className="w-4 h-4" />}
          </button>
          {/* Fil d'Ariane */}
          <Breadcrumb links={links} />
        </header>

        {/* Topbar mobile */}
        <header className="lg:hidden h-14 bg-white border-b border-gray-100 flex items-center justify-between px-4 shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
          >
            <HiMenuAlt2 className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center">
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
                />
              </svg>
            </div>
            <span className="text-sm font-bold text-gray-900">
              La Voix Intime
            </span>
          </div>

          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
            {getInitials(user)}
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
