import { FadeIn } from "../../ui/FadeIn";

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
            <h3 className="text-lg text-purple-200 md:text-xl">
              Découvrez nos tirages génériques gratuits sur YouTube !
            </h3>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto max-w-4xl mb-12">
            <div
              className="relative w-full rounded-2xl shadow-2xl overflow-hidden"
              style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/D8t-DoDVuqI?si=g0f-uzNGQlOZSH2O"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center mb-12">
            <p className="mx-auto text-lg leading-relaxed text-white/90 max-w-2xl">
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
              className="inline-block px-8 py-3 text-base font-medium text-white rounded-lg transition-all duration-300 transform bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 hover:scale-105">
              S'abonner à la chaîne
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FreeDraw;
