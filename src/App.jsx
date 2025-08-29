import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import { StarField } from "./components/ui/StarField";
import { useSmoothScroll } from "./hooks/useSmoothScroll.jsx";
import Home from "./pages/Home";
import GeneralConditionsOfSale from "./pages/legales/GeneralConditionsOfSale";
import GeneralConditionsOfUse from "./pages/legales/GeneralConditionsOfUse";
import LegalNotices from "./pages/legales/LegalNotices";
import PrivacyPolicyContent from "./pages/legales/PrivacyPolicyContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "general-conditions-of-sale",
        element: <GeneralConditionsOfSale />,
      },
      {
        path: "general-conditions-of-use",
        element: <GeneralConditionsOfUse />,
      },
      {
        path: "legal-notices",
        element: <LegalNotices />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyContent />,
      },
    ],
  },
]);

const App = () => {
  useSmoothScroll();

  return (
    <>
      <div className="relative min-h-screen bg-light">
        <StarField />
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
