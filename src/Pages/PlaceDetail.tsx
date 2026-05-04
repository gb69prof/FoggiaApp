import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Heart, MapPin, Navigation, Phone, Share2 } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { getPlaceById } from "@/data/places";
import { useFavorites } from "@/hooks/useFavorites";
import { cn } from "@/lib/utils";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="py-6 border-t border-border first:border-t-0">
    <h2 className="text-xl font-extrabold mb-3">{title}</h2>
    <div className="text-[15px] leading-relaxed text-foreground/90 whitespace-pre-line">
      {children}
    </div>
  </section>
);

const PlaceDetail = () => {
  const { id } = useParams();
  const place = id ? getPlaceById(id) : undefined;
  const { isFav, toggle } = useFavorites();

  if (!place) {
    return (
      <AppShell>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-2">Luogo non trovato</h1>
          <Link to="/" className="text-primary font-semibold">
            Torna alla home
          </Link>
        </div>
      </AppShell>
    );
  }

  const fav = isFav(place.id);
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${place.coords[0]},${place.coords[1]}`;
  const s = place.sections ?? {};

  return (
    <AppShell>
      {/* Hero */}
      <div className="relative h-[42vh] md:h-[55vh] overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="container relative h-full flex flex-col justify-end pb-8">
          <Link
            to="/"
            className="absolute top-4 left-4 md:left-auto inline-flex items-center gap-1.5 text-sm font-semibold bg-background/90 backdrop-blur px-3 py-2 rounded-full text-foreground shadow-soft"
          >
            <ArrowLeft className="w-4 h-4" /> Indietro
          </Link>
          <span className="inline-block text-xs uppercase tracking-wider font-bold text-primary-foreground/90 mb-2">
            {place.category === "monumento" ? "Monumento" : "Città moderna"}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-primary-foreground leading-tight max-w-3xl">
            {place.name}
          </h1>
        </div>
      </div>

      <div className="container max-w-3xl py-6">
        {/* Action bar */}
        <div className="flex flex-wrap gap-2 -mt-12 relative z-10 mb-6">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-elevated hover:bg-primary-glow transition-smooth"
          >
            <Navigation className="w-4 h-4" /> Indicazioni
          </a>
          <button
            onClick={() => toggle(place.id)}
            className={cn(
              "inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-smooth border",
              fav
                ? "bg-accent text-accent-foreground border-accent"
                : "bg-card text-foreground border-border hover:bg-secondary"
            )}
          >
            <Heart className={cn("w-4 h-4", fav && "fill-primary text-primary")} />
            {fav ? "Salvato" : "Salva"}
          </button>
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: place.name, url: window.location.href }).catch(() => {});
              } else {
                navigator.clipboard.writeText(window.location.href);
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-card text-foreground border border-border text-sm font-semibold hover:bg-secondary transition-smooth"
          >
            <Share2 className="w-4 h-4" /> Condividi
          </button>
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed mb-2">
          {place.shortDescription}
        </p>

        {/* Info */}
        {place.info && (place.info.address || place.info.phone || place.info.website) && (
          <div className="mt-6 rounded-2xl border border-border bg-card p-4 grid gap-3">
            {place.info.address && (
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span>{place.info.address}</span>
              </div>
            )}
            {place.info.phone && (
              <a href={`tel:${place.info.phone}`} className="flex items-start gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {place.info.phone}
              </a>
            )}
          </div>
        )}

        {/* Sezioni approfondite */}
        <div className="mt-6">
          {s.storia && <Section title="Storia">{s.storia}</Section>}
          {s.evoluzione && <Section title="Evoluzione nel tempo">{s.evoluzione}</Section>}
          {s.contesto && <Section title="Contesto storico">{s.contesto}</Section>}
          {s.curiosita && <Section title="Curiosità">{s.curiosita}</Section>}
          {s.funzione && <Section title="Funzione attuale">{s.funzione}</Section>}
          {s.rilevanza && <Section title="Perché è rilevante oggi">{s.rilevanza}</Section>}
        </div>

        <div className="mt-10 p-5 rounded-2xl bg-secondary/60 text-xs text-muted-foreground">
          Le informazioni sono basate su fonti istituzionali e bibliografia
          locale. Per dettagli aggiornati su orari e visite si consiglia di
          contattare direttamente l’ente di riferimento.
        </div>
      </div>
    </AppShell>
  );
};

export default PlaceDetail;
