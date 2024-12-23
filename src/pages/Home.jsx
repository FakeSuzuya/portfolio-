//.------..------..------..------..------..------..------..------..------.     .------..------..------..------.
//|J.--. ||U.--. ||S.--. ||T.--. ||J.--. ||O.--. ||H.--. ||A.--. ||N.--. |.-.  |C.--. ||O.--. ||D.--. ||E.--. |
//| :(): || (\/) || :/\: || :/\: || :(): || :/\: || :/\: || (\/) || :(): ((5)) | :/\: || :/\: || :/\: || (\/) |
//| ()() || :\/: || :\/: || (__) || ()() || :\/: || (__) || :\/: || ()() |'-.-.| :\/: || :\/: || (__) || :\/: |
//| '--'J|| '--'U|| '--'S|| '--'T|| '--'J|| '--'O|| '--'H|| '--'A|| '--'N| ((1)) '--'C|| '--'O|| '--'D|| '--'E|
//`------'`------'`------'`------'`------'`------'`------'`------'`------'  '-'`------'`------'`------'`------'





import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
