import React, { useState, useEffect } from "react";

const Skills = () => {
  const skills = [
    { name: "HTML5", category: "Frontend", logo: "https://cdn-icons-png.flaticon.com/512/732/732212.png", level: 90, description: "Structure et contenu web." },
    { name: "CSS3", category: "Frontend", logo: "https://cdn-icons-png.flaticon.com/512/732/732190.png", level: 85, description: "Design et mise en page." },
    { name: "JavaScript", category: "Frontend", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", level: 80, description: "Langage de programmation web dynamique." },
    { name: "React", category: "Frontend", logo: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png", level: 75, description: "Bibliothèque JavaScript pour des interfaces utilisateur." },
    { name: "Node.js", category: "Backend", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png", level: 70, description: "Environnement pour exécuter JavaScript côté serveur." },
    { name: "Tailwind CSS", category: "Frontend", logo: "https://cdn-icons-png.flaticon.com/512/732/732204.png", level: 65, description: "Framework CSS utilitaire." },
    { name: "Lua", category: "Scripting", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg", level: 60, description: "Langage léger pour scripts embarqués." },
    { name: "Java", category: "Backend", logo: "https://cdn-icons-png.flaticon.com/512/226/226777.png", level: 85, description: "Langage orienté objet populaire." },
    { name: "Python", category: "Backend", logo: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png", level: 90, description: "Langage polyvalent et lisible." },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilterChange = (category) => setSelectedCategory(category);

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  const updateProgressBars = () => {
    document.querySelectorAll(".progress-bar").forEach((bar) => {
      const targetWidth = bar.dataset.targetWidth;
      bar.style.width = `${targetWidth}%`;
    });
  };

  const globalStyles = document.createElement("style");
  globalStyles.textContent = `
    .button-container {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 0.5rem;
    }
  
    .skill-button {
      padding: 0.5rem 1rem;
      background-color: #444;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.3s ease;
      font-size: 1rem;
      font-weight: bold;
    }
  
    .skill-button:hover {
      transform: scale(1.1);
    }
  
    .skill-button.active {
      background-color: #00cec9;
    }
  
    /* Responsive adjustments for mobile */
    @media (max-width: 768px) {
      .button-container {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
  
      .skill-button {
        width: 80%; /* Ensures buttons are centered and have space on mobile */
      }
    }
  `;
  document.head.appendChild(globalStyles);
  



  useEffect(() => {
    const timer = setTimeout(updateProgressBars, 300); // Attend pour mettre à jour les barres
    return () => clearTimeout(timer);
  }, [filteredSkills]);

  return (
    <section style={{ padding: "5rem 2rem", backgroundColor: "#222", textAlign: "center" }} id="skills">
      <h2 style={{ fontSize: "3rem", color: "#ffffff", marginBottom: "3rem" }}>Mes Compétences</h2>
      <div style={{ marginBottom: "2rem" }}>
        {["All", "Frontend", "Backend", "Scripting"].map((category) => (
          <button
            key={category}
            onClick={() => handleFilterChange(category)}
            style={{
              margin: "0 0.5rem",
              padding: "0.5rem 1rem",
              backgroundColor: selectedCategory === category ? "#00cec9" : "#444",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease, transform 0.3s ease",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.1)")}
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
          >
            {category}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "2.5rem" }}>
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-container"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "150px",
              position: "relative",
              opacity: 0,
              animation: `fade-in 0.6s ease forwards`,
              animationDelay: `${index * 0.2}s`,
              transition: "transform 0.3s ease",
            }}
          >
            <div
              style={{
                position: "relative",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                const tooltip = e.currentTarget.querySelector(".tooltip");
                tooltip.style.opacity = "1";
                tooltip.style.transform = "translateY(0)";
              }}
              onMouseLeave={(e) => {
                const tooltip = e.currentTarget.querySelector(".tooltip");
                tooltip.style.opacity = "0";
                tooltip.style.transform = "translateY(10px)";
              }}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="skill-logo"
                style={{
                  width: "70px",
                  height: "70px",
                  marginBottom: "0.5rem",
                  transition: "transform 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
              />
              <div
                className="tooltip"
                style={{
                  position: "absolute",
                  bottom: "120%",
                  left: "50%",
                  transform: "translateX(-50%) translateY(10px)",
                  backgroundColor: "#000",
                  color: "#fff",
                  padding: "0.5rem",
                  borderRadius: "5px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                  fontSize: "0.9rem",
                  textAlign: "center",
                  opacity: 0,
                  transition: "opacity 0.3s ease, transform 0.3s ease",
                  pointerEvents: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {skill.description}
              </div>
            </div>
            <p style={{ color: "#fff", marginTop: "0.5rem" }}>{skill.name}</p>
            <div
              style={{
                width: "100%",
                height: "10px",
                backgroundColor: "#444",
                borderRadius: "5px",
                overflow: "hidden",
                marginTop: "1rem",
              }}
            >
              <div
                className="progress-bar"
                style={{
                  width: "0%", // Initialisé à 0 pour l'animation
                  height: "100%",
                  backgroundColor: "#00cec9",
                  transition: "width 1s ease",
                }}
                data-target-width={skill.level}
              ></div>
            </div>
            <div style={{ marginTop: "0.5rem", color: "#fff", fontSize: "0.9rem" }}>
              {skill.level}%
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
