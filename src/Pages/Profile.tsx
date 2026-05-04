import { AppShell } from "@/components/AppShell";
import { useFavorites } from "@/hooks/useFavorites";
import { useDarkMode } from "@/hooks/useDarkMode";
import { Bell, Heart, Moon, User } from "lucide-react";

const Profile = () => {
  const { favs } = useFavorites();
  const { dark, toggle } = useDarkMode();

  return (
    <AppShell>
      <section className="container py-10 max-w-2xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground grid place-items-center text-2xl font-extrabold shadow-soft">
            <User className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold">Ciao, viaggiatore</h1>
            <p className="text-sm text-muted-foreground">Esplora Foggia a modo tuo</p>
          </div>
        </div>

        <div className="grid gap-3">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-card border border-border">
            <div className="flex items-center gap-3">
              <Heart className="w-5 h-5 text-primary" />
              <span className="font-semibold text-sm">Luoghi preferiti</span>
            </div>
            <span className="text-sm font-bold">{favs.length}</span>
          </div>

          <button
            onClick={toggle}
            className="flex items-center justify-between p-4 rounded-2xl bg-card border border-border hover:bg-secondary transition-smooth text-left"
          >
            <div className="flex items-center gap-3">
              <Moon className="w-5 h-5 text-primary" />
              <span className="font-semibold text-sm">Modalità scura</span>
            </div>
            <span className="text-xs font-bold text-muted-foreground">
              {dark ? "Attiva" : "Disattiva"}
            </span>
          </button>

          <div className="flex items-center justify-between p-4 rounded-2xl bg-card border border-border opacity-60">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-primary" />
              <span className="font-semibold text-sm">Notifiche luoghi vicini</span>
            </div>
            <span className="text-xs font-bold text-muted-foreground">Presto</span>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted-foreground text-center">
          FoggiaApp · versione demo
        </p>
      </section>
    </AppShell>
  );
};

export default Profile;
