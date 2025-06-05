import React from "react";

const salesData = [
  { name: "John Doe", date: "2024-06-01", unit: "A-101", price: 1500000000, status: "Closed" },
  { name: "Jane Smith", date: "2024-06-02", unit: "A-102", price: 1450000000, status: "Pending" },
  { name: "Alice Brown", date: "2024-06-03", unit: "B-201", price: 1600000000, status: "Closed" },
];

const Sales: React.FC = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Sales</h1>
    <div className="bg-white p-4 rounded shadow">
      <table className="min-w-full text-left">
        <thead>
          <tr>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Unit</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {salesData.map((row, idx) => (
            <tr key={idx} className="border-t">
              <td className="py-2 px-4">{row.name}</td>
              <td className="py-2 px-4">{row.date}</td>
              <td className="py-2 px-4">{row.unit}</td>
              <td className="py-2 px-4">Rp {row.price.toLocaleString()}</td>
              <td className="py-2 px-4">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Sales; 