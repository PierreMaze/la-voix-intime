const NotePaypal = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center mt-12">
      <p className="text-purple-100">Paiement sécurisé via</p>

      <div className="flex p-3 my-4 border rounded-lg shadow-lg bg-purple-200/60 backdrop-blur-sm border-white/30">
        <img src="/assets/img/logo-paypal.png" alt="PayPal" className="h-8" />
      </div>
      <p className="w-full text-xs text-purple-50">
        2€ de frais de gestion par Paypal peuvent s'appliquer lors du paiement
      </p>
    </div>
  );
};

export default NotePaypal;
