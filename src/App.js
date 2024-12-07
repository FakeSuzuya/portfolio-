import React, { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderFinish = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <Preloader onFinish={handlePreloaderFinish} />
      ) : (
        <div>
          <Navbar />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      )}
    </>
  );
};

export default App;
