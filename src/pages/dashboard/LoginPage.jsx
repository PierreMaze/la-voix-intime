import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import pb from "../../lib/pocketbase";

export function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      await login(email, password);
      const role = pb.authStore.record?.role;
      navigate(role === "admin" ? "/dashboard/admin" : "/dashboard/client", {
        replace: true,
      });
    } catch {
      setError("Email ou mot de passe incorrect.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo / titre */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-600 shadow-lg shadow-violet-200 mb-4">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">La Voix Intime</h1>
          <p className="text-gray-500 text-sm mt-1">Accédez à votre espace personnel</p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Adresse email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="vous@exemple.com"
                required
                autoComplete="email"
                className="w-full text-gray-900 placeholder-gray-400 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-shadow"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                autoComplete="current-password"
                className="w-full text-gray-900 placeholder-gray-400 px-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-shadow"
              />
            </div>

            {error && (
              <div className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-100 px-4 py-3 rounded-xl">
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 px-4 bg-violet-600 hover:bg-violet-700 active:bg-violet-800 disabled:opacity-60 text-white text-sm font-semibold rounded-xl transition-colors shadow-sm shadow-violet-200 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Connexion…
                </>
              ) : (
                "Se connecter"
              )}
            </button>
          </form>

          {/* Comptes de test */}
          <div className="mt-6 pt-5 border-t border-gray-100">
            <p className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3">Comptes de test</p>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => { setEmail("admin@lavoixintime.fr"); setPassword("Test1234!"); }}
                className="text-left px-3 py-2.5 rounded-xl border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-colors group"
              >
                <p className="text-xs font-semibold text-gray-700 group-hover:text-violet-700">Admin</p>
                <p className="text-xs text-gray-400 mt-0.5">admin@lavoixintime.fr</p>
              </button>
              <button
                type="button"
                onClick={() => { setEmail("marie.dupont@email.com"); setPassword("Test1234!"); }}
                className="text-left px-3 py-2.5 rounded-xl border border-gray-200 hover:border-violet-300 hover:bg-violet-50 transition-colors group"
              >
                <p className="text-xs font-semibold text-gray-700 group-hover:text-violet-700">Cliente</p>
                <p className="text-xs text-gray-400 mt-0.5">marie.dupont@email.com</p>
              </button>
            </div>
          </div>
        </div>

        <p className="text-center mt-6 text-xs text-gray-400">
          <Link to="/" className="hover:text-violet-600 transition-colors">← Retour au site</Link>
        </p>
      </div>
    </div>
  );
}
