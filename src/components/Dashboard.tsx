import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", value: 120 },
  { name: "Feb", value: 132 },
  { name: "Mar", value: 101 },
  { name: "Apr", value: 134 },
  { name: "May", value: 90 },
  { name: "Jun", value: 230 },
  { name: "Jul", value: 210 },
];

const Dashboard: React.FC = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-4 rounded shadow">
        <div className="text-gray-500">Occupancy Rate</div>
        <div className="text-xl font-bold">95%</div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <div className="text-gray-500">Avg Rent</div>
        <div className="text-xl font-bold">Rp 7,500,000</div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <div className="text-gray-500">Total Revenue</div>
        <div className="text-xl font-bold">Rp 10,000,000,000</div>
      </div>
    </div>
    <div className="bg-white p-4 rounded shadow mb-8">
      <div className="text-gray-500 mb-2">Key Metrics</div>
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
      <div className="text-gray-500 mb-2">AR Integration</div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Launch AR Mode</button>
    </div>
  </div>
);

export default Dashboard;
