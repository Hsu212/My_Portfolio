import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Background3D } from "./components/Background3D"; 

function App() {
  return (
    // Ensure bg-transparent is set here
    <div className="relative min-h-screen text-gray-100 bg-transparent">
      <Background3D /> 
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
