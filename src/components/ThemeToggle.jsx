import React, { useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.className = darkMode ? "light-mode" : "dark-mode";
  };

  return (
    <div style={{ position: "fixed", top: "1rem", right: "1rem", zIndex: 1000 }}>
      <button
        onClick={toggleTheme}
        style={{
          padding: "0.5rem 1rem",
          fontSize: "1rem",
          backgroundColor: darkMode ? "#222" : "#ddd",
          color: darkMode ? "#fff" : "#000",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {darkMode ? "☀️ Mode Clair" : "🌙 Mode Sombre"}
      </button>
    </div>
  );
};

export default ThemeToggle;
