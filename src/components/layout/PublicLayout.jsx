import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const PublicLayout = () => {
  const location = useLocation();
  const isAuthPage = ["/login", "/register"].includes(location.pathname);

  return (
    <div className="app">
      {!isAuthPage && <Header />}
      <main style={{ minHeight: "100vh" }}>
        <Outlet />
      </main>
      {!isAuthPage && <Footer />}
    </div>
  );
};

export default PublicLayout;
