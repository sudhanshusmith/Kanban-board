import React from "react";
import "./Kanban.css";
import { getUserImage, getStatusIcon, getPriorityIcon } from "../Icon/Icon";

const KanbanCard = ({ ticket, users, groupBy }) => {
  const user = users.find((user) => user.id === ticket.userId);

  return (
    <div className="kanban-card">
      <div className="ids">
        <p>{ticket.id}</p>
        <div className={` ${groupBy == "user" ? "d-none" : "profile"}`}>
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
        <div className={` ${groupBy == "status" ? "d-none" : "status"}`}>
          {getStatusIcon(ticket.status)}
        </div>
        <p className="title">{ticket.title}</p>
      </div>
      <div className="desc">
        <div className={` ${groupBy == "priority" ? "d-none" : "priority"}`}>
          {getPriorityIcon(ticket.priority)}
        </div>
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
