import { FadeIn } from "../../../ui/FadeIn";
import CardReviews from "./CardReviews";

const Reviews = () => {
  const reviewsData = [
    {
      name: "Angelique D.",
      rating: 5,
      date: "2025-08-05",
      comment: "Je viens d'avoir un tirage magique ! Cela infuse merci.",
    },
    {
      name: "Thomas B.",
      rating: 5,
      date: "2025-08-10",
      comment:
        "J'adore tes tirages, ils sont pleins de vérités cachés. La voix intime nous guide. Gratitude 🙏 ❤ 🫶",
    },
    {
      name: "Sophie M.",
      rating: 5,
      date: "2025-08-18",
      comment:
        "Par avance, merci pour ton regard pertinent, tes lumières inspirantes et tes partages éclairés ! 🙏 💕",
    },
    {
      name: "Pierre D.",
      rating: 5,
      date: "2025-08-15",
      comment:
        "Merci beaucoup pour ce tirage et pour toutes tes explications. C’était vraiment très intéressant et enrichissant. Tu as partagé énormément d’informations utiles qui permettent d’y voir plus clair et d’apporter de nouvelles pistes de réflexion (pour moi en tout cas, surtout actuellement). Encore un grand Merci ! J'ai beaucoup aimé ta façon d’expliquer, claire et bienveillante, ce qui rend le tout encore plus précieux ! 🙏 Et le cadrage est plutôt réussi pour une première ! 😉👏",
    },
    {
      name: "Julie R.",
      rating: 5,
      date: "2025-08-22",
      comment:
        "Merci à ton tirage effectué ce samedi. Cela m’a éclairé et cela à rejoint le programme que j’effectue sur moi en neurosciences (reprogrammation dans des domaines clés de la vie). Je vous la recommande ! 😉🤗",
    },
    {
      name: "Marc F.",
      rating: 5,
      date: "2025-08-24",
      comment:
        "Merci ! Toujours un réel plaisir pour ces moments de partage, Toujours des tirages d'une parfaite justesse du moment, clair et fluide, participe à la reflexion ! Merci aussi pour les tirages  du 'soir' belles options d'ouvertures de pensées. 🙏",
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
            {reviewsData.map((review, index) => (
              <CardReviews
                key={index}
                name={review.name}
                rating={review.rating}
                date={review.date}
                comment={review.comment}
              />
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center mt-16">
            <a
              href="#to-book"
              className="inline-block px-8 py-3 text-base font-medium text-white rounded-lg transition-all duration-300 transform bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 hover:scale-105">
              Réserver un tirage
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Reviews;
