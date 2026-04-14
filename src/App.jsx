import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import { DashboardLayout } from "./components/dashboard/DashboardLayout";
import { ProtectedRoute } from "./components/dashboard/ProtectedRoute";
import { ToastProvider } from "./components/dashboard/Toast";
import Layout from "./components/layout";
import { StarField } from "./components/ui/StarField";
import { AuthContextProvider } from "./contexts/AuthContextProvider";
import { useSmoothScroll } from "./hooks/useSmoothScroll.jsx";
import Home from "./pages/Home";
import { LoginPage } from "./pages/dashboard/LoginPage";
import { AdminDashboardPage } from "./pages/dashboard/admin/AdminDashboardPage";
import { ClientsListPage } from "./pages/dashboard/admin/ClientsListPage";
import { CommandesPage } from "./pages/dashboard/admin/CommandesPage";
import { FormationEditPage } from "./pages/dashboard/admin/FormationEditPage";
import { FormationsListPage } from "./pages/dashboard/admin/FormationsListPage";
import { ClientCommandesPage } from "./pages/dashboard/client/ClientCommandesPage";
import { ClientDashboardPage } from "./pages/dashboard/client/ClientDashboardPage";
import { FormationViewPage } from "./pages/dashboard/client/FormationViewPage";
import { MyFormationsPage } from "./pages/dashboard/client/MyFormationsPage";
import GeneralConditionsOfSale from "./pages/legales/GeneralConditionsOfSale";
import GeneralConditionsOfUse from "./pages/legales/GeneralConditionsOfUse";
import LegalNotices from "./pages/legales/LegalNotices";
import PrivacyPolicyContent from "./pages/legales/PrivacyPolicyContent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 30_000,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/conditions-generales-vente", element: <GeneralConditionsOfSale /> },
      { path: "/conditions-generales-utilisation", element: <GeneralConditionsOfUse /> },
      { path: "/mentions-legales", element: <LegalNotices /> },
      { path: "/politique-confidentialite", element: <PrivacyPolicyContent /> },
    ],
  },
  {
    path: "/dashboard/login",
    element: <LoginPage />,
  },
  {
    path: "/dashboard",
    element: <Navigate to="/dashboard/login" replace />,
  },
  {
    path: "/dashboard/admin",
    element: (
      <ProtectedRoute role="admin">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <AdminDashboardPage /> },
      { path: "formations", element: <FormationsListPage /> },
      { path: "formations/new", element: <FormationEditPage /> },
      { path: "formations/:id", element: <FormationEditPage /> },
      { path: "clients", element: <ClientsListPage /> },
      { path: "commandes", element: <CommandesPage /> },
    ],
  },
  {
    path: "/dashboard/client",
    element: (
      <ProtectedRoute role="student">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <ClientDashboardPage /> },
      { path: "formations", element: <MyFormationsPage /> },
      { path: "formations/:id", element: <FormationViewPage /> },
      { path: "commandes", element: <ClientCommandesPage /> },
    ],
  },
]);

const App = () => {
  useSmoothScroll();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <ToastProvider>
          <div className="relative min-h-screen bg-transparent">
            <StarField />
            <RouterProvider router={router} />
          </div>
        </ToastProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
};

export default App;
