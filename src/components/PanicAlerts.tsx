import React from "react";

const alertData = [
  { resident: "John Doe", date: "2024-06-01", time: "10:00", status: "Pending", action: "Respond" },
  { resident: "Jane Smith", date: "2024-06-02", time: "11:30", status: "Resolved", action: "View Details" },
  { resident: "Alice Brown", date: "2024-06-03", time: "09:15", status: "Pending", action: "Respond" },
];

const PanicAlerts: React.FC = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Panic Alerts</h1>
    <div className="bg-white p-4 rounded shadow">
      <table className="min-w-full text-left">
        <thead>
          <tr>
            <th className="py-2 px-4">Resident</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Time</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {alertData.map((row, idx) => (
            <tr key={idx} className="border-t">
              <td className="py-2 px-4">{row.resident}</td>
              <td className="py-2 px-4">{row.date}</td>
              <td className="py-2 px-4">{row.time}</td>
              <td className="py-2 px-4">{row.status}</td>
              <td className="py-2 px-4">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">{row.action}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default PanicAlerts; 