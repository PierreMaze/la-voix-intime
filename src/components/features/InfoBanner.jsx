import { useState } from "react";
import { FadeIn } from "../ui/FadeIn";

const InfoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <FadeIn>
      <div className="fixed right-0 left-0 z-40 border-b top-16 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm border-purple-400/30">
        <div className="px-4 py-3 sm:px-16">
          <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left sm:gap-4">
            <button
              onClick={handleClose}
              className="absolute z-50 p-3 transition-colors duration-200 top-1 right-3 sm:top-2 sm:right-2 text-white/60 hover:text-white"
              aria-label="Fermer la banderole">
              <svg
                className="w-6 h-6 sm:w-4 sm:h-4"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 text-yellow-400 mr-2 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm font-medium text-white">
                Réservations temporairement indisponibles -{" "}
                <a
                  href="#faq"
                  className="underline transition-colors duration-200 text-purple-300 hover:text-purple-200">
                  Voir la FAQ
                </a>
              </span>
            </div>

            <div className="flex flex-col items-center gap-1 text-xs sm:flex-row sm:gap-3 text-white/80">
              <span>Contactez-moi en attendant :</span>
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                <a
                  href="mailto:lavoixintime@gmail.com"
                  className="flex items-center gap-1 transition-colors duration-200 text-purple-300 hover:text-purple-200">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  lavoixintime@gmail.com
                </a>
                <span className="text-purple-400">ou</span>
                <a
                  href="tel:+33646849352"
                  className="flex items-center gap-1 transition-colors duration-200 text-purple-300 hover:text-purple-200">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  06 46 84 93 52
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};

export default InfoBanner;
