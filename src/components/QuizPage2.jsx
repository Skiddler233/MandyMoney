import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '/style/QuizPage.css'; // Assuming you have a separate CSS file for QuizPage styles

const QuizPage = () => {
  const [answers, setAnswers] = useState({
    q1: "", // Answer for Question 1
    q2: "", // Answer for Question 2
    q3: "", // Answer for Question 3
    q4: "", // Answer for Question 4
  });

  const navigate = useNavigate();

  const handleFinish = () => {
    // Ensure all questions have been answered before navigating
    if (Object.values(answers).includes("")) {
      alert("Please answer all questions before proceeding.");
    } else {
      navigate("/calculating");
    }
  };

  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  return (
    <div className="quiz-container">
      <h2>Quiz</h2>

      {/* Question 1 */}
      <p>Question 5: How frequently do you track your spending?</p>
      <div className="radio-container">
        {["1", "2", "3", "4", "5"].map((value) => (
          <label key={value} className="radio-label">
            <input
              type="radio"
              name="q1"
              value={value}
              checked={answers.q1 === value}
              onChange={() => handleChange("q1", value)}
            />
            <span className="radio-box">{value}</span>
          </label>
        ))}
      </div>

      {/* Question 2 */}
      <p>Question 6: How comfortable are you with your current debt load?</p>
      <div className="radio-container">
        {["1", "2", "3", "4", "5"].map((value) => (
          <label key={value} className="radio-label">
            <input
              type="radio"
              name="q2"
              value={value}
              checked={answers.q2 === value}
              onChange={() => handleChange("q2", value)}
            />
            <span className="radio-box">{value}</span>
          </label>
        ))}
      </div>

      {/* Question 3 */}
      <p>Question 7: How well do you understand the basics of investing?</p>
      <div className="radio-container">
        {["1", "2", "3", "4", "5"].map((value) => (
          <label key={value} className="radio-label">
            <input
              type="radio"
              name="q3"
              value={value}
              checked={answers.q3 === value}
              onChange={() => handleChange("q3", value)}
            />
            <span className="radio-box">{value}</span>
          </label>
        ))}
      </div>

      {/* Question 4 */}
      <p>Question 8: How confident are you in your ability to manage an emergency fund?</p>
      <div className="radio-container">
        {["1", "2", "3", "4", "5"].map((value) => (
          <label key={value} className="radio-label">
            <input
              type="radio"
              name="q4"
              value={value}
              checked={answers.q4 === value}
              onChange={() => handleChange("q4", value)}
            />
            <span className="radio-box">{value}</span>
          </label>
        ))}
      </div>

      {/* Finish Button */}
      <button onClick={handleFinish}>Finish</button>
    </div>
  );
};

export default QuizPage;
