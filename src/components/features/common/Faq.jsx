import { useEffect, useState } from "react";
import { FadeIn } from "../../ui/FadeIn";
import { FAQ_DATA } from "../../../constants/faq";

// Composant FAQItem réutilisable
const FAQItem = ({ question, answer, isOpen, onToggle, index, totalItems }) => {
  // Ajouter un ID spécifique à la dernière question (celle sur la réservation)
  const isLastItem = index === totalItems - 1;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <div
      id={isLastItem ? "faq-to-book" : undefined}
      className={`border-b group border-white/10 last:border-b-0 ${
        isLastItem ? "scroll-mt-16 lg:scroll-mt-64" : ""
      }`}>
      <button
        onClick={onToggle}
        onKeyDown={handleKeyDown}
        className={`flex items-center justify-between py-6 w-full text-left transition-all duration-300 ${
          isOpen ? "text-violet-300" : "hover:text-violet-300"
        }`}
        aria-expanded={isOpen}
        aria-label={`${isOpen ? "Fermer" : "Ouvrir"} la question: ${question}`}>
        <h3
          className={`pr-4 text-base font-medium lg:text-lg ${
            isOpen
              ? "text-violet-300"
              : "text-white group-hover:text-violet-300 group-focus:text-violet-300"
          }`}>
          {question}
        </h3>
        <div className="flex-shrink-0">
          <svg
            className={`w-5 h-5 text-violet-300 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="pr-4 pb-6">
          <div className="text-base leading-relaxed text-white">{answer}</div>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  // Simuler le chargement des données FAQ
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDataLoaded(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  // Mapper les données FAQ en ajoutant le JSX pour la dernière question
  const faqData = FAQ_DATA.map((item, index) => {
    if (item.isJSX) {
      return {
        ...item,
        answer: (
          <>
            Nous travaillons sur l'intégration de la réservation par le
            calendrier. Nous vous invitons à réserver par téléphone (
            <a
              href="tel:+33646849352"
              className="underline transition-colors underline-offset-4 hover:text-violet-300">
              06 46 84 93 52
            </a>
            ) ou par mail (
            <a
              href="mailto:lavoixintime@gmail.com"
              className="underline transition-colors underline-offset-4 hover:text-violet-300">
              lavoixintime@gmail.com
            </a>
            ). Nous mettons tout en œuvre pour l'avancement du calendrier.
          </>
        ),
      };
    }
    return item;
  });

  const [openIndex, setOpenIndex] = useState(faqData.length - 1); // Ouvrir la dernière question par défaut

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Questions Fréquentes
            </h2>
            <div className="w-16 h-0.5 mx-auto bg-violet-400"></div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="px-8 border rounded-2xl bg-black/10 backdrop-blur-sm border-white/20">
            {isDataLoaded
              ? faqData.map((item, index) => (
                  <FAQItem
                    key={index}
                    index={index}
                    totalItems={faqData.length}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onToggle={() => handleToggle(index)}
                  />
                ))
              : // Skeleton loader pendant le chargement des données
                Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="py-6 border-b animate-pulse border-white/10 last:border-b-0">
                    <div className="flex items-center justify-between">
                      <div className="w-3/4 h-6 bg-gray-700 rounded"></div>
                      <div className="w-5 h-5 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center mt-12">
            <p className="text-white mb-6">
              Vous avez d'autres questions ? N'hésitez pas à me contacter
            </p>
            <div className="flex justify-center space-x-6">
              {/* Icône Mail */}
              <a
                href="mailto:lavoixintime@gmail.com"
                className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 transform bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 hover:scale-105"
                title="Envoyer un email"
                aria-label="Envoyer un email à lavoixintime@gmail.com">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>

              {/* Icône Téléphone */}
              <a
                href="tel:+33646849352"
                className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 transform bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 hover:scale-105"
                title="Appeler"
                aria-label="Appeler au 06 46 84 93 52">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Faq;
