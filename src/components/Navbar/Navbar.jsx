import React, { useState, useEffect, useRef } from "react";
import { DownArrowIcon, SettingIcon } from "../Icon/Icon";
import "./Navbar.css";

const Navbar = ({ groupBy, orderBy, setGroupBy, setOrderBy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isGroupingOpen, setIsGroupingOpen] = useState(false);
  const [isOrderingOpen, setIsOrderingOpen] = useState(false);
  const dropdownRef = useRef(null);
  const groupingRef = useRef(null);
  const orderingRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleGroupingChange = (e) => {
    setGroupBy(e.target.value);
    setIsGroupingOpen(false);
  };

  const handleOrderingChange = (e) => {
    setOrderBy(e.target.value);
    setIsOrderingOpen(false);
  };

  const toggleGroupingDropdown = () => {
    setIsGroupingOpen(!isGroupingOpen);
  };

  const toggleOrderingDropdown = () => {
    setIsOrderingOpen(!isOrderingOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
      setIsGroupingOpen(false);
      setIsOrderingOpen(false);
    }
    if (groupingRef.current && !groupingRef.current.contains(event.target)) {
      setIsGroupingOpen(false);
    }
    if (orderingRef.current && !orderingRef.current.contains(event.target)) {
      setIsOrderingOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar">
      <div className="dropdown-container" ref={dropdownRef}>
        <button className="dropdown-button" onClick={toggleDropdown}>
          <SettingIcon />
          <span className="text">Display</span>
          <span className="icon">
            <DownArrowIcon />
          </span>
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-section">
              <label>Grouping</label>
              <div
                className="dropdown-with-icon"
                onClick={toggleGroupingDropdown}
                ref={groupingRef}
              >
                <select value={groupBy} onChange={handleGroupingChange}>
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
                <DownArrowIcon />
              </div>
            </div>
            <div className="dropdown-section">
              <label>Ordering</label>
              <div
                className="dropdown-with-icon"
                onClick={toggleOrderingDropdown}
                ref={orderingRef}
              >
                <select value={orderBy} onChange={handleOrderingChange}>
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
                <DownArrowIcon />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
