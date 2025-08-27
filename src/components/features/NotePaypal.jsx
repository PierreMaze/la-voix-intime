import { FadeIn } from "../ui/FadeIn";
import OptimizedImage from "../ui/OptimizedImage";
import LogoPaypal from "/assets/img/logo-paypal.png";

const NotePaypal = () => {
  return (
    <FadeIn>
      <div className="flex flex-col items-center justify-center text-center mt-12">
        <p className="text-slate-50">Paiement sécurisé via</p>

        <div className="flex p-3 my-4 border rounded-lg shadow-lg bg-slate-50 backdrop-blur-sm border-white/30">
          <OptimizedImage
            src={LogoPaypal}
            alt="PayPal"
            className="h-8"
            loading="eager"
          />
        </div>
        <p className="w-full text-xs text-slate-50">
          2€ de frais de gestion par Paypal peuvent s'appliquer lors du paiement
        </p>
      </div>
    </FadeIn>
  );
};

export default NotePaypal;
