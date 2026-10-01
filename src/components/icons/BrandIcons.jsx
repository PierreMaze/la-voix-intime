import { SiWhatsapp } from 'react-icons/si';
// App-style brand icons (rounded square in the brand colour + white glyph), readable on light and dark backgrounds.
export const WhatsappIcon = props => (
 <span className="brand-icon brand-icon-whatsapp" aria-hidden="true" {...props}><SiWhatsapp /></span>
);
export const ZoomIcon = props => (
 <span className="brand-icon brand-icon-zoom" aria-hidden="true" {...props}>
   <svg viewBox="0 0 24 24" fill="currentColor"><rect x="3.5" y="7" width="11.5" height="10" rx="2.6" /><path d="M16.2 10.6 20.5 7.7v8.6l-4.3-2.9z" /></svg>
 </span>
);
