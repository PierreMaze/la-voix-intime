import { useState } from "react";
import { FadeIn } from "../../ui/FadeIn";

// Composant FAQItem réutilisable
const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b group border-white/10 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between py-6 w-full text-left transition-all duration-300 hover:text-purple-300"
        aria-expanded={isOpen}>
        <h3 className="pr-4 text-base font-medium text-white lg:text-lg group-hover:text-purple-200 group-focus:text-purple-200">
          {question}
        </h3>
        <div className="flex-shrink-0">
          <svg
            className={`w-5 h-5 text-purple-300 transition-transform duration-300 ${
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
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="pr-4 pb-6">
          <p className="text-base leading-relaxed text-white/90">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "Comment fonctionne un tirage de cartes ?",
      answer:
        "Un tirage de cartes est une consultation intuitive où je tire des cartes spécifiques pour répondre à vos questions. Chaque carte révèle des aspects de votre situation actuelle et vous guide vers des perspectives nouvelles. La séance dure environ 45 minutes et se déroule dans un cadre bienveillant et confidentiel.",
    },
    {
      question: "Quels types de questions puis-je poser ?",
      answer:
        "Vous pouvez poser des questions sur tous les aspects de votre vie : relations, carrière, développement personnel, décisions importantes, ou simplement pour obtenir des éclairages sur votre chemin de vie. Les cartes vous offrent des perspectives et des conseils pour avancer avec plus de clarté et de confiance.",
    },
    {
      question: "Les tirages sont-ils en ligne ou en personne ?",
      answer:
        "Je propose des consultations en ligne via visioconférence, ce qui vous permet de bénéficier d'un tirage depuis le confort de votre espace personnel. Cette approche moderne conserve toute la magie et l'authenticité d'une consultation traditionnelle tout en offrant une grande flexibilité.",
    },
    {
      question: "Combien de temps dure une séance ?",
      answer:
        "Une séance complète dure environ 45 minutes. Ce temps permet d'explorer en profondeur votre question, de tirer les cartes appropriées et de vous donner des explications détaillées. Je prends le temps nécessaire pour que vous compreniez pleinement les messages qui vous sont destinés.",
    },
    {
      question: "Comment réserver une consultation ?",
      answer:
        "Vous pouvez réserver votre consultation directement via le bouton 'Réserver un tirage' sur cette page. Je vous proposerai des créneaux disponibles et nous conviendrons ensemble du moment qui vous convient le mieux. Un lien de visioconférence vous sera envoyé avant la séance.",
    },
  ];

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
            <div className="w-16 h-0.mx-auto 5 bg-purple-400"></div>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="px-8 border rounded-2xl bg-white/5 backdrop-blur-sm border-white/10">
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>
        </FadeIn>

        <FadeIn>
          <div className="text-center mt-12">
            <p className="text-white/80 mb-6">
              Vous avez d'autres questions ? N'hésitez pas à me contacter
            </p>
            <div className="flex justify-center space-x-6">
              {/* Icône Mail */}
              <a
                href="mailto:votre-email@example.com"
                className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 transform bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 hover:scale-105"
                title="Envoyer un email">
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
                href="tel:+33123456789"
                className="flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 transform bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 hover:scale-105"
                title="Appeler">
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
