import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { getPageSeo, getStructuredData } from '../../config/seo';

const legacySections = { home: 'accueil', about: 'a-propos', price: 'accompagnements', reviews: 'temoignages', faq: 'questions', 'faq-to-book': 'accompagnements', 'free-draw': 'tirages-gratuits' };

export default function Layout() {
 const { pathname, hash } = useLocation();
 useEffect(() => {
   const seo = getPageSeo(pathname);
   document.title = seo.title;
   document.querySelector('link[rel="canonical"]')?.setAttribute('href', seo.url);
   const metadata = {
     'meta[name="description"]': seo.description,
     'meta[name="robots"]': seo.robots,
     'meta[property="og:url"]': seo.url,
     'meta[property="og:title"]': seo.title,
     'meta[property="og:description"]': seo.description,
     'meta[name="twitter:title"]': seo.title,
     'meta[name="twitter:description"]': seo.description,
   };
   Object.entries(metadata).forEach(([selector, content]) => document.querySelector(selector)?.setAttribute('content', content));
   const structuredData = document.getElementById('structured-data');
   if (structuredData) structuredData.textContent = JSON.stringify(getStructuredData(pathname));
   const scroll = () => {
     const id = window.location.hash.slice(1);
     const target = document.getElementById(legacySections[id] || id);
     if (target) target.scrollIntoView({ behavior: 'instant' });
     else if (!id) window.scrollTo({ top: 0, behavior: 'instant' });
   };
   const frame = requestAnimationFrame(scroll);
   window.addEventListener('hashchange', scroll);
   return () => { cancelAnimationFrame(frame); window.removeEventListener('hashchange', scroll); };
 }, [pathname, hash]);
 return <><a className="skip-link" href="#contenu">Aller au contenu</a><Header /><main id="contenu" tabIndex={-1} className={getPageSeo(pathname).path === '/' ? undefined : 'legal-content'}><Outlet /></main><Footer /></>;
}
