"use client";

import { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Store } from "@/lib/stores";

// Marqueur custom couleur sauge (divIcon SVG) — évite les icônes cassées par le bundler.
const sageIcon = L.divIcon({
  className: "",
  html: `<svg width="34" height="44" viewBox="0 0 24 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.4 0 0 5.4 0 12c0 8.4 12 20 12 20s12-11.6 12-20C24 5.4 18.6 0 12 0z" fill="#8A9A7B"/>
    <circle cx="12" cy="12" r="5" fill="#FBF8F5"/>
  </svg>`,
  iconSize: [34, 44],
  iconAnchor: [17, 44],
  popupAnchor: [0, -40],
});

function Recenter({ center }: { center: [number, number] | null }) {
  const map = useMap();
  useEffect(() => {
    if (center) map.flyTo(center, 15, { duration: 0.8 });
  }, [center, map]);
  return null;
}

export default function StoreMap({
  stores,
  focus,
}: {
  stores: Store[];
  focus: [number, number] | null;
}) {
  const center = useRef<[number, number]>([43.9, 1.03]); // entre Toulouse et Agen

  return (
    <MapContainer
      center={center.current}
      zoom={9}
      scrollWheelZoom={false}
      className="h-[420px] w-full rounded-lg lg:h-[560px]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Recenter center={focus} />
      {stores.map((s) => (
        <Marker key={s.id} position={[s.lat, s.lng]} icon={sageIcon}>
          <Popup>
            <strong className="font-serif text-base">{s.name}</strong>
            <br />
            {s.address}
            <br />
            {s.hours}
            <br />
            <a
              href={s.directions}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#6E7E5F" }}
            >
              Itinéraire →
            </a>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
