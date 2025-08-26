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
      <div className="relative p-6 rounded-lg shadow-2xl transition-shadow duration-300 shadow-purple-500/25 bg-purple-50/80">
        {badge && <BadgePrice />}

        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
          <p className="text-4xl font-bold text-blue-600 mb-6">{price}</p>

          <div className="flex justify-center mb-8">
            <ul className="text-sm lg:text-base text-start space-y-3">
              {detailsList.map((detail, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">☑️</span>
                  <span className="text-gray-700">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={button.href}
            className="relative inline-flex items-center justify-center px-6 py-3 w-full text-base font-medium text-white rounded shadow-lg transition-all duration-300 sm:w-auto md:text-lg focus:outline-none bg-gradient-to-r from-purple-500 to-blue-600 shadow-purple-500/25 overflow-hidden group mb-4">
            <div className="absolute inset-0 bg-white transition-transform duration-300 ease-out transform translate-y-full group-hover:translate-y-0"></div>
            <span className="relative z-10 transition-colors duration-300 group-hover:text-purple-900">
              {button.text}
            </span>
          </a>

          {disclaimer && (
            <p className="text-xs text-gray-500 mt-4 text-start italic">
              {disclaimer}
            </p>
          )}
        </div>
      </div>
    </FadeIn>
  );
};

export default CardPrice;
