import { Button } from "../../ui/Button";
import { FadeIn } from "../../ui/FadeIn";

const Hero = () => {
  return (
    <section id="home" className="relative flex items-center min-h-screen">
      <div className="relative w-full">
        <div className="px-4 mx-auto text-center max-w-5xl sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Découvrez le langage secret de votre Inconscient
            </h1>
          </FadeIn>

          <FadeIn className="mt-4 md:mt-6">
            <p className="text-base sm:text-lg md:text-xl text-slate-200/90">
              Laisser les cartes vous guider pour éclairer votre chemin de vie
            </p>
          </FadeIn>

          <FadeIn className="mt-8 md:mt-10">
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:gap-4 sm:items-center">
              <Button
                variant="yellow"
                className="px-6 py-3 w-full text-base sm:w-auto md:text-lg">
                Réserver un tirage
              </Button>
              <Button
                variant="outline"
                className="px-6 py-3 w-full text-base sm:w-auto md:text-lg">
                Découvrir les tirages gratuits sur YouTube
              </Button>
            </div>
          </FadeIn>

          <FadeIn className="mt-10 md:mt-14">
            <a
              href="#skills"
              aria-label="Aller à la section suivante"
              className="inline-flex items-center justify-center mx-auto w-12 h-12 border rounded-full transition-colors duration-300 border-white/30 text-white/80 hover:text-white hover:border-white/60">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 animate-bounce">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
