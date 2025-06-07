import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const complexes = [
  { name: "Boston Village" },
  { name: "Green Park" },
];

const residentsData = {
  "Boston Village": [
    { name: "Ethan Harper", unit: "Apt 203", address: "123 Oak Street", lat: -6.2001, lng: 106.8167 },
    { name: "Olivia Bennett", unit: "Apt 101", address: "456 Maple Avenue", lat: -6.2002, lng: 106.8168 },
    { name: "Noah Carter", unit: "Apt 302", address: "789 Pine Lane", lat: -6.2003, lng: 106.8169 },
    { name: "Sophia Evans", unit: "Apt 102", address: "1011 Elm Road", lat: -6.2004, lng: 106.8170 },
    { name: "Liam Foster", unit: "Apt 201", address: "1213 Cedar Court", lat: -6.2005, lng: 106.8171 },
  ],
  "Green Park": [
    { name: "Emily Brown", unit: "Apt 11", address: "12 Green St", lat: -6.2101, lng: 106.8267 },
    { name: "Michael Lee", unit: "Apt 22", address: "34 Park Ave", lat: -6.2102, lng: 106.8268 },
  ],
};

type ComplexName = keyof typeof residentsData;
type ResidentRow = typeof residentsData[ComplexName][number];

function FlyToLocation({ position }: { position: [number, number] }) {
  const map = useMap();
  React.useEffect(() => {
    if (position) map.flyTo(position, 17);
  }, [position, map]);
  return null;
}

const ResidentDetailModal: React.FC<{ resident: ResidentRow; onClose: () => void }> = ({ resident, onClose }) => (
  <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-8888">
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
      <h2 className="text-xl font-bold mb-4">{resident.name}</h2>
      <div className="mb-2"><b>Unit:</b> {resident.unit}</div>
      <div className="mb-2"><b>Address:</b> {resident.address}</div>
      <button
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

const Residents: React.FC = () => {
  const [selectedComplex, setSelectedComplex] = useState<ComplexName>("Boston Village");
  const [selectedPosition, setSelectedPosition] = useState<[number, number] | null>(null);
  const [modalResident, setModalResident] = useState<ResidentRow | null>(null);
  const [openPopupIdx, setOpenPopupIdx] = useState<number | null>(null);
  const data = residentsData[selectedComplex];

  // Center map to first resident or default
  const defaultCenter: [number, number] = data[0] ? [data[0].lat, data[0].lng] : [-6.2, 106.8];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold">Residents</h1>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Resident Complex Name:</span>
          <select
            className="border rounded px-3 py-1"
            value={selectedComplex}
            onChange={e => {
              setSelectedComplex(e.target.value as ComplexName);
              setSelectedPosition(null);
            }}
          >
            {complexes.map(c => (
              <option key={c.name} value={c.name}>{c.name}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="bg-white rounded shadow mb-6 p-4 flex justify-center w-full">
        <MapContainer
          center={selectedPosition || defaultCenter}
          zoom={16}
          style={{ height: "320px", width: "100%", maxWidth: "100%", margin: "0 auto" }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          {selectedPosition && <FlyToLocation position={selectedPosition} />}
          {data.map((resident, idx) => (
            <Marker
              key={idx}
              position={[resident.lat, resident.lng]}
              icon={new L.Icon({
                iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
                shadowSize: [41, 41],
              })}
              eventHandlers={{
                click: () => setOpenPopupIdx(idx),
              }}
            >
              {openPopupIdx === idx && (
                <Popup
                  eventHandlers={{
                    remove: () => setOpenPopupIdx(null),
                  }}
                >
                  <div>
                    <div className="font-bold">{resident.name}</div>
                    <div>Unit: {resident.unit}</div>
                    <div>Address: {resident.address}</div>
                    <button
                      className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                      onClick={() => {
                        setOpenPopupIdx(null);
                        setModalResident(resident);
                      }}
                    >
                      View Detail
                    </button>
                  </div>
                </Popup>
              )}
            </Marker>
          ))}
        </MapContainer>
      </div>
      <div className="bg-white rounded shadow p-4">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Unit</th>
              <th className="py-2 px-4">Address</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row: ResidentRow, idx: number) => (
              <tr
                key={idx}
                className="border-t border-gray-200 cursor-pointer hover:bg-blue-50"
                onClick={() => setSelectedPosition([row.lat, row.lng])}
              >
                <td className="py-2 px-4 font-semibold text-blue-700">{row.name}</td>
                <td className="py-2 px-4">{row.unit}</td>
                <td className="py-2 px-4">{row.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {modalResident && (
        <ResidentDetailModal
          resident={modalResident}
          onClose={() => setModalResident(null)}
        />
      )}
    </div>
  );
};

export default Residents; 