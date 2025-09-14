import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Contact = () => {
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
      <h2>Contact Page</h2>
      <p>You can contact us anytime. This page also follows the theme!</p>
    </div>
  );
};

export default Contact;
