import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const complexes = [
  { name: "Boston Village" },
  { name: "Green Park" },
];

const alertsData = {
  "Boston Village": [
    { resident: "John Doe", unit: "Apt 203", time: "10:00", status: "Pending", action: "Respond" },
    { resident: "Jane Smith", unit: "Apt 101", time: "10:05", status: "Resolved", action: "View Details" },
    { resident: "Alice Brown", unit: "Apt 302", time: "09:55", status: "Pending", action: "Respond" },
    { resident: "Sophia Evans", unit: "Apt 102", time: "09:45", status: "Resolved", action: "View Details" },
    { resident: "Liam Foster", unit: "Apt 201", time: "09:35", status: "Pending", action: "Respond" },
  ],
  "Green Park": [
    { resident: "Emily Brown", unit: "Apt 11", time: "10:10", status: "Pending", action: "Respond" },
    { resident: "Michael Lee", unit: "Apt 22", time: "09:50", status: "Resolved", action: "View Details" },
  ],
};

type ComplexName = keyof typeof alertsData;
type AlertRow = typeof alertsData[ComplexName][number];

const mapMarkers = {
  "Boston Village": [
    { lat: -6.2001, lng: 106.8167, label: "Apt 203", status: "Pending" },
    { lat: -6.2002, lng: 106.8168, label: "Apt 101", status: "Resolved" },
    { lat: -6.2003, lng: 106.8169, label: "Apt 302", status: "Pending" },
    { lat: -6.2004, lng: 106.8170, label: "Apt 102", status: "Resolved" },
    { lat: -6.2005, lng: 106.8171, label: "Apt 201", status: "Pending" },
  ],
  "Green Park": [
    { lat: -6.2101, lng: 106.8267, label: "Apt 11", status: "Pending" },
    { lat: -6.2102, lng: 106.8268, label: "Apt 22", status: "Resolved" },
  ],
};

const PanicAlerts: React.FC = () => {
  const [selectedComplex, setSelectedComplex] = useState<ComplexName>("Boston Village");
  const data = alertsData[selectedComplex];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold">Panic Alerts</h1>
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
      <div className="bg-white rounded shadow p-4 mb-6 flex justify-center w-full">
        <MapContainer
          center={mapMarkers[selectedComplex][0] ? [mapMarkers[selectedComplex][0].lat, mapMarkers[selectedComplex][0].lng] : [-6.2, 106.8]}
          zoom={16}
          style={{ height: "320px", width: "100%", maxWidth: "100%", margin: "0 auto" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {mapMarkers[selectedComplex].map((marker, idx) => (
            <Marker
              key={idx}
              position={[marker.lat, marker.lng]}
              icon={new L.Icon({
                iconUrl: marker.status === "Pending"
                  ? "https://cdn.jsdelivr.net/npm/leaflet@1.9.3/dist/images/marker-icon-red.png"
                  : "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
                shadowSize: [41, 41],
              })}
            >
              <Popup>
                <div>
                  <div className="font-bold">{marker.label}</div>
                  <div>Status: <span className={marker.status === "Pending" ? "text-orange-500" : "text-gray-500"}>{marker.status}</span></div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
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
            {data.map((row: AlertRow, idx: number) => (
              <tr key={idx} className="border-t border-gray-200">
                <td className="py-2 px-4">{row.resident}</td>
                <td className="py-2 px-4 text-blue-700 font-semibold">{row.unit}</td>
                <td className="py-2 px-4">{row.time}</td>
                <td className="py-2 px-4">
                  <span className={`px-3 py-1 rounded-full text-white text-xs font-bold ${row.status === "Pending" ? "bg-orange-500" : "bg-gray-400"}`}>{row.status}</span>
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

export default PanicAlerts; 