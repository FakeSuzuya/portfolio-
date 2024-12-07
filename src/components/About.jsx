import React from "react";

const About = () => {
  const globalStyles = document.createElement("style");
  globalStyles.textContent = `
    @keyframes fade-in-up {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  `;
  document.head.appendChild(globalStyles);

  const sectionStyle = {
    padding: "5rem 2rem",
    backgroundColor: "#1e1e1e",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    color: "#ffffff",
    textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
    marginBottom: "2rem",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    color: "#b2bec3",
    lineHeight: "1.8",
    maxWidth: "800px",
    margin: "0 auto",
    animation: "fade-in-up 1.5s ease-in-out",
    opacity: 0,
    animationFillMode: "forwards",
  };

  const avatarStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    margin: "0 auto",
    marginBottom: "2rem",
    animation: "pulse 2s infinite",
    boxShadow: "0 0 15px rgba(0, 206, 201, 0.5)",
  };

  const timelineStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2rem",
    marginTop: "3rem",
    color: "#b2bec3",
  };

  const timelineItemStyle = {
    textAlign: "left",
    maxWidth: "500px",
    backgroundColor: "#2d2d2d",
    padding: "1rem",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    animation: "fade-in-up 1.5s ease-in-out",
    animationFillMode: "forwards",
  };

  const iconContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "2rem",
    marginTop: "3rem",
  };

  const iconStyle = {
    fontSize: "2rem",
    color: "#00cec9",
    transition: "transform 0.3s ease, color 0.3s ease",
    cursor: "pointer",
  };

  const buttonContainerStyle = {
    marginTop: "3rem",
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    backgroundColor: "#00cec9",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
    fontSize: "1rem",
    fontWeight: "bold",
    margin: "0 0.5rem",
  };

  return (
    <section style={sectionStyle} id="about">
      <img
        src="https://i.giphy.com/ZVik7pBtu9dNS.webp"
        alt="Avatar"
        style={avatarStyle}
      />
      <h2 style={headingStyle}>À propos de moi</h2>
      <p style={paragraphStyle}>
        Je suis Johan, un développeur de 18 ans passionné par la technologie et l'innovation.
        J'adore transformer des idées en solutions concrètes grâce à mes
        compétences en développement web.
      </p>
      <div style={iconContainerStyle}>
        <div
          style={iconStyle}
          onMouseEnter={(e) => (e.target.style.color = "#01d1d1")}
          onMouseLeave={(e) => (e.target.style.color = "#00cec9")}
        >
          🔧 Innovation
        </div>
        <div
          style={iconStyle}
          onMouseEnter={(e) => (e.target.style.color = "#01d1d1")}
          onMouseLeave={(e) => (e.target.style.color = "#00cec9")}
        >
          🤝 Travail d'équipe
        </div>
        <div
          style={iconStyle}
          onMouseEnter={(e) => (e.target.style.color = "#01d1d1")}
          onMouseLeave={(e) => (e.target.style.color = "#00cec9")}
        >
          💡 Résolution de problèmes
        </div>
      </div>
      <div style={timelineStyle}>
        <div style={timelineItemStyle}>
          <h4>2020 : Début de l'apprentissage</h4>
          <p>
            J'ai commencé à explorer les bases du développement web, en
            découvrant HTML, CSS et JavaScript.
          </p>
        </div>
        <div style={timelineItemStyle}>
          <h4>2022 : Projets freelances</h4>
          <p>
            J'ai travaillé sur plusieurs projets pour des clients, notamment la
            création de sites vitrine et des applications React.
          </p>
        </div>
        <div style={timelineItemStyle}>
          <h4>2024 : Objectifs</h4>
          <p>
            Je vise à approfondir mes connaissances en backend et à devenir un
            développeur full-stack compétent.
          </p>
        </div>
      </div>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle}>Télécharger mon CV</button>
        <button style={buttonStyle}>Contactez-moi</button>
      </div>
    </section>
  );
};

export default About;
