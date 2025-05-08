import React, { useState } from "react";
import JobCard from "../components/cards/JobCard";
import jobsData from "../data/mockJobs"; // Mock data array

function JobSwipePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [savedJobs, setSavedJobs] = useState([]);
  const [flipped, setFlipped] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState("");

  const handleSwipeRight = () => {
    setSwipeDirection("swipe-right"); // Set swipe direction
    setTimeout(() => {
      setFlipped(false);
      const job = jobsData[currentIndex];
      setSavedJobs([...savedJobs, job]);
      goToNext();
      setSwipeDirection(""); // Reset swipe direction after animation
    }, 500); // animation duration
  };


  const handleSwipeLeft = () => {
    setSwipeDirection("swipe-left"); // swipe direction set to left
    setTimeout(() => {
      setFlipped(false);
      goToNext();
      setSwipeDirection(""); // Reset swipe direction after animation
    }, 500); // animation duration
  };

  const goToNext = () => {
    if (currentIndex < jobsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("You’ve reached the end!");
    }
  };

  const toggleFlip = () => {
    setFlipped(!flipped);
  };`     `

  return (
    <div className="h-screen w-full bg-gray-50 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl font-bold mb-4 text-indigo-600">Silk</h1>

      {jobsData[currentIndex] ? (
        <>
          <JobCard
            job={jobsData[currentIndex]}
            flipped={flipped}
            swipeLeft={handleSwipeLeft}
            swipeRight={handleSwipeRight}
            toggleFlip={toggleFlip}
            swipeDirection={swipeDirection}
          />
        </>
      ) : (
        <div className="text-xl text-gray-600">No more jobs to show.</div>
      )}
    </div>
  );
}

export default JobSwipePage;
