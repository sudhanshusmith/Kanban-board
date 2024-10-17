import React from "react";
import KanbanCard from "./KanbanCard";

const KanbanColumn = ({ title, tickets = [] }) => {
  // Ensure tickets is an array
  if (!Array.isArray(tickets)) {
    console.error("KanbanColumn received tickets that is not an array");
    return null; // Return nothing to avoid rendering in case of invalid data
  }

  console.log("col", title, tickets);

  return (
    <div className="kanban-column">
      <h2>{title}</h2>
      {tickets.length === 0 ? (
        <p>No tickets available for this category</p>
      ) : (
        tickets.map((ticket) => <KanbanCard key={ticket.id} ticket={ticket} />)
      )}
    </div>
  );
};

export default KanbanColumn;
