import { Outlet } from "react-router-dom";
// import InfoBanner from "../features/InfoBanner";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* <InfoBanner /> */}
      <main className="pt-12 flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
