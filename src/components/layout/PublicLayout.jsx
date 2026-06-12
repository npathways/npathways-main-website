import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import LandingHeader from "./LandingHeader";
import LandingFooter from "./LandingFooter";

const PublicLayout = () => {
  const location = useLocation();
  const isAuthPage = ["/login", "/register"].includes(location.pathname);
  const isUnlocked = localStorage.getItem("site_unlocked") === "true";

  return (
    <div className="app">
      {!isAuthPage && (isUnlocked ? <Header /> : <LandingHeader />)}
      <main style={{ minHeight: "100vh" }}>
        <Outlet />
      </main>
      {!isAuthPage && (isUnlocked ? <Footer /> : <LandingFooter />)}
    </div>
  );
};

export default PublicLayout;
