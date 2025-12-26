import { lazy, Suspense, useEffect, useState } from "react";
import { FadeIn } from "../../../ui/FadeIn";
import Button from "../../../ui/Button";
import { REVIEWS_DATA } from "../../../../constants/reviews";

// Lazy loading du composant CardReviews
const LazyCardReviews = lazy(() => import("./CardReviews"));

const Reviews = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // Simuler le chargement des données
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDataLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="reviews" className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ils m'ont fait confiance
            </h2>
            <div className="w-16 h-0.5 mx-auto bg-violet-400"></div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {isDataLoaded
              ? REVIEWS_DATA.map((review, index) => (
                  <Suspense
                    key={index}
                    fallback={
                      <div className="p-6 border rounded-2xl animate-pulse bg-white/10 backdrop-blur-sm border-white/20">
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 bg-gray-700 rounded-full mr-3"></div>
                          <div>
                            <div className="w-24 h-4 bg-gray-700 rounded mb-2"></div>
                            <div className="w-16 h-3 bg-gray-700 rounded"></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="h-4 bg-gray-700 rounded"></div>
                          <div className="w-3/4 h-4 bg-gray-700 rounded"></div>
                          <div className="w-1/2 h-4 bg-gray-700 rounded"></div>
                        </div>
                      </div>
                    }
                  >
                    <LazyCardReviews
                      name={review.name}
                      rating={review.rating}
                      date={review.date}
                      comment={review.comment}
                    />
                  </Suspense>
                ))
              : // Skeleton loader pendant le chargement des données
                Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="p-6 border rounded-2xl animate-pulse bg-white/10 backdrop-blur-sm border-white/20"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gray-700 rounded-full mr-3"></div>
                      <div>
                        <div className="w-24 h-4 bg-gray-700 rounded mb-2"></div>
                        <div className="w-16 h-3 bg-gray-700 rounded"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-700 rounded"></div>
                      <div className="w-3/4 h-4 bg-gray-700 rounded"></div>
                      <div className="w-1/2 h-4 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center mt-16">
            <Button
              as="a"
              href="#faq"
              variant="primary"
              aria-label="Réserver un tirage de cartes - Aller à la section FAQ"
            >
              Réserver un tirage
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Reviews;
