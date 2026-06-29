import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";

function App() {
  return (
    <div className="min-h-screen bg-[#030414] text-white overflow-x-hidden">
      <Navbar />

      <Home />
      <About />
      <Services />
      <Portfolio />
      <Process />
       <Legal/>
      <Contact />
     
    </div>
  );
}

export default App;