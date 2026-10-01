import { useRoutes } from "react-router-dom";
import Layout from "./components/layout";


import Home from "./pages/Home";
import GeneralConditionsOfSale from "./pages/legales/GeneralConditionsOfSale";
import GeneralConditionsOfUse from "./pages/legales/GeneralConditionsOfUse";
import LegalNotices from "./pages/legales/LegalNotices";
import PrivacyPolicyContent from "./pages/legales/PrivacyPolicyContent";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: '*', element: <section className="site-container" style={{ paddingBlock: '80px' }}><h1>Page introuvable</h1><p>Retrouvez les accompagnements de La Voix Intime.</p><a className="button" href="/">Retour à l’accueil</a></section> },
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/conditions-generales-vente",
        element: <GeneralConditionsOfSale />,
      },
      {
        path: "/conditions-generales-utilisation",
        element: <GeneralConditionsOfUse />,
      },
      {
        path: "/mentions-legales",
        element: <LegalNotices />,
      },
      {
        path: "/politique-confidentialite",
        element: <PrivacyPolicyContent />,
      },
    ],
  },
];

export default function App() { return useRoutes(routes); }
