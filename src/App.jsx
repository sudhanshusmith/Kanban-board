import React, { useState, useEffect } from "react";
import KanbanBoard from "./components/Board/KanbanBoard";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState(() => {
    return localStorage.getItem("groupBy") || "status";
  });
  const [orderBy, setOrderBy] = useState(() => {
    return localStorage.getItem("orderBy") || "priority";
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        const data = await response.json();
        setTickets(data.tickets);
        setUsers(data.users);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchTickets();
  }, []);

  useEffect(() => {
    localStorage.setItem("groupBy", groupBy);
  }, [groupBy]);

  useEffect(() => {
    localStorage.setItem("orderBy", orderBy);
  }, [orderBy]);

  // Show a loading message or spinner while fetching data
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <Navbar
        groupBy={groupBy}
        orderBy={orderBy}
        setGroupBy={setGroupBy}
        setOrderBy={setOrderBy}
      />
      <KanbanBoard
        tickets={tickets}
        users={users}
        groupBy={groupBy}
        orderBy={orderBy}
      />
    </div>
  );
}

export default App;
