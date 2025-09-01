import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import TestPage from "./components/test-debug/TestPage";
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
        path: "/test",
        element: <TestPage />,
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
