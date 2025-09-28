import { lazy, Suspense, useEffect, useState } from "react";
import { FadeIn } from "../../../ui/FadeIn";

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

  const reviewsData = [
    {
      name: "Angelique D.",
      rating: 5,
      date: "2025-08-05",
      comment: "Je viens d'avoir un tirage magique ! Cela infuse merci.",
    },
    {
      name: "Keyshi",
      rating: 5,
      date: "2025-08-10",
      comment:
        "La voix intime me guide et je vis le Présent comme un cadeau. Je gère mieux les imprévus et les rebondissements de la vie. Je suis positive et optimiste ! Sentir que nous avons les ressources pour tout gérer, c'est Top !!! 🙏 ❤ 🫶",
    },
    {
      name: "Laurence L.",
      rating: 5,
      date: "2025-08-12",
      comment:
        "Par avance, merci pour ton regard pertinent, tes lumières inspirantes et tes partages éclairés ! 🙏 💕",
    },
    {
      name: "Marie",
      rating: 5,
      date: "2025-08-18",
      comment:
        "Merci beaucoup pour ce tirage et pour toutes tes explications. C’était vraiment très intéressant et enrichissant. Tu as partagé énormément d’informations utiles qui permettent d’y voir plus clair et d’apporter de nouvelles pistes de réflexion (pour moi en tout cas, surtout actuellement). Encore un grand Merci ! J'ai beaucoup aimé ta façon d’expliquer, claire et bienveillante, ce qui rend le tout encore plus précieux ! 🙏 Et le cadrage est plutôt réussi pour une première ! 😉👏",
    },
    {
      name: "Nadine N.",
      rating: 5,
      date: "2025-08-23",
      comment:
        "Merci à ton tirage effectué ce samedi. Cela m’a éclairé et cela à rejoint le programme que j’effectue sur moi en neurosciences (reprogrammation dans des domaines clés de la vie). Je vous la recommande ! 😉🤗",
    },
    {
      name: "Laeticia E.",
      rating: 5,
      date: "2025-09-27",
      comment:
        "Merci à la Voix Intime pour ce moment avec mon inconscient que j'ai particulièrement apprécié. Je suis arrivée avec une question professionnelle, ne sachant pas comment se déroulait la séance, mais au final, je me suis laissée porter par le tirage pour découvrir ce que mon inconscient voulait me dire. Et comme par hasard 😉, il a répondu à la question que je souhaitais poser en arrivant. Très belle expérience, je recommande. Frédérique prend le temps et nous invite à ce voyage avec douceur, écoute et bienveillance.",
    },
  ];

  return (
    <section id="reviews" className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ils m'ont fait confiance
            </h2>
            <div className="w-16 h-0.mx-auto 5 bg-purple-400"></div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {isDataLoaded
              ? reviewsData.map((review, index) => (
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
                    }>
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
                    className="p-6 border rounded-2xl animate-pulse bg-white/10 backdrop-blur-sm border-white/20">
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
            <a
              href="#faq"
              className="inline-block px-8 py-3 text-base font-medium text-white rounded-lg transition-all duration-300 transform bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 hover:scale-105"
              aria-label="Réserver un tirage de cartes - Aller à la section FAQ">
              Réserver un tirage
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Reviews;
