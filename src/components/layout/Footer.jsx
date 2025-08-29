import { useCallback } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/img/logo-la-voix-intime.png";

const Footer = () => {
  const location = useLocation();

  // Fonction pour gérer le clic sur le logo
  const handleLogoClick = useCallback(
    (e) => {
      // Si on est déjà sur la page d'accueil, remonter en haut
      if (location.pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      // Sinon, le Link to="/" gère la navigation normalement
    },
    [location.pathname]
  );
  return (
    <footer className="pt-16 pb-12 text-center xl:pt-32 bg-dark text-light">
      <div className="mx-auto w-full max-w-6xl">
        {/* Réseaux sociaux */}
        <div className="flex justify-center gap-6 px-8 mb-8">
          <a
            href="https://www.facebook.com/people/La-Voix-Intime/61579102867193/"
            title="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-transform hover:rotate-12">
            <FaFacebook className="transition-colors hover:text-blue-300" />
          </a>
          <a
            href="https://www.instagram.com/lavoixintime?igsh=MWl4bGR2MnNnc2VkaQ=="
            title="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl transition-transform hover:rotate-12">
            <FaInstagram className="transition-colors hover:text-purple-300" />
          </a>
        </div>

        {/* Liens légaux - Mobile: colonne, Desktop: ligne */}
        <div className="flex flex-col items-center justify-center gap-4 px-2 md:flex-row md:gap-8 mb-8">
          <Link
            to="/legal-notices"
            className="text-sm underline transition-colors underline-offset-4 hover:text-purple-300">
            Mentions légales
          </Link>
          <Link
            to="/general-conditions-of-use"
            className="text-sm underline transition-colors underline-offset-4 hover:text-purple-300">
            Conditions Générales d'Utilisation
          </Link>
          <Link
            to="/general-conditions-of-sale"
            className="text-sm underline transition-colors underline-offset-4 hover:text-purple-300">
            Conditions Générales de Vente
          </Link>
          <Link
            to="/privacy-policy"
            className="text-sm underline transition-colors underline-offset-4 hover:text-purple-300">
            Politique de confidentialité
          </Link>
        </div>

        {/* Logo et copyright */}
        <div className="flex flex-col items-center">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex flex-col items-center">
            <img
              src={Logo}
              alt="Logo - La Voix Intime"
              className="w-auto h-16 transition-transform mb-4 hover:scale-105"
            />
            <span className="text-lg font-medium text-white mb-4">
              La Voix Intime
            </span>
          </Link>
          <p className="text-sm text-purple-100">
            &copy; 2025 - Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
