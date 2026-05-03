import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cart from "./components/ecommerce/Cart";
import LoadingScreen from "./components/common/LoadingScreen";
import ScrollToTop from "./components/common/ScrollToTop";

// Layouts
import PublicLayout from "./components/layout/PublicLayout";
import DashboardLayout from "./components/dashboard/DashboardLayout";

// Public Pages
import LandingPage from "./pages/public/LandingPage";
import Home from "./pages/public/Home";
import About from "./pages/public/About";
import Services from "./pages/public/Services";
import ForParents from "./pages/public/services/ForParents";
import ForSchools from "./pages/public/services/ForSchools";
import CareerAssessments from "./pages/public/services/CareerAssessments";
import Bootcamps from "./pages/public/services/Bootcamps";
import SchoolPrograms from "./pages/public/services/SchoolPrograms";
import Contact from "./pages/public/Contact";
import Founder from "./pages/public/about/Founder";
import HowItWorks from "./pages/public/about/HowItWorks";

// E-Commerce Pages
import Products from "./pages/ecommerce/Products";
import AssessmentList from "./pages/ecommerce/categories/AssessmentList";
import BootcampList from "./pages/ecommerce/categories/BootcampList";
import ProgramList from "./pages/ecommerce/categories/ProgramList";
import PathwayList from "./pages/ecommerce/categories/PathwayList";
import SubscriptionPreview from "./pages/ecommerce/categories/SubscriptionPreview";
import PaymentInfo from "./pages/ecommerce/PaymentInfo";
import ProductDetail from "./pages/ecommerce/ProductDetail";
import Checkout from "./pages/ecommerce/Checkout";

// Auth Pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ProtectedRoute from "./components/auth/ProtectedRoute";

// Dashboard Pages
import DashboardHome from "./pages/dashboard/DashboardHome";
import MyProducts from "./pages/dashboard/MyProducts";
import MyFiles from "./pages/dashboard/MyFiles";
import Profile from "./pages/dashboard/Profile";

// Legal Pages
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import Refund from "./pages/legal/Refund";

// Placeholder Pages
const NotFound = () => (
  <div className="container section text-center">
    <h1>404 - Page Not Found</h1>
  </div>
);

function App() {
  const [isUnlocked, setIsUnlocked] = useState(
    localStorage.getItem("npathways_unlocked") === "true"
  );

  if (!isUnlocked) {
    return <LandingPage onUnlock={() => setIsUnlocked(true)} />;
  }

  return (
    <>
      <ScrollToTop />
      <LoadingScreen />
      <Cart /> {/* Global Cart Sidebar */}
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/founder" element={<Founder />} />
          <Route path="/about/how-it-works" element={<HowItWorks />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/parents" element={<ForParents />} />
          <Route path="/services/schools" element={<ForSchools />} />
          <Route path="/services/assessments" element={<CareerAssessments />} />
          <Route path="/services/bootcamps" element={<Bootcamps />} />
          <Route
            path="/services/school-programs"
            element={<SchoolPrograms />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/assessments" element={<AssessmentList />} />
          <Route path="/products/bootcamps" element={<BootcampList />} />
          <Route path="/products/programs" element={<ProgramList />} />
          <Route path="/products/pathways" element={<PathwayList />} />
          <Route
            path="/products/subscriptions"
            element={<SubscriptionPreview />}
          />
          <Route path="/products/payments" element={<PaymentInfo />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Legal Routes */}
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />

          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<DashboardHome />} />
          <Route path="my-products" element={<MyProducts />} />
          <Route path="my-files" element={<MyFiles />} />
          <Route path="profile" element={<Profile />} />
          {/* Redirect unknown dashboard routes to home */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
