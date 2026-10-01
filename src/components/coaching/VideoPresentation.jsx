import { useRef, useState } from 'react';
import { BiMoviePlay } from 'react-icons/bi';
import { SITE } from '../../config/site';
// Video URL: an MP4 file or a YouTube embed link (https://www.youtube.com/embed/...). Empty = "coming soon" message.
const isYoutube = url => /youtube\.com|youtu\.be/.test(url);
export default function VideoPresentation() {
 const [open,setOpen] = useState(false);
 const dialog = useRef(null);
 const trigger = useRef(null);
 const videoUrl = SITE.presentationVideoUrl;
 const openPreview = event => {
   trigger.current = event.currentTarget;
   setOpen(true);
   dialog.current.showModal();
 };
 const closePreview = () => dialog.current.close();
 return <>
   <div className="video-placeholder">
     <span className="video-symbol" aria-hidden="true"><BiMoviePlay /></span>
     <div><strong>Le coaching, avec les mots de Frédérique</strong><p>Vidéo de présentation de l’accompagnement</p></div>
     <button className="button small video-preview-button" onClick={openPreview}>Aperçu</button>
   </div>
   <dialog ref={dialog} className="booking-dialog video-dialog" aria-labelledby="video-title" onClose={() => { setOpen(false); trigger.current?.focus(); }} onClick={e => { if (e.target === e.currentTarget) closePreview(); }}>
     <button className="dialog-close" aria-label="Fermer la vidéo" onClick={closePreview}>×</button>
     <p className="section-label">Présentation</p>
     <h2 id="video-title">Le coaching, avec les mots de Frédérique</h2>
     {!videoUrl ? <p className="video-coming-soon" role="status">La vidéo de présentation sera bientôt disponible.</p>
       : open && (isYoutube(videoUrl)
         ? <iframe className="video-frame" src={videoUrl} title="Vidéo de présentation de La Voix Intime" allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
         : <video className="video-frame" src={videoUrl} controls autoPlay playsInline />)}
   </dialog>
 </>;
}
