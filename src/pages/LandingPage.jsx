import React from "react";
import JobCard from "../components/cards/JobCard";
import jobsData from "../data/mockJobs";
import "./LandingPage.css";


function LandingPage() {
  const job = jobsData[0];
  return (
    <div className="landing-page">
      <div className="content-container">
        {/* Logo / Brand Name */}
        <h1 className="logo">Silk</h1>

        {/* Headline */}
        <h2 className="headline">Find your next job</h2>

        {/* Subheadline */}
        <p className="subheading">
          Silk helps you discover and <br/>swipe through job opportunities.
        </p>

        {/* Primary CTA Button */}
        <button className="primary-button">Get Started</button>
      </div>
      <div className="jobcard-container">
        <JobCard job={job}/>
      </div>
    </div>
)}
export default LandingPage;
