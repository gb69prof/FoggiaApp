import { AppShell } from "@/components/AppShell";
import { PlaceCard } from "@/components/PlaceCard";
import { places } from "@/data/places";

const Moderna = () => {
  const list = places.filter((p) => p.category === "moderno");
  return (
    <AppShell>
      <section className="container py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold">Foggia contemporanea</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Spazi pubblici, teatri, parchi e luoghi della cultura che animano la
          vita quotidiana della città.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((p) => (
            <PlaceCard key={p.id} place={p} />
          ))}
        </div>
      </section>
    </AppShell>
  );
};

export default Moderna;
