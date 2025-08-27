import { FadeIn } from "../../../ui/FadeIn";

const BadgePrice = () => {
  return (
    <FadeIn>
      <div className="absolute z-10 w-32 h-32 -top-12 -right-8 overflow-hidden">
        <div className="absolute px-16 py-2 w-44 text-xs font-bold tracking-wider text-center text-white shadow-lg transform rotate-45 bg-gradient-to-r from-purple-500 to-blue-600 shadow-purple-500/25 top-2 -right-12">
          POPULAIRE
        </div>
      </div>
    </FadeIn>
  );
};

export default BadgePrice;
