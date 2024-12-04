import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/Terms.css"; // Importing external CSS

const TermsAndConditions = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleProceed = () => {
    if (isChecked) {
      navigate("/about");
    } else {
      alert("Please agree to the terms and conditions to proceed.");
    }
  };

  return (
    <div className="terms-container">
      <h1>Terms and Conditions</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        consectetur, sapien vel ullamcorper ultrices, lectus lorem facilisis
        elit, nec tincidunt tortor mauris a lorem. Vivamus at venenatis erat.
      </p>
      <p>
        By proceeding, you agree to the terms and conditions of this financial
        quiz. This is for educational purposes only and does not constitute
        financial advice.
      </p>
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="agree"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="agree"> I agree to the terms and conditions</label>
      </div>
      <button onClick={handleProceed} className="proceed-button">
        Proceed
      </button>
    </div>
  );
};

export default TermsAndConditions;
