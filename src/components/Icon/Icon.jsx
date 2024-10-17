import React from "react";
import add from "../../assets/icons/add.svg";
import backlog from "../../assets/icons/backlog.svg";
import cancel from "../../assets/icons/cancel.svg";
import correct from "../../assets/icons/correct.svg";
import down from "../../assets/icons/down.svg";
import high from "../../assets/icons/high.svg";
import low from "../../assets/icons/low.svg";
import medium from "../../assets/icons/medium.svg";
import menu from "../../assets/icons/menu.svg";
import nopriority from "../../assets/icons/nopriority.svg";
import progress from "../../assets/icons/progress.svg";
import setting from "../../assets/icons/setting.svg";
import todo from "../../assets/icons/todo.svg";
import urgentc from "../../assets/icons/urgentc.svg";
import urgentg from "../../assets/icons/urgentg.svg";
import "./Icon.css";

// export const DownArrowIcon = () => {
//   return <img src={down} alt="down" className="svgIcon" />;
// };

export const SettingIcon = () => {
  return <img src={setting} alt="Setting" className="svgIcon" />;
};

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

export const getPriorityIcon = (priority) => {
  switch (priority) {
    case 0:
      return <img src={nopriority} alt="No priority" className="svgIcon" />;
    case 1:
      return <img src={low} alt="Low" className="svgIcon" />;
    case 2:
      return <img src={medium} alt="Medium" className="svgIcon" />;
    case 3:
      return <img src={high} alt="High" className="svgIcon" />;
    case 4:
      return <img src={urgentg} alt="Urgent" className="svgIcon" />;
    default:
      return <img src={nopriority} alt="No priority" className="svgIcon" />;
  }
};

export const getPriorityIconByText = (priority) => {
  switch (priority) {
    case "No priority":
      return <img src={nopriority} alt="No priority" className="svgIcon" />;
    case "Low":
      return <img src={low} alt="Low" className="svgIcon" />;
    case "Medium":
      return <img src={medium} alt="Medium" className="svgIcon" />;
    case "High":
      return <img src={high} alt="High" className="svgIcon" />;
    case "Urgent":
      return <img src={urgentc} alt="Urgent" className="svgIcon" />;
    default:
      return <img src={nopriority} alt="No priority" className="svgIcon" />;
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
      return <img src={todo} alt="To do" className="svgIcon" />;
    case "backlog":
      return <img src={backlog} alt="Backlog" className="svgIcon" />;
    case "in progress":
      return <img src={progress} alt="In progress" className="svgIcon" />;
    case "done":
      return <img src={correct} alt="Done" className="svgIcon" />;
    case "canceled":
      return <img src={cancel} alt="Canceled" className="svgIcon" />;
    default:
      return <img src={todo} alt="To do" className="svgIcon" />;
  }
};

export const getUserImage = (userId) => {
  const userNumber = parseInt(userId.match(/\d+/)[0], 10);
  const avatarNumber = userNumber % 10;
  return `https://randomuser.me/api/portraits/men/${avatarNumber}.jpg`;
};

export const getPlusIcon = () => {
  return <img src={add} alt="Add" className="svgIcon" />;
};
export const getEllipseIcon = () => {
  return <img src={menu} alt="Menu" className="svgIcon" />;
};
