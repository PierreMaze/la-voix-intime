import { Suspense, lazy } from "react";
import { FadeIn } from "../../../ui/FadeIn";

// Lazy loading des composants
const LazyCardPrice = lazy(() => import("./CardPrice"));
const LazyNotePaypal = lazy(() => import("../../NotePaypal"));

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
      path: "/#faq-to-book",
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
      path: "/#faq-to-book",
    },
    disclaimer:
      "* Vous serez la seule personne à le possèder. Il ne sera pas possible de vous le renvoyer.",
    badge: true,
  };

  return (
    <section id="price" className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Mes tarifs</h2>
            <div className="mx-auto w-16 h-1 bg-purple-400"></div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid gap-8 md:grid-cols-2 mb-12">
            <Suspense
              fallback={
                <div className="p-8 border rounded-2xl animate-pulse bg-white/10 backdrop-blur-sm border-white/20">
                  <div className="h-8 bg-gray-700 rounded mb-4"></div>
                  <div className="h-12 bg-gray-700 rounded mb-8"></div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-700 rounded"></div>
                  </div>
                  <div className="h-12 bg-gray-700 rounded mt-8"></div>
                </div>
              }>
              <LazyCardPrice {...card1Data} />
            </Suspense>
            <Suspense
              fallback={
                <div className="p-8 border rounded-2xl animate-pulse bg-white/10 backdrop-blur-sm border-white/20">
                  <div className="h-8 bg-gray-700 rounded mb-4"></div>
                  <div className="h-12 bg-gray-700 rounded mb-8"></div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-700 rounded"></div>
                    <div className="h-4 bg-gray-700 rounded"></div>
                  </div>
                  <div className="h-12 bg-gray-700 rounded mt-8"></div>
                </div>
              }>
              <LazyCardPrice {...card2Data} />
            </Suspense>
          </div>
        </FadeIn>

        <FadeIn>
          <Suspense
            fallback={
              <div className="p-6 border rounded-2xl animate-pulse bg-white/10 backdrop-blur-sm border-white/20">
                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                <div className="w-3/4 h-4 bg-gray-700 rounded"></div>
              </div>
            }>
            <LazyNotePaypal />
          </Suspense>
        </FadeIn>
      </div>
    </section>
  );
};

export default Price;
