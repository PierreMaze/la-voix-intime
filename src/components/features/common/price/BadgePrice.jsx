// src/components/features/common/price/BadgePrice.jsx
import { FadeIn } from "../../../ui/FadeIn";

const DEFAULT_BADGE_COLOR =
  "bg-gradient-to-r from-purple-500 to-blue-600 shadow-purple-500/25";

const BadgePrice = ({ label, color = DEFAULT_BADGE_COLOR }) => {
  return (
    <FadeIn>
      <div className="absolute z-10 w-32 h-32 -top-8 -right-4 overflow-hidden">
        <div
          className={`
            absolute w-44 text-xs font-bold tracking-wider
            shadow-lg transform rotate-45
            top-2 -right-12
            ${color}
          `}
        >
<div className="py-2 w-full px-16 text-center text-white">
  {label}
</div>
        </div>
      </div>
    </FadeIn>
  );
};

export default BadgePrice;
