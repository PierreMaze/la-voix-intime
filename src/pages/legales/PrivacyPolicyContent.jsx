import { useEffect } from "react";
import { Link } from "react-router-dom";

const PrivacyPolicyContent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-16 pb-8">
      <div className="px-6 mx-auto max-w-4xl lg:px-8">
        {/* Bouton de retour en haut */}
        <div className="mb-8">
          <Link
            to="/"
            className="relative inline-flex items-center px-6 py-3 text-base font-medium text-white border rounded-lg shadow-md transition-all duration-300 transform group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:-translate-y-0.5 border-purple-500/30 hover:border-purple-400/50">
            <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 bg-gradient-to-r from-purple-400/20 to-purple-600/20 group-hover:opacity-100"></div>
            <svg
              className="w-5 h-5 transition-transform duration-300 mr-2 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="relative z-10">Retour à l'accueil</span>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Politique de Confidentialité
          </h1>
          <p className="text-gray-300">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-300 mb-4">
              La Voix Intime ("nous", "notre", "nos") s'engage à protéger votre
              vie privée. Cette politique de confidentialité explique comment
              nous collectons, utilisons et protégeons vos informations
              personnelles lorsque vous utilisez notre service.
            </p>
            <p className="text-gray-300">
              En utilisant notre service, vous acceptez les pratiques décrites
              dans cette politique.
            </p>
          </div>

          {/* Collecte des données */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Informations que nous collectons
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Informations que vous nous fournissez :
                </h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Nom et prénom</li>
                  <li>• Adresse e-mail</li>
                  <li>• Numéro de téléphone</li>
                  <li>
                    • Informations de réservation (via{" "}
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline transition-colors text-purple-400 hover:text-purple-300">
                      Calendly
                    </a>
                    )
                  </li>
                  <li>
                    • Informations de paiement (traitées par{" "}
                    <a
                      href="https://www.paypal.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline transition-colors text-purple-400 hover:text-purple-300">
                      PayPal
                    </a>
                    )
                  </li>
                  <li>
                    • Messages et communications avec notre service client
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Informations collectées automatiquement :
                </h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>• Adresse IP et données de localisation</li>
                  <li>• Type de navigateur et système d'exploitation</li>
                  <li>
                    • Pages visitées et temps passé sur le{" "}
                    <strong className="text-purple-300">site</strong>
                  </li>
                  <li>• Cookies et technologies similaires</li>
                  <li>
                    • Données de navigation sur{" "}
                    <a
                      href="https://calendly.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline transition-colors text-purple-400 hover:text-purple-300">
                      Calendly
                    </a>{" "}
                    (conformément à leur politique)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white mb-2">
                  Services tiers utilisés :
                </h3>
                <ul className="text-gray-300 space-y-2 ml-4">
                  <li>
                    • <strong>Calendly</strong> : Gestion des réservations et
                    calendrier
                    <br />
                    <span className="text-sm">
                      - Site web :{" "}
                      <a
                        href="https://calendly.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-purple-400 hover:text-purple-300">
                        https://calendly.com
                      </a>
                    </span>
                    <br />
                    <span className="text-sm">
                      - Politique de confidentialité :{" "}
                      <a
                        href="https://calendly.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-purple-400 hover:text-purple-300">
                        https://calendly.com/privacy
                      </a>
                    </span>
                  </li>
                  <li>
                    • <strong>PayPal</strong> : Traitement des paiements
                    <br />
                    <span className="text-sm">
                      - Site web :{" "}
                      <a
                        href="https://www.paypal.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-purple-400 hover:text-purple-300">
                        https://www.paypal.com
                      </a>
                    </span>
                    <br />
                    <span className="text-sm">
                      - Politique de confidentialité :{" "}
                      <a
                        href="https://www.paypal.com/fr/webapps/mpp/ua/privacy-full"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-purple-400 hover:text-purple-300">
                        https://www.paypal.com/fr/webapps/mpp/ua/privacy-full
                      </a>
                    </span>
                  </li>
                </ul>
                <p className="text-sm text-gray-300 mt-2">
                  Ces services ont leurs propres politiques de confidentialité.
                  Nous vous invitons à les consulter.
                </p>
              </div>
            </div>
          </div>

          {/* Utilisation des données */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Comment nous utilisons vos informations
            </h2>
            <ul className="text-gray-300 space-y-2">
              <li>• Fournir et maintenir notre service</li>
              <li>• Traiter vos paiements et commandes</li>
              <li>• Communiquer avec vous concernant votre réservation</li>
              <li>
                • Améliorer notre service et développer de nouvelles
                fonctionnalités
              </li>
              <li>• Respecter nos obligations légales</li>
              <li>• Prévenir la fraude et assurer la sécurité</li>
            </ul>
          </div>

          {/* Partage des données */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Partage de vos informations
            </h2>
            <p className="text-gray-300 mb-4">
              Nous ne vendons, n'échangeons ni ne louons vos informations
              personnelles à des tiers. Nous pouvons partager vos informations
              uniquement dans les cas suivants :
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Avec votre consentement explicite</li>
              <li>
                • Avec nos prestataires de services de confiance (paiement,
                hébergement)
              </li>
              <li>• Pour respecter une obligation légale</li>
              <li>• Pour protéger nos droits et notre sécurité</li>
            </ul>
          </div>

          {/* Sécurité */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Sécurité de vos données
            </h2>
            <p className="text-gray-300 mb-4">
              Nous mettons en place des mesures de sécurité appropriées pour
              protéger vos informations personnelles contre l'accès non
              autorisé, la modification, la divulgation ou la destruction.
            </p>
            <p className="text-gray-300">
              Cependant, aucune méthode de transmission sur Internet ou de
              stockage électronique n'est 100% sécurisée. Nous nous efforçons
              d'utiliser des moyens commercialement acceptables pour protéger
              vos données.
            </p>
          </div>

          {/* Vos droits */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Vos droits
            </h2>
            <p className="text-gray-300 mb-4">
              Conformément au RGPD, vous avez les droits suivants :
            </p>
            <ul className="text-gray-300 space-y-2">
              <li>• Droit d'accès à vos données personnelles</li>
              <li>• Droit de rectification de vos données</li>
              <li>• Droit à l'effacement de vos données</li>
              <li>• Droit à la limitation du traitement</li>
              <li>• Droit à la portabilité de vos données</li>
              <li>• Droit d'opposition au traitement</li>
            </ul>
            <div className="p-4 border rounded-lg mt-4 bg-purple-500/10 border-purple-500/20">
              <p className="text-sm text-gray-300 mb-2">
                <strong>Textes de loi de référence :</strong>
              </p>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>
                  • Règlement Général sur la Protection des Données (RGPD) :{" "}
                  <a
                    href="https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32016R0679"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-purple-400 hover:text-purple-300">
                    Règlement (UE) 2016/679
                  </a>
                </li>
                <li>
                  • Loi Informatique et Libertés :{" "}
                  <a
                    href="https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006068624/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-purple-400 hover:text-purple-300">
                    Loi n° 78-17 du 6 janvier 1978
                  </a>
                </li>
                <li>
                  • Code de la consommation :{" "}
                  <a
                    href="https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006069565/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-purple-400 hover:text-purple-300">
                    Articles L111-1 et suivants
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Cookies */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Cookies et technologies similaires
            </h2>
            <p className="text-gray-300 mb-4">
              Nous utilisons des cookies et des technologies similaires pour
              améliorer votre expérience sur notre{" "}
              <strong className="text-purple-300">site</strong>. Vous pouvez
              contrôler l'utilisation des cookies via les paramètres de votre
              navigateur.
            </p>
            <p className="text-gray-300">
              Les cookies nous aident à analyser le trafic du{" "}
              <strong className="text-purple-300">site</strong>, à mémoriser vos
              préférences et à fournir un contenu personnalisé.
            </p>
          </div>

          {/* Contact */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Nous contacter
            </h2>
            <p className="text-gray-300 mb-4">
              Si vous avez des questions concernant cette politique de
              confidentialité ou souhaitez exercer vos droits, contactez-nous :
            </p>
            <div className="text-gray-300 space-y-2">
              <p>
                • Email :{" "}
                <a
                  href="mailto:lavoixintime@gmail.com"
                  className="underline text-purple-400 hover:text-purple-300">
                  lavoixintime@gmail.com
                </a>
              </p>
              <p>
                • Adresse :{" "}
                <a
                  href="https://maps.google.com/?q=[Votre+adresse+complète]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-purple-400 hover:text-purple-300">
                  [Adresse complète]
                </a>
                <em> à venir</em>
              </p>
              <p>
                • Téléphone :{" "}
                <a
                  href="tel:+33646849352"
                  className="underline text-purple-400 hover:text-purple-300">
                  06 46 84 93 52
                </a>
              </p>
            </div>
          </div>

          {/* Modifications */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Modifications de cette politique
            </h2>
            <p className="text-gray-300">
              Nous pouvons mettre à jour cette politique de confidentialité de
              temps à autre. Nous vous informerons de tout changement important
              en publiant la nouvelle politique sur cette page et en mettant à
              jour la date de "dernière mise à jour".
            </p>
          </div>
        </div>

        {/* Bouton de retour en bas de page */}
        <div className="text-center mt-16 mb-8">
          <Link
            to="/"
            className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white border rounded-xl shadow-lg transition-all duration-300 transform group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 hover:shadow-2xl hover:-translate-y-1 border-purple-500/30 hover:border-purple-400/50">
            <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 bg-gradient-to-r from-purple-400/20 to-purple-600/20 group-hover:opacity-100"></div>
            <svg
              className="w-6 h-6 transition-transform duration-300 mr-3 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="relative z-10">Retour à l'accueil</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyContent;
