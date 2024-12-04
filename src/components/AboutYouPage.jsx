import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '/style/AboutYou.css';

const AboutYouPage = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [location, setLocation] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [interest, setInterest] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!name || !gender || !location || !ageGroup || !interest) {
      alert("Please fill out all fields before proceeding.");
    } else {
      // Navigate to quiz page
      navigate("/quiz", { state: { name } });
    }
  };
return (
    <div>
    <div className="image-container">
    <img src="/assets/flyinglady.png" alt="Loading..." />
    </div>
    <div className="about-you-page">
  
      <h2>About You</h2>

      {/* Name Input */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* Dropdown for Gender */}
      <div className="dropdown">
        <label>Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Dropdown for Location */}
      <div className="dropdown">
        <label>Location</label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">State</option>
          <option value="ACT">ACT</option>
          <option value="NSW">NSW</option>
          <option value="NT">NT</option>
          <option value="QLD">QLD</option>
          <option value="SA">SA</option>
          <option value="WA">WA</option>
        </select>
      </div>

      {/* Dropdown for Age Group */}
      <div className="dropdown">
        <label>Age Group</label>
        <select
          value={ageGroup}
          onChange={(e) => setAgeGroup(e.target.value)}
        >
          <option value="">Select Age Group</option>
          <option value="18-24">12-18</option>
          <option value="25-34">19-30</option>
          <option value="35-44">30-44</option>
          <option value="45+">45+</option>
        </select>
      </div>

      {/* Dropdown for Interest */}
      <div className="dropdown">
        <label>Education</label>
        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        >
          <option value="">Select Higest Education</option>
          <option value="Primary">Primary School</option>
          <option value="High">High School</option>
          <option value="Bachelor">Bachelor's Degree</option>
          <option value="Master/PHD">Masters/PHD</option>
        </select>
      </div>

      {/* Next Button */}
      <button onClick={handleNext}>Next</button>
    </div>
    </div>
  );
};

export default AboutYouPage;
