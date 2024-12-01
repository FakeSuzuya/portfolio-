import React, { useEffect } from "react";
import { gsap } from "gsap";

const Preloader = ({ setLoading }) => {
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .to(".logo", { opacity: 1, duration: 1.5, ease: "power2.inOut" })
      .to(".tagline", { opacity: 1, duration: 1, delay: 0.5 })
      .to(".preloader", {
        opacity: 0,
        duration: 1,
        delay: 1.5,
        onComplete: () => setLoading(false),
      });
  }, [setLoading]);

  return (
    <div className="preloader fixed inset-0 bg-gradient-to-r from-black via-gray-900 to-black flex flex-col justify-center items-center">
      <h1 className="logo text-teal-400 text-6xl font-bold opacity-0">
        Mon Portfolio
      </h1>
      <p className="tagline text-gray-300 text-xl opacity-0 mt-4">
        Bienvenue dans mon univers créatif
      </p>
    </div>
  );
};

export default Preloader;
