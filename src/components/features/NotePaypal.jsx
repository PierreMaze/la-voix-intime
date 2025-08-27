import { FadeIn } from "../ui/FadeIn";
import OptimizedImage from "../ui/OptimizedImage";
import LogoPaypal from "/assets/img/logo-paypal.png";

const NotePaypal = () => {
  return (
    <FadeIn>
      <div className="flex flex-col items-center justify-center text-center mt-12">
        <p className="text-white">Paiement sécurisé via</p>

        <div className="flex p-3 my-4 bg-white border border-white rounded-lg shadow-lg backdrop-blur-sm">
          <OptimizedImage
            src={LogoPaypal}
            alt="PayPal"
            className="h-8"
            loading="eager"
          />
        </div>
        <p className="w-full text-xs text-white">
          2€ de frais de gestion par Paypal peuvent s'appliquer lors du paiement
        </p>
      </div>
    </FadeIn>
  );
};

export default NotePaypal;
