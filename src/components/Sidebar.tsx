import React from "react";

type SidebarProps = {
  selected: string;
  onSelect: (page: string) => void;
};

const menu = [
  "Dashboard",
  "Water Usage",
  "Energy Usage",
  "Sales",
  "Panic Alerts",
  "Settings",
];

const Sidebar: React.FC<SidebarProps> = ({ selected, onSelect }) => (
  <aside className="bg-blue-600 text-white w-56 min-h-screen p-4">
    <h2 className="font-bold text-lg mb-8">Urban Estates</h2>
    <ul>
      {menu.map((item) => (
        <li
          key={item}
          className={`p-2 rounded cursor-pointer mb-2 ${selected === item ? "bg-blue-800" : ""}`}
          onClick={() => onSelect(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
