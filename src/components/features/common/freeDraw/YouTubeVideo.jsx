import { lazy, Suspense, useEffect, useState } from "react";

// Composant lazy pour l'iframe YouTube
const LazyYouTubeIframe = lazy(
  () =>
    new Promise((resolve) => {
      // Simuler un délai pour le lazy loading
      setTimeout(() => {
        resolve({
          default: ({ videoId, title, onLoad, onError }) => (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0&controls=1&disablekb=0&fs=1&cc_load_policy=0&iv_load_policy=3&autohide=0&playsinline=1`}
              title={title || "YouTube video player"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onLoad={onLoad}
              onError={onError}
              loading="lazy"
            />
          ),
        });
      }, 500);
    })
);

const YouTubeVideo = ({ videoId, title, className }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [userConsent, setUserConsent] = useState(false);

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

  const handleConsent = () => {
    setUserConsent(true);
  };

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-800 rounded-2xl ${
          className || ""}`}
        style={{ paddingBottom: "56.25%" }}>
        <div className="text-center text-white">
          <p className="text-lg mb-2">Erreur de chargement de la vidéo</p>
          <p className="text-sm text-white">Veuillez réessayer plus tard</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative w-full rounded-2xl shadow-2xl overflow-hidden ${
        className || ""}`}
      style={{ paddingBottom: "56.25%" }}>
      {/* Spinner de chargement */}
      {isLoading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-900">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 rounded-full animate-spin border-purple-400 border-t-transparent"></div>
            <p className="text-sm text-center text-white mt-4">
              Chargement de la vidéo...
            </p>
          </div>
        </div>
      )}

      {/* Iframe YouTube ou bannière de consentement */}
      {userConsent ? (
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 rounded-full animate-spin border-purple-400 border-t-transparent"></div>
                <p className="text-sm text-center text-white mt-4">
                  Chargement de la vidéo...
                </p>
              </div>
            </div>
          }>
          <LazyYouTubeIframe
            videoId={videoId}
            title={title}
            onLoad={handleLoad}
            onError={handleError}
          />
        </Suspense>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-2xl">
          <div className="p-3 mx-auto text-center text-white sm:p-4 max-w-xs sm:max-w-md">
            <div className="mb-2 sm:mb-3">
              <svg
                className="mx-auto w-8 h-8 sm:w-10 sm:h-10 text-purple-400"
                fill="currentColor"
                viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
            <h3 className="text-sm font-semibold sm:text-base mb-2">
              Vidéo YouTube
            </h3>
            <p className="text-xs leading-tight text-gray-300 sm:text-sm mb-3">
              Acceptez les cookies YouTube pour voir la vidéo
            </p>
            <button
              onClick={handleConsent}
              className="px-4 py-2 w-fit text-xs font-medium text-white rounded-lg transition-all duration-300 transform sm:text-sm bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Charger la vidéo YouTube et accepter les cookies">
              Acceptez les cookies YouTube
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YouTubeVideo;
