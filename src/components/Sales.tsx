import React, { useState } from "react";

// Dummy data kompleks dan sales
const complexes = [
  { name: "Boston Village", totalUnit: 400, totalSales: 0.9, totalRevenue: 18000000000 },
  { name: "Green Park", totalUnit: 250, totalSales: 0.8, totalRevenue: 9500000000 },
];

const salesData = {
  "Boston Village": [
    { name: "Lucas Bennett", unit: "Unit 101", address: "123 Oak Street", status: "Active", closing: "2024-08-15", price: 8250000000 },
    { name: "Sophia Carter", unit: "Unit 202", address: "456 Maple Avenue", status: "Closed", closing: "2024-07-20", price: 9300000000 },
    { name: "Owen Davis", unit: "Unit 303", address: "789 Pine Lane", status: "Active", closing: "2024-09-01", price: 7200000000 },
    { name: "Isabella Evans", unit: "Unit 404", address: "1011 Elm Road", status: "Closed", closing: "2024-06-25", price: 10500000000 },
    { name: "Jackson Foster", unit: "Unit 505", address: "1213 Cedar Court", status: "Active", closing: "2024-10-10", price: 8850000000 },
  ],
  "Green Park": [
    { name: "Emily Brown", unit: "Unit 11", address: "12 Green St", status: "Active", closing: "2024-08-10", price: 3500000000 },
    { name: "Michael Lee", unit: "Unit 22", address: "34 Park Ave", status: "Closed", closing: "2024-07-15", price: 4200000000 },
  ],
};

const formatRupiah = (n: number) =>
  "Rp " + n.toLocaleString("id-ID");

type ComplexName = keyof typeof salesData;

type SalesRow = {
  name: string;
  unit: string;
  address: string;
  status: string;
  closing: string;
  price: number;
};

const statusTabs = ["All", "Active", "Closed"];

const Sales: React.FC = () => {
  const [selectedComplex, setSelectedComplex] = useState<ComplexName>("Boston Village");
  const [search, setSearch] = useState("");
  const [statusTab, setStatusTab] = useState("All");

  const complex = complexes.find(c => c.name === selectedComplex)!;
  const data = salesData[selectedComplex];

  // Filter data by status tab
  const filteredByStatus = statusTab === "All"
    ? data
    : data.filter(row => row.status === statusTab);

  // Filter by search
  const filteredData = filteredByStatus.filter(row =>
    row.name.toLowerCase().includes(search.toLowerCase()) ||
    row.unit.toLowerCase().includes(search.toLowerCase()) ||
    row.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold">Property Sales</h1>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Resident Complex Name:</span>
          <select
            className="border rounded px-3 py-1 bg-white"
            value={selectedComplex}
            onChange={e => setSelectedComplex(e.target.value as ComplexName)}
          >
            {complexes.map(c => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Quick Stat */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded p-4">
          <div className="font-semibold text-blue-700">Total Unit</div>
          <div className="text-2xl font-bold">{complex.totalUnit}</div>
        </div>
        <div className="bg-white rounded p-4">
          <div className="font-semibold text-blue-700">Total Sales</div>
          <div className="text-2xl font-bold">{Math.round(complex.totalSales * 100)}%</div>
        </div>
        <div className="bg-white rounded p-4">
          <div className="font-semibold text-blue-700">Total Revenue</div>
          <div className="text-2xl font-bold">{formatRupiah(complex.totalRevenue)}</div>
        </div>
      </div>

      {/* Tabs & Search */}
      <div className="mb-4 flex flex-col gap-2">
        <div className="flex gap-6 border-b border-gray-200">
          {statusTabs.map(tab => (
            <button
              key={tab}
              className={`pb-2 font-semibold ${statusTab === tab ? "border-b-2 border-blue-700 text-blue-700" : "text-gray-500 hover:text-blue-700"}`}
              onClick={() => setStatusTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mt-2 flex items-center bg-blue-50 rounded-lg px-4 py-3">
          <svg className="w-5 h-5 text-blue-400 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
          <input
            type="text"
            className="bg-transparent outline-none w-full text-blue-900 placeholder-blue-400"
            placeholder="Search  by name, unit, or address"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded shadow p-4">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Unit</th>
              <th className="py-2 px-4">Address</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Closing Date</th>
              <th className="py-2 px-4">Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row: SalesRow, idx: number) => (
              <tr key={idx} className="border-t border-gray-200">
                <td className="py-2 px-4">{row.name}</td>
                <td className="py-2 px-4 text-blue-700 font-semibold">{row.unit}</td>
                <td className="py-2 px-4">{row.address}</td>
                <td className="py-2 px-4">
                  <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${row.status === "Active" ? "bg-blue-600" : "bg-gray-400"}`}>{row.status}</span>
                </td>
                <td className="py-2 px-4">{row.closing}</td>
                <td className="py-2 px-4">{formatRupiah(row.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sales; 