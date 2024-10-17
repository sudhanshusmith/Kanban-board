import React from "react";
import KanbanCard from "./KanbanCard";
import "./Kanban.css";

const KanbanColumn = ({ title, tickets = [], users}) => {
  // Ensure tickets is an array
  if (!Array.isArray(tickets)) {
    console.error("KanbanColumn received tickets that is not an array");
    return null; // Return nothing to avoid rendering in case of invalid data
  }

  console.log("col", title, tickets);

  return (
    <div className="column">
      <h2>{title}</h2>
      {tickets.length === 0 ? (
        <p>No tickets available for this category</p>
      ) : (
        tickets.map((ticket) => <KanbanCard key={ticket.id} ticket={ticket} users={users} />)
      )}
    </div>
  );
};

export default KanbanColumn;
