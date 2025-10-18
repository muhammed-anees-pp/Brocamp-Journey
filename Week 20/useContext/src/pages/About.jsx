import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const About = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "2rem",
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#222" : "#fff",
        minHeight: "60vh",
      }}
    >
      <h2>About Page</h2>
      <p>This is the About page of our app using a Theme Context.</p>
    </div>
  );
};

export default About;
