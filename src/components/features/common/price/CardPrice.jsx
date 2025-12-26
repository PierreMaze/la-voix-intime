// src/components/features/common/price/CardPrice.jsx
import { FadeIn } from "../../../ui/FadeIn";
import Button from "../../../ui/Button";
import BadgePrice from "./BadgePrice";
import PriceDisplay from "./PriceDisplay";

const CardPrice = ({
  title,
  pricing,
  detailsList,
  button,
  disclaimer,
  badge,
}) => {
  return (
    <FadeIn>
      <div className="w-full max-w-xs lg:max-w-sm 2xl:max-w-md relative p-4 mb-2 border rounded-2xl transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/20 hover:border-violet-400/30">
        {badge && <BadgePrice {...badge} />}

        <div className="text-center">
          <h3 className="mb-4 text-2xl lg:text-3xl font-bold 2xl:text-4xl  text-white">
            {title}
          </h3>

          <PriceDisplay
             pricing={pricing}
          />

          <div className="flex justify-center mb-8">
            <ul className="space-y-2 text-left text-white">
              {detailsList.map((detail, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-3 text-lg font-extrabold text-violet-400">
                    ✓
                  </span>
                  <span className="text-base">{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button
            as="a"
            href={button.path || button.href}
            variant="primary"
            className="mb-6"
            aria-label={`${button.text} - ${title}`}
          >
            {button.text}
          </Button>

          {disclaimer && (
            <p className="text-xs italic text-white">
              {disclaimer}
            </p>
          )}
        </div>
      </div>
    </FadeIn>
  );
};

export default CardPrice;
