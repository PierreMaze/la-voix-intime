import { questions } from '../../constants/coachingFaq';
export default function Faq() { return (      <section className="faq-section site-container" id="questions"><div><p className="section-label">Questions fréquentes</p><h2>Avant de <br />nous retrouver.</h2><p>Une autre question ? <br /><a className="text-link" href="mailto:lavoixintime@gmail.com">Écrivez-moi</a></p></div><div className="faq-list">{questions.map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>

); }
