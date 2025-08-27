import { FadeIn } from "../../../ui/FadeIn";
import BadgePrice from "./BadgePrice";

const CardPrice = ({
  title,
  price,
  detailsList,
  button,
  disclaimer,
  badge,
}) => {
  return (
    <FadeIn>
      <div className="relative p-8 border rounded-2xl transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/20 hover:border-purple-400/30">
        {badge && <BadgePrice />}

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-5xl font-bold font-numbers text-blue-300 mb-8">
            {price}
          </p>

          <div className="flex justify-center mb-8">
            <ul className="space-y-4 text-white/90 text-start">
              {detailsList.map((detail, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-lg text-purple-400 mr-3">✓</span>
                  <span className="text-base">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={button.href}
            className="inline-block px-8 py-3 text-base font-medium text-white rounded-lg transition-all duration-300 transform bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 hover:scale-105 mb-6">
            {button.text}
          </a>

          {disclaimer && (
            <p className="text-xs text-center text-white/90 italic">
              {disclaimer}
            </p>
          )}
        </div>
      </div>
    </FadeIn>
  );
};

export default CardPrice;
