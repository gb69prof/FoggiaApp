import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { PlaceCard } from "@/components/PlaceCard";
import { places } from "@/data/places";
import { useFavorites } from "@/hooks/useFavorites";

const Favorites = () => {
  const { favs } = useFavorites();
  const list = places.filter((p) => favs.includes(p.id));

  return (
    <AppShell>
      <section className="container py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold flex items-center gap-3">
          <Heart className="w-7 h-7 text-primary fill-primary" /> Preferiti
        </h1>
        <p className="text-muted-foreground mt-2">
          I luoghi che hai salvato per la tua prossima visita.
        </p>

        {list.length === 0 ? (
          <div className="mt-10 text-center py-16 rounded-3xl border border-dashed border-border">
            <Heart className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground mb-4">
              Non hai ancora salvato nessun luogo.
            </p>
            <Link
              to="/monumenti"
              className="inline-block px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold"
            >
              Esplora i monumenti
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {list.map((p) => (
              <PlaceCard key={p.id} place={p} />
            ))}
          </div>
        )}
      </section>
    </AppShell>
  );
};

export default Favorites;
