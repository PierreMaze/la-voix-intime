import { Suspense, lazy } from "react";
import { FadeIn } from "../../ui/FadeIn";
import Button from "../../ui/Button";

// Lazy loading de l'animation Lottie pour ne pas bloquer le LCP
const LazyLottieAnimation = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          default: () => (
            <iframe
              src="https://lottie.host/embed/bb7634e2-3692-4d30-8002-9dc962154b2c/W9fHZGS0aA.lottie"
              loading="lazy"
              title="Animation Lottie"
              style={{ width: "150px", height: "150px" }}></iframe>
          ),
        });
      }, 1000); // Délai pour laisser le LCP se définir d'abord
    })
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center py-16 w-full h-screen lg:mt-8">
      <div className="relative w-full">
        <div className="px-4 mx-auto w-full text-center sm:px-6 lg:px-8">
          {/* Titre principal - Élément LCP critique - Pas de FadeIn */}
          <h1 className="text-3xl font-extrabold tracking-tight text-violet-50 sm:text-4xl md:text-5xl lg:text-6xl">
            Découvrez le langage secret de votre Inconscient
          </h1>

          <FadeIn className="mt-4 lg:mt-8">
            <p className="text-base text-white sm:text-lg md:text-xl">
              Laisser les cartes vous guider pour éclairer votre chemin de vie
            </p>
          </FadeIn>

          <FadeIn className="mt-12 lg:mt-16">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button
                as="a"
                href="#price"
                variant="primary"
                aria-label="Réserver un tirage de cartes - Aller à la section tarifs">
                Réserver un tirage
              </Button>
              <Button
                as="a"
                href="#free-draw"
                variant="outline"
                aria-label="Découvrir les tirages gratuits sur YouTube - Aller à la section vidéos">
                Découvrir les tirages gratuits sur YouTube
              </Button>
            </div>
          </FadeIn>

          <FadeIn className="mt-20">
            <div className="inline-flex items-center justify-center mx-auto transition-colors duration-300 scale-75 -mt-12 lg:scale-100">
              <Suspense
                fallback={
                  <div className="flex items-center justify-center p-4 rounded-full animate-pulse bg-gray-800/50">
                    <div className="w-8 h-8 border-4 rounded-full animate-spin border-violet-400 border-t-transparent"></div>
                  </div>
                }>
                <LazyLottieAnimation />
              </Suspense>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
