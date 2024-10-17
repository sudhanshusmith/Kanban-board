import React from "react";
import "./Kanban.css";

const getPriorityIcon = (priority) => {
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

const getPriorityLabel = (priority) => {
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

const getStatusIcon = (status) => {
  switch (status.toLowerCase()) {
    case "todo":
      return <div className="status-icon todo-icon"></div>;
    case "in progress":
      return <div className="status-icon in-progress-icon"></div>;
    case "in done":
      return <div className="status-icon done-icon">&#10003;</div>;
    case "canceled":
      return <div className="status-icon canceled-icon">&#10005;</div>;
    default:
      return <div className="status-icon default-icon"></div>;
  }
};

// Function to get the user image using Random User API
const getUserImage = (userId) => {
  const userNumber = parseInt(userId.match(/\d+/)[0], 10);
  const avatarNumber = userNumber % 10;
  return `https://randomuser.me/api/portraits/men/${avatarNumber}.jpg`;
};

const KanbanCard = ({ ticket, users }) => {
  const user = users.find((user) => user.id === ticket.userId);

  return (
    <div className="kanban-card">
      <div className="ids">
        <p>{ticket.id}</p>
        <div className="profile">
          <img
            src={getUserImage(ticket.userId)}
            alt={user.name}
            className="user-image"
          />
          <div
            className={`user-badge ${
              user.available ? "available" : "unavailable"
            }`}
          ></div>
        </div>
      </div>
      <div className="header">
        <div className="status">{getStatusIcon(ticket.status)}</div>
        <p className="title">{ticket.title}</p>
      </div>
      <div className="desc">
        <div className="priority">{getPriorityIcon(ticket.priority)}</div>
        <div className="tags">
          {ticket.tag.map((tag, index) => (
            <span key={index} className="tag">
              <div className="dot"></div>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KanbanCard;
