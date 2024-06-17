import { useState } from "react";
import "./App.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

const App = () => {
  const [lightMode, setLightMode] = useState(false);

  const changeMode = () => {
    setLightMode((prevLightMode) => !prevLightMode);
  };
  return (
    <div className={`${lightMode ? "lightBody" : "darkBody"}`}>
      <Cursor />
      <section id="Homepage">
        {lightMode ? (
          <i className="sunIcon fa-regular fa-moon" onClick={changeMode}></i>
        ) : (
          <i className="sunIcon fa-regular fa-sun" onClick={changeMode}></i>
        )}
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
