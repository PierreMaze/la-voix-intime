import { SITE } from '../../config/site';
// Lecteur Vimeo affiché directement : la vignette de la vidéo sert d'aperçu.
// Accepte vimeo.com/ID, vimeo.com/ID/HASH (vidéo non répertoriée) ou player.vimeo.com/video/ID?h=HASH.
const getVimeoEmbedUrl = url => {
 const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/([a-z0-9]+))?/i);
 if (!match) return '';
 const params = new URLSearchParams({ dnt: '1', title: '0', byline: '0', portrait: '0', badge: '0' });
 const hash = match[2] || new URL(url).searchParams.get('h');
 if (hash) params.set('h', hash);
 return `https://player.vimeo.com/video/${match[1]}?${params}`;
};
const VIDEO_TITLE = 'Vidéo de présentation de La Voix Intime, par Frédérique Caignard';
export default function HeroVideo() {
 const embedUrl = SITE.presentationVideoUrl ? getVimeoEmbedUrl(SITE.presentationVideoUrl) : '';
 if (!embedUrl) return null;
 return <div className="hero-video"><iframe src={embedUrl} title={VIDEO_TITLE} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /></div>;
}
