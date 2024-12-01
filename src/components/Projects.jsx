import React from "react";

const Projects = () => {
  const projects = [
    {
      name: "Portfolio Sybrax",
      description: "Un portfolio moderne avec animations interactives.",
    },
    {
      name: "To-Do App",
      description: "Une application de gestion des tâches efficace.",
    },
  ];

  return (
    <section id="projects" className="bg-gray-900 text-white py-20 px-10">
      <h2 className="text-4xl font-bold mb-6 text-center text-teal-400">
        Mes Projets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-black p-6 rounded shadow-lg hover:scale-105 hover:shadow-xl transition transform"
          >
            <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
