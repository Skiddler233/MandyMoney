import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomeScreen from "./components/WelcomeScreen";
import TermScreen from "./components/TermScreen";
import AboutYouPage from "./components/AboutYouPage";
import QuizPage from "./components/QuizPage";
import QuizPage2 from "./components/Quizpage2";
import CalculatingResults from "./components/CalculatingResults";
import ResultsPage from "./components/ResultsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="MandyMoney/" element={<WelcomeScreen />} />
        <Route path="MandyMoney/terms" element={<TermScreen />} />
        <Route path="MandyMoney/about" element={<AboutYouPage />} />
        <Route path="MandyMoney/quiz" element={<QuizPage />} />
        <Route path="MandyMoney/quiz2" element={<QuizPage2 />} />
        <Route path="MandyMoney/calculating" element={<CalculatingResults />} />
        <Route path="MandyMoney/results" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
