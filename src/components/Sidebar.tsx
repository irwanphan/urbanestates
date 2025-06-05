import React from "react";
import {
  IconLayoutDashboard,
  IconDroplet,
  IconBolt,
  IconHome,
  IconBuildingCommunity,
  IconUsers,
  IconBellRinging,
  IconSettings,
} from "@tabler/icons-react";

type SidebarProps = {
  selected: string;
  onSelect: (page: string) => void;
};

const menu = [
  { name: "Dashboard", icon: <IconLayoutDashboard size={20} /> },
  { name: "Water Usage", icon: <IconDroplet size={20} /> },
  { name: "Energy Usage", icon: <IconBolt size={20} /> },
  { name: "Sales", icon: <IconHome size={20} /> },
  { name: "Occupancy", icon: <IconBuildingCommunity size={20} /> },
  { name: "Residents", icon: <IconUsers size={20} /> },
  { name: "Panic Alerts", icon: <IconBellRinging size={20} /> },
  { name: "Complaints", icon: <IconBellRinging size={20} /> },
  { name: "Settings", icon: <IconSettings size={20} /> },
];

const Sidebar: React.FC<SidebarProps> = ({ selected, onSelect }) => (
  <aside className="fixed top-0 left-0 h-screen w-56 bg-blue-600 text-white p-4 z-20">
    <h2 className="font-bold text-lg mb-1">Urban Estates</h2>
    <div className="text-xs text-blue-200 mb-8">Property Management</div>
    <ul>
      {menu.map((item) => (
        <li
          key={item.name}
          className={`flex items-center gap-3 py-2 px-3 rounded-full cursor-pointer mb-2 transition ${selected === item.name ? "bg-blue-800" : "hover:bg-blue-700"}`}
          onClick={() => onSelect(item.name)}
        >
          {item.icon}
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;
