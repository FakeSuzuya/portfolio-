import React from "react";
import { FaReact, FaHtml5, FaCss3, FaJs } from "react-icons/fa";

const Skills = () => {
  const skills = [
    { name: "React", icon: <FaReact size={40} color="#61DBFB" /> },
    { name: "HTML5", icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3 size={40} color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs size={40} color="#F7DF1E" /> },
  ];

  return (
    <section
      id="skills"
      className="bg-black text-white py-20 px-10 text-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-teal-400">Mes Compétences</h2>
      <div className="flex justify-center gap-10 flex-wrap">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            {skill.icon}
            <span className="mt-2">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
