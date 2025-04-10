import React from "react";

function JobCard({ job }) {
  return (
    <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-xl text-left border-2 border-white-300">
      <h2 className="text-2xl font-bold">{job.title}</h2>
      <p className="text-gray-700">{job.company}</p>
      <p className="text-sm text-gray-500">{job.location}</p>
      <div className="mt-4 text-gray-600">
        {job.description.slice(0, 200)}
        {job.description.length > 200 ? "..." : ""}
      </div>
    </div>
  );
}

export default JobCard;
