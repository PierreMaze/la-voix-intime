import { Suspense, useEffect, useState } from "react";

// Composant de chargement amélioré pour la vidéo
const VideoLoadingFallback = () => (
  <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-900">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 rounded-full animate-spin border-purple-400 border-t-transparent"></div>
      <p className="text-sm text-center text-white mt-4">
        Chargement de la vidéo...
      </p>
    </div>
  </div>
);

const YouTubeVideo = ({ videoId, title, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Simuler un délai de chargement pour une meilleure UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-800 rounded-2xl ${
          className || ""
        }`}
        style={{ paddingBottom: "56.25%" }}>
        <div className="text-center text-white">
          <p className="text-lg mb-2">Erreur de chargement de la vidéo</p>
          <p className="text-sm text-gray-400">Veuillez réessayer plus tard</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full rounded-2xl shadow-2xl overflow-hidden ${
        className || ""
      }`}
      style={{ paddingBottom: "56.25%" }}>
      {/* Spinner de chargement */}
      {isLoading && <VideoLoadingFallback />}

      {/* Iframe YouTube */}
      <Suspense fallback={<VideoLoadingFallback />}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}?si=g0f-uzNGQlOZSH2O`}
          title={title || "YouTube video player"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          onLoad={handleLoad}
          onError={handleError}
          loading="lazy"
        />
      </Suspense>
    </div>
  );
};

export default YouTubeVideo;
