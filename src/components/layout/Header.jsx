import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../../assets/img/logo-la-voix-intime.png";

const navigationItems = [
  {
    label: "Accueil",
    path: "#home",
  },
  {
    label: "A propos",
    path: "#about",
  },
  {
    label: "Mes Tarifs",
    path: "#price",
  },
  {
    label: "Tirages gratuits",
    path: "#free-draw",
  },
  {
    label: "F.A.Q",
    path: "#faq",
  },
  {
    label: "Réserver",
    path: "#to-book",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Mémoriser les sections pour éviter de les recalculer à chaque rendu
  const sections = useMemo(
    () => ["home", "about", "price", "free-draw", "to-book"],
    []
  );

  // Optimiser la fonction de gestion du scroll
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);

    const currentSection = sections.find((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });

    if (currentSection) {
      setActiveSection(currentSection);
    }
  }, [sections]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Nettoyer lors du démontage du composant
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Optimiser la fonction de navigation
  const handleNavClick = useCallback((path) => {
    if (path.startsWith("#")) {
      const element = document.getElementById(path.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // Mémoriser les classes conditionnelles
  const headerClasses = useMemo(() => {
    return `fixed top-0 left-0 right-0 z-40 transition-all duration-1000 ${
      isScrolled ? "bg-purple/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    } ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
    }`;
  }, [isScrolled, isVisible]);

  return (
    <header className={headerClasses}>
      <div className="px-8 mx-auto w-full max-w-6xl 2xl:max-w-[1850px]">
        <nav className="flex items-center justify-between h-24">
          <Link to="/" className="flex items-center space-x-4">
            <img
              src={Logo}
              alt="Logo - La Voix Intime"
              className="w-auto h-12"
            />
            <span className="text-xl font-semibold text-white">
              La Voix Intime
            </span>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden items-center space-x-1 md:flex 2xl:text-xl">
            {navigationItems.map((item) =>
              item.label === "Réserver" ? (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className="px-8 py-3 text-base font-medium text-white rounded-lg transition-all duration-300 transform bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 hover:scale-105">
                  {item.label}
                </button>
              ) : (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`px-4 py-2 transition-colors ${
                    activeSection === item.path.substring(1)
                      ? "text-white"
                      : "text-cyan-100 hover:text-white"
                  }`}>
                  {item.label}
                </button>
              )
            )}
          </div>

          {/* Bouton menu mobile */}
          <button
            className="p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              className={`w-8 h-8 ${
                isMobileMenuOpen ? "text-red-500" : "text-white"
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Menu mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Overlay sombre */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed top-0 right-0 bottom-0 left-0 w-full h-full z-[9999]bg-black/20 md:hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              />

              {/* Menu principal */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 200,
                  duration: 0.4,
                }}
                className="fixed right-0 left-0 z-[10000]h-fit shadow-2xl md:hidden"
                style={{ backgroundColor: "#0f172a" }}>
                {/* En-tête du menu */}
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-lg font-semibold text-purple-400">
                    Navigation
                  </h3>
                </div>

                {/* Liens de navigation */}
                <div className="flex-1 p-6">
                  <nav className="space-y-4">
                    {navigationItems.map((item, index) =>
                      item.label === "Réserver" ? (
                        <motion.div
                          key={item.path}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}>
                          <button
                            onClick={() => {
                              handleNavClick(item.path);
                              setIsMobileMenuOpen(false);
                            }}
                            className="px-4 py-3 w-full text-base font-medium text-white rounded-lg transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700">
                            {item.label}
                          </button>
                        </motion.div>
                      ) : (
                        <motion.button
                          key={item.path}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1,
                            ease: "easeOut",
                          }}
                          onClick={() => {
                            handleNavClick(item.path);
                            setIsMobileMenuOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 group ${
                            activeSection === item.path.substring(1)
                              ? "bg-gray-50/10 text-gray-50 border border-gray-50/70"
                              : "text-purple-300"
                          }`}>
                          <span className="text-lg font-medium transition-transform duration-200 group-hover:translate-x-1">
                            {item.label}
                          </span>
                        </motion.button>
                      )
                    )}
                  </nav>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
