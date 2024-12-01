import React, { useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5 }
    );
    gsap.fromTo(
      ".hero-subtitle",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5 }
    );
  }, []);

  return (
    <section className="hero bg-gradient-to-r from-black via-gray-900 to-black text-center text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="hero-title text-6xl font-bold text-teal-400 mb-4">
        Bienvenue, je suis Johan
      </h1>
      <p className="hero-subtitle text-gray-300 text-xl">
        Développeur web passionné, créateur d'expériences modernes.
      </p>
    </section>
  );
};

export default Hero;
