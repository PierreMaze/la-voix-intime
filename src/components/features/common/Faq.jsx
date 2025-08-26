import { useState } from "react";
import { FadeIn } from "../../ui/FadeIn";

// Composant FAQItem réutilisable
const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className="border-b border-slate-700/50 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between py-6 w-full text-left transition-colors duration-300 hover:text-purple-300 focus:outline-none focus:text-purple-300"
        aria-expanded={isOpen}>
        <h3 className="pr-4 text-base font-medium text-purple-50 lg:text-lg">
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
          <p className="text-xs leading-relaxed lg:text-base text-purple-200">
            {answer}
          </p>
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
    <section className="px-4 py-16 mx-auto w-full">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold uppercase text-purple-50 mb-4">
            Questions Fréquentes
          </h2>
        </div>
      </FadeIn>

      <FadeIn>
        <div className="px-8 border rounded-2xl bg-slate-800/30 backdrop-blur-sm border-slate-700/50">
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

      <FadeIn className="text-center mt-12">
        <p className="text-purple-200 mb-6">
          Vous avez d'autres questions ? N'hésitez pas à me contacter
        </p>
        <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded shadow-lg transition-all duration-300 text-purple-50 focus:outline-none bg-gradient-to-r from-purple-500 to-blue-600 shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105">
          Me contacter
        </button>
      </FadeIn>
    </section>
  );
};

export default Faq;
