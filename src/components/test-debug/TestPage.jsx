import { Link } from "react-router-dom";

const TestPage = () => {
  return (
    <div className="pt-16 pb-8 text-center text-white">
      <h1 className="text-4xl font-bold mb-4">Page de Test</h1>
      <p className="mb-8">Si vous voyez ceci, le routage fonctionne !</p>

      <div className="mx-auto space-y-4 max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Test de Navigation</h2>

        <div className="space-y-2">
          <Link
            to="/mentions-legales"
            className="block p-3 rounded-lg transition-colors bg-purple-600/20 hover:bg-purple-600/30">
            → Aller aux Mentions Légales
          </Link>
          <Link
            to="/conditions-generales-vente"
            className="block p-3 rounded-lg transition-colors bg-purple-600/20 hover:bg-purple-600/30">
            → Aller aux CGV
          </Link>
          <Link
            to="/conditions-generales-utilisation"
            className="block p-3 rounded-lg transition-colors bg-purple-600/20 hover:bg-purple-600/30">
            → Aller aux CGU
          </Link>
          <Link
            to="/politique-confidentialite"
            className="block p-3 rounded-lg transition-colors bg-purple-600/20 hover:bg-purple-600/30">
            → Aller à la Politique de Confidentialité
          </Link>
          <Link
            to="/"
            className="block p-3 rounded-lg transition-colors bg-blue-600/20 hover:bg-blue-600/30">
            → Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
