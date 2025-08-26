import { FadeIn } from "../../../ui/FadeIn";
import NotePaypal from "../../NotePaypal";
import CardPrice from "./CardPrice";

const Price = () => {
  const card1Data = {
    title: "Tirage",
    price: "33 €",
    detailsList: [
      "WhatsApp ou Présentiel*",
      "Consultation de 60 minutes",
      "Guidance complète",
    ],
    button: {
      text: "Réserver",
      href: "#to-book",
    },
    disclaimer:
      "* A domicile sur le Bassin d'Arcachon. Des frais de déplacement peuvent s'appliquer.",
    badge: false,
  };

  const card2Data = {
    title: "Avec enregistrement",
    price: "40€",
    detailsList: ["Votre guidance", "Enregistrement MP3", "Réécoute illimité*"],
    button: {
      text: "Réserver",
      href: "#to-book",
    },
    disclaimer:
      "* Vous serez la seule personne à le possèder. Il ne sera pas possible de vous le renvoyer.",
    badge: true,
  };

  return (
    <section
      id="price"
      className="relative flex flex-col items-center px-4 py-16 h-full">
      <div className="w-full max-w-6xl">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white uppercase mb-4 md:text-4xl">
              Tarifs
            </h2>
          </div>
        </FadeIn>
        <FadeIn>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-12">
            <CardPrice {...card1Data} />
            <CardPrice {...card2Data} />
          </div>
        </FadeIn>
        <FadeIn>
          <NotePaypal />
        </FadeIn>
      </div>
    </section>
  );
};

export default Price;
