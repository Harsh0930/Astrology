import { Routes, Route } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { HoroscopePage } from "./pages/HoroscopePage";
import { RashiPage } from "./pages/RashiPage";
import { ContactPage } from "./pages/ContactPage";
import { TestimonialsPage } from "./pages/TestimonialsPage";
import { LegalPage } from "./pages/LegalPage";

export default function App() {
  const pages = [
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/services", element: <ServicesPage /> },
    { path: "/services/:serviceSlug", element: <ServiceDetailPage /> },
    { path: "/testimonials", element: <TestimonialsPage /> },
    { path: "/horoscope", element: <HoroscopePage /> },
    { path: "/rashi", element: <RashiPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "/privacy-policy", element: <LegalPage pageKey="privacy" /> },
    { path: "/terms-of-service", element: <LegalPage pageKey="terms" /> },
    { path: "/terms-and-conditions", element: <LegalPage pageKey="terms" /> },
    { path: "/refund-policy", element: <LegalPage pageKey="refund" /> },
    { path: "/disclaimer", element: <LegalPage pageKey="disclaimer" /> },
  ];

  return (
    <Routes>
      <Route element={<AppShell />}>
        {pages.map((page) => (
          <Route key={page.path} path={page.path} element={page.element} />
        ))}
        {pages.map((page) => (
          <Route
            key={`hi-${page.path}`}
            path={page.path === "/" ? "/hi" : `/hi${page.path}`}
            element={page.element}
          />
        ))}
      </Route>
    </Routes>
  );
}
