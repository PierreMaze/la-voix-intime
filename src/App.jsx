import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import { StarField } from "./components/ui/StarField";
import { useSmoothScroll } from "./hooks/useSmoothScroll.jsx";
import Home from "./pages/Home";

// Lazy loading des pages légales pour réduire le bundle initial
const GeneralConditionsOfSale = lazy(() =>
  import("./pages/legales/GeneralConditionsOfSale")
);
const GeneralConditionsOfUse = lazy(() =>
  import("./pages/legales/GeneralConditionsOfUse")
);
const LegalNotices = lazy(() => import("./pages/legales/LegalNotices"));
const PrivacyPolicyContent = lazy(() =>
  import("./pages/legales/PrivacyPolicyContent")
);

// Composant de chargement optimisé
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-12 h-12 border-b-2 rounded-full animate-spin border-purple-500"></div>
  </div>
);

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
        path: "/conditions-generales-vente",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <GeneralConditionsOfSale />
          </Suspense>
        ),
      },
      {
        path: "/conditions-generales-utilisation",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <GeneralConditionsOfUse />
          </Suspense>
        ),
      },
      {
        path: "/mentions-legales",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <LegalNotices />
          </Suspense>
        ),
      },
      {
        path: "/politique-confidentialite",
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <PrivacyPolicyContent />
          </Suspense>
        ),
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
