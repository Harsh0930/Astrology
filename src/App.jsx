import { Routes, Route } from "react-router-dom";
import { AppShell } from "./components/AppShell";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { HoroscopePage } from "./pages/HoroscopePage";
import { RashiPage } from "./pages/RashiPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const pages = [
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/services", element: <ServicesPage /> },
    { path: "/horoscope", element: <HoroscopePage /> },
    { path: "/rashi", element: <RashiPage /> },
    { path: "/contact", element: <ContactPage /> },
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
