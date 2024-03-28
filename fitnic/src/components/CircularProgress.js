import React from 'react';

// CircularProgress component
const CircularProgress = ({ progress, currentWeight }) => {
  const radius = 70;
  const stroke = 10;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="progress-box">
      <svg
        height={radius * 2}
        width={radius * 2}
        className="progress-circle"
      >
        {/* Background circle */}
        <circle
          stroke="#ED6B7B"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Foreground circle (progress) */}
        <circle
          stroke="#e6e6e6"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>
      <div className="progress-text">        
        <p>{progress}%</p>
      </div>
    </div>
  );
};

export default CircularProgress;