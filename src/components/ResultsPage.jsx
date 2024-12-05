import React from "react";
import { useLocation } from "react-router-dom";
import '../style/ResultsPage.css';

const ResultsPage = () => {
  // Use the useLocation hook to get the state passed from the About You page
  const location = useLocation();
  const { name } = location.state || {}; // Default to an empty object if no state exists

  return (
    <div className="results-container">
      <div className="header">
        <h1>{name ? `${name}'s Results` : "Your Results"}</h1>
      </div>

      <div className="results-content">
        <div className="left-section">
          <h2>Insights 🧠</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum erat vel mauris laoreet, nec
            lacinia tortor malesuada. Sed viverra, erat in blandit euismod, odio libero scelerisque libero, a tincidunt
            metus dui id risus. Morbi imperdiet tempor erat, nec congue nulla vestibulum a. Ut id lorem vehicula, semper
            lorem non, tempor ipsum.
          </p>
          
          <h2>Recommendations 💡</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum erat vel mauris laoreet, nec
            lacinia tortor malesuada. Sed viverra, erat in blandit euismod, odio libero scelerisque libero, a tincidunt
            metus dui id risus. Morbi imperdiet tempor erat, nec congue nulla vestibulum a. Ut id lorem vehicula, semper
            lorem non, tempor ipsum.
          </p>
        </div>

        <div className="right-section">
          <div className="score">
            <h2>Your Score ⚽ 📈</h2>
            <div className="score-number">
              <h1>76 / 100</h1>
            </div>
          </div>

          <div className="charts">
            <div className="pie-chart">
              {/* Example placeholder for pie chart */}
              <img src="assets/piechart.png" alt="Pie Chart" />
            </div>
            <div className="bar-chart">
              {/* Example placeholder for bar chart */}
              <img src="assets/bargraph.png" alt="Bar Chart" />
            </div>
          </div>
        </div>
      </div>

      <div className="resources">
        <h2>Resources 📚</h2>
        <ul>
          <li><a href="#">Resource One long URL</a></li>
          <li><a href="#">Resource Two long URL</a></li>
          <li><a href="#">Resource Three long URL</a></li>
        </ul>
      </div>

      <div className="download-button">
        <button>Download Full Results</button>
      </div>
    </div>
  );
};

export default ResultsPage;
