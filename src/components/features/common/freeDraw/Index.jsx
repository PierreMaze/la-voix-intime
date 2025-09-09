import { FadeIn } from "../../../ui/FadeIn";
import YouTubeVideo from "./YouTubeVideo";

const FreeDraw = () => {
  return (
    <section id="free-draw" className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Tirages gratuits
            </h2>
            <div className="w-16 h-0.mx-auto 5 bg-purple-400 mb-6"></div>
            <p className="text-lg text-purple-200 md:text-xl">
              Découvrez nos tirages génériques gratuits sur YouTube !
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto max-w-4xl mb-12">
            <YouTubeVideo
              videoId="D8t-DoDVuqI"
              title="Tirage gratuit - La Voix Intime"
            />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center mb-12">
            <p className="mx-auto text-lg leading-relaxed text-white max-w-2xl">
              Ce tirage s'adresse au collectif, il ne peut donc pas répondre à
              toutes vos questions.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center">
            <a
              href="https://www.youtube.com/@lavoixintime"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-base font-medium text-white rounded-lg transition-all duration-300 transform bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 hover:scale-105"
              aria-label="S'abonner à la chaîne YouTube La Voix Intime - Lien externe">
              S'abonner à la chaîne
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FreeDraw;
