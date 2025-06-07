import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", value: 100 },
  { name: "Tue", value: 120 },
  { name: "Wed", value: 110 },
  { name: "Thu", value: 130 },
  { name: "Fri", value: 140 },
  { name: "Sat", value: 150 },
  { name: "Sun", value: 120 },
];

const paymentDetails = [
  { payer: "Unit A", amount: 50000, status: "Paid" },
  { payer: "Unit B", amount: 60000, status: "Pending" },
  { payer: "Unit C", amount: 55000, status: "Paid" },
];

const EnergyUsage: React.FC = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Energy Usage</h1>
    <div className="bg-white p-4 rounded shadow mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-gray-500">Energy Usage</div>
          <div className="text-2xl font-bold">120 kWh</div>
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
      <div className="text-gray-500 mb-2">Payment Details</div>
      <table className="min-w-full text-left">
        <thead>
          <tr>
            <th className="py-2 px-4">Payer</th>
            <th className="py-2 px-4">Amount</th>
            <th className="py-2 px-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {paymentDetails.map((row, idx) => (
            <tr key={idx} className="border-t border-gray-200">
              <td className="py-2 px-4">{row.payer}</td>
              <td className="py-2 px-4">Rp {row.amount.toLocaleString()}</td>
              <td className="py-2 px-4">{row.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default EnergyUsage; 