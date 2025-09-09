import { FadeIn } from "../../ui/FadeIn";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center py-16 w-full h-screen lg:mt-8">
      <div className="relative w-full">
        <div className="px-4 mx-auto w-full text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-3xl font-extrabold tracking-tight text-purple-50 sm:text-4xl md:text-5xl lg:text-6xl">
              Découvrez le langage secret de votre Inconscient
            </h1>
          </FadeIn>

          <FadeIn className="py-2 mt-4 lg:mt-8 sm:py-3 lg:py-4">
            <p className="text-base leading-relaxed sm:text-lg md:text-xl text-purple-100">
              Laisser les cartes vous guider pour éclairer votre chemin de vie
            </p>
          </FadeIn>

          <FadeIn className="py-3 mt-12 lg:mt-16 sm:py-4 lg:py-6">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#price"
                className="px-8 py-3 text-base font-medium text-white rounded-lg transition-all duration-300 transform bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 hover:scale-105">
                Réserver un tirage
              </a>
              <a
                href="#free-draw"
                className="px-4 py-3 text-base font-medium border rounded-lg transition-all duration-300 transform text-purple-50 border-purple-50 hover:bg-white hover:text-purple-900 hover:border-purple-300 hover:scale-105">
                Découvrir les tirages gratuits sur YouTube
              </a>
            </div>
          </FadeIn>

          <FadeIn className="py-4 mt-10 lg:mt-20 sm:py-6 lg:py-8">
            <div className="inline-flex items-center justify-center mx-auto transition-colors duration-300 scale-75 -mt-12 lg:scale-100">
              <iframe src="https://lottie.host/embed/bb7634e2-3692-4d30-8002-9dc962154b2c/W9fHZGS0aA.lottie"></iframe>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Hero;
