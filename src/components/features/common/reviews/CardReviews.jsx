import { useState } from "react";
import { FadeIn } from "../../../ui/FadeIn";

const CardReviews = ({ name, rating, date, comment }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Fonction pour générer les étoiles
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const starFill =
        i <= Math.floor(rating)
          ? "text-yellow-400 fill-current"
          : "text-gray-400";
      const isHalfStar = i === Math.ceil(rating) && rating % 1 !== 0;

      stars.push(
        <div key={i} className="relative w-4 h-4">
          {/* Étoile de base (grisée) */}
          <svg
            className="absolute inset-0 w-4 h-4 text-gray-400"
            viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>

          {/* Étoile pleine ou demi-étoile */}
          {i <= Math.floor(rating) && (
            <svg
              className="absolute inset-0 w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          )}

          {/* Demi-étoile */}
          {isHalfStar && (
            <svg
              className="absolute inset-0 w-4 h-4 text-yellow-400 fill-current"
              viewBox="0 0 20 20">
              <defs>
                <clipPath id={`half-star-${i}`}>
                  <rect x="0" y="0" width="10" height="20" />
                </clipPath>
              </defs>
              <path
                clipPath={`url(#half-star-${i})`}
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          )}
        </div>
      );
    }
    return stars;
  };

  // Fonction pour formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Fonction pour tronquer le texte
  const truncateText = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  const shouldShowExpand = comment.length > 120;

  return (
    <FadeIn>
      <div className="flex flex-col p-6 h-full border rounded-xl transition-all duration-300 bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-400/30">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-lg font-semibold text-white">{name}</h4>
          <div className="flex items-center space-x-1">
            {renderStars(rating)}
          </div>
        </div>

        <p className="text-sm text-white/60 mb-4">{formatDate(date)}</p>

        <div className="flex-grow">
          <p className="leading-relaxed text-white/90">
            {isExpanded ? comment : truncateText(comment)}
          </p>

          {shouldShowExpand && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm font-medium transition-colors duration-200 mt-3 text-purple-400 hover:text-purple-300">
              {isExpanded ? "Voir moins" : "Voir plus"}
            </button>
          )}
        </div>
      </div>
    </FadeIn>
  );
};

export default CardReviews;
