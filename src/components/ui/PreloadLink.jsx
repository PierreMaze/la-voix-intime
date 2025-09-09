import { memo, useCallback } from "react";
import { Link } from "react-router-dom";

/**
 * Composant Link optimisé avec préchargement intelligent
 * Préchage les routes au survol pour améliorer la navigation
 */
const PreloadLink = memo(
  ({ to, children, className, preloadOnHover = true, ...props }) => {
    const handleMouseEnter = useCallback(() => {
      if (preloadOnHover && typeof to === "string") {
        // Précharger le composant de la route au survol
        const routePath = to.startsWith("/") ? to : `/${to}`;

        // Utiliser le prefetching de Vite pour les imports dynamiques
        if (routePath.includes("conditions-generales-vente")) {
          import("../pages/legales/GeneralConditionsOfSale");
        } else if (routePath.includes("conditions-generales-utilisation")) {
          import("../pages/legales/GeneralConditionsOfUse");
        } else if (routePath.includes("mentions-legales")) {
          import("../pages/legales/LegalNotices");
        } else if (routePath.includes("politique-confidentialite")) {
          import("../pages/legales/PrivacyPolicyContent");
        }
      }
    }, [to, preloadOnHover]);

    return (
      <Link
        to={to}
        className={className}
        onMouseEnter={handleMouseEnter}
        {...props}>
        {children}
      </Link>
    );
  }
);

PreloadLink.displayName = "PreloadLink";

export default PreloadLink;
