//.------..------..------..------..------..------..------..------..------.     .------..------..------..------.
//|J.--. ||U.--. ||S.--. ||T.--. ||J.--. ||O.--. ||H.--. ||A.--. ||N.--. |.-.  |C.--. ||O.--. ||D.--. ||E.--. |
//| :(): || (\/) || :/\: || :/\: || :(): || :/\: || :/\: || (\/) || :(): ((5)) | :/\: || :/\: || :/\: || (\/) |
//| ()() || :\/: || :\/: || (__) || ()() || :\/: || (__) || :\/: || ()() |'-.-.| :\/: || :\/: || (__) || :\/: |
//| '--'J|| '--'U|| '--'S|| '--'T|| '--'J|| '--'O|| '--'H|| '--'A|| '--'N| ((1)) '--'C|| '--'O|| '--'D|| '--'E|
//`------'`------'`------'`------'`------'`------'`------'`------'`------'  '-'`------'`------'`------'`------'




import React, { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Portfolio Moderne",
      description: "Un portfolio interactif avec animations.",
      technologies: ["React", "Tailwind", "Framer Motion"],
      status: "Terminé",
      duration: "2 mois",
      users: "100+ utilisateurs",
    },
    {
      title: "To-Do App",
      description: "Application de gestion des tâches simple et efficace.",
      technologies: ["Vue.js", "Node.js", "MongoDB"],
      status: "En cours",
      duration: "1 mois",
      users: "50+ utilisateurs",
    },
    {
      title: "E-Commerce",
      description: "Site de commerce électronique complet.",
      technologies: ["Next.js", "Stripe", "Firebase"],
      status: "À venir",
      duration: "Prévu : 3 mois",
      users: "N/A",
    },
  ];

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const cardStyles = {
    background: "#2d2d2d",
    borderRadius: "10px",
    padding: "1.5rem",
    textAlign: "center",
    color: "#ffffff",
    boxShadow: "0 0 5px #00cec9, 0 0 10px #00cec9",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const badgeStyles = {
    display: "inline-block",
    background: "#00cec9",
    color: "#000",
    padding: "0.3rem 0.5rem",
    borderRadius: "5px",
    fontSize: "0.8rem",
    marginRight: "0.5rem",
  };

  const modalStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#1e1e1e",
    color: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    zIndex: 1000,
    boxShadow: "0 0 20px rgba(0, 206, 201, 0.5)",
    textAlign: "center",
    maxWidth: "500px",
  };

  const overlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: 999,
  };

  return (
    <section
      id="projects"
      style={{
        padding: "5rem 2rem",
        backgroundColor: "#1e1e1e",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          color: "#ffffff",
          textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
        }}
      >
        Mes Projets
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          marginTop: "2rem",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={cardStyles}
            onClick={() => openModal(project)}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 0 10px #00cec9, 0 0 20px #00cec9, 0 0 30px #00cec9";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 0 5px #00cec9, 0 0 10px #00cec9";
            }}
          >
            <h3 style={{ fontSize: "1.5rem", color: "#00cec9" }}>{project.title}</h3>
            <p style={{ fontSize: "1rem", color: "#b2bec3" }}>{project.description}</p>
            <div>
              {project.technologies.map((tech, i) => (
                <span key={i} style={badgeStyles}>
                  {tech}
                </span>
              ))}
            </div>
            <p style={{ fontSize: "0.9rem", marginTop: "0.5rem" }}>
              <strong>Statut :</strong>{" "}
              <span style={{ color: project.status === "Terminé" ? "#00cec9" : "#b2bec3" }}>
                {project.status}
              </span>
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <>
          <div style={overlayStyles} onClick={closeModal}></div>
          <div style={modalStyles}>
            <h3 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#00cec9" }}>
              {selectedProject.title}
            </h3>
            <p style={{ marginBottom: "1rem" }}>{selectedProject.description}</p>
            <div>
              {selectedProject.technologies.map((tech, i) => (
                <span key={i} style={badgeStyles}>
                  {tech}
                </span>
              ))}
            </div>
            <p style={{ margin: "1rem 0" }}>
              <strong>Durée :</strong> {selectedProject.duration}
            </p>
            <p style={{ margin: "1rem 0" }}>
              <strong>Utilisateurs :</strong> {selectedProject.users}
            </p>
            <button
              onClick={closeModal}
              style={{
                padding: "0.5rem 1rem",
                backgroundColor: "#00cec9",
                color: "#000",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Fermer
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;

