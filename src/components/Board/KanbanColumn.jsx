import React from "react";
import KanbanCard from "./KanbanCard";
import {
  getUserImage,
  getStatusIcon,
  getPriorityIconByText,
  getEllipseIcon,
  getPlusIcon,
} from "../Icon/Icon";
import "./Kanban.css";

const KanbanColumn = ({ title, tickets = [], users, groupBy }) => {
  // Ensure tickets is an array
  if (!Array.isArray(tickets)) {
    console.error("KanbanColumn received tickets that is not an array");
    return null;
  }

  let user;
  if (groupBy === "user") {
    user = users.find((user) => user.id === tickets[0].userId);
  }

  return (
    <div className="column">
      <div className="top">
        <div className="top-left">
          {groupBy === "status" && (
            <div className="box status-box">
              {getStatusIcon(title)} <span className="title">{title}</span>
              <span className="count">{tickets.length} </span>
            </div>
          )}
          {groupBy === "user" && (
            <div className="box user-box">
              <div className="profile">
                <img
                  src={getUserImage(user.id)}
                  alt={title}
                  className="user-image"
                />
                <div
                  className={`user-badge ${
                    user.available ? "available" : "unavailable"
                  }`}
                ></div>
              </div>
              <span className="title">{title}</span>
              <span className="count">{tickets.length} </span>
            </div>
          )}
          {groupBy === "priority" && (
            <div className="box priority-box">
              {getPriorityIconByText(title)}{" "}
              <span className="title">{title}</span>
              <span className="count">{tickets.length} </span>
            </div>
          )}
        </div>
        <div className="top-right">
          {getPlusIcon()}
          {getEllipseIcon()}
        </div>
      </div>

      {tickets.map((ticket) => (
        <KanbanCard
          key={ticket.id}
          ticket={ticket}
          users={users}
          groupBy={groupBy}
        />
      ))}
    </div>
  );
};

export default KanbanColumn;
