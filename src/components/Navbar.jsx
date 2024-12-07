//.------..------..------..------..------..------..------..------..------.     .------..------..------..------.
//|J.--. ||U.--. ||S.--. ||T.--. ||J.--. ||O.--. ||H.--. ||A.--. ||N.--. |.-.  |C.--. ||O.--. ||D.--. ||E.--. |
//| :(): || (\/) || :/\: || :/\: || :(): || :/\: || :/\: || (\/) || :(): ((5)) | :/\: || :/\: || :/\: || (\/) |
//| ()() || :\/: || :\/: || (__) || ()() || :\/: || (__) || :\/: || ()() |'-.-.| :\/: || :\/: || (__) || :\/: |
//| '--'J|| '--'U|| '--'S|| '--'T|| '--'J|| '--'O|| '--'H|| '--'A|| '--'N| ((1)) '--'C|| '--'O|| '--'D|| '--'E|
//`------'`------'`------'`------'`------'`------'`------'`------'`------'  '-'`------'`------'`------'`------'




import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "70px",
        background: isOpen ? "#121212" : "rgba(0, 0, 0, 0.9)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
        zIndex: 9999,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 2rem",
        transition: "background-color 0.3s ease",
      }}
    >
      <h1
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#ffffff",
          textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        Portfolio version mobile pas terminer
      </h1>
      <button
        style={{
          display: "block",
          cursor: "pointer",
          fontSize: "1.5rem",
          color: "#ffffff",
          background: "none",
          border: "none",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <ul
        style={{
          listStyle: "none",
          display: isOpen ? "flex" : "none",
          flexDirection: "column",
          gap: "1rem",
          position: "absolute",
          top: "70px",
          right: 0,
          background: "#121212",
          padding: "1rem",
          borderRadius: "10px",
          transition: "all 0.3s ease",
        }}
      >
        {["À propos", "Compétences", "Projets", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              style={{
                textDecoration: "none",
                color: "#ffffff",
                fontSize: "1rem",
                transition: "color 0.3s ease",
              }}
              onMouseOver={(e) =>
                (e.target.style.color = "#00cec9")
              }
              onMouseOut={(e) =>
                (e.target.style.color = "#ffffff")
              }
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
