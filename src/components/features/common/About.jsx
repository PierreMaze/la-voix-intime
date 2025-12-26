import { Suspense, lazy } from "react";
import OptimizedImage from "../../ui/OptimizedImage";

// Lazy loading de l'image
const LazyAboutImage = lazy(() =>
  import("../../../../assets/img/about-picture.png").then((module) => ({
    default: () => (
      <OptimizedImage
        src={module.default}
        alt="Portrait de la voyante - La Voix Intime"
        className="relative w-64 h-64 rounded-full shadow-lg lg:w-80 lg:h-80 object-cover"
        loading="eager"
      />
    ),
  }))
);

const About = () => {
  return (
    <section id="about" className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">À propos</h2>
          <div className="w-16 h-0.5 mx-auto bg-violet-400"></div>
        </div>

        {/* Contenu principal */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20"></div>
              <Suspense
                fallback={
                  <div className="relative flex items-center justify-center w-64 h-64 bg-gray-800 rounded-full shadow-lg animate-pulse lg:w-80 lg:h-80">
                    <div className="w-16 h-16 border-4 rounded-full animate-spin border-violet-400 border-t-transparent"></div>
                  </div>
                }>
                <LazyAboutImage />
              </Suspense>
            </div>
          </div>

          {/* Texte */}
          <div className="text-white space-y-6">
            <p className="text-lg leading-relaxed">
              Depuis plus de 30 ans, je chemine aux côtés de l'Art Divinatoire,
              guidée par la douceur et la lumière qu'il peut offrir.
            </p>

            <p className="text-lg leading-relaxed">
              Mon intention n'est pas de prédire votre avenir, mais de vous
              accompagner dans l'écoute de votre propre vérité intérieure.
            </p>

            <p className="text-lg leading-relaxed">
              À travers les Tarots et les Oracles, je vous aide à éclairer les
              messages subtils que votre inconscient souhaite partager avec
              vous.
            </p>

            <p className="text-lg leading-relaxed">
              Je suis comme une passerelle, une traductrice des murmures de
              votre Âme, afin que vous puissiez les entendre avec plus de
              clarté.
            </p>

            <p className="text-lg leading-relaxed">
              Retrouver ce lien intime avec votre Voix intérieure, c'est avancer
              avec confiance, sérénité et ouverture du cœur.
            </p>

            {/* Séparateur subtil */}
            <div className="pt-6">
              <div className="w-12 h-px bg-violet-400/50"></div>
              <p className="text-sm text-violet-300 mt-4 italic">
                ✨ Laissez-vous guider vers votre vérité intérieure ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
