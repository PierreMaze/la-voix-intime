import SocialLinks from '../components/SocialLinks';
import { useRef, useState } from 'react';

import { REVIEWS_DATA } from '../constants/reviews';
import { SITE } from '../config/site';
import './prototype.css';

const insideImage = 'https://lavoixintime-programeinside.fr/images/inside-horizontal.png';
const questions = [
  ['Le programme Inside et le coaching One-to-One sont-ils des formations ?', 'Non. Une formation est de l’information qui vient de l’extérieur. Inside est une connexion à vos ressources intérieures. Ces ressources sont des outils que vous avez déjà utilisés durant votre vie. Elles sont juste en sommeil.'],
  ['Y a-t-il des tirages durant les séances de coaching ?', 'Oui, bien sûr ! C’est un outil indispensable pour vous connecter à vos ressources.'],
  ['Est-ce qu’on vous voit en face lors des coachings ou du programme ?', 'Oui, bien sûr. Il n’y a que sur les tirages que je privilégie la vue des cartes et que je n’apparais pas.'],
  ['Dois-je croire aux tirages que vous effectuez ?', 'Il ne s’agit pas de prédire votre avenir. Les cartes sont un support pour explorer ce qui résonne en vous, changer de regard et faire émerger vos propres réponses.'],
  ['Puis-je poser une question spécifique lors des tirages ?', 'Vous pouvez venir avec une question. Le tirage peut aussi faire émerger une réflexion plus large ou un sujet auquel vous n’aviez pas pensé. Nous prenons le temps d’explorer ce qui fait sens pour vous.'],
  ['Pourquoi ne voit-on que vos mains lors des tirages ?', 'Je privilégie la vue des cartes pour vous permettre de rester concentré sur le tirage et vos ressentis. Pendant le coaching individuel et le programme, nous échangeons face à face en visio.'],
];

function Prototype() {
  const [prices, setPrices] = useState(true);
  const [recording, setRecording] = useState(false);
  const [menu, setMenu] = useState(false);
  const [allReviews, setAllReviews] = useState(false);
  const [booking, setBooking] = useState('');
  const [bookingStep, setBookingStep] = useState('choices');
  const dialog = useRef(null);
  const trigger = useRef(null);
  const openBooking = (offer, event) => {
    trigger.current = event.currentTarget;
    setBooking(offer);
    setBookingStep('choices');
    dialog.current.showModal();
  };
  const closeBooking = () => dialog.current.close();
  const getProfessionalBookingUrl = () => {
    const url = new URL(SITE.professionalBookingUrl);
    url.searchParams.set('accompagnement', booking === 'Programme INSIDE' ? 'programme-inside' : 'coaching-one-to-one');
    return url.toString();
  };
  const navLinks = [['À propos', '#a-propos'], ['Accompagnements', '#accompagnements'], ['Témoignages', '#temoignages'], ['Questions', '#questions']];

  return <>
    <div className="preview-bar"><span>Prototype <span className="preview-detail">· Comparer les deux versions</span></span><button aria-pressed={prices} onClick={() => setPrices(!prices)}><span className={`toggle ${prices ? 'on' : ''}`} aria-hidden="true" />{prices ? 'Masquer le prix du tirage' : 'Afficher le prix du tirage'}</button></div>
    <a className="skip-link" href="#contenu">Aller au contenu</a>
    <header className="site-header" onKeyDown={event => { if (event.key === 'Escape' && menu) { setMenu(false); event.currentTarget.querySelector('.menu-button')?.focus(); } }}>
      <div className="container header-inner">
        <a href="#accueil" aria-label="La Voix Intime — accueil"><img className="logo" src="/la-voix-intime-logo-transparent.png" alt="La Voix Intime — coaching en ligne" /></a>
        <nav aria-label="Navigation principale" className="desktop-nav">{navLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <a className="button small" href="#accompagnements" onClick={() => setMenu(false)}>Réserver</a>
        <button className="menu-button" aria-label={menu ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menu} aria-controls="mobile-nav" onClick={() => setMenu(!menu)}>{menu ? 'Fermer' : 'Menu'}</button>
      </div>
      <nav hidden={!menu} id="mobile-nav" className="mobile-nav" aria-label="Navigation mobile">{navLinks.map(([label, href]) => <a key={href} href={href} onClick={() => setMenu(false)}>{label}</a>)}</nav>
    </header>
    <main id="contenu" tabIndex={-1}>
      <section className="hero container" id="accueil">
        <div className="hero-copy">
          <p className="intro-label"><span /> Coaching en ligne avec Frédérique Caignard</p>
          <h1>Découvrez le langage secret de votre inconscient.</h1>
          <p className="hero-description">Les ressources pour avancer sont déjà en vous. Ensemble, apprenons à les reconnaître et à leur donner toute leur place.</p>
          <a className="button" href="#accompagnements">Découvrir les accompagnements</a>
          <SocialLinks placement="hero" />
        </div>
        <figure className="hero-figure">
          <img src={insideImage} alt="INSIDE, le Trésor des 9 Portes : neuf portes ouvertes sur des paysages lumineux." fetchPriority="high" />
          <figcaption><span>INSIDE · Le Trésor des 9 Portes</span><p>Une grande aventure intérieure. <br />Un petit groupe pour la vivre.</p><a href="#programme" aria-label="Découvrir le programme INSIDE">Découvrir le programme <span aria-hidden="true">↗</span></a></figcaption>
        </figure>
      </section>

      <section className="about-section" id="a-propos"><div className="container about-grid">
        <div><p className="section-label">Coaching par La Voix Intime</p><h2>Une autre façon <br />de vous accompagner.</h2><p className="signature">Frédérique Caignard<span>Créatrice de La Voix Intime et de la méthode Inside</span></p></div>
        <div className="about-copy"><p className="lead">Mon approche repose sur une conviction : vous possédez déjà en vous les ressources nécessaires pour avancer et transformer votre vie.</p><p>À travers le travail avec l’inconscient, je vous accompagne pour faire émerger vos propres réponses, dépasser certains schémas et utiliser pleinement vos ressources intérieures.</p><p>Je propose trois façons de vivre cette approche : un parcours de groupe, un coaching individuel ou un tirage de cartes. Les cartes sont un support de réflexion pour interroger l’inconscient, changer de regard et faire émerger vos propres réponses.</p></div>
        <div className="video-placeholder"><span className="video-symbol" aria-hidden="true">▷</span><div><strong>Le coaching, avec les mots de Frédérique</strong><p>Emplacement de la vidéo de présentation · à intégrer au prototype dès réception</p></div><span className="prototype-note">Aperçu</span></div>
      </div></section>

      <section className="offers-section container" id="accompagnements">
        <div className="section-heading"><div><p className="section-label">Mes accompagnements</p><h2>Trois façons de faire <br />le chemin ensemble.</h2></div><p>Un parcours en groupe, un espace rien qu’à vous,<br className="desktop-break" /> ou un premier éclairage. À chacun son point de départ.</p></div>
        <article className="programme" id="programme">
          <div className="programme-intro"><span className="tag">3 mois d’accompagnement</span><h3>INSIDE</h3><p className="programme-subtitle">Le Trésor des 9 Portes</p><p>Un accompagnement intensif pour transformer en profondeur votre façon de vous percevoir et d’agir.</p><div className="programme-bottom"><span>En petit groupe</span><span>En visio sur Zoom</span></div></div>
          <div className="programme-details"><h4>Un parcours pour passer à l’action.</h4><ul className="feature-list"><li><strong>9 séances de coaching en groupe</strong><span>3 rendez-vous par mois pour avancer ensemble</span></li><li><strong>3 séances de coaching individuel</strong><span>Un temps pour vous, chaque mois</span></li><li><strong>Un suivi journalier sur WhatsApp</strong><span>Pour vous accompagner entre les séances</span></li><li><strong>Un groupe WhatsApp</strong><span>Un espace d’échange et de ressources partagées</span></li></ul><div className="offer-action"><button className="button" onClick={e => openBooking('Programme INSIDE', e)}>Réserver le programme</button></div></div>
        </article>
        <div className="secondary-offers">
          <article className="offer-card"><span className="section-label">L’accompagnement individuel</span><h3>Inside One-to-One</h3><p className="offer-duration">1 mois de coaching · En visio sur WhatsApp</p><p>Un accompagnement individuel et personnalisé pour travailler sur vos problématiques et vos objectifs.</p><ul className="simple-list"><li>4 séances de coaching individuel</li><li>Un suivi journalier sur WhatsApp</li><li>Un espace consacré à vos objectifs</li></ul><div className="card-bottom"><button className="button outline" onClick={e => openBooking('Coaching Inside One-to-One', e)}>Réserver le coaching</button></div></article>
          <article className="offer-card"><span className="section-label">Un autre regard</span><h3>Tirage de cartes</h3><p className="offer-duration">60 minutes · En visio sur WhatsApp</p><p>Interroger l’inconscient, changer de regard et faire émerger vos propres réponses.</p><ul className="simple-list"><li>Une consultation de 60 minutes</li><li>Un temps d’exploration de vos ressources intérieures</li><li>À vivre pour vous, ou à offrir en cadeau</li></ul><label className="recording-option"><input type="checkbox" checked={recording} onChange={e => setRecording(e.target.checked)} /><span>Avec enregistrement vidéo MP4{prices && <strong> +6 €</strong>}</span></label>{recording && <p className="recording-note">Réécoute illimitée. Vous serez la seule personne à posséder le fichier : conservez-le, il ne pourra pas vous être renvoyé.</p>}<div className="card-bottom">{prices && <p className="price" aria-live="polite">{recording ? '65' : '59'} € <small>la séance{recording ? ' avec enregistrement' : ''}</small></p>}<button className="button outline" onClick={e => openBooking('Tirage de cartes', e)}>Réserver le tirage</button><p className="bank-note">Paiement par virement bancaire. <br />Un IBAN vous sera transmis lors de votre réservation.</p></div></article>
        </div>
      </section>

      <section className="testimonials-section" id="temoignages"><div className="container"><div className="section-heading"><div><p className="section-label">Témoignages</p><h2>Des mots après la rencontre.</h2></div><p>Leurs expériences des tirages avec La Voix Intime.</p></div><div className="reviews-grid">{(allReviews ? REVIEWS_DATA : [REVIEWS_DATA[5], REVIEWS_DATA[6], REVIEWS_DATA[7]]).map(review => <figure className="review" key={review.name}><span className="quote-mark" aria-hidden="true">“</span><blockquote>{review.comment}</blockquote><figcaption>{review.name}<span>Tirage de cartes</span></figcaption></figure>)}</div><button className="text-link" aria-expanded={allReviews} onClick={() => setAllReviews(!allReviews)}>{allReviews ? 'Réduire les témoignages' : 'Voir tous les témoignages'}</button></div></section>

      <section className="youtube-section container"><div><p className="section-label">Les tirages gratuits</p><h2>Prolonger l’exploration.</h2><p>Retrouvez les tirages collectifs de La Voix Intime sur YouTube. <br />Un rendez-vous à découvrir à votre rythme.</p></div><a className="button outline" href="https://www.youtube.com/@lavoixintime" target="_blank" rel="noreferrer">Découvrir la chaîne YouTube <span aria-hidden="true">↗</span></a></section>

      <section className="faq-section container" id="questions"><div><p className="section-label">Questions fréquentes</p><h2>Avant de <br />nous retrouver.</h2><p>Une autre question ? <br /><a className="text-link" href="mailto:lavoixintime@gmail.com">Écrivez-moi</a></p></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

      <section className="closing"><div className="container"><h2>Et si la ressource que vous cherchiez <br />était déjà en vous ?</h2><a className="button light" href="#accompagnements">Choisir mon accompagnement</a></div></section>
    </main>
    <footer className="container site-footer"><div className="footer-top"><div className="footer-brand"><img className="logo" src="/la-voix-intime-logo-transparent.png" alt="La Voix Intime — coaching en ligne" /><SocialLinks /></div><div><a href="mailto:lavoixintime@gmail.com">lavoixintime@gmail.com</a><a href="tel:+33646849352">06 46 84 93 52</a></div><p>Frédérique Caignard <br />Coaching en ligne · Méthode Inside</p></div><div className="footer-bottom"><span>© {new Date().getFullYear()} La Voix Intime</span><a href="/mentions-legales">Mentions légales</a><a href="/conditions-generales-vente">Conditions de vente</a><a href="/politique-confidentialite">Confidentialité</a></div></footer>
    <dialog ref={dialog} className="booking-dialog" aria-labelledby="booking-title" onClose={() => { setBookingStep('choices'); trigger.current?.focus(); }} onClick={e => { if (e.target === e.currentTarget) closeBooking(); }}><button className="dialog-close" aria-label="Fermer la réservation" onClick={closeBooking}>×</button><p className="section-label">Votre réservation</p><h2 id="booking-title">{booking}</h2>{booking === 'Tirage de cartes' ? <><p>60 minutes en visio sur WhatsApp{recording ? ', avec enregistrement vidéo MP4' : ''}.{prices && ` ${recording ? '65' : '59'} €.`}</p><p>Appelez Frédérique pour convenir de votre séance{recording ? ' et préciser que vous souhaitez l’enregistrement' : ''}. Un IBAN vous sera transmis pour le règlement.</p><a className="button" href="tel:+33646849352">Appeler le 06 46 84 93 52</a></> : bookingStep === 'private-coming-soon' ? <div className="booking-coming-soon" role="status"><p>Le formulaire pour les particuliers sera bientôt disponible.</p><button className="button outline" onClick={() => setBookingStep('choices')}>Revenir aux choix</button></div> : <><p>Choisissez le formulaire adapté à votre statut pour poursuivre la réservation.</p><div className="booking-choice-list"><a className="button" href={getProfessionalBookingUrl()} target="_blank" rel="noopener noreferrer">Professionnel</a><button className="button outline" onClick={() => setBookingStep('private-coming-soon')}>Particulier</button></div></>}</dialog>
  </>;
}

export default Prototype;



