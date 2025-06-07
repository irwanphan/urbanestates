import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", value: 900 },
  { name: "Tue", value: 1100 },
  { name: "Wed", value: 1200 },
  { name: "Thu", value: 1000 },
  { name: "Fri", value: 1300 },
  { name: "Sat", value: 1250 },
  { name: "Sun", value: 1200 },
];

const usageDetails = [
  { date: "2024-06-01", summary: "Unit A", usage: 300 },
  { date: "2024-06-02", summary: "Unit B", usage: 250 },
  { date: "2024-06-03", summary: "Unit C", usage: 200 },
  { date: "2024-06-04", summary: "Unit D", usage: 450 },
];

const WaterUsage: React.FC = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Water Usage</h1>
    <div className="bg-white p-4 rounded shadow mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-gray-500">Water Usage</div>
          <div className="text-2xl font-bold">1200 L</div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#2563eb" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    <div className="bg-white p-4 rounded shadow">
      <div className="text-gray-500 mb-2">Usage Details</div>
      <table className="min-w-full text-left">
        <thead>
          <tr>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Summary</th>
            <th className="py-2 px-4">Usage (L)</th>
          </tr>
        </thead>
        <tbody>
          {usageDetails.map((row, idx) => (
            <tr key={idx} className="border-t border-gray-200">
              <td className="py-2 px-4">{row.date}</td>
              <td className="py-2 px-4">{row.summary}</td>
              <td className="py-2 px-4">{row.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default WaterUsage; 