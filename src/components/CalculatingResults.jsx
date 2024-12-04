import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "/style/Calculating.css";

const CalculatingResults = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/results");
    }, 3000); // Simulate a delay

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <h2>Calculating your results...</h2>
      <img src="/assets/loading1.gif" alt="Loading..." />
    </div>
  );
};

export default CalculatingResults;
