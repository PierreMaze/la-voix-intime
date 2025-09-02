import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FadeIn } from "../../ui/FadeIn";

const ToBook = () => {
  const [conditionsAccepted, setConditionsAccepted] = useState({
    generalConditions: false,
    privacyPolicy: false,
    generalConditionsOfSale: false,
  });

  const [allConditionsAccepted, setAllConditionsAccepted] = useState(false);

  // Vérifier si toutes les conditions sont acceptées
  useEffect(() => {
    const allAccepted = Object.values(conditionsAccepted).every(
      (condition) => condition
    );
    setAllConditionsAccepted(allAccepted);
  }, [conditionsAccepted]);

  const handleConditionChange = (condition) => {
    setConditionsAccepted((prev) => ({
      ...prev,
      [condition]: !prev[condition],
    }));
  };

  const handleSelectAll = () => {
    const newValue = !allConditionsAccepted;
    setConditionsAccepted({
      generalConditions: newValue,
      privacyPolicy: newValue,
      generalConditionsOfSale: newValue,
    });
  };

  return (
    <section className="relative px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Réserver votre séance
            </h2>
            <div className="w-16 h-0.mx-auto 5 bg-purple-400"></div>
            <p className="mx-auto text-lg text-white/80 mt-6 max-w-2xl">
              Prenez rendez-vous pour une consultation de 1h en présentiel ou à
              distance via WhatsApp
            </p>
          </div>
        </FadeIn>

        {/* Layout responsive : Calendrier en premier sur mobile, côte à côte sur desktop */}
        <div className="space-y-12 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          {/* Section Calendly - En premier sur mobile */}
          <FadeIn>
            <div className="relative order-1 lg:order-2">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Choisir votre créneau
              </h3>

              <div
                className={`relative transition-all duration-500 ${
                  !allConditionsAccepted
                    ? "opacity-50 grayscale"
                    : "opacity-100 grayscale-0"}`}>
                {!allConditionsAccepted && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-black/70 backdrop-blur-sm">
                    <div className="p-8 text-center max-w-lg">
                      <div className="flex items-center justify-center mx-auto w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-6">
                        <svg
                          className="w-10 h-10 text-purple-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-white mb-3">
                        🔒 Calendrier verrouillé
                      </h4>
                      <div className="p-3 border rounded-lg mt-4 bg-purple-500/20 border-purple-400/30">
                        <p className="text-sm text-purple-200">
                          📋 Consultez les conditions
                          <span className="lg:hidden"> en bas</span>
                          <span className="hidden lg:inline">
                            {" "}
                            dans la colonne de droite
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="border rounded-lg border-white/20 overflow-hidden bg-white/5">
                  <iframe
                    width="100%"
                    height="600px"
                    src="https://calendly.com/promazelaygue/nouvelle-reunion"
                    className="transition-all duration-500"
                    style={{
                      filter: allConditionsAccepted
                        ? "none"
                        : "grayscale(100%) opacity(0.2)",
                      pointerEvents: allConditionsAccepted ? "auto" : "none",
                    }}
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Section Message d'information et Conditions - En second sur mobile */}
          <FadeIn>
            <div className="order-2 space-y-8 lg:order-1">
              {/* Message d'information */}
              <div className="p-6 border rounded-lg bg-purple-500/10 border-purple-400/20">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-purple-400 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-200 mb-2">
                      Comment procéder ?
                    </h4>
                    <p className="text-base text-purple-200">
                      Une fois toutes les conditions acceptées, le calendrier de
                      réservation sera activé. Vous pourrez choisir entre une
                      consultation en présentiel ou à distance via WhatsApp.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section Conditions Légales */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Conditions de réservation
                </h3>

                {/* Checkbox "Tout accepter" */}
                <div className="flex items-center p-4 border rounded-lg space-x-3 bg-white/5 border-white/10">
                  <input
                    type="checkbox"
                    id="selectAll"
                    checked={allConditionsAccepted}
                    onChange={handleSelectAll}
                    className="w-5 h-5 bg-transparent border-2 rounded text-purple-500 border-purple-400 focus:ring-purple-500 focus:ring-2 focus:ring-offset-0"
                  />
                  <label htmlFor="selectAll" className="font-medium text-white">
                    Accepter toutes les conditions
                  </label>
                </div>

                {/* Conditions individuelles */}
                <div className="space-y-4">
                  <div className="flex items-start p-4 border rounded-lg space-x-3 bg-white/5 border-white/10">
                    <input
                      type="checkbox"
                      id="generalConditions"
                      checked={conditionsAccepted.generalConditions}
                      onChange={() =>
                        handleConditionChange("generalConditions")
                      }
                      className="w-5 h-5 bg-transparent border-2 rounded mt-1 text-purple-500 border-purple-400 focus:ring-purple-500 focus:ring-2 focus:ring-offset-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <label
                          htmlFor="generalConditions"
                          className="font-medium text-white">
                          Conditions Générales d'Utilisation
                        </label>
                        <Link
                          to="/conditions-generales-utilisation"
                          className="text-sm text-white underline transition-colors duration-200 hover:text-purple-300 underline-offset-2"
                          target="_blank"
                          rel="noopener noreferrer">
                          Lire
                        </Link>
                      </div>
                      <p className="text-sm text-white/70">
                        J'accepte les conditions générales d'utilisation du site
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 border rounded-lg space-x-3 bg-white/5 border-white/10">
                    <input
                      type="checkbox"
                      id="privacyPolicy"
                      checked={conditionsAccepted.privacyPolicy}
                      onChange={() => handleConditionChange("privacyPolicy")}
                      className="w-5 h-5 bg-transparent border-2 rounded mt-1 text-purple-500 border-purple-400 focus:ring-purple-500 focus:ring-2 focus:ring-offset-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <label
                          htmlFor="privacyPolicy"
                          className="font-medium text-white">
                          Politique de Confidentialité
                        </label>
                        <Link
                          to="/politique-confidentialite"
                          className="text-sm text-white underline transition-colors duration-200 hover:text-purple-300 underline-offset-2"
                          target="_blank"
                          rel="noopener noreferrer">
                          Lire
                        </Link>
                      </div>
                      <p className="text-sm text-white/70">
                        J'accepte la politique de confidentialité et le
                        traitement de mes données
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center p-4 border rounded-lg space-x-3 bg-white/5 border-white/10">
                    <input
                      type="checkbox"
                      id="generalConditionsOfSale"
                      checked={conditionsAccepted.generalConditionsOfSale}
                      onChange={() =>
                        handleConditionChange("generalConditionsOfSale")
                      }
                      className="w-5 h-5 bg-transparent border-2 rounded mt-1 text-purple-500 border-purple-400 focus:ring-purple-500 focus:ring-2 focus:ring-offset-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <label
                          htmlFor="generalConditionsOfSale"
                          className="font-medium text-white">
                          Conditions Générales de Vente
                        </label>
                        <Link
                          to="/conditions-generales-vente"
                          className="text-sm text-white underline transition-colors duration-200 hover:text-purple-300 underline-offset-2"
                          target="_blank"
                          rel="noopener noreferrer">
                          Lire
                        </Link>
                      </div>
                      <p className="text-sm text-white/70">
                        J'accepte les conditions générales de vente pour la
                        prestation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* CTA final */}
        <FadeIn>
          <div className="text-center mt-16">
            <div className="inline-flex items-center px-6 py-3 border rounded-full space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-purple-400/30">
              <svg
                className="w-5 h-5 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-medium text-white/90">
                Prêt à découvrir votre voix intime ?
              </span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ToBook;
