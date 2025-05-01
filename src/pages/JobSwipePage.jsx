// src/pages/JobSwipePage.jsx
import React, { useState, useEffect } from "react";
import JobCard from "../components/cards/JobCard";
import jobsData from "../data/mockJobs"; // Mock data array
import Header from '../components/navbar/Header';
import Sidebar from '../components/navbar/Sidebar';

export default function JobSwipePage() {
  // just show all jobs
  const filteredJobs = jobsData;

  // swipe deck state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedJobs,   setSavedJobs]   = useState([]);

  const goToNext = () => {
    if (currentIndex < filteredJobs.length - 1) {
      setCurrentIndex(i => i + 1);
    } else {
      alert("You’ve reached the end!");
    }
  };

  const handleSwipeRight = () => {
    setSavedJobs(s => [...s, filteredJobs[currentIndex]]);
    goToNext();
  };

  const handleSwipeLeft = () => {
    goToNext();
  };

  return (
    <div className="app-grid h-screen">
      <Header />

      <main className="main-content flex-1 flex flex-col items-center justify-center bg-gray-50 p-4">
        <h1 className="text-3xl font-bold mb-4 text-indigo-600">Silk</h1>

        {filteredJobs[currentIndex] ? (
          <JobCard
            job={filteredJobs[currentIndex]}
            swipeLeft={handleSwipeLeft}
            swipeRight={handleSwipeRight}
          />
        ) : (
          <div className="text-xl text-gray-600">No more jobs to show.</div>
        )}
      </main>
    </div>
  );
}
