import React from "react";
import CircleIcon from "../buttons/CircleIcon";
import crossIcon from "/src/assets/icons/cross.svg";
import heartIcon from "/src/assets/icons/heart.svg";
function JobCard({ job, swipeLeft, swipeRight }) {
  return (
    <div className="w-full max-w-7/12 p-6 bg-white rounded-2xl shadow-xl text-left border-4 border-white">
      <h2 className="text-2xl font-bold">{job.title}</h2>
      <p className="text-gray-700">{job.company}</p>
      <p className="text-sm text-gray-500">{job.location}</p>
      <div className="mt-4 text-gray-600 max-w-[95%]">
        {job.description.slice(0, 250)}
        {job.description.length > 250 ? "..." : ""}
      </div>
      <div className="flex justify-between mt-16">
        <CircleIcon
          icon={crossIcon}
          size={50}
          iconSize={40}
          color="#e5e7eb"
          hoverColor="#91a5c2"
          onClick={swipeLeft}
        />
        <CircleIcon
          icon={heartIcon}
          size={50}
          iconSize={30}
          iconFilter="invert(99%) sepia(98%) saturate(355%) hue-rotate(212deg) brightness(120%) contrast(100%)"
          color="#2368db"
          hoverColor="#91a5c2"
          onClick={swipeRight}
        />
      </div>
    </div>
  );
}

export default JobCard;
