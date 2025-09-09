import { Suspense } from "react";
import aboutPicture from "../../../../assets/img/about-picture.png";
import OptimizedImage from "../../ui/OptimizedImage";

// Composant de chargement pour l'image
const ImageLoadingFallback = () => (
  <div className="relative w-64 h-64 bg-gray-800 rounded-full shadow-lg animate-pulse lg:w-80 lg:h-80">
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10"></div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Titre */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">À propos</h2>
          <div className="w-16 h-0.mx-auto 5 bg-purple-400"></div>
        </div>

        {/* Contenu principal */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-br from-purple-500/20 to-blue-500/20"></div>
              <Suspense fallback={<ImageLoadingFallback />}>
                <OptimizedImage
                  src={aboutPicture}
                  alt="Portrait de la voyante - La Voix Intime"
                  className="relative w-64 h-64 rounded-full shadow-lg lg:w-80 lg:h-80 object-cover"
                  loading="lazy"
                />
              </Suspense>
            </div>
          </div>

          {/* Texte */}
          <div className="space-y-6 text-white/90">
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
              <div className="w-12 h-px bg-purple-400/50"></div>
              <p className="text-sm text-purple-200 mt-4 italic">
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
