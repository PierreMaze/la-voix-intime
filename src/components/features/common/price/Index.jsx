// src/components/features/common/price/index.jsx

import { Suspense, lazy } from "react";
import { FadeIn } from "../../../ui/FadeIn";

// Lazy loading des composants
const LazyCardPrice = lazy(() => import("./CardPrice"));
const LazyNotePaypal = lazy(() => import("../../NotePaypal"));

const Price = () => {
  const card1Data = {
    title: "Tirage 60 minutes",
    pricing: {
      type: "promo",
      current: 47,
      original: 55,
    },
    detailsList: [
      "En visio sur WhatsApp",
      "Consultation de 60 minutes",
      "Guidance complète",
      "Offrez-le en cadeau !",
    ],
    button: {
      text: "Réserver",
      path: "/#faq-to-book",
    },
    disclaimer: "Un I.B.A.N vous sera transmis lors de votre réservation.",
    badge: null,
  };

  const card2Data = {
    title: "Avec enregistrement",
    pricing: {
      type: "promo",
      current: 55,
      original: 65,
    },
    detailsList: [
      "Votre guidance",
      "Enregistrement MP3",
      "Réécoute illimité*",
      "Offrez-le en cadeau !",
    ],
    button: {
      text: "Réserver",
      path: "/#faq-to-book",
    },
    disclaimer:
      "* Vous serez la seule personne à le possèder. Il sera impossible de vous le renvoyer.",
    badge: {
      label: "POPULAIRE",
      color:
        "bg-gradient-to-r from-orange-500 to-amber-600 shadow-orange-500/25",
    },
  };

  return (
    <section id="price" className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Mes tarifs</h2>
            <div className="w-16 h-0.5 mx-auto bg-violet-400"></div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
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
              }
            >
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
              }
            >
              <LazyCardPrice {...card2Data} />
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
              }
            ></Suspense>
          </div>
        </FadeIn>

        <FadeIn>
          <Suspense
            fallback={
              <div className="p-6 border rounded-2xl animate-pulse bg-white/10 backdrop-blur-sm border-white/20">
                <div className="h-4 bg-gray-700 rounded mb-2"></div>
                <div className="w-3/4 h-4 bg-gray-700 rounded"></div>
              </div>
            }
          >
            <LazyNotePaypal />
          </Suspense>
        </FadeIn>
      </div>
    </section>
  );
};

export default Price;
