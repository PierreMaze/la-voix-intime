import { FadeIn } from "../../ui/FadeIn";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center py-16 w-full h-screen mt-28">
      <div className="relative w-full">
        <div className="px-4 mx-auto w-full text-center sm:px-6 lg:px-8">
          <FadeIn>
            <h1 className="text-3xl font-extrabold tracking-tight text-purple-50 sm:text-4xl md:text-5xl lg:text-6xl">
              Découvrez le langage secret de votre Inconscient
            </h1>
          </FadeIn>

          <FadeIn className="mt-4 md:mt-6">
            <p className="text-base sm:text-lg md:text-xl text-purple-100">
              Laisser les cartes vous guider pour éclairer votre chemin de vie
            </p>
          </FadeIn>

          <FadeIn className="mt-8 md:mt-10">
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:gap-4 sm:items-center">
              <button className="relative inline-flex items-center justify-center px-6 py-3 w-full text-base font-medium rounded shadow-lg transition-all duration-300 text-purple-50 sm:w-auto md:text-lg focus:outline-none bg-gradient-to-r from-purple-500 to-blue-600 shadow-purple-500/25 overflow-hidden group">
                <div className="absolute inset-0 transition-transform duration-300 ease-out transform bg-purple-50 translate-y-full group-hover:translate-y-0"></div>
                <span className="relative z-10 transition-colors duration-300 group-hover:text-purple-900">
                  Réserver un tirage
                </span>
              </button>
              <button className="relative inline-flex items-center justify-center px-6 py-3 w-full text-base font-medium border rounded transition-all duration-300 sm:w-auto md:text-lg focus:outline-none border-purple-50 text-purple-50 hover:bg-white hover:text-purple-900 hover:border-purple-300 overflow-hidden group">
                <div className="absolute inset-0 transition-transform duration-300 ease-out transform bg-purple-50 translate-y-full group-hover:translate-y-0"></div>
                <span className="relative z-10 transition-colors duration-300 group-hover:text-purple-900">
                  Découvrir les tirages gratuits sur YouTube
                </span>
              </button>
            </div>
          </FadeIn>

          <FadeIn className="mt-10 lg:mt-20">
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
