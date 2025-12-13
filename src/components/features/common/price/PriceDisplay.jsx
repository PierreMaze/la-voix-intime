// src/components/features/common/price/PriceDisplay.jsx
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const PriceDisplay = ({ pricing }) => {
  if (pricing.type === "single") {
    return (
      <div className="flex justify-center mb-8 font-numbers">
        <span className="text-4xl sm:text-5xl font-bold text-blue-200">
          {pricing.amount}€
        </span>
      </div>
    );
  }

  if (pricing.type === "promo") {
    return (
      <div className="flex items-center justify-center gap-x-4 mb-8 font-numbers">
        <del className="text-3xl sm:text-4xl font-semibold text-white decoration-rose-400">
          {pricing.original}€
        </del>

        <HiOutlineArrowNarrowRight
          className="text-white/70"
          size={22}
          aria-hidden
        />

        <span className="text-4xl sm:text-5xl font-bold text-blue-200">
          {pricing.current}€
        </span>
      </div>
    );
  }

  return null;
};

export default PriceDisplay;
