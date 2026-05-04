import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { Link } from "react-router-dom";
import { places, Place, PlaceCategory } from "@/data/places";

// Fix default icon paths in bundlers
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const colorByCategory: Record<PlaceCategory, string> = {
  monumento: "#E30613",
  moderno: "#0EA5E9",
  ristorante: "#F59E0B",
  locale: "#8B5CF6",
};

const makeIcon = (cat: PlaceCategory) =>
  L.divIcon({
    className: "",
    html: `<div style="
      width:32px;height:32px;border-radius:50% 50% 50% 0;
      background:${colorByCategory[cat]};
      transform:rotate(-45deg);
      border:3px solid white;
      box-shadow:0 4px 12px rgba(0,0,0,.25);
      display:grid;place-items:center;">
      <div style="transform:rotate(45deg);width:10px;height:10px;border-radius:50%;background:white;"></div>
    </div>`,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -30],
  });

const Recenter = ({ filtered }: { filtered: Place[] }) => {
  const map = useMap();
  useEffect(() => {
    if (filtered.length === 0) return;
    const bounds = L.latLngBounds(filtered.map((p) => p.coords));
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 16 });
  }, [filtered, map]);
  return null;
};

interface InteractiveMapProps {
  filter?: PlaceCategory[];
  height?: string;
}

export const InteractiveMap = ({ filter, height = "100%" }: InteractiveMapProps) => {
  const filtered = filter ? places.filter((p) => filter.includes(p.category)) : places;

  return (
    <MapContainer
      center={[41.4621, 15.5446]}
      zoom={15}
      scrollWheelZoom
      className="w-full"
      style={{ height, borderRadius: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Recenter filtered={filtered} />
      {filtered.map((p) => (
        <Marker key={p.id} position={p.coords} icon={makeIcon(p.category)}>
          <Popup>
            <div className="bg-card text-card-foreground">
              <div className="h-24 gradient-hero" />
              <div className="p-3">
                <div className="text-[10px] uppercase tracking-wide text-muted-foreground font-semibold mb-1">
                  {p.category}
                </div>
                <div className="font-bold text-sm leading-tight mb-1.5">{p.name}</div>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                  {p.shortDescription}
                </p>
                <Link
                  to={`/luogo/${p.id}`}
                  className="inline-block text-xs font-semibold text-primary hover:underline"
                >
                  Scopri di più →
                </Link>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};
