import { memo, useCallback, useMemo } from "react";

const OptimizedImage = memo(({ src, alt, className, ...props }) => {
  // Vérifier si src est une chaîne de caractères - mémorisée
  const getImageSource = useCallback((source) => {
    // Si ce n'est pas une chaîne, c'est probablement un import d'image
    if (typeof source !== "string") {
      // Si l'import a une propriété default (cas de Vite), on l'utilise
      return source.default || source;
    }

    // Gérer les URLs externes
    if (source.startsWith("http")) return source;

    // Pour les chemins relatifs, on s'assure qu'ils commencent par /
    if (source.startsWith("./") || source.startsWith("../")) {
      return source;
    }

    // Pour les autres chemins, on ajoute un / au début
    return source.startsWith("/") ? source : `/${source}`;
  }, []);

  // Mémoriser la source finale de l'image
  const finalSrc = useMemo(() => getImageSource(src), [src, getImageSource]);

  // Gestionnaire d'erreur mémorisé
  const handleError = useCallback(
    (e) => {
      console.error(`Erreur de chargement de l'image: ${src}`);
      console.error("Erreur complète:", e);
      e.target.onerror = null;
      // Si l'image WebP échoue, on essaie l'image originale
      if (e.target.src === finalSrc) {
        e.target.src = src;
      }
    },
    [src, finalSrc]
  );

  return (
    <picture>
      <source srcSet={finalSrc} type="image/webp" />
      <img
        src={finalSrc}
        alt={alt}
        className={className || ""}
        loading="lazy"
        onError={handleError}
        {...props}
      />
    </picture>
  );
});

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
