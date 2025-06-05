import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import WaterUsagePage from "./pages/WaterUsagePage";
import EnergyUsagePage from "./pages/EnergyUsagePage";
import SalesPage from "./pages/SalesPage";
import PanicAlertsPage from "./pages/PanicAlertsPage";

const App: React.FC = () => {
  const [page, setPage] = useState("Dashboard");

  return (
    <div className="flex">
      <Sidebar selected={page} onSelect={setPage} />
      <main className="flex-1 p-8 bg-gray-50 min-h-screen">
        {page === "Dashboard" && <DashboardPage />}
        {page === "Water Usage" && <WaterUsagePage />}
        {page === "Energy Usage" && <EnergyUsagePage />}
        {page === "Sales" && <SalesPage />}
        {page === "Panic Alerts" && <PanicAlertsPage />}
        {page === "Settings" && <div>Settings Page</div>}
      </main>
    </div>
  );
};

export default App;
