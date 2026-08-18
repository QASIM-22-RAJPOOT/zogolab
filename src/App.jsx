import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import SEO from "./components/SEO";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

const MainPage = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Contact />
    </>
  );
};

const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => {
        const section = document.getElementById(hash.replace("#", ""));

        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);

      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#030414] text-white">
      <ScrollManager />
      <SEO />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/privacy-policy" element={<Legal />} />
          <Route
            path="/legal"
            element={<Navigate to="/privacy-policy" replace />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
