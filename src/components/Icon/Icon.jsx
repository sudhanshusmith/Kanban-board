import React from "react";
import "./Icon.css";

export const DownArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chevron-down"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export const UpArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="feather feather-chevron-up"
  >
    <polyline points="18 15 12 9 6 15"></polyline>
  </svg>
);

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case 0:
      return <div className="icon no-priority">---</div>; // No priority
    case 1:
      return (
        <div className={`icon priority-${priority} allPriority`}>
          <div className="bar first-bar"></div>
          <div className="bar second-bar"></div>
          <div className="bar third-bar"></div>
        </div>
      );
    case 2:
      return (
        <div className={`icon priority-${priority} allPriority`}>
          <div className="bar first-bar"></div>
          <div className="bar second-bar"></div>
          <div className="bar third-bar"></div>
        </div>
      );
    case 3:
      return (
        <div className={`icon priority-${priority} allPriority`}>
          <div className="bar first-bar"></div>
          <div className="bar second-bar"></div>
          <div className="bar third-bar"></div>
        </div>
      );
    case 4:
      return <div className="icon urgent-priority">!</div>; // Urgent priority
    default:
      return <div className="icon no-priority">---</div>; // Default to "No priority"
  }
};

export const getPriorityIconByText = (priority) => {
  switch (priority) {
    case "No priority":
      return <div className="icon no-priority ins">---</div>; // No priority
    case "Low":
      return (
        <div className={`icon priority-1 allPriority`}>
          <div className="bar first-bar"></div>
          <div className="bar second-bar"></div>
          <div className="bar third-bar"></div>
        </div>
      );
    case "Medium":
      return (
        <div className={`icon priority-2 allPriority`}>
          <div className="bar first-bar"></div>
          <div className="bar second-bar"></div>
          <div className="bar third-bar"></div>
        </div>
      );
    case "High":
      return (
        <div className={`icon priority-3 allPriority`}>
          <div className="bar first-bar"></div>
          <div className="bar second-bar"></div>
          <div className="bar third-bar"></div>
        </div>
      );
    case "Urgent":
      return <div className="icon urgent-priority">!</div>; // Urgent priority
    default:
      return <div className="icon no-priority">---</div>; // Default to "No priority"
  }
};

export const getPriorityLabel = (priority) => {
  switch (priority) {
    case 0:
      return "No priority";
    case 1:
      return "Low";
    case 2:
      return "Medium";
    case 3:
      return "High";
    case 4:
      return "Urgent";
    default:
      return "Unknown";
  }
};

export const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case "todo":
      return <div className="status-icon todo-icon"></div>;
    case "in progress":
      return <div className="status-icon in-progress-icon"></div>;
    case "done":
      return <div className="status-icon done-icon">&#10003;</div>;
    case "canceled":
      return <div className="status-icon canceled-icon">&#10005;</div>;
    default:
      return <div className="status-icon default-icon"></div>;
  }
};

export const getUserImage = (userId) => {
  const userNumber = parseInt(userId.match(/\d+/)[0], 10);
  const avatarNumber = userNumber % 10;
  return `https://randomuser.me/api/portraits/men/${avatarNumber}.jpg`;
};

export const getPlusIcon = () => {
  return <div class="top-icons plus-icon"></div>;
};
export const getEllipseIcon = () => {
  return (
    <div class="top-icons ellipsis-icon">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
  );
};
