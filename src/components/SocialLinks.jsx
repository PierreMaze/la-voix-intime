import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';
import './SocialLinks.css';

const networks = [
  { name: 'Facebook', href: 'https://www.facebook.com/people/La-Voix-Intime/61579102867193/', Icon: FaFacebookF },
  { name: 'Instagram', href: 'https://www.instagram.com/lavoixintime/', Icon: FaInstagram },
  { name: 'TikTok', href: 'https://www.tiktok.com/@lavoixintime', Icon: FaTiktok },
  { name: 'YouTube', href: 'https://www.youtube.com/@lavoixintime', Icon: FaYoutube },
];

export default function SocialLinks({ placement = 'footer' }) {
  return (
    <nav className={`social-links social-links--${placement}`} aria-label={`Réseaux sociaux — ${placement === 'hero' ? 'présentation' : 'pied de page'}`}>
      {networks.map(({ name, href, Icon }) => (
        <a key={name} href={href} target="_blank" rel="noopener noreferrer"
          aria-label={`La Voix Intime sur ${name} (nouvel onglet)`} title={`${name} — nouvel onglet`}>
          <Icon aria-hidden="true" focusable="false" />
        </a>
      ))}
    </nav>
  );
}
