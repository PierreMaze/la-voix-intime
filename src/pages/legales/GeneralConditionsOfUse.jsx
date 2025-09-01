import { useEffect } from "react";
import { Link } from "react-router-dom";

const GeneralConditionsOfUse = () => {
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
            className="relative inline-flex items-center px-4 py-3 text-base font-medium text-white border rounded-lg shadow-md transition-all duration-300 transform group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:-translate-y-0.5 border-purple-500/30 hover:border-purple-400/50">
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
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-xl lg:text-4xl font-bold text-white mb-4">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-gray-300">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>

        <div className="space-y-8">
          {/* Section 1 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Objet</h2>
            <p className="text-gray-300 mb-4">
              Les présentes conditions générales d'utilisation (CGU) régissent
              l'utilisation du site{" "}
              <a
                href="https://lavoixintime.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors text-purple-400 hover:text-purple-300">
                lavoixintime.netlify.app
              </a>{" "}
              et des services proposés par La Voix Intime.
            </p>
            <p className="text-gray-300">
              L'utilisation du <strong className="text-purple-300">site</strong>{" "}
              et des services implique l'acceptation pleine et entière des
              présentes conditions générales d'utilisation. Si vous n'acceptez
              pas ces conditions, veuillez ne pas utiliser le{" "}
              <strong className="text-purple-300">site</strong>.
            </p>
            <p className="text-gray-300">
              La Voix Intime se réserve le droit de modifier ces conditions à
              tout moment. Les modifications prendront effet dès leur
              publication sur le{" "}
              <strong className="text-purple-300">site</strong>.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Acceptation des Conditions
            </h2>
            <p className="text-gray-300 mb-4">
              L'utilisation du <strong className="text-purple-300">site</strong>{" "}
              et des services implique l'acceptation pleine et entière des
              présentes conditions générales d'utilisation. Si vous n'acceptez
              pas ces conditions, veuillez ne pas utiliser le{" "}
              <strong className="text-purple-300">site</strong>.
            </p>
            <p className="text-gray-300">
              La Voix Intime se réserve le droit de modifier ces conditions à
              tout moment. Les modifications prendront effet dès leur
              publication sur le{" "}
              <strong className="text-purple-300">site</strong>.
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Description des Services
            </h2>
            <p className="text-gray-300 mb-4">
              La Voix Intime propose des services de divination et de tarologie,
              notamment :
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2 ml-4">
              <li>Consultations de divination par téléphone</li>
              <li>Lectures de tarot</li>
              <li>Tirages gratuits en ligne</li>
              <li>Conseils personnalisés</li>
              <li>Services de divination</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Ces services sont proposés à titre de divertissement et de
              développement personnel. Ils ne constituent en aucun cas une
              consultation médicale, psychologique ou juridique.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Utilisation du Site
            </h2>
            <p className="text-gray-300 mb-4">
              Vous vous engagez à utiliser le{" "}
              <strong className="text-purple-300">site</strong> de manière
              responsable et à respecter les règles suivantes :
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2 ml-4">
              <li>
                Ne pas utiliser le{" "}
                <strong className="text-purple-300">site</strong> à des fins
                illégales ou frauduleuses
              </li>
              <li>
                Ne pas tenter d'accéder à des zones sécurisées du{" "}
                <strong className="text-purple-300">site</strong>
              </li>
              <li>
                Ne pas perturber le fonctionnement du{" "}
                <strong className="text-purple-300">site</strong>
              </li>
              <li>Respecter les droits de propriété intellectuelle</li>
              <li>Ne pas transmettre de virus ou de logiciels malveillants</li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Réservation et Paiement
            </h2>
            <p className="text-gray-300 mb-4">
              Pour réserver une consultation, vous devez :
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2 ml-4">
              <li>
                Utiliser le système de réservation{" "}
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors text-purple-400 hover:text-purple-300">
                  Calendly
                </a>{" "}
                intégré au <strong className="text-purple-300">site</strong>
              </li>
              <li>Choisir un créneau disponible dans le calendrier</li>
              <li>
                Fournir vos informations de contact (nom, date de naissance,
                email, téléphone)
              </li>
              <li>
                Effectuer le paiement via{" "}
                <a
                  href="https://www.paypal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors text-purple-400 hover:text-purple-300">
                  PayPal
                </a>{" "}
                avant la consultation
              </li>
              <li>Confirmer votre réservation</li>
            </ul>
            <p className="text-gray-300 mt-4">
              <strong>Paiement :</strong> Le paiement s'effectue exclusivement
              via{" "}
              <a
                href="https://www.paypal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors text-purple-400 hover:text-purple-300">
                PayPal
              </a>{" "}
              pour garantir la sécurité de vos transactions. Aucune donnée
              bancaire n'est stockée sur notre{" "}
              <strong className="text-purple-300">site</strong>.
            </p>
          </div>

          {/* Section 6 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Confidentialité et Données Personnelles
            </h2>
            <p className="text-gray-300 mb-4">
              La protection de vos données personnelles est importante pour
              nous. Nous nous engageons à :
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2 ml-4">
              <li>
                Collecter uniquement les données nécessaires à la réservation
              </li>
              <li>Protéger vos informations personnelles</li>
              <li>Ne pas vendre vos données à des tiers</li>
              <li>
                Respecter vos droits d'accès, de modification et de suppression
              </li>
              <li>
                Utiliser{" "}
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors text-purple-400 hover:text-purple-300">
                  Calendly
                </a>{" "}
                et{" "}
                <a
                  href="https://www.paypal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors text-purple-400 hover:text-purple-300">
                  PayPal
                </a>{" "}
                conformément à leurs politiques de confidentialité
              </li>
            </ul>
            <p className="text-gray-300 mt-4">
              Pour plus d'informations, consultez notre politique de
              confidentialité.
            </p>
          </div>

          {/* Section 7 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Limitation de Responsabilité
            </h2>
            <p className="text-gray-300 mb-4">
              La Voix Intime s'efforce de fournir des informations et des
              services de qualité, mais ne peut garantir :
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2 ml-4">
              <li>L'exactitude absolue des prédictions</li>
              <li>
                La disponibilité permanente du{" "}
                <strong className="text-purple-300">site</strong>, de{" "}
                <a
                  href="https://www.paypal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors text-purple-400 hover:text-purple-300">
                  PayPal
                </a>{" "}
                ou de{" "}
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors text-purple-400 hover:text-purple-300">
                  Calendly
                </a>
              </li>
              <li>L'absence d'erreurs techniques</li>
              <li>La compatibilité avec tous les navigateurs</li>
              <li>
                Le bon fonctionnement de{" "}
                <a
                  href="https://www.paypal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors text-purple-400 hover:text-purple-300">
                  PayPal
                </a>{" "}
                et{" "}
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors text-purple-400 hover:text-purple-300">
                  Calendly
                </a>{" "}
                <span className="font-bold text-purple-300 italic">
                  (hors de notre contrôle)
                </span>
              </li>
            </ul>
          </div>

          {/* Section 8 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Propriété Intellectuelle
            </h2>
            <p className="text-gray-300 mb-4">
              L'ensemble du contenu du{" "}
              <strong className="text-purple-300">site</strong> (textes, images,
              logos, design) est protégé par les droits de propriété
              intellectuelle. Toute reproduction, représentation ou diffusion
              sans autorisation préalable est interdite.
            </p>
            <p className="text-gray-300">
              Les marques et logos utilisés sur le{" "}
              <strong className="text-purple-300">site</strong> sont la
              propriété de leurs détenteurs respectifs.
            </p>
          </div>

          {/* Section 9 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Liens Hypertextes
            </h2>
            <p className="text-gray-300 mb-4">
              Le <strong className="text-purple-300">site</strong> peut contenir
              des liens vers des sites tiers (
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors text-purple-400 hover:text-purple-300">
                Calendly
              </a>
              ,{" "}
              <a
                href="https://www.paypal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors text-purple-400 hover:text-purple-300">
                PayPal
              </a>
              ,{" "}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors text-purple-400 hover:text-purple-300">
                Facebook
              </a>
              ,{" "}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors text-purple-400 hover:text-purple-300">
                Instagram
              </a>
              ,{" "}
              <a
                href="https://www.whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors text-purple-400 hover:text-purple-300">
                WhatsApp
              </a>
              ). La Voix Intime n'exerce aucun contrôle sur ces sites et décline
              toute responsabilité quant à leur contenu.
            </p>
            <p className="text-gray-300">
              La création de liens vers le{" "}
              <strong className="text-purple-300">site</strong> est autorisée
              sous réserve de respecter les droits de propriété intellectuelle
              et d'en faire la demande au propriétaire.
            </p>
          </div>

          {/* Section 10 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Droit Applicable et Juridiction
            </h2>
            <p className="text-gray-300">
              Les présentes conditions sont soumises au droit français. En cas
              de litige, les tribunaux français seront seuls compétents, sous
              réserve des règles de droit impératives.
            </p>
          </div>

          {/* Section 11 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              11. Contact
            </h2>
            <p className="text-gray-300 mb-4">
              Pour toute question concernant ces conditions générales
              d'utilisation, contactez-nous :
            </p>
            <div className="text-gray-300 space-y-2">
              <p>
                <strong>La Voix Intime</strong>
                <br />
                Email :{" "}
                <a
                  href="mailto:lavoixintime@gmail.com"
                  className="underline text-purple-400 hover:text-purple-300">
                  lavoixintime@gmail.com
                </a>
                <br />
                Téléphone :{" "}
                <a
                  href="tel:+33646849352"
                  className="underline text-purple-400 hover:text-purple-300">
                  06 46 84 93 52
                </a>
                <br />
                <a
                  href="https://maps.google.com/?q=[Votre+adresse+complète]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-purple-400 hover:text-purple-300">
                  [Adresse complète]
                </a>
                <em> à venir</em>
              </p>
            </div>
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

export default GeneralConditionsOfUse;
