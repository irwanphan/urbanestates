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
  IconLogout,
} from "@tabler/icons-react";
import { useNavigate, useLocation } from "react-router-dom";

type SidebarProps = {
  onLogout: () => void;
};

const menu = [
  { name: "Dashboard", icon: <IconLayoutDashboard size={20} />, path: "/dashboard" },
  { name: "Water Usage", icon: <IconDroplet size={20} />, path: "/water-usage" },
  { name: "Energy Usage", icon: <IconBolt size={20} />, path: "/energy-usage" },
  { name: "Sales", icon: <IconHome size={20} />, path: "/sales" },
  { name: "Occupancy", icon: <IconBuildingCommunity size={20} />, path: "/occupancy" },
  { name: "Residents", icon: <IconUsers size={20} />, path: "/residents" },
  { name: "Panic Alerts", icon: <IconBellRinging size={20} />, path: "/panic-alerts" },
  { name: "Complaints", icon: <IconBellRinging size={20} />, path: "/complaints" },
  { name: "Settings", icon: <IconSettings size={20} />, path: "/settings" },
];

const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="fixed top-0 left-0 h-screen w-56 bg-blue-600 text-white p-4 z-20">
      <h2 className="font-bold text-lg mb-1">Urban Estates</h2>
      <div className="text-xs text-blue-200 mb-8">Property Management</div>
      <ul>
        {menu.map((item) => (
          <li
            key={item.name}
            className={`flex items-center gap-3 py-2 px-3 rounded-full cursor-pointer mb-2 transition ${
              location.pathname === item.path ? "bg-blue-800" : "hover:bg-blue-700"
            }`}
            onClick={() => navigate(item.path)}
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
        <li className="flex absolute bottom-4 w-48 items-center gap-3 py-2
          px-3 rounded-full cursor-pointer transition mt-auto hover:bg-blue-700"
          onClick={() => onLogout()}
          >
          <IconLogout size={20} />
          <span>Logout</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
