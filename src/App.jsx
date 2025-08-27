import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import { StarField } from "./components/ui/StarField";
import { useSmoothScroll } from "./hooks/useSmoothScroll.jsx";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "legal",
      //   element: <Legal />,
      // },
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
