export const SITE_URL = 'https://lavoixintime.com';
export const pages = {
  '/': {
    title: 'La Voix Intime — Coaching en ligne et méthode Inside',
    description: 'Coaching en ligne avec Frédérique Caignard : programme Inside, coaching individuel et cartes comme support pour explorer vos ressources intérieures.',
  },
  '/mentions-legales': {
    title: 'Mentions légales — La Voix Intime',
    description: 'Informations sur l’édition et l’hébergement du site La Voix Intime, activité de coaching en ligne de Frédérique Caignard, et coordonnées de contact.',
  },
  '/conditions-generales-utilisation': {
    title: 'Conditions générales d’utilisation — La Voix Intime',
    description: 'Conditions d’accès et d’utilisation du site La Voix Intime : services de coaching Inside, réservations, confidentialité et liens externes.',
  },
  '/conditions-generales-vente': {
    title: 'Conditions générales de vente — La Voix Intime',
    description: 'Conditions des accompagnements La Voix Intime : programme Inside, coaching individuel, séances avec les cartes, réservation, règlement et annulation.',
  },
  '/politique-confidentialite': {
    title: 'Politique de confidentialité — La Voix Intime',
    description: 'Comment La Voix Intime traite les données liées aux demandes de coaching et réservations : services utilisés, confidentialité et exercice de vos droits.',
  },
};

export function getPageSeo(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  const page = pages[path];
  return {
    ...(page || { title: 'Page introuvable — La Voix Intime', description: 'Retrouvez les accompagnements de La Voix Intime sur la page d’accueil.' }),
    path,
    url: SITE_URL + path,
    robots: page ? 'index, follow, max-image-preview:large' : 'noindex, follow',
  };
}

export function getStructuredData(pathname) {
  const page = getPageSeo(pathname);
  const organizationId = SITE_URL + '/#organization';
  const personId = SITE_URL + '/#frederique-caignard';
  const graph = [
    {
      '@type': 'Organization', '@id': organizationId,
      name: 'La Voix Intime', url: SITE_URL + '/',
      description: pages['/'].description,
      logo: SITE_URL + '/la-voix-intime-logo.png',
      founder: { '@id': personId },
      email: 'lavoixintime@gmail.com', telephone: '+33646849352',
      sameAs: [
        'https://www.facebook.com/people/La-Voix-Intime/61579102867193/',
        'https://www.instagram.com/lavoixintime/',
        'https://www.tiktok.com/@lavoixintime',
        'https://www.youtube.com/@lavoixintime',
      ],
    },
    { '@type': 'Person', '@id': personId, name: 'Frédérique Caignard', url: SITE_URL + '/#a-propos', jobTitle: 'Coach', worksFor: { '@id': organizationId } },
    { '@type': 'WebSite', '@id': SITE_URL + '/#website', name: 'La Voix Intime', url: SITE_URL + '/', inLanguage: 'fr-FR', publisher: { '@id': organizationId } },
    { '@type': 'WebPage', '@id': page.url + '#webpage', url: page.url, name: page.title, description: page.description, inLanguage: 'fr-FR', isPartOf: { '@id': SITE_URL + '/#website' }, about: { '@id': organizationId } },
  ];
  if (page.path === '/') {
    graph.push(
      { '@type': 'Service', '@id': SITE_URL + '/#programme', name: 'Inside — Le Trésor des 9 Portes', serviceType: 'Coaching en ligne', provider: { '@id': organizationId }, description: 'Accompagnement de 3 mois : 9 séances en groupe sur Zoom, 3 séances individuelles et suivi journalier sur WhatsApp.' },
      { '@type': 'Service', '@id': SITE_URL + '/#one-to-one', name: 'Coaching Inside One-to-One', serviceType: 'Coaching individuel en ligne', provider: { '@id': organizationId }, description: 'Accompagnement d’un mois avec 4 séances individuelles en visio sur WhatsApp et un suivi journalier.' },
      { '@type': 'Service', '@id': SITE_URL + '/#tirage', name: 'Tirage de cartes', serviceType: 'Exploration des ressources intérieures', provider: { '@id': organizationId }, description: 'Séance de 60 minutes sur WhatsApp avec les cartes comme support de réflexion.', offers: [
        { '@type': 'Offer', name: 'Séance de 60 minutes', price: '59', priceCurrency: 'EUR', url: SITE_URL + '/#tirage' },
        { '@type': 'Offer', name: 'Séance de 60 minutes avec enregistrement MP4', price: '65', priceCurrency: 'EUR', url: SITE_URL + '/#tirage' },
      ] },
    );
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}
