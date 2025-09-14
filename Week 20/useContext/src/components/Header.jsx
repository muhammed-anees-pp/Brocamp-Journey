import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        padding: "1rem",
        textAlign: "center",
        background: theme === "light" ? "#f9f9f9" : "#333",
        color: theme === "light" ? "#333" : "#f9f9f9",
      }}
    >
      <h1>Theme Context App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </header>
  );
};

export default Header;
