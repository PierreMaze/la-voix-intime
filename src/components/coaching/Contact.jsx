import SocialLinks from '../SocialLinks';
export default function Contact() { return (
  <section className="faq-section contact-section site-container" id="contact">
    <div><p className="section-label">Contact</p><h2>Parlons de <br />votre démarche.</h2><p>Une question sur un accompagnement ou envie d’échanger avant de vous lancer ? <br />Je vous réponds personnellement.</p></div>
    <ul className="contact-list">
      <li><span>Email</span><a href="mailto:lavoixintime@gmail.com">lavoixintime@gmail.com</a></li>
      <li><span>Téléphone</span><a href="tel:+33646849352">06 46 84 93 52</a></li>
      <li><span>Réseaux sociaux</span><SocialLinks placement="contact" /></li>
    </ul>
  </section>
); }
