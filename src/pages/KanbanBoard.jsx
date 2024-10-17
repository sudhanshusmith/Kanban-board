import React from "react";
import KanbanColumn from "../KanbanColumn";

const KanbanBoard = ({
  tickets = [],
  users = [],
  groupBy = "status",
  orderBy = "priority",
}) => {
  if (!Array.isArray(tickets) || tickets.length === 0) {
    console.error("No valid tickets array found or the tickets array is empty");
    return <p>No tickets available</p>;
  }

  const groupTickets = () => {
    switch (groupBy) {
      case "status":
        const defaultStatuses = {
          Todo: { count: 0, tickets: [] },
          "In progress": { count: 0, tickets: [] },
          Done: { count: 0, tickets: [] },
          Backlog: { count: 0, tickets: [] },
          Canceled: { count: 0, tickets: [] },
        };

        const groupedByStatus = tickets.reduce((acc, ticket) => {
          if (!acc[ticket.status]) {
            acc[ticket.status] = { count: 0, tickets: [] };
          }
          acc[ticket.status].tickets.push(ticket);
          acc[ticket.status].count += 1;
          return acc;
        }, defaultStatuses);

        return groupedByStatus;

      case "user":
        const groupedByUser = users.reduce((acc, user) => {
          acc[user.name] = { count: 0, tickets: [] };
          return acc;
        }, {});

        tickets.forEach((ticket) => {
          const userName = users.find(
            (user) => user.id === ticket.userId
          )?.name;
          if (userName) {
            groupedByUser[userName].tickets.push(ticket);
            groupedByUser[userName].count += 1;
          }
        });

        return groupedByUser;

      case "priority":
        const defaultPriorities = {
          0: { count: 0, tickets: [] },
          1: { count: 0, tickets: [] },
          2: { count: 0, tickets: [] },
          3: { count: 0, tickets: [] },
          4: { count: 0, tickets: [] },
        };

        const groupedByPriority = tickets.reduce((acc, ticket) => {
          const priorityLevel = ticket.priority.toString();
          if (!acc[priorityLevel]) {
            acc[priorityLevel] = { count: 0, tickets: [] };
          }
          acc[priorityLevel].tickets.push(ticket);
          acc[priorityLevel].count += 1;
          return acc;
        }, defaultPriorities);

        const priorityWithCounts = {};
        for (const priority in groupedByPriority) {
          const label = getPriorityLabel(parseInt(priority));
          priorityWithCounts[label] = groupedByPriority[priority];
        }

        return priorityWithCounts;

      default:
        return {};
    }
  };

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 4:
        return "Urgent";
      case 3:
        return "High";
      case 2:
        return "Medium";
      case 1:
        return "Low";
      case 0:
      default:
        return "No Priority";
    }
  };

  const sortedTickets = (group) => {
    if (!Array.isArray(group)) return []; // Ensure 'group' is an array
    return group.sort((a, b) => {
      if (orderBy === "priority") {
        return b.priority - a.priority;
      } else if (orderBy === "title") {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
  };

  // Ordering the groups based on the predefined order and moving zero count groups to the end
  const sortGroups = (groups) => {
    if (groupBy === "status") {
      const statusOrder = [
        "Backlog",
        "Todo",
        "In progress",
        "Done",
        "Canceled",
      ];
      return groups.sort((a, b) => {
        const aIndex = statusOrder.indexOf(a);
        const bIndex = statusOrder.indexOf(b);

        // Move groups with zero count to the end
        if (groupedTickets[a].count === 0 && groupedTickets[b].count === 0) {
          return aIndex - bIndex;
        }
        if (groupedTickets[a].count === 0) return 1;
        if (groupedTickets[b].count === 0) return -1;

        return aIndex - bIndex;
      });
    } else if (groupBy === "priority") {
      const priorityOrder = ["No Priority", "Urgent", "High", "Medium", "Low"];
      return groups.sort((a, b) => {
        const aIndex = priorityOrder.indexOf(a);
        const bIndex = priorityOrder.indexOf(b);

        // Move groups with zero count to the end
        if (groupedTickets[a].count === 0 && groupedTickets[b].count === 0) {
          return aIndex - bIndex;
        }
        if (groupedTickets[a].count === 0) return 1;
        if (groupedTickets[b].count === 0) return -1;

        return aIndex - bIndex;
      });
    }

    // For user groupBy, no special ordering needed
    return groups;
  };

  const groupedTickets = groupTickets();
  const sortedGroups = sortGroups(Object.keys(groupedTickets));

  return (
    <div className="kanban-board">
      {sortedGroups.map((group) => (
        <KanbanColumn
          key={group}
          title={group}
          tickets={sortedTickets(groupedTickets[group]?.tickets || [])}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
