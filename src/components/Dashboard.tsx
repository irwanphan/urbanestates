import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const data = [
  { name: "Jan", value: 120 },
  { name: "Feb", value: 132 },
  { name: "Mar", value: 101 },
  { name: "Apr", value: 134 },
  { name: "May", value: 90 },
  { name: "Jun", value: 230 },
  { name: "Jul", value: 210 },
];

const houses = [
  {
    id: 1,
    name: "Alex Johnson",
    unit: "A-101",
    status: "Occupied",
    position: [-6.2001, 106.8167],
  },
  {
    id: 2,
    name: "Maria Tan",
    unit: "A-102",
    status: "Vacant",
    position: [-6.2005, 106.8172],
  },
  {
    id: 3,
    name: "Budi Santoso",
    unit: "B-201",
    status: "Occupied",
    position: [-6.2003, 106.8162],
  },
];

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

const Dashboard: React.FC = () => (
  <div>
    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-white p-4 rounded shadow">
        <div className="text-gray-500">Occupancy Rate</div>
        <div className="text-xl font-bold text-green-600">95%</div>
        <div className="text-green-500 text-sm">+2%</div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <div className="text-gray-500">Avg Rent</div>
        <div className="text-xl font-bold">Rp 37,500,000</div>
        <div className="text-green-500 text-sm">+5%</div>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <div className="text-gray-500">Total Revenue</div>
        <div className="text-xl font-bold">Rp 18,000,000,000</div>
        <div className="text-green-500 text-sm">+10%</div>
      </div>
    </div>
    <div className="mb-8">
      <h2 className="font-semibold text-lg mb-2">Map</h2>
      <div className="bg-white p-4 rounded shadow" style={{ height: 350 }}>
        <MapContainer center={[-6.2003, 106.8167]} zoom={17} style={{ height: "300px", width: "100%" }} scrollWheelZoom={false}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {houses.map((house) => (
            <Marker key={house.id} position={house.position} icon={markerIcon}>
              <Popup>
                <div>
                  <div className="font-bold">{house.name}</div>
                  <div>Unit: {house.unit}</div>
                  <div>Status: <span className={house.status === "Occupied" ? "text-green-600" : "text-red-600"}>{house.status}</span></div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
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
