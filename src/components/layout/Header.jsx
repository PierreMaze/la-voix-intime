import { useState } from 'react';
export default function Header() {
 const [menu,setMenu] = useState(false);
 const navLinks = [['À propos','/#a-propos'],['Accompagnements','/#accompagnements'],['Témoignages','/#temoignages'],['Questions','/#questions']];
 return (    <header className="site-header" onKeyDown={event => { if (event.key === 'Escape' && menu) { setMenu(false); event.currentTarget.querySelector('.menu-button')?.focus(); } }}>
      <div className="site-container header-inner">
        <a href="/#accueil" aria-label="La Voix Intime — accueil"><img className="logo" src="/la-voix-intime-logo-transparent.png" alt="La Voix Intime — coaching en ligne" /></a>
        <nav aria-label="Navigation principale" className="desktop-nav">{navLinks.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
        <a className="button small" href="/#accompagnements" onClick={() => setMenu(false)}>Réserver</a>
        <button className="menu-button" aria-label={menu ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={menu} aria-controls="mobile-nav" onClick={() => setMenu(!menu)}>{menu ? 'Fermer' : 'Menu'}</button>
      </div>
      <nav hidden={!menu} id="mobile-nav" className="mobile-nav" aria-label="Navigation mobile">{navLinks.map(([label, href]) => <a key={href} href={href} onClick={() => setMenu(false)}>{label}</a>)}</nav>
    </header>
);
}
