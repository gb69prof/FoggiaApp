import { useState } from "react";
import { AppShell } from "@/components/AppShell";
import { InteractiveMap } from "@/components/InteractiveMap";
import { PlaceCategory } from "@/data/places";
import { cn } from "@/lib/utils";

const filters: { key: PlaceCategory; label: string; color: string }[] = [
  { key: "monumento", label: "Monumenti", color: "bg-primary" },
  { key: "moderno", label: "Moderna", color: "bg-sky-500" },
  { key: "ristorante", label: "Ristoranti", color: "bg-amber-500" },
  { key: "locale", label: "Locali", color: "bg-violet-500" },
];

const MapPage = () => {
  const [active, setActive] = useState<PlaceCategory[]>([
    "monumento",
    "moderno",
    "ristorante",
    "locale",
  ]);

  const toggle = (k: PlaceCategory) =>
    setActive((prev) => (prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]));

  return (
    <AppShell>
      <div className="relative" style={{ height: "calc(100vh - 4rem)" }}>
        {/* Filters overlay */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 z-[1000] w-[calc(100%-2rem)] max-w-2xl">
          <div className="bg-background/95 backdrop-blur-md rounded-full shadow-elevated border border-border p-1.5 flex gap-1 overflow-x-auto scrollbar-hide">
            {filters.map((f) => {
              const on = active.includes(f.key);
              return (
                <button
                  key={f.key}
                  onClick={() => toggle(f.key)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-smooth flex items-center gap-2",
                    on
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-secondary"
                  )}
                >
                  <span className={cn("w-2 h-2 rounded-full", f.color)} />
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>
        <InteractiveMap filter={active} height="100%" />
      </div>
    </AppShell>
  );
};

export default MapPage;
