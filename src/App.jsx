// Css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Biodata from "./pages/BioData";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Hire from "./pages/Hire";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Work from "./pages/Work";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Biodata />
      <Projects />
      <Hire />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
