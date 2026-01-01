import { FadeIn } from "../ui/FadeIn";

const NotePaypal = () => {
  return (
    <FadeIn>
      <div className="flex flex-col items-center justify-center text-center mt-12">
        <p className="text-white">Paiement sécurisé via</p>

        <div className="flex p-3 my-4 bg-white border border-white rounded-lg shadow-lg backdrop-blur-sm">
          <p className="font-bold text-violet-500">VIREMENT BANCAIRE</p>
        </div>
      </div>
    </FadeIn>
  );
};

export default NotePaypal;
