import { FadeIn } from "../../ui/FadeIn";

const FreeDraw = () => {
  return (
    <section id="free-draw" className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white uppercase mb-4 md:text-4xl">
              Tirage gratuits
            </h2>
            <h3 className="text-lg text-purple-200 md:text-xl">
              Découvrez nos tirages génériques gratuits sur YouTube !
            </h3>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="mx-auto max-w-4xl lg:max-w-xl mb-8">
            <div
              className="relative w-full"
              style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg"
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
          <div className="w-full text-start lg:text-center mb-8">
            <p className="leading-relaxed text-purple-100">
              Ce tirage s'adresse à tout le monde, il ne peut donc pas répondre
              à toutes vos questions.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center">
            <a
              href="https://www.youtube.com/@lavoixintime"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white rounded shadow-lg transition-all duration-300 md:text-lg focus:outline-none bg-gradient-to-r from-purple-500 to-blue-600 shadow-purple-500/25 overflow-hidden group">
              <div className="absolute inset-0 bg-white transition-transform duration-300 ease-out transform translate-y-full group-hover:translate-y-0"></div>
              <span className="relative z-10 transition-colors duration-300 group-hover:text-purple-900">
                S'abonner à la chaîne
              </span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FreeDraw;
