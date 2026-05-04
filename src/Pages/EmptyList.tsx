import { AppShell } from "@/components/AppShell";
import { Search } from "lucide-react";

const EmptyList = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <AppShell>
    <section className="container py-10">
      <h1 className="text-3xl md:text-4xl font-extrabold">{title}</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl">{subtitle}</p>

      {/* Filtri/ricerca placeholder */}
      <div className="mt-6 flex flex-col md:flex-row gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            disabled
            placeholder="Cerca per nome..."
            className="w-full pl-11 pr-4 py-3 rounded-full bg-card border border-border text-sm disabled:opacity-60"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {["Tutti", "Pizzeria", "Tradizionale", "Cocktail", "Pub"].map((t) => (
            <button
              key={t}
              disabled
              className="px-4 py-2.5 rounded-full bg-card border border-border text-xs font-semibold whitespace-nowrap disabled:opacity-60"
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center py-16 rounded-3xl border border-dashed border-border bg-secondary/40">
        <p className="text-muted-foreground max-w-md mx-auto">
          Sezione pronta per essere popolata. Aggiungi i tuoi luoghi preferiti
          modificando il file <code className="px-1.5 py-0.5 rounded bg-background border border-border text-xs">src/data/places.ts</code>.
        </p>
      </div>
    </section>
  </AppShell>
);

export default EmptyList;
