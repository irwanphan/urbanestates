import React from "react";

const complexes = [
  { name: "Boston Village", occupied: 360, total: 400 },
  { name: "Green Park", occupied: 200, total: 250 },
  { name: "Sunset Residence", occupied: 120, total: 150 },
];

const Occupancy: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Occupancy</h1>
      <div className="bg-white rounded shadow p-4">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="py-2 px-4">Complex</th>
              <th className="py-2 px-4">Occupied Units</th>
              <th className="py-2 px-4">Total Units</th>
              <th className="py-2 px-4">Occupancy Rate</th>
            </tr>
          </thead>
          <tbody>
            {complexes.map((c, idx) => {
              const percent = c.total > 0 ? Math.round((c.occupied / c.total) * 100) : 0;
              return (
                <tr key={idx} className="border-t">
                  <td className="py-2 px-4 font-semibold">{c.name}</td>
                  <td className="py-2 px-4">{c.occupied}</td>
                  <td className="py-2 px-4">{c.total}</td>
                  <td className="py-2 px-4">
                    <span className={`font-bold ${percent >= 90 ? "text-green-600" : percent >= 70 ? "text-yellow-600" : "text-red-600"}`}>{percent}%</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Occupancy; 