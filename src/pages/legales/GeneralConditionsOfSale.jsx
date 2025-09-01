import { useEffect } from "react";
import { Link } from "react-router-dom";

const GeneralConditionsOfSale = () => {
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
          <h1 className="text-xl font-bold text-white lg:text-4xl mb-4">
            Conditions Générales de Vente
          </h1>
          <p className="text-gray-300">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>

        <div className="space-y-8">
          {/* Section 1 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              1. Préambule
            </h2>
            <div className="p-4 border rounded-lg bg-purple-500/10 border-purple-500/20 mb-4">
              <p className="text-gray-300">
                <strong>La Voix Intime</strong>
                <br />
                Frédérique CAIGNARD
                <br />
                <a
                  href="https://maps.google.com/?q=[Votre+adresse+complète]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors text-purple-400 hover:text-purple-300">
                  [Adresse complète]
                </a>
                <em> à venir</em>
                <br />
                Téléphone :{" "}
                <a
                  href="tel:+33646849352"
                  className="underline transition-colors text-purple-400 hover:text-purple-300">
                  06 46 84 93 52
                </a>
                <br />
                Email :{" "}
                <a
                  href="mailto:lavoixintime@gmail.com"
                  className="underline transition-colors text-purple-400 hover:text-purple-300">
                  lavoixintime@gmail.com
                </a>
                <br />
                SIRET : [Numéro SIRET]<em> à venir</em>
              </p>
            </div>
            <p className="text-gray-300">
              Les présentes conditions générales de vente (CGV) s'appliquent à
              toutes les prestations de services conclues par La Voix Intime
              auprès de ses clients, quelles que soient les clauses pouvant
              figurer sur les documents du client.
            </p>
          </div>

          {/* Section 2 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              2. Services Proposés
            </h2>
            <p className="text-gray-300 mb-4">
              La Voix Intime propose les services suivants :
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2 ml-4">
              <li>
                Consultations de divination par présentiel ou{" "}
                <a
                  href="https://www.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors text-purple-400 hover:text-purple-300">
                  WhatsApp
                </a>
              </li>
              <li>Lectures des tirages</li>
              <li>Conseils en développement personnel</li>
              <li>
                Enregistrement du tirage via WhatsApp ou dictaphone puis
                converti en MP3
              </li>
              <li>Tirages gratuits en ligne</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Ces services sont proposés à titre de développement personnel. Ils
              ne constituent en aucun cas une consultation médicale,
              psychologique ou juridique.
            </p>
          </div>

          {/* Section 3 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              3. Tarifs et Modalités de Paiement
            </h2>
            <p className="text-gray-300 mb-4">
              Les tarifs de nos services sont exprimés en euros et hors taxes.
              La TVA n'est pas applicable (BIC - Bénéfices Industriels et
              Commerciaux).
            </p>
            <p className="text-gray-300 mb-4">
              Les modalités de paiement acceptées sont :
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2 ml-4">
              <li>
                Paiement par{" "}
                <a
                  href="https://www.paypal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors text-purple-400 hover:text-purple-300">
                  PayPal
                </a>{" "}
                (exclusivement)
              </li>
              <li>
                Cartes bancaires via{" "}
                <a
                  href="https://www.paypal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors text-purple-400 hover:text-purple-300">
                  PayPal
                </a>
              </li>
              <li>
                Compte{" "}
                <a
                  href="https://www.paypal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors text-purple-400 hover:text-purple-300">
                  PayPal
                </a>{" "}
                existant
              </li>
            </ul>
            <p className="text-gray-300 mt-4">
              <strong>Sécurité :</strong> Le paiement s'effectue via{" "}
              <a
                href="https://www.paypal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors text-purple-400 hover:text-purple-300">
                PayPal
              </a>{" "}
              pour garantir la sécurité de vos transactions. Aucune donnée
              bancaire n'est stockée sur notre{" "}
              <strong className="text-purple-300">site</strong>. Le paiement est
              exigible immédiatement à la réservation.
            </p>
          </div>

          {/* Section 4 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              4. Réservation et Annulation
            </h2>
            <p className="text-gray-300 mb-4">
              <strong>Réservation :</strong> Les consultations se réservent
              exclusivement via le système{" "}
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors text-purple-400 hover:text-purple-300">
                Calendly
              </a>{" "}
              intégré au <strong className="text-purple-300">site</strong>. Vous
              devez :
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Choisir un créneau disponible dans le calendrier</li>
              <li>
                Remplir le formulaire avec vos informations de contact (Nom,
                Date de naissance, Email, Téléphone)
              </li>
              <li>
                Effectuer le paiement via{" "}
                <a
                  href="https://www.paypal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors text-purple-400 hover:text-purple-300">
                  PayPal
                </a>
              </li>
              <li>Confirmer votre réservation</li>
            </ul>
            <p className="text-gray-300 mb-4">
              <strong>Annulation :</strong> Toute annulation doit être effectuée
              au minimum 24 heures avant la consultation prévue via{" "}
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors text-purple-400 hover:text-purple-300">
                Calendly
              </a>{" "}
              ou par{" "}
              <a
                href="mailto:lavoixintime@gmail.com"
                className="underline text-purple-400 hover:text-purple-300">
                email
              </a>
              . En cas d'annulation tardive, des frais pourront être retenus.
            </p>
            <p className="text-gray-300">
              <strong>Report :</strong> En cas de force majeure, La Voix Intime
              se réserve le droit de reporter ou d'annuler une consultation.
              Dans ce cas, un nouveau rendez-vous vous sera proposé.
            </p>
          </div>

          {/* Section 5 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              5. Déroulement des Consultations
            </h2>
            <p className="text-gray-300 mb-4">
              Les consultations se déroulent dans un cadre confidentiel et
              bienveillant :
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2 ml-4">
              <li>Durée : La duré de la consultation est de 60 minutes</li>
              <li>
                Support : Présentiel ou{" "}
                <a
                  href="https://www.whatsapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline transition-colors text-purple-400 hover:text-purple-300">
                  WhatsApp
                </a>
              </li>
              <li>
                Confidentialité : toutes les informations partagées restent
                strictement confidentielles
              </li>
              <li>Approche : bienveillante et non-jugeante</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              6. Garanties et Responsabilité
            </h2>
            <p className="text-gray-300 mb-4">La Voix Intime s'engage à :</p>
            <ul className="text-gray-300 list-disc list-inside space-y-2 ml-4">
              <li>Fournir des services de qualité professionnelle</li>
              <li>Respecter la confidentialité des informations partagées</li>
              <li>Être ponctuelle aux rendez-vous</li>
              <li>Maintenir une approche éthique et bienveillante</li>
            </ul>
            <p className="text-gray-300 mt-4">
              <strong>Limitation de responsabilité :</strong> Les services de
              divination sont proposés à titre de divertissement et de
              développement personnel. La Voix Intime ne peut être tenue
              responsable des décisions prises par le client sur la base des
              consultations.
            </p>
          </div>

          {/* Section 7 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              7. Protection des Données
            </h2>
            <p className="text-gray-300 mb-4">
              Conformément au RGPD, vos données personnelles sont collectées et
              traitées uniquement dans le cadre de nos services. Vous disposez
              des droits suivants :
            </p>
            <ul className="text-gray-300 list-disc list-inside space-y-2 ml-4">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la portabilité</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p className="text-gray-300 mt-4">
              Pour exercer ces droits, contactez-nous à{" "}
              <a
                href="mailto:lavoixintime@gmail.com"
                className="underline transition-colors text-purple-400 hover:text-purple-300">
                lavoixintime@gmail.com
              </a>
            </p>
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
                  • Code de la consommation :{" "}
                  <a
                    href="https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006069565/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-purple-400 hover:text-purple-300">
                    Articles L111-1 et suivants
                  </a>
                </li>
                <li>
                  • Code civil :{" "}
                  <a
                    href="https://www.legifrance.gouv.fr/codes/id/LEGITEXT000006070721/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-purple-400 hover:text-purple-300">
                    Articles 1101 et suivants
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Section 8 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              8. Droit de Rétractation
            </h2>
            <p className="text-gray-300 mb-4">
              Conformément à la législation en vigueur, vous disposez d'un droit
              de rétractation de 14 jours à compter de la conclusion du contrat.
            </p>
            <p className="text-gray-300">
              Ce droit ne s'applique pas aux services entièrement exécutés avant
              la fin du délai de rétractation et dont l'exécution a commencé
              après accord préalable exprès du consommateur.
            </p>
          </div>

          {/* Section 9 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              9. Litiges et Médiation
            </h2>
            <p className="text-gray-300 mb-4">
              En cas de litige, nous vous invitons à nous contacter en priorité
              pour tenter de trouver une solution amiable.
            </p>
            <p className="text-gray-300">
              Si le litige persiste, vous pouvez faire appel à un médiateur de
              la consommation. Les litiges relèvent de la compétence des
              tribunaux français.
            </p>
          </div>

          {/* Section 10 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              10. Droit Applicable
            </h2>
            <p className="text-gray-300">
              Les présentes conditions générales de vente sont soumises au droit
              français. En cas de litige, les tribunaux français seront seuls
              compétents.
            </p>
          </div>

          {/* Section 11 */}
          <div className="p-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            <h2 className="text-2xl font-semibold text-white mb-4">
              11. Contact
            </h2>
            <p className="text-gray-300 mb-4">
              Pour toute question concernant ces conditions générales de vente,
              contactez-nous :
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

export default GeneralConditionsOfSale;
