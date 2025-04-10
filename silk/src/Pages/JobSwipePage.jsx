import React, { useState } from "react";
import JobCard from "../components/cards/JobCard";
import jobsData from "../data/mockJobs"; // Mock data array

function JobSwipePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedJobs, setSavedJobs] = useState([]);

  const handleSwipeRight = () => {
    const job = jobsData[currentIndex];
    setSavedJobs([...savedJobs, job]);
    goToNext();
  };

  const handleSwipeLeft = () => {
    goToNext();
  };

  const goToNext = () => {
    if (currentIndex < jobsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("You’ve reached the end!");
    }
  };

  return (
    <div className="h-screen w-full bg-gray-50 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-4 text-indigo-600">Silk</h1>

      {jobsData[currentIndex] ? (
        <>
          <JobCard job={jobsData[currentIndex]} />

          <div className="flex gap-6 mt-6">
            <button
              onClick={handleSwipeLeft}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl shadow-lg"
            >
              ❌ Skip
            </button>

            <button
              onClick={handleSwipeRight}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-xl shadow-lg"
            >
              ✅ Save
            </button>
          </div>
        </>
      ) : (
        <div className="text-xl text-gray-600">No more jobs to show.</div>
      )}
    </div>
  );
}

export default JobSwipePage;
