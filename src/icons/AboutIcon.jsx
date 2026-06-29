import React from "react";

const AboutIcon = ({ type, color = "#ffffff" }) => {
  const commonClass = "h-8 w-8";

  if (type === "creativity") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={commonClass}
        fill="none"
        style={{ color }}
      >
        <path
          d="M9 21h6M10 17h4M8.5 14.5C6.9 13.4 6 11.7 6 9.8C6 6.6 8.7 4 12 4s6 2.6 6 5.8c0 1.9-.9 3.6-2.5 4.7-.9.7-1.5 1.4-1.5 2.5h-4c0-1.1-.6-1.8-1.5-2.5Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "innovation") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={commonClass}
        fill="none"
        style={{ color }}
      >
        <path
          d="M14 4c-3.8.8-6.6 3.6-7.5 7.5L4 14l2.5 1.5L8 18l2.5-2.5C14.4 14.6 17.2 11.8 18 8l2-4-6 0Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 18c-1.2.4-2 1.2-2 2 1-.1 2.1-.4 3-1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="14" cy="8" r="1.5" fill="currentColor" />
      </svg>
    );
  }

  if (type === "technical") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={commonClass}
        fill="none"
        style={{ color }}
      >
        <path
          d="M9 9h6v6H9V9Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M4 9h3M4 15h3M17 9h3M17 15h3M9 4v3M15 4v3M9 17v3M15 17v3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect
          x="6"
          y="6"
          width="12"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }

  if (type === "visual") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={commonClass}
        fill="none"
        style={{ color }}
      >
        <path
          d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle
          cx="12"
          cy="12"
          r="2.5"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  }

  return null;
};

export default AboutIcon;