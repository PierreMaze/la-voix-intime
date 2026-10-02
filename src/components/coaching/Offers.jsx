import { useEffect, useRef, useState } from 'react';
import { TbBriefcase, TbUser } from 'react-icons/tb';
import { SITE } from '../../config/site';
import { WhatsappIcon, ZoomIcon } from '../icons/BrandIcons';
// Visuels des offres : 16:9 sur tablette et ordinateur, 9:16 sur mobile.
const offerImage = (name, alt) => ({ landscape: `/assets/img/offres/${name}-16-9.webp`, portrait: `/assets/img/offres/${name}-9-16.webp`, alt });
const OFFER_IMAGES = {
 inside: offerImage('inside', 'Programme INSIDE, le trésor des 9 portes : 3 mois pour transformer votre vie.'),
 oneToOne: offerImage('one-to-one', 'Coaching INSIDE One-to-One : 1 mois pour trouver vos ressources.'),
 tirage: offerImage('tirage', 'Tirage de cartes : un moment exclusif avec votre inconscient.'),
};
// Contenu des modales : même structure pour les trois offres (étiquette, titre, format, puis action).
const OFFER_DIALOGS = {
 inside: { label: 'Programme INSIDE', title: 'Le Trésor des 9 Portes', meta: <><span>3 mois en petit groupe</span><span>En visio sur <span className="with-icon"><ZoomIcon />Zoom</span></span><span>Groupe sur <span className="with-icon"><WhatsappIcon />WhatsApp</span></span></>, param: 'programme-inside' },
 oneToOne: { label: 'L’accompagnement individuel', title: 'Inside One-to-One', meta: <><span>1 mois de coaching</span><span>En visio sur <span className="with-icon"><WhatsappIcon />WhatsApp</span>, <span className="with-icon"><ZoomIcon />Zoom</span> ou autre</span></>, param: 'coaching-one-to-one' },
 tirage: { label: 'Un autre regard', title: 'Tirage de cartes', meta: <><span>60 minutes</span><span>En visio sur <span className="with-icon"><WhatsappIcon />WhatsApp</span>, <span className="with-icon"><ZoomIcon />Zoom</span> ou autre</span></> },
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
   url.searchParams.set('accompagnement', OFFER_DIALOGS[booking].param);
   return url.toString();
 };
 const closeBooking = () => dialog.current.close();
 const dialogOffer = OFFER_DIALOGS[booking];
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
          <div className="programme-details"><h4>Un parcours pour passer à l’action.</h4><ul className="feature-list"><li><strong>9 séances de coaching en groupe</strong><span>3 rendez-vous par mois pour avancer ensemble</span></li><li><strong>3 séances de coaching individuel</strong><span>Un temps pour vous, chaque mois</span></li><li><strong>Un suivi journalier</strong><span>Pour vous accompagner entre les séances</span></li><li><strong>Un groupe d’échange</strong><span>Un espace d’échange et de ressources partagées</span></li><li><strong>Une communauté</strong><span>Des personnes engagées dans la même démarche, pour échanger et vous inspirer</span></li></ul><div className="card-bottom"><div className="application-note"><strong>Sur candidature uniquement</strong><p>Avant de commencer, je vous propose un questionnaire puis un premier échange, pour vérifier ensemble que cet accompagnement vous correspond.</p></div><button className="button small" onClick={e => openBooking('inside', e)} aria-label="En savoir plus sur le programme INSIDE">En savoir plus</button></div></div>
        </article>
        <div className="secondary-offers">
          <article className="offer-card" id="one-to-one"><OfferImage image={OFFER_IMAGES.oneToOne} /><span className="section-label">L’accompagnement individuel</span><h3>Inside One-to-One</h3><p className="offer-duration">1 mois de coaching · <span>En visio sur <span className="with-icon"><WhatsappIcon />WhatsApp</span>, <span className="with-icon"><ZoomIcon />Zoom</span> ou autre</span></p><p>Un accompagnement individuel et personnalisé pour travailler sur vos problématiques et vos objectifs.</p><ul className="simple-list"><li>4 séances de coaching individuel</li><li>Un suivi journalier</li><li>Une communauté bienveillante pour échanger vos différentes expériences et points de vue</li></ul><div className="card-bottom"><div className="application-note"><strong>Sur candidature uniquement</strong><p>Avant de commencer, je vous propose un questionnaire puis un premier échange, pour vérifier ensemble que cet accompagnement vous correspond.</p></div><button className="button small" onClick={e => openBooking('oneToOne', e)} aria-label="En savoir plus sur le coaching Inside One-to-One">En savoir plus</button></div></article>
          <article className="offer-card" id="tirage"><OfferImage image={OFFER_IMAGES.tirage} /><span className="section-label">Un autre regard</span><h3>Tirage de cartes</h3><p className="offer-duration">60 minutes · <span>En visio sur <span className="with-icon"><WhatsappIcon />WhatsApp</span>, <span className="with-icon"><ZoomIcon />Zoom</span> ou autre</span></p><p>Interroger l’inconscient, changer de regard et faire émerger vos propres réponses.</p><ul className="simple-list"><li>Une consultation de 60 minutes</li><li>Un temps d’exploration de vos ressources intérieures</li><li>À vivre pour vous, ou à offrir en cadeau</li></ul><label className="recording-option"><input type="checkbox" checked={recording} onChange={e => setRecording(e.target.checked)} /><span>Avec enregistrement vidéo MP4<strong> +6 €</strong></span></label>{recording && <p className="recording-note">Réécoute illimitée. Vous serez la seule personne à posséder le fichier : conservez-le, il ne pourra pas vous être renvoyé.</p>}<div className="card-bottom"><div className="price-block" aria-live="polite"><strong className="price-label">Prix de la séance</strong><p className="price">{recording ? '65' : '59'} €{recording && <small>avec enregistrement vidéo MP4</small>}</p></div><button className="button small" onClick={e => openBooking('tirage', e)} aria-label="En savoir plus sur le tirage de cartes">En savoir plus</button></div></article>
        </div>
      </section>

<dialog ref={dialog} className="booking-dialog" aria-labelledby="booking-title" onClose={() => { if (dialog.current.open) return; setBooking(''); trigger.current?.focus(); }} onClick={event => { if (event.target === event.currentTarget) { const rect = event.currentTarget.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeBooking(); } }}>
 <button className="dialog-close" aria-label="Fermer" onClick={closeBooking}>×</button>
 {dialogOffer && <><p className="section-label">{dialogOffer.label}</p><h2 id="booking-title">{dialogOffer.title}</h2><p className="booking-meta">{dialogOffer.meta}</p></>}
 {booking === 'tirage' ? <>
   <p>Contactez Frédérique pour convenir de votre séance{recording ? ' et préciser que vous souhaitez l’enregistrement' : ''}.</p>
   <div className="price-block"><strong className="price-label">Prix de la séance</strong><p className="booking-price">{recording ? '65' : '59'} €{recording && <small>avec enregistrement vidéo MP4</small>}</p></div>
   <div className="booking-choice-list"><a className="button" href="tel:+33646849352">Appeler le 06 46 84 93 52</a><a className="button outline" href={`mailto:lavoixintime@gmail.com?subject=${encodeURIComponent('Réservation — Tirage de cartes' + (recording ? ' avec enregistrement MP4' : ''))}`}>Réserver par email</a></div>
   <p className="booking-note">Paiement par virement bancaire : un IBAN vous sera transmis pour le règlement.</p>
 </> : dialogOffer && <>
   <h3 className="booking-subtitle">Sur candidature uniquement</h3>
   <ol className="application-steps"><li><strong>Le questionnaire</strong><span>Quelques questions pour mieux vous connaître.</span></li><li><strong>Un premier échange sur <span className="with-icon"><ZoomIcon />Zoom</span></strong><span>De 30 à 60 minutes, pour parler de vos besoins et de vos objectifs. Vous choisissez votre créneau à la fin du questionnaire.</span></li><li><strong>On décide ensemble</strong><span>À l’issue de notre échange, nous voyons ensemble si cet accompagnement vous correspond.</span></li></ol>
   <p>Commencez par le questionnaire adapté à votre statut.</p>
   <div className="booking-choice-list"><a className="button" href={getBookingUrl(SITE.professionalBookingUrl)} target="_blank" rel="noopener noreferrer" aria-label="Candidater en tant que professionnel — ouvre le questionnaire Tally dans un nouvel onglet"><TbBriefcase aria-hidden="true" />Candidater en tant que professionnel</a><a className="button outline" href={getBookingUrl(SITE.privateBookingUrl)} target="_blank" rel="noopener noreferrer" aria-label="Candidater en tant que particulier — ouvre le questionnaire Tally dans un nouvel onglet"><TbUser aria-hidden="true" />Candidater en tant que particulier</a></div>
   <p className="booking-note">Le questionnaire s’ouvre sur Tally, dans un nouvel onglet.</p>
 </>}
 </dialog></>; }
