import aboutPicture from "../../../../assets/img/about-picture.png";

const About = () => {
  return (
    <section id="about" className="relative flex items-center py-16 h-full">
      <div className="relative w-full">
        <div className="px-4 mx-auto text-center max-w-5xl sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white uppercase">
            À propos
          </h2>

          <div className="flex flex-col items-stretch justify-center gap-3 lg:gap-32 lg:py-16 lg:flex-row">
            <img
              src={aboutPicture}
              alt="About"
              className="py-16 mx-auto w-40 lg:size-96"
            />

            <div className="text-base lg:ml-18 text-start text-white/90">
              <p>
                Depuis plus de 30 ans, je chemine aux côtés de l’Art
                Divinatoire, guidée par la douceur et la lumière qu’il peut
                offrir.
              </p>
              <p className="mt-4">
                Mon intention{" "}
                <strong className="text-purple-300">
                  n’est pas de prédire votre avenir
                </strong>
                , mais de vous accompagnez dans l’écoute de votre propre vérité
                intérieure.
              </p>
              <p className="mt-4">
                À travers les Tarots et les Oracles, je vous aides à éclairer
                les messages subtils que votre inconscient souhaite partager
                avec vous.
              </p>
              <p className="mt-4">
                Je suis comme une passerelle, une traductrice des murmures de
                votre âme, afin que vous puissiez les entendre avec plus de
                clarté.
              </p>
              <p className="mt-4">
                Retrouver ce lien intime avec votre Voix intérieure, c’est
                avancer avec confiance, sérénité et ouverture du cœur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
