import React, { useState } from "react";

// Dummy data kompleks
const complexes = [
  { name: "Boston Village" },
  { name: "Green Park" },
];

// Dummy data complaints per kompleks
const complaintsData = {
  "Boston Village": [
    { resident: "Ethan Harper", unit: "Apt 203", time: "10:15 AM", status: "Pending", action: "Respond" },
    { resident: "Olivia Bennett", unit: "Apt 101", time: "10:05 AM", status: "Resolved", action: "View Details" },
    { resident: "Noah Carter", unit: "Apt 302", time: "9:55 AM", status: "Pending", action: "Respond" },
    { resident: "Sophia Evans", unit: "Apt 102", time: "9:45 AM", status: "Resolved", action: "View Details" },
    { resident: "Liam Foster", unit: "Apt 201", time: "9:35 AM", status: "Pending", action: "Respond" },
  ],
  "Green Park": [
    { resident: "Emily Brown", unit: "Apt 11", time: "10:10 AM", status: "Pending", action: "Respond" },
    { resident: "Michael Lee", unit: "Apt 22", time: "9:50 AM", status: "Resolved", action: "View Details" },
  ],
};

type ComplexName = keyof typeof complaintsData;
type ComplaintRow = typeof complaintsData[ComplexName][number];

const ComplaintsTracker: React.FC = () => {
  const [selectedComplex, setSelectedComplex] = useState<ComplexName>("Boston Village");
  const data = complaintsData[selectedComplex];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold">Complaints Tracker</h1>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Resident Complex Name:</span>
          <select
            className="border rounded px-3 py-1"
            value={selectedComplex}
            onChange={e => setSelectedComplex(e.target.value as ComplexName)}
          >
            {complexes.map(c => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Dummy Map */}
      <div className="bg-white rounded shadow mb-6 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
          alt="Map"
          className="rounded w-full max-w-2xl h-80 object-cover"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow p-4">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="py-2 px-4">Resident</th>
              <th className="py-2 px-4">Unit</th>
              <th className="py-2 px-4">Time</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row: ComplaintRow, idx: number) => (
              <tr key={idx} className="border-t">
                <td className="py-2 px-4">{row.resident}</td>
                <td className="py-2 px-4 text-blue-700 font-semibold">{row.unit}</td>
                <td className="py-2 px-4">{row.time}</td>
                <td className="py-2 px-4">
                  <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${row.status === "Pending" ? "bg-orange-500" : "bg-gray-400"}`}>
                    {row.status}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <button className="text-blue-700 font-semibold hover:underline">{row.action}</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComplaintsTracker;
