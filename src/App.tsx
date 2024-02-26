import { useEffect, useState } from "react";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";

function App() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScroll(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      <div
        className={`${isScroll ? "opacity-100" : "opacity-0"} transition-all duration-500`}
      >
        <BackToTop />
      </div>
    </>
  );
}

export default App;
