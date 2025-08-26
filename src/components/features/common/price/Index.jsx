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
      className="relative flex flex-col items-center px-4 h-full mt-32">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 mb-12">
          <CardPrice {...card1Data} />
          <CardPrice {...card2Data} />
        </div>
        <NotePaypal />
      </div>
    </section>
  );
};

export default Price;
