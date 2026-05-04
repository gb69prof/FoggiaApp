import { Link } from "react-router-dom";
import { ArrowRight, Compass, MapPin, Sparkles } from "lucide-react";
import { AppShell } from "@/components/AppShell";
import { PlaceCard } from "@/components/PlaceCard";
import { places } from "@/data/places";

const Index = () => {
  const monumenti = places.filter((p) => p.category === "monumento").slice(0, 4);
  const moderni = places.filter((p) => p.category === "moderno").slice(0, 3);

  return (
    <AppShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)",
            backgroundSize: "40px 40px, 60px 60px",
          }}
        />
        <div className="container relative py-20 md:py-32 text-primary-foreground">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 backdrop-blur text-xs font-semibold mb-6 animate-fade-in">
            <Sparkles className="w-3.5 h-3.5" /> Una guida digitale di Foggia
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight max-w-3xl animate-fade-in">
            Scopri Foggia come non l’hai mai vista
          </h1>
          <p className="mt-5 text-lg md:text-xl max-w-2xl text-primary-foreground/90 animate-fade-in">
            Monumenti, storia, luoghi contemporanei e una mappa interattiva per
            esplorare il cuore della Capitanata.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-in">
            <Link
              to="/monumenti"
              className="inline-flex items-center gap-2 bg-background text-foreground px-6 py-3.5 rounded-full font-semibold shadow-elevated hover:scale-[1.02] transition-smooth"
            >
              Esplora la città <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/mappa"
              className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/30 text-primary-foreground px-6 py-3.5 rounded-full font-semibold hover:bg-white/25 transition-smooth"
            >
              <MapPin className="w-4 h-4" /> Apri la mappa
            </Link>
          </div>
        </div>
      </section>

      {/* Quick categories */}
      <section className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: "Monumenti", to: "/monumenti", icon: Compass },
            { label: "Città moderna", to: "/moderna", icon: Sparkles },
            { label: "Ristoranti", to: "/ristoranti", icon: MapPin },
            { label: "Locali", to: "/locali", icon: MapPin },
          ].map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="flex flex-col items-start p-4 rounded-2xl bg-card border border-border shadow-card hover:shadow-elevated hover:-translate-y-0.5 transition-smooth"
            >
              <div className="w-10 h-10 rounded-xl bg-accent text-accent-foreground grid place-items-center mb-3">
                <c.icon className="w-5 h-5" />
              </div>
              <span className="font-semibold text-sm">{c.label}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Monumenti */}
      <section className="container py-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Luoghi da visitare</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Storia, arte e architettura nel cuore di Foggia
            </p>
          </div>
          <Link
            to="/monumenti"
            className="text-sm font-semibold text-primary hover:underline whitespace-nowrap"
          >
            Vedi tutti →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {monumenti.map((p) => (
            <PlaceCard key={p.id} place={p} />
          ))}
        </div>
      </section>

      {/* Cosa fare oggi */}
      <section className="container py-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Cosa fare oggi</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Spazi contemporanei, parchi e cultura
            </p>
          </div>
          <Link
            to="/moderna"
            className="text-sm font-semibold text-primary hover:underline whitespace-nowrap"
          >
            Vedi tutti →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {moderni.map((p) => (
            <PlaceCard key={p.id} place={p} />
          ))}
        </div>
      </section>

      {/* Dove mangiare CTA vuota */}
      <section className="container py-12">
        <div className="rounded-3xl border border-dashed border-border p-8 md:p-12 bg-secondary/40 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Dove mangiare</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            La sezione ristoranti e locali è pronta per essere popolata con i
            tuoi luoghi preferiti della città.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link
              to="/ristoranti"
              className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-glow transition-smooth"
            >
              Ristoranti
            </Link>
            <Link
              to="/locali"
              className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-semibold hover:bg-secondary transition-smooth"
            >
              Locali & Nightlife
            </Link>
          </div>
        </div>
      </section>

      <footer className="container py-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} FoggiaApp · Web app per scoprire la città di Foggia
      </footer>
    </AppShell>
  );
};

export default Index;
