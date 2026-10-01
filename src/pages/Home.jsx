import SocialLinks from '../components/SocialLinks';
import Offers from '../components/coaching/Offers';
import Testimonials from '../components/coaching/Testimonials';
import Faq from '../components/coaching/Faq';
import VideoPresentation from '../components/coaching/VideoPresentation';
const insideImage = 'https://lavoixintime-programeinside.fr/images/inside-horizontal.png';
export default function Home() { return <>
      <section className="hero site-container" id="accueil">
        <div className="hero-copy">
          <p className="intro-label"><span /> Coaching en ligne avec Frédérique Caignard</p>
          <h1>Découvrez le langage secret de votre inconscient.</h1>
          <p className="hero-description">Les ressources pour avancer sont déjà en vous. Ensemble, apprenons à les reconnaître et à leur donner toute leur place.</p>
          <a className="button" href="#accompagnements">Découvrir les accompagnements</a>
          <SocialLinks placement="hero" />
        </div>
        <figure className="hero-figure">
          <img src={insideImage} alt="INSIDE, le Trésor des 9 Portes : neuf portes ouvertes sur des paysages lumineux." fetchPriority="high" />
          <figcaption><span>INSIDE · Le Trésor des 9 Portes</span><p>Une grande aventure intérieure. <br />Un petit groupe pour la vivre.</p><a href="#programme" aria-label="Découvrir le programme INSIDE"><span className="hero-figure-link">Découvrir le programme</span> <span aria-hidden="true">↗</span></a></figcaption>
        </figure>
      </section>

      <section className="about-section" id="a-propos"><div className="site-container about-grid">
        <div><p className="section-label">Coaching par La Voix Intime</p><h2>Une autre façon <br />de vous accompagner.</h2><p className="signature">Frédérique Caignard<span>Créatrice de La Voix Intime et de la méthode Inside</span></p></div>
        <div className="about-copy"><p className="lead">Mon approche repose sur une conviction : vous possédez déjà en vous les ressources nécessaires pour avancer et transformer votre vie.</p><p>À travers le travail avec l’inconscient, je vous accompagne pour faire émerger vos propres réponses, dépasser certains schémas et utiliser pleinement vos ressources intérieures.</p><p>Je propose trois façons de vivre cette approche : un parcours de groupe, un coaching individuel ou un tirage de cartes. Les cartes sont un support de réflexion pour interroger l’inconscient, changer de regard et faire émerger vos propres réponses.</p></div>
        <VideoPresentation />
      </div></section>

<Offers />
<Testimonials />
      <section className="youtube-section site-container" id="tirages-gratuits"><div><p className="section-label">Les tirages gratuits</p><h2>Prolonger l’exploration.</h2><p>Retrouvez les tirages collectifs de La Voix Intime sur YouTube. <br />Un rendez-vous à découvrir à votre rythme.</p></div><a className="button small" href="https://www.youtube.com/@lavoixintime" target="_blank" rel="noreferrer">Découvrir la chaîne YouTube <span aria-hidden="true">↗</span></a></section>

<Faq />
      <section className="closing"><div className="site-container"><h2>Et si la ressource que vous cherchiez <br />était déjà en vous ?</h2><a className="button light" href="#accompagnements">Choisir mon accompagnement</a></div></section>

</>; }
