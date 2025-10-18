import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Home = () => {
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
      <h2>Home Page</h2>
      <p>Welcome to our website using React Context for theme management!</p>
    </div>
  );
};

export default Home;
