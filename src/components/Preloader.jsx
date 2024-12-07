import React, { useEffect, useState } from "react";

const Preloader = ({ onFinish }) => {
  const [name, setName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullName = "Johan, votre développeur favori"; // Remplacez par votre prénom
  const typingSpeed = isDeleting ? 50 : 100; // Réglage de la vitesse d'écriture
  const [showCursor, setShowCursor] = useState(true); // Gestion de la barre clignotante
  const [fadeOut, setFadeOut] = useState(false); // Gestion du fondu en sortie
  const [particles, setParticles] = useState([]); // Particules du fond

  useEffect(() => {
    // Effet d'écriture dynamique
    let timeout;
    if (!isDeleting && name === fullName) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && name === "") {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    } else {
      timeout = setTimeout(() => {
        setName((prev) =>
          isDeleting
            ? fullName.substring(0, prev.length - 1)
            : fullName.substring(0, prev.length + 1)
        );
      }, typingSpeed);
    }
    return () => clearTimeout(timeout);
  }, [name, isDeleting, fullName, typingSpeed]);

  useEffect(() => {
    // Gestion de la transition fluide vers le site
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => onFinish(), 1000); // Attendre la fin du fondu
    }, 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  useEffect(() => {
    // Barre clignotante
    const cursorBlink = setInterval(() => setShowCursor((prev) => !prev), 500);
    return () => clearInterval(cursorBlink);
  }, []);

  useEffect(() => {
    // Génération des particules du fond
    const createParticles = () => {
      const newParticles = Array.from({ length: 20 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 5 + 2,
        opacity: Math.random() * 0.5 + 0.5,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
      }));
      setParticles(newParticles);
    };
    createParticles();
  }, []);

  useEffect(() => {
    // Animation des particules
    const interval = setInterval(() => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          x: particle.x + particle.speedX,
          y: particle.y + particle.speedY,
          opacity: particle.opacity > 0.1 ? particle.opacity - 0.01 : 0.5,
        }))
      );
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const preloaderStyles = {
    position: "fixed",
    inset: 0,
    background: "linear-gradient(135deg, #1e1e1e, #2b2b2b)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    color: "#00cec9",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    gap: "2rem", // Espacement entre les éléments
    opacity: fadeOut ? 0 : 1,
    transition: "opacity 1s ease-in-out",
  };

  const spinnerStyles = {
    width: "70px",
    height: "70px",
    border: "5px solid rgba(255, 255, 255, 0.2)",
    borderTop: "5px solid #00cec9",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  const logoStyles = {
    width: "150px",
    height: "150px",
  };

  const nameStyles = {
    fontSize: "2rem",
    marginBottom: "0.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const cursorStyles = {
    marginLeft: "5px",
    width: "10px",
    height: "2rem",
    backgroundColor: "#00cec9",
  };

  const globalStyles = document.createElement("style");
  globalStyles.textContent = `
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes blink {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `;
  document.head.appendChild(globalStyles);

  return (
    <div style={preloaderStyles}>
      {/* Particules en arrière-plan */}
      {particles.map((particle, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            top: particle.y,
            left: particle.x,
            width: particle.size,
            height: particle.size,
            borderRadius: "50%",
            backgroundColor: "#00cec9",
            opacity: particle.opacity,
          }}
        ></div>
      ))}

      {/* Contenu du préchargeur */}
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExemM1emViYXR1cDN3Y3VyOGxlb25idHp4cnF1dm05cHkzZHZoYzNraSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/lozzv5tmBwrXXLAwEy/giphy.gif"
        alt="Logo"
        style={logoStyles}
      />
      <div style={spinnerStyles}></div>
      <div style={nameStyles}>
        {name}
        <span style={{ ...cursorStyles, visibility: showCursor ? "visible" : "hidden" }} />
      </div>
    </div>
  );
};

export default Preloader;
