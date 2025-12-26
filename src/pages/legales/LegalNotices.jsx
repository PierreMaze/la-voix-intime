import { useEffect } from "react";
import { Link } from "react-router-dom";

const LegalNotices = () => {
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
            className="relative inline-flex items-center px-4 py-3 text-base font-medium text-white border rounded-lg shadow-md transition-all duration-300 transform group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 hover:shadow-lg hover:-translate-y-0.5 border-purple-500/30 hover:border-purple-400/50"
          >
            <div className="absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 bg-gradient-to-r from-purple-400/20 to-purple-600/20 group-hover:opacity-100"></div>
            <svg
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
            Mentions Légales
          </h1>
          <p className="text-white">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>

        <div className="space-y-8">
          {/* Section 1 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Éditeur du Site
            </h2>
            <div className="p-4 border rounded-lg bg-purple-500/10 border-purple-500/20 mb-4">
              <p className="text-white">
                <strong>La Voix Intime</strong>
                <br />
                Fréderique CAIGNARD
                <br />
                <a
                  href="https://www.google.fr/maps/place/33120+Arcachon/@44.6515203,-1.3194646,12z/data=!3m1!4b1!4m6!3m5!1s0xd549ef8c86711e3:0x40665174816f060!8m2!3d44.652297!4d-1.1785016!16zL20vMDVubTQ2?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors text-purple-400 hover:text-purple-300"
                >
                  Bassin d'Arcachon, FRANCE
                </a>
                <br />
                Téléphone :{" "}
                <a
                  href="tel:+33646849352"
                  className="underline transition-colors text-purple-400 hover:text-purple-300"
                >
                  06 46 84 93 52
                </a>
                <br />
                Email :{" "}
                <a
                  href="mailto:lavoixintime@gmail.com"
                  className="underline transition-colors text-purple-400 hover:text-purple-300"
                >
                  lavoixintime@gmail.com
                </a>
                <br />
                SIRET : 898 845 391
              </p>
            </div>
            <p className="text-white">
              Ce <strong className="text-purple-300">site</strong> web est édité
              par La Voix Intime, professionnelle de la divination et de la
              tarologie.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Hébergement
            </h2>
            <p className="text-white mb-4">
              Ce <strong className="text-purple-1 text-purple-300">site</strong>{" "}
              est hébergé par :
            </p>
            <a
              href="https://www.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border rounded-lg transition-all duration-300 bg-purple-500/10 border-purple-500/20 hover:bg-purple-500/20 hover:border-purple-400/40 hover:scale-[1.02]"
            >
              <p className="text-white">
                <strong>Netlify</strong>
                <br />
                2325 3rd Street, Suite 296
                <br />
                San Francisco, CA 94107
                <br />
                États-Unis
                <br />
                Site web :{" "}
                <span className="underline transition-colors text-purple-40">
                  https://www.netlify.com
                </span>
              </p>
            </a>
          </div>

          {/* Section 3 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Propriété Intellectuelle
            </h2>
            <p className="text-white mb-4">
              L'ensemble de ce <strong className="text-purple-300">site</strong>{" "}
              relève de la législation française et internationale sur le droit
              d'auteur et la propriété intellectuelle. Tous les droits de
              reproduction sont réservés, y compris pour les documents
              téléchargeables et les représentations iconographiques et
              photographiques.
            </p>
            <p className="text-white mb-4">
              La reproduction de tout ou partie de ce{" "}
              <strong className="text-purple-300">site</strong> sur un support
              électronique quel qu'il soit est formellement interdite sauf
              autorisation expresse du directeur de la publication.
            </p>
            <p className="text-white">
              Les marques et logos figurant sur le{" "}
              <strong className="text-purple-300">site</strong> sont des marques
              déposées par leurs propriétaires respectifs.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Responsabilité
            </h2>
            <p className="text-white mb-4">
              Les informations contenues sur ce{" "}
              <strong className="text-purple-300">site</strong> sont aussi
              précises que possible et le{" "}
              <strong className="text-purple-300">site</strong> est
              périodiquement remis à jour, mais peut toutefois contenir des
              inexactitudes, des omissions ou des lacunes.
            </p>
            <p className="text-white mb-4">
              Si vous constatez une lacune, erreur ou ce qui parait être un
              dysfonctionnement, merci de bien vouloir le signaler par email à
              l'adresse{" "}
              <a
                href="mailto:lavoixintime@gmail.com"
                className="underline text-purple-400 hover:text-purple-300"
              >
                lavoixintime@gmail.com
              </a>
              .
            </p>
            <p className="text-white">
              La responsabilité de La Voix Intime ne saurait être engagée en cas
              d'erreur ou d'omission dans le contenu de ce{" "}
              <strong className="text-purple-300">site</strong>.
            </p>
          </div>

          {/* Section 5 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Liens Hypertextes
            </h2>
            <p className="text-white mb-4">
              Les liens hypertextes mis en place dans le cadre du présent{" "}
              <strong className="text-purple-300">site </strong> web en
              direction d'autres ressources présentes sur le réseau Internet ne
              sauraient engager la responsabilité de La Voix Intime.
            </p>
            <p className="text-white">
              La Voix Intime n'exerce aucun contrôle sur ces{" "}
              <strong className="text-purple-300">sites</strong> et décline
              toute responsabilité quant à leur contenu.
            </p>
          </div>

          {/* Section 6 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Cookies
            </h2>
            <p className="text-white mb-4">
              Le <strong className="text-purple-300">site</strong> peut-être
              amené à vous demander l'acceptation des cookies pour des besoins
              de statistiques et d'affichage. Un cookie ne nous permet pas de
              vous identifier ; il sert uniquement à enregistrer des
              informations relatives à la navigation de votre ordinateur sur
              notre <strong className="text-purple-300">site</strong>.
            </p>
            <p className="text-white">
              Vous pouvez librement accepter ou refuser les cookies en modifiant
              les paramètres de votre navigateur.
            </p>
          </div>

          {/* Section 7 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Droit Applicable
            </h2>
            <p className="text-white">
              Tout litige en relation avec l'utilisation du{" "}
              <strong className="text-purple-300">site</strong>{" "}
              <a
                href="https://lavoixintime.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors text-purple-400 hover:text-purple-300"
              >
                lavoixintime.com
              </a>{" "}
              est soumis au droit français. En dehors des cas où la loi ne le
              permet pas, il est fait attribution exclusive de juridiction aux
              tribunaux compétents de Gujan-Mestras, France.
            </p>
          </div>

          {/* Section 8 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Protection des Données Personnelles
            </h2>
            <p className="text-white mb-4">
              Conformément aux dispositions de la loi n° 78-17 du 6 janvier 1978
              modifiée, vous disposez d'un droit d'accès, de modification et de
              suppression des données qui vous concernent.
            </p>
            <p className="text-white mb-4">
              Pour exercer ce droit, adressez-vous à :{" "}
              <a
                href="mailto:lavoixintime@gmail.com"
                className="underline text-purple-400 hover:text-purple-300"
              >
                lavoixintime@gmail.com
              </a>
            </p>
            <div className="p-4 border rounded-lg mt-4 bg-purple-500/10 border-purple-500/20">
              <p className="text-sm text-white mb-2">
                <strong>Textes de loi de référence :</strong>
              </p>
              <ul className="text-sm text-white space-y-1">
                <li>
                  • Loi Informatique et Libertés :{" "}
                  <a
                    href="https://www.legifrance.gouv.fr/loda/id/LEGITEXT000006068624/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-purple-400 hover:text-purple-300"
                  >
                    Loi n° 78-17 du 6 janvier 1978
                  </a>
                </li>
                <li>
                  • Règlement Général sur la Protection des Données (RGPD) :{" "}
                  <a
                    href="https://eur-lex.europa.eu/legal-content/FR/TXT/HTML/?uri=CELEX:32016R0679"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-purple-400 hover:text-purple-300"
                  >
                    Règlement (UE) 2016/679
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 9 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Contact
            </h2>
            <p className="text-white mb-4">
              Pour toute question concernant ces mentions légales, vous pouvez
              nous contacter :
            </p>
            <div className="text-white space-y-2">
              <p>
                <strong>La Voix Intime</strong>
                <br />
                Email :{" "}
                <a
                  href="mailto:lavoixintime@gmail.com"
                  className="underline text-purple-400 hover:text-purple-300"
                >
                  lavoixintime@gmail.com
                </a>
                <br />
                Téléphone :{" "}
                <a
                  href="tel:+33646849352"
                  className="underline text-purple-400 hover:text-purple-300"
                >
                  06 46 84 93 52
                </a>
                <br />
                <a
                  href="https://www.google.fr/maps/place/33120+Arcachon/@44.6515203,-1.3194646,12z/data=!3m1!4b1!4m6!3m5!1s0xd549ef8c86711e3:0x40665174816f060!8m2!3d44.652297!4d-1.1785016!16zL20vMDVubTQ2?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-purple-400 hover:text-purple-300"
                >
                  Bassin d'Arcachon, FRANCE
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bouton de retour en bas de page */}
        <div className="text-center mt-16 mb-8">
          <Link
            to="/"
            className="relative inline-flex items-center px-8 py-4 text-lg font-semibold text-white border rounded-xl shadow-lg transition-all duration-300 transform group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 hover:shadow-2xl hover:-translate-y-1 border-purple-500/30 hover:border-purple-400/50"
          >
            <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 bg-gradient-to-r from-purple-400/20 to-purple-600/20 group-hover:opacity-100"></div>
            <svg
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

export default LegalNotices;
