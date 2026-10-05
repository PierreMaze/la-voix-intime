import { useEffect } from 'react';
import { SITE } from '../../config/site';
export default function HeroVideo() {
 const embedUrl = SITE.presentationVideoUrl;
 useEffect(() => {
  if (!embedUrl || document.querySelector('script[data-vimeo-player-api]')) return;
  const script = document.createElement('script');
  script.src = 'https://player.vimeo.com/api/player.js';
  script.async = true;
  script.dataset.vimeoPlayerApi = 'true';
  document.body.appendChild(script);
 }, [embedUrl]);
 if (!embedUrl) return null;
 return <div className="hero-video"><iframe src={embedUrl} title="La Voix Intime - Podcast" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen /></div>;
}
