import { useEffect, useRef, useState } from 'react';
import { SITE } from '../../config/site';
// Lecteur Vimeo chargé au clic : l'aperçu s'affiche seul, l'iframe ne pèse rien avant la lecture.
// Accepte vimeo.com/ID, vimeo.com/ID/HASH (vidéo non répertoriée) ou player.vimeo.com/video/ID?h=HASH.
const getVimeoEmbedUrl = url => {
 const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)(?:\/([a-z0-9]+))?/i);
 if (!match) return '';
 const params = new URLSearchParams({ autoplay: '1', dnt: '1', title: '0', byline: '0', portrait: '0' });
 const hash = match[2] || new URL(url).searchParams.get('h');
 if (hash) params.set('h', hash);
 return `https://player.vimeo.com/video/${match[1]}?${params}`;
};
const VIDEO_TITLE = 'Vidéo de présentation de La Voix Intime, par Frédérique Caignard';
export default function HeroVideo() {
 const [playing,setPlaying] = useState(false);
 const frame = useRef(null);
 const embedUrl = SITE.presentationVideoUrl ? getVimeoEmbedUrl(SITE.presentationVideoUrl) : '';
 // Le bouton disparaît au clic : le focus passe au lecteur pour que le clavier ne le perde pas.
 useEffect(() => { if (playing) frame.current?.focus(); },[playing]);
 if (playing) return <div className="hero-video"><iframe ref={frame} src={embedUrl} title={VIDEO_TITLE} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /></div>;
 if (!embedUrl) return <div className="hero-video"><img src={SITE.presentationVideoPoster} alt={SITE.presentationVideoPosterAlt} fetchPriority="high" /></div>;
 return <div className="hero-video" role="group" aria-label={VIDEO_TITLE}>
   <img src={SITE.presentationVideoPoster} alt="" fetchPriority="high" />
   <button type="button" className="hero-video-play" onClick={() => setPlaying(true)} aria-label="Lire la vidéo de présentation"><span aria-hidden="true" /></button>
 </div>;
}
