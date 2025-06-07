import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    fetch('/api/me', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setLoggedIn(data.loggedIn))
      .catch(() => setLoggedIn(false));
  }, []);

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST', credentials: 'include' });
    setLoggedIn(false);
  };

  if (loggedIn === null) return <div>Loading...</div>;
  if (!loggedIn) return <LoginPage onLoginSuccess={() => setLoggedIn(true)} />;

  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar onLogout={handleLogout} />
        <main className="flex-1 p-8 bg-gray-50 min-h-screen ml-56">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/water-usage" element={<WaterUsagePage />} />
            <Route path="/energy-usage" element={<EnergyUsagePage />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/occupancy" element={<OccupancyPage />} />
            <Route path="/residents" element={<ResidentsPage />} />
            <Route path="/panic-alerts" element={<PanicAlertsPage />} />
            <Route path="/complaints" element={<ComplaintsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
