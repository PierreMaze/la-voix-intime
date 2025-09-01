import { useLocation } from "react-router-dom";

const HeaderDebug = () => {
  const location = useLocation();

  // Logique de détection des pages légales (copiée du Header)
  const isLegalPage =
    location.pathname.includes("/mentions-legales") ||
    location.pathname.includes("/conditions-generales-utilisation") ||
    location.pathname.includes("/conditions-generales-vente") ||
    location.pathname.includes("/politique-confidentialite");

  // Tableaux de navigation (copiés du Header)
  const navigationItems = [
    { label: "Accueil", path: "#home" },
    { label: "A propos", path: "#about" },
    { label: "Tirages gratuits", path: "#free-draw" },
    { label: "Avis client", path: "#reviews" },
    { label: "F.A.Q", path: "#faq" },
    { label: "Réserver", path: "#price" },
  ];

  const legalNavigationItems = [
    { label: "Accueil", path: "/" },
    { label: "Mentions Légales", path: "/mentions-legales" },
    {
      label: "Conditions Générales d'Utilisation",
      path: "/conditions-generales-utilisation",
    },
    {
      label: "Conditions Générales de Vente",
      path: "/conditions-generales-vente",
    },
    {
      label: "Politique de Confidentialité",
      path: "/politique-confidentialite",
    },
    { label: "Réserver", path: "/#price" },
  ];

  const currentNavigationItems = isLegalPage
    ? legalNavigationItems
    : navigationItems;

  return (
    <div className="fixed z-50 p-4 text-xs text-white rounded-lg bottom-2 right-4 bg-black/80 max-w-xs">
      <div className="font-bold mb-2">🔍 DEBUG HEADER</div>
      <div className="space-y-1">
        <div>
          <strong>Path:</strong> {location.pathname}
        </div>
        <div>
          <strong>Is Legal:</strong> {isLegalPage ? "OUI" : "NON"}
        </div>
        <div>
          <strong>Nav Type:</strong> {isLegalPage ? "Légale" : "Accueil"}
        </div>
        <div>
          <strong>Items Count:</strong> {currentNavigationItems.length}
        </div>
        <div className="mt-2">
          <strong>Navigation Items:</strong>
        </div>
        {currentNavigationItems.map((item, index) => (
          <div key={index} className="text-xs ml-2">
            {index + 1}. {item.label} → {item.path}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderDebug;
