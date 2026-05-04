import { Link } from "react-router-dom";
import { Heart, MapPin } from "lucide-react";
import { Place } from "@/data/places";
import { useFavorites } from "@/hooks/useFavorites";
import { cn } from "@/lib/utils";

const categoryLabels: Record<Place["category"], string> = {
  monumento: "Monumento",
  moderno: "Città moderna",
  ristorante: "Ristorante",
  locale: "Locale",
};

export const PlaceCard = ({ place }: { place: Place }) => {
  const { isFav, toggle } = useFavorites();
  const fav = isFav(place.id);

  return (
    <Link
      to={`/luogo/${place.id}`}
      className="group relative bg-card rounded-2xl overflow-hidden border border-border shadow-card hover:shadow-elevated transition-smooth animate-fade-in flex flex-col"
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-secondary">
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 grid place-items-center text-primary-foreground">
          <MapPin className="w-12 h-12 opacity-80" strokeWidth={1.5} />
        </div>
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur text-xs font-semibold text-foreground">
          {categoryLabels[place.category]}
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            toggle(place.id);
          }}
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/90 backdrop-blur grid place-items-center transition-smooth hover:scale-110"
          aria-label="Salva nei preferiti"
        >
          <Heart
            className={cn(
              "w-4 h-4 transition-smooth",
              fav ? "fill-primary text-primary" : "text-foreground"
            )}
          />
        </button>
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-bold text-base leading-tight mb-1.5 group-hover:text-primary transition-smooth">
          {place.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {place.shortDescription}
        </p>
      </div>
    </Link>
  );
};
