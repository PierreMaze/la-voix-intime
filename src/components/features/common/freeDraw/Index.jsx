import { FadeIn } from "../../../ui/FadeIn";
import YouTubeVideo from "./YouTubeVideo";

const URL_VIDEO = "vNpf_UAar9g"

const FreeDraw = () => {
  return (
    <section id="free-draw" className="relative px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Tirages gratuits
            </h2>
            <div className="w-16 h-0.mx-auto 5 bg-violet-400 mb-6"></div>
            <p className="text-lg text-white md:text-xl">
              Découvrez nos tirages génériques gratuits sur YouTube !
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto max-w-4xl mb-12">
            <YouTubeVideo
              videoId={URL_VIDEO}
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
              href="https://www.youtube.com/@lavoixintime_?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold px-8 py-3 text-base text-white rounded-lg transition-all duration-300 transform bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 hover:scale-105"
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
