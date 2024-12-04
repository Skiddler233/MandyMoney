import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/WelcomeScreen.css";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/terms");
  };

  return (
    <div className="welcome-container">
      <img src="/assets/lilguy.png" alt="Kangaroo" />
      <h1>Welcome to the Mandy Money Quiz</h1>
      <button onClick={startQuiz}>Start Quiz</button>
    </div>
  );
};

export default WelcomeScreen;
