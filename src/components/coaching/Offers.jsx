import { useEffect, useRef, useState } from 'react';
import { TbBriefcase, TbUser } from 'react-icons/tb';
import { SITE } from '../../config/site';
import { WhatsappIcon, ZoomIcon } from '../icons/BrandIcons';
// Visuels des offres : 16:9 sur tablette et ordinateur, 9:16 sur mobile.
// One-to-One et Tirage reprennent provisoirement les visuels INSIDE.
const INSIDE_LANDSCAPE = 'https://lavoixintime-programeinside.fr/images/inside-horizontal.png';
const INSIDE_PORTRAIT = 'https://lavoixintime-programeinside.fr/images/inside-vertical.png';
const INSIDE_ALT = 'INSIDE, le Trésor des 9 Portes : neuf portes ouvertes sur des paysages lumineux.';
const OFFER_IMAGES = {
 inside: { landscape: INSIDE_LANDSCAPE, portrait: INSIDE_PORTRAIT, alt: INSIDE_ALT },
 oneToOne: { landscape: INSIDE_LANDSCAPE, portrait: INSIDE_PORTRAIT, alt: INSIDE_ALT },
 tirage: { landscape: INSIDE_LANDSCAPE, portrait: INSIDE_PORTRAIT, alt: INSIDE_ALT },
};
const OfferImage = ({ image }) => <picture className="offer-image"><source media="(max-width: 599px)" srcSet={image.portrait} /><img src={image.landscape} alt={image.alt} loading="lazy" decoding="async" /></picture>;
export default function Offers() {
 const [recording,setRecording] = useState(false);
 const [booking,setBooking] = useState('');
 const dialog = useRef(null);
 const trigger = useRef(null);
 const openBooking = (offer,event) => {
   trigger.current = event.currentTarget;
   setBooking(offer);
   dialog.current.showModal();
 };
 const getBookingUrl = baseUrl => {
   const url = new URL(baseUrl);
   url.searchParams.set('accompagnement', booking === 'Programme INSIDE' ? 'programme-inside' : 'coaching-one-to-one');
   return url.toString();
 };
 const closeBooking = () => dialog.current.close();
 useEffect(() => {
   if (!booking) return;
   const previous = document.body.style.overflow;
   document.body.style.overflow = 'hidden';
   return () => { document.body.style.overflow = previous; };
 },[booking]);
return <>      <section className="offers-section site-container" id="accompagnements">
        <div className="section-heading"><div><p className="section-label">Mes accompagnements</p><h2>Trois façons de faire <br />le chemin ensemble.</h2></div><p>Un parcours en groupe, un espace rien qu’à vous,<br className="desktop-break" /> ou un premier éclairage. À chacun son point de départ.</p></div>
        <article className="programme" id="programme">
          <div className="programme-intro"><OfferImage image={OFFER_IMAGES.inside} /><span className="tag">3 mois d’accompagnement</span><h3>INSIDE</h3><p className="programme-subtitle">Le Trésor des 9 Portes</p><p>Un accompagnement intensif pour transformer en profondeur votre façon de vous percevoir et d’agir.</p><div className="programme-bottom"><span>En petit groupe</span><span>En visio sur <span className="with-icon"><ZoomIcon />Zoom</span></span><span>Groupe sur <span className="with-icon"><WhatsappIcon />WhatsApp</span></span></div></div>
          <div className="programme-details"><h4>Un parcours pour passer à l’action.</h4><ul className="feature-list"><li><strong>9 séances de coaching en groupe</strong><span>3 rendez-vous par mois pour avancer ensemble</span></li><li><strong>3 séances de coaching individuel</strong><span>Un temps pour vous, chaque mois</span></li><li><strong>Un suivi journalier sur WhatsApp</strong><span>Pour vous accompagner entre les séances</span></li><li><strong>Un groupe WhatsApp</strong><span>Un espace d’échange et de ressources partagées</span></li></ul><div className="application-note"><strong>Sur candidature uniquement</strong><p>Avant de commencer, je vous propose un questionnaire puis un premier échange, pour vérifier ensemble que cet accompagnement vous correspond.</p></div><div className="offer-action"><button className="button small" onClick={e => openBooking('Programme INSIDE', e)}>Réserver un appel</button></div></div>
        </article>
        <div className="secondary-offers">
          <article className="offer-card" id="one-to-one"><OfferImage image={OFFER_IMAGES.oneToOne} /><span className="section-label">L’accompagnement individuel</span><h3>Inside One-to-One</h3><p className="offer-duration">1 mois de coaching · <span>En visio sur <span className="with-icon"><WhatsappIcon />WhatsApp</span></span></p><p>Un accompagnement individuel et personnalisé pour travailler sur vos problématiques et vos objectifs.</p><ul className="simple-list"><li>4 séances de coaching individuel</li><li>Un suivi journalier sur WhatsApp</li><li>Un espace consacré à vos objectifs</li></ul><div className="card-bottom"><div className="application-note"><strong>Sur candidature uniquement</strong><p>Avant de commencer, je vous propose un questionnaire puis un premier échange, pour vérifier ensemble que cet accompagnement vous correspond.</p></div><button className="button small" onClick={e => openBooking('Coaching Inside One-to-One', e)}>Réserver un appel</button></div></article>
          <article className="offer-card" id="tirage"><OfferImage image={OFFER_IMAGES.tirage} /><span className="section-label">Un autre regard</span><h3>Tirage de cartes</h3><p className="offer-duration">60 minutes · <span>En visio sur <span className="with-icon"><WhatsappIcon />WhatsApp</span></span></p><p>Interroger l’inconscient, changer de regard et faire émerger vos propres réponses.</p><ul className="simple-list"><li>Une consultation de 60 minutes</li><li>Un temps d’exploration de vos ressources intérieures</li><li>À vivre pour vous, ou à offrir en cadeau</li></ul><label className="recording-option"><input type="checkbox" checked={recording} onChange={e => setRecording(e.target.checked)} /><span>Avec enregistrement vidéo MP4<strong> +6 €</strong></span></label>{recording && <p className="recording-note">Réécoute illimitée. Vous serez la seule personne à posséder le fichier : conservez-le, il ne pourra pas vous être renvoyé.</p>}<div className="card-bottom"><p className="price" aria-live="polite">{recording ? '65' : '59'} € <small>la séance{recording ? ' avec enregistrement' : ''}</small></p><button className="button small" onClick={e => openBooking('Tirage de cartes', e)}>Réserver le tirage</button><p className="bank-note">Paiement par virement bancaire. <br />Un IBAN vous sera transmis lors de votre réservation.</p></div></article>
        </div>
      </section>

<dialog ref={dialog} className="booking-dialog" aria-labelledby="booking-title" onClose={() => { setBooking(''); trigger.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeBooking(); } }}>
 <button className="dialog-close" aria-label="Fermer la réservation" onClick={closeBooking}>×</button>
 {booking === 'Tirage de cartes' ? <><p className="section-label">Votre réservation</p><h2 id="booking-title">{booking}</h2></> : <h2 id="booking-title">Votre candidature</h2>}
 {booking === 'Tirage de cartes' ? <><p>60 minutes en visio sur WhatsApp{recording ? ', avec enregistrement vidéo MP4' : ''}. {recording ? '65' : '59'} €.</p><p>Contactez Frédérique pour convenir de votre séance{recording ? ' et préciser que vous souhaitez l’enregistrement' : ''}. Un IBAN vous sera transmis pour le règlement.</p></> : <><ol className="application-steps"><li><strong>Le questionnaire</strong><span>Quelques questions pour mieux vous connaître.</span></li><li><strong>Un premier échange sur <span className="with-icon"><ZoomIcon />Zoom</span></strong><span>De 30 à 60 minutes, pour parler de vos besoins et de vos objectifs. Vous choisissez votre créneau à la fin du questionnaire.</span></li><li><strong>On décide ensemble</strong><span>À l’issue de notre échange, nous voyons ensemble si cet accompagnement vous correspond.</span></li></ol><p>Choisissez le questionnaire adapté à votre statut.</p><div className="booking-choice-list"><a className="button" href={getBookingUrl(SITE.professionalBookingUrl)} target="_blank" rel="noopener noreferrer" aria-label="Professionnel — ouvrir le questionnaire de candidature Tally dans un nouvel onglet"><TbBriefcase aria-hidden="true" />Professionnel</a><a className="button outline" href={getBookingUrl(SITE.privateBookingUrl)} target="_blank" rel="noopener noreferrer" aria-label="Particulier — ouvrir le questionnaire de candidature Tally dans un nouvel onglet"><TbUser aria-hidden="true" />Particulier</a></div><p className="booking-note">Les questionnaires s’ouvrent sur Tally, dans un nouvel onglet.</p></>}
 {booking === 'Tirage de cartes' && <><a className="button" href="tel:+33646849352">Appeler le 06 46 84 93 52</a><a className="button outline" href={`mailto:lavoixintime@gmail.com?subject=${encodeURIComponent('Réservation — ' + booking + (recording ? ' avec enregistrement MP4' : ''))}`}>Réserver par email</a></>}
 </dialog></>; }
