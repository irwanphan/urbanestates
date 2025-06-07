import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import WaterUsagePage from "./pages/WaterUsagePage";
import EnergyUsagePage from "./pages/EnergyUsagePage";
import SalesPage from "./pages/SalesPage";
import PanicAlertsPage from "./pages/PanicAlertsPage";
import ComplaintsPage from "./pages/ComplaintsPage";
import OccupancyPage from "./pages/Occupancy";
import LoginPage from "./pages/LoginPage";
import ResidentsPage from "./pages/ResidentsPage";
import SettingsPage from "./pages/SettingsPage";

const App: React.FC = () => {
  const [page, setPage] = useState("Dashboard");
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    fetch('/api/me', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setLoggedIn(data.loggedIn))
      .catch(() => setLoggedIn(false));
  }, []);

  if (loggedIn === null) return <div>Loading...</div>;
  if (!loggedIn) return <LoginPage onLoginSuccess={() => setLoggedIn(true)} />;

  return (
    <div className="flex">
      <Sidebar selected={page} onSelect={setPage} />
      <main className="flex-1 p-8 bg-gray-50 min-h-screen ml-56">
        {page === "Dashboard" && <DashboardPage />}
        {page === "Water Usage" && <WaterUsagePage />}
        {page === "Energy Usage" && <EnergyUsagePage />}
        {page === "Sales" && <SalesPage />}
        {page === "Occupancy" && <OccupancyPage />}
        {page === "Residents" && <ResidentsPage />}
        {page === "Panic Alerts" && <PanicAlertsPage />}
        {page === "Complaints" && <ComplaintsPage />}
        {page === "Settings" && <SettingsPage />}
      </main>
    </div>
  );
};

export default App;
