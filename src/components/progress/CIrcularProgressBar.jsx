"use client";

import React, { useEffect, useState } from "react";

const CircularProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100); // Delay to allow initial render

    return () => clearTimeout(timer);
  }, [progress]);

  const circleRadius = 50;
  const circumference = 2 * Math.PI * circleRadius;
  const offset = circumference - (animatedProgress / 100) * circumference;

  return (
    <div className="flex items-center justify-center">
      <svg
        className="transform -rotate-90"
        width="120"
        height="120"
        viewBox="0 0 120 120"
      >
        <circle
          cx="60"
          cy="60"
          r={circleRadius}
          strokeWidth="8"
          stroke="#e5e7eb" // Background circle color
          fill="transparent"
        />
        <circle
          cx="60"
          cy="60"
          r={circleRadius}
          strokeWidth="8"
          stroke="#f5be57" // Progress color
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{
            transition: "stroke-dashoffset 1s ease-in-out", // Animation
          }}
        />
      </svg>
      <div className="absolute text-xl font-semibold text-gray-700">
        {animatedProgress}%
      </div>
    </div>
  );
};

export default CircularProgressBar;
