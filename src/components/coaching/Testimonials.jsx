import { useState } from 'react';
import { REVIEWS_DATA } from '../../constants/reviews';
import { INSIDE_REVIEWS } from '../../constants/insideReviews';
// Mixed list: INSIDE and card-reading reviews alternate, the strongest card-reading reviews first.
const inside = INSIDE_REVIEWS.map(r => ({ key: r.id, name: r.name, comment: r.comment, offer: r.offer ?? 'Programme INSIDE' }));
const tirage = [5, 6, 7, 0, 1, 2, 3, 4].map(i => REVIEWS_DATA[i]).filter(Boolean).map(r => ({ key: r.name, name: r.name, comment: r.comment, offer: 'Tirage de cartes' }));
const REVIEWS = Array.from({ length: Math.max(inside.length, tirage.length) }, (_, i) => [inside[i], tirage[i]]).flat().filter(Boolean);
const FEATURED_COUNT = 3;
export default function Testimonials() {
 const [allReviews,setAllReviews] = useState(false);
 const reviews = allReviews ? REVIEWS : REVIEWS.slice(0, FEATURED_COUNT);
 return <section className="testimonials-section" id="temoignages"><div className="site-container">
   <div className="section-heading"><div><p className="section-label">Témoignages</p><h2>Des mots après la rencontre.</h2></div><p>Leurs expériences du programme INSIDE et des tirages avec La Voix Intime.</p></div>
   <div className="reviews-grid" id="reviews-list">
     {reviews.map(review => <figure className="review" key={review.key}><span className="quote-mark" aria-hidden="true">“</span><blockquote>{review.comment}</blockquote><figcaption>{review.name}<span>{review.offer}</span></figcaption></figure>)}
   </div>
   <button className="text-link" aria-expanded={allReviews} aria-controls="reviews-list" onClick={() => setAllReviews(!allReviews)}>{allReviews ? 'Réduire les témoignages' : 'Voir tous les témoignages'}</button>
 </div></section>;
}
