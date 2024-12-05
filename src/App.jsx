import React from "react";
import { Routes, Route } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import TermScreen from "./components/TermScreen";
import AboutYouPage from "./components/AboutYouPage";
import QuizPage from "./components/QuizPage";
import QuizPage2 from "./components/Quizpage2";
import CalculatingResults from "./components/CalculatingResults";
import ResultsPage from "./components/ResultsPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomeScreen />} />
      <Route path="/terms" element={<TermScreen />} />
      <Route path="/about" element={<AboutYouPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/quiz2" element={<QuizPage2 />} />
      <Route path="/calculating" element={<CalculatingResults />} />
      <Route path="/results" element={<ResultsPage />} />
    </Routes>
  );
};

export default App;
