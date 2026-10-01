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
          <Link aria-label="Retour à l’accueil" to="/"
            className="relative inline-flex items-center px-4 py-3 text-base font-medium text-white border rounded-lg shadow-md transition-all duration-300 transform group bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 hover:shadow-lg hover:-translate-y-0.5 border-violet-500/30 hover:border-violet-400/50"
          >
            <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 bg-gradient-to-r from-violet-400/20 to-violet-600/20 group-hover:opacity-100"></div>
            <svg aria-hidden="true" focusable="false"
              className="w-5 h-5 transition-transform duration-300 mr-2 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
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
          <h1 className="text-xl font-bold text-white lg:text-4xl mb-4">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-white">
            Dernière mise à jour : 1er octobre 2026
          </p>
        </div>

        <div className="space-y-8">
          {/* Section 1 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">1. Objet</h2>
            <p className="text-white mb-4">
              Les présentes conditions générales d'utilisation (CGU) régissent
              l'utilisation du site{" "}
              <a
                href="https://lavoixintime.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors text-violet-400 hover:text-violet-300"
              >
                lavoixintime.com
              </a>{" "}
              et des services proposés par La Voix Intime.
            </p>
            <p className="text-white">
              L'utilisation du <strong className="text-violet-300">site</strong>{" "}
              et des services implique l'acceptation pleine et entière des
              présentes conditions générales d'utilisation. Si vous n'acceptez
              pas ces conditions, veuillez ne pas utiliser le{" "}
              <strong className="text-violet-300">site</strong>.
            </p>
            <p className="text-white">
              La Voix Intime se réserve le droit de modifier ces conditions à
              tout moment. Les modifications prendront effet dès leur
              publication sur le{" "}
              <strong className="text-violet-300">site</strong>.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Acceptation des Conditions
            </h2>
            <p className="text-white mb-4">
              L'utilisation du <strong className="text-violet-300">site</strong>{" "}
              et des services implique l'acceptation pleine et entière des
              présentes conditions générales d'utilisation. Si vous n'acceptez
              pas ces conditions, veuillez ne pas utiliser le{" "}
              <strong className="text-violet-300">site</strong>.
            </p>
            <p className="text-white">
              La Voix Intime se réserve le droit de modifier ces conditions à
              tout moment. Les modifications prendront effet dès leur
              publication sur le{" "}
              <strong className="text-violet-300">site</strong>.
            </p>
          </div>

          {/* Section 3 */}
<div className="p-8 border rounded-2xl bg-white/5 border-white/10"><h2 className="text-2xl mb-4">3. Description des services</h2><p>La Voix Intime propose des accompagnements de coaching en ligne fondés sur la méthode Inside et l’exploration des ressources intérieures. Les cartes sont utilisées comme support de réflexion et de dialogue pour explorer une situation, changer de regard et faire émerger ses propres réponses. La personne accompagnée reste libre de ses choix et de ses décisions.</p><ul className="list-disc ml-4 space-y-2"><li>INSIDE — Le Trésor des 9 Portes : 3 mois, 9 séances en groupe sur Zoom et 3 séances individuelles, suivi journalier et groupe WhatsApp.</li><li>Inside One-to-One : 1 mois, 4 séances individuelles en visio sur WhatsApp et suivi journalier.</li><li>Séance individuelle de 60 minutes avec les cartes comme support d’exploration, en visio sur WhatsApp, avec enregistrement vidéo MP4 en option.</li><li>Contenus collectifs gratuits sur la chaîne YouTube, utilisant les cartes comme support de réflexion personnelle.</li></ul></div>

{/* Section 4 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Utilisation du Site
            </h2>
            <p className="text-white mb-4">
              Vous vous engagez à utiliser le{" "}
              <strong className="text-violet-300">site</strong> de manière
              responsable et à respecter les règles suivantes :
            </p>
            <ul className="text-white list-disc list-inside space-y-2 ml-4">
              <li>
                Ne pas utiliser le{" "}
                <strong className="text-violet-300">site</strong> à des fins
                illégales ou frauduleuses
              </li>
              <li>
                Ne pas tenter d'accéder à des zones sécurisées du{" "}
                <strong className="text-violet-300">site</strong>
              </li>
              <li>
                Ne pas perturber le fonctionnement du{" "}
                <strong className="text-violet-300">site</strong>
              </li>
              <li>Respecter les droits de propriété intellectuelle</li>
              <li>Ne pas transmettre de virus ou de logiciels malveillants</li>
            </ul>
          </div>

          {/* Section 5 */}
<div className="p-8 border rounded-2xl bg-white/5 border-white/10"><h2 className="text-2xl mb-4">5. Réservation et paiement</h2><p>Pour réserver, contactez Frédérique Caignard par téléphone au <a href="tel:+33646849352">06 46 84 93 52</a> ou par email à <a href="mailto:lavoixintime@gmail.com">lavoixintime@gmail.com</a>. Le choix de l’accompagnement, ses modalités et le rendez-vous sont confirmés lors de cet échange.</p><p>Le prix et les modalités de règlement de l’accompagnement sont communiqués avant la confirmation de la réservation.</p><p>La séance avec les cartes se règle par virement bancaire. Un IBAN vous est transmis lors de votre réservation. Les modalités des coachings sont convenues directement avec Frédérique. Aucun paiement bancaire n’est collecté sur ce site.</p></div>

{/* Section 6 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Confidentialité et Données Personnelles
            </h2>
            <p className="text-white mb-4">
              La protection de vos données personnelles est importante pour
              nous. Nous nous engageons à :
            </p>
            <ul className="text-white list-disc list-inside space-y-2 ml-4">
              <li>
                Collecter uniquement les données nécessaires à la réservation
              </li>
              <li>Protéger vos informations personnelles</li>
              <li>Ne pas vendre vos données à des tiers</li>
              <li>
                Respecter vos droits d'accès, de modification et de suppression
              </li>

            </ul>
            <p className="text-white mt-4">
              Pour plus d'informations, consultez notre politique de
              confidentialité.
            </p>
          </div>

          {/* Section 7 */}
<div className="p-8 border rounded-2xl bg-white/5 border-white/10"><h2 className="text-2xl mb-4">7. Disponibilité du site</h2><p>La Voix Intime s’efforce de maintenir le site accessible. Des interruptions ou erreurs techniques peuvent survenir. En cas de difficulté, vous pouvez contacter Frédérique par téléphone ou email.</p></div>

{/* Section 8 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Propriété Intellectuelle
            </h2>
            <p className="text-white mb-4">
              L'ensemble du contenu du{" "}
              <strong className="text-violet-300">site</strong> (textes, images,
              logos, design) est protégé par les droits de propriété
              intellectuelle. Toute reproduction, représentation ou diffusion
              sans autorisation préalable est interdite.
            </p>
            <p className="text-white">
              Les marques et logos utilisés sur le{" "}
              <strong className="text-violet-300">site</strong> sont la
              propriété de leurs détenteurs respectifs.
            </p>
          </div>

          {/* Section 9 */}
<div className="p-8 border rounded-2xl bg-white/5 border-white/10"><h2 className="text-2xl mb-4">9. Liens hypertextes</h2><p>Le site contient des liens vers des services externes, notamment YouTube et les réseaux sociaux. Lorsque vous les consultez, leurs conditions d’utilisation et politiques de confidentialité s’appliquent.</p></div>

{/* Section 10 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Droit Applicable et Juridiction
            </h2>
            <p className="text-white">
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
            <p className="text-white mb-4">
              Pour toute question concernant ces conditions générales
              d'utilisation, contactez-nous :
            </p>
            <div className="text-white space-y-2">
              <p>
                <strong>La Voix Intime</strong>
                <br />
                Email :{" "}
                <a
                  href="mailto:lavoixintime@gmail.com"
                  className="underline text-violet-400 hover:text-violet-300"
                >
                  lavoixintime@gmail.com
                </a>
                <br />
                Téléphone :{" "}
                <a
                  href="tel:+33646849352"
                  className="underline text-violet-400 hover:text-violet-300"
                >
                  06 46 84 93 52
                </a>
                <br />
                <a
                  href="https://www.google.fr/maps/place/33120+Arcachon/@44.6515203,-1.3194646,12z/data=!3m1!4b1!4m6!3m5!1s0xd549ef8c86711e3:0x40665174816f060!8m2!3d44.652297!4d-1.1785016!16zL20vMDVubTQ2?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-violet-400 hover:text-violet-300"
                >
                  Bassin d'Arcachon, FRANCE
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bouton de retour en bas de page */}
        <div className="text-center mt-16 mb-8">
          <Link aria-label="Retour à l’accueil" to="/"
            className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white border rounded-xl shadow-lg transition-all duration-300 transform group bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 hover:shadow-2xl hover:-translate-y-1 border-violet-500/30 hover:border-violet-400/50"
          >
            <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 bg-gradient-to-r from-violet-400/20 to-violet-600/20 group-hover:opacity-100"></div>
            <svg aria-hidden="true" focusable="false"
              className="w-6 h-6 transition-transform duration-300 mr-3 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
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
