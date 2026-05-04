import { AppShell } from "@/components/AppShell";
import { PlaceCard } from "@/components/PlaceCard";
import { places } from "@/data/places";

const Monumenti = () => {
  const list = places.filter((p) => p.category === "monumento");
  return (
    <AppShell>
      <section className="container py-10">
        <h1 className="text-3xl md:text-4xl font-extrabold">Monumenti & Storia</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Un viaggio nei luoghi che raccontano la storia di Foggia, dalle origini
          medievali all’età sveva fino alle trasformazioni contemporanee.
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

export default Monumenti;
