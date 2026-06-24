import { useState, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoadingScreen from "./components/common/LoadingScreen";
import ScrollToTop from "./components/common/ScrollToTop";

import { Toaster } from "react-hot-toast";

// Layouts
const PublicLayout = lazy(() => import("./components/layout/PublicLayout"));
const DashboardLayout = lazy(() => import("./components/dashboard/DashboardLayout"));

// Public Pages
const Home = lazy(() => import("./pages/public/Home"));
const About = lazy(() => import("./pages/public/About"));
const Services = lazy(() => import("./pages/public/Services"));
const ForParents = lazy(() => import("./pages/public/services/ForParents"));
const ForSchools = lazy(() => import("./pages/public/services/ForSchools"));
const EducationConsulting = lazy(() => import("./pages/public/services/EducationConsulting"));
const CareerGuidance = lazy(() => import("./pages/public/services/CareerGuidance"));
const VisaAssistance = lazy(() => import("./pages/public/services/VisaAssistance"));
const Bootcamps = lazy(() => import("./pages/public/services/Bootcamps"));
const SchoolPrograms = lazy(() => import("./pages/public/services/SchoolPrograms"));
const Contact = lazy(() => import("./pages/public/Contact"));
const Founder = lazy(() => import("./pages/public/about/Founder"));
const HowItWorks = lazy(() => import("./pages/public/about/HowItWorks"));

// E-Commerce Pages
const BootcampList = lazy(() => import("./pages/public/services/BootcampCalendar"));

// Auth Pages
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const ProtectedRoute = lazy(() => import("./components/auth/ProtectedRoute"));

// Dashboard Pages
const DashboardHome = lazy(() => import("./pages/dashboard/DashboardHome"));
const MyProducts = lazy(() => import("./pages/dashboard/MyProducts"));
const MyFiles = lazy(() => import("./pages/dashboard/MyFiles"));
const Profile = lazy(() => import("./pages/dashboard/Profile"));

// Legal Pages
const Terms = lazy(() => import("./pages/legal/Terms"));
const Privacy = lazy(() => import("./pages/legal/Privacy"));
const Refund = lazy(() => import("./pages/legal/Refund"));

// 404 Page
const NotFound = lazy(() => import("./pages/public/NotFound"));

function App() {

  return (
    <>
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: 'var(--color-bg-primary)',
            color: 'var(--color-text-primary)',
            border: '1px solid var(--border-default)',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-md)',
            fontSize: 'var(--font-size-sm)'
          },
          success: {
            iconTheme: {
              primary: 'var(--color-success)',
              secondary: 'var(--color-bg-primary)',
            },
          },
          error: {
            iconTheme: {
              primary: 'var(--color-error)',
              secondary: 'var(--color-bg-primary)',
            },
          },
        }}
      />
      <ScrollToTop />
      <LoadingScreen />
      <Suspense fallback={<LoadingScreen />}>
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
            <Route path="/services/education-consulting" element={<EducationConsulting />} />
            <Route path="/services/career-guidance" element={<CareerGuidance />} />
            <Route path="/services/visa-assistance" element={<VisaAssistance />} />
            <Route path="/services/bootcamps" element={<Bootcamps />} />
            <Route path="/services/school-programs" element={<SchoolPrograms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/bootcamp-calendar" element={<BootcampList />} />
            <Route path="/products" element={<Navigate to="/services" replace />} />
            <Route path="/products/*" element={<Navigate to="/services" replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Legal Routes */}
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
          </Route>

          {/* Standalone 404 Page (No Nav/Footer) */}
          <Route path="*" element={<NotFound />} />

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
      </Suspense>
    </>
  );
}


export default App;
