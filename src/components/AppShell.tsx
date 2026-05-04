import { Link, NavLink, useLocation } from "react-router-dom";
import { Home, Map, Heart, User, Moon, Sun } from "lucide-react";
import { useDarkMode } from "@/hooks/useDarkMode";
import { cn } from "@/lib/utils";

export const AppShell = ({ children }: { children: React.ReactNode }) => {
  const { dark, toggle } = useDarkMode();
  const location = useLocation();
  const onMap = location.pathname === "/mappa";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-primary text-primary-foreground grid place-items-center font-extrabold text-lg shadow-soft transition-smooth group-hover:scale-105">
              F
            </div>
            <span className="font-extrabold text-lg tracking-tight">
              Foggia<span className="text-primary">App</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {[
              { to: "/", label: "Home" },
              { to: "/monumenti", label: "Monumenti" },
              { to: "/moderna", label: "Città moderna" },
              { to: "/ristoranti", label: "Ristoranti" },
              { to: "/locali", label: "Locali" },
              { to: "/mappa", label: "Mappa" },
            ].map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-smooth",
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <button
            onClick={toggle}
            aria-label="Cambia tema"
            className="p-2 rounded-lg hover:bg-secondary transition-smooth"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <main className={cn("flex-1", onMap ? "" : "pb-24 md:pb-12")}>{children}</main>

      {/* Bottom nav (mobile) */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-lg border-t border-border">
        <div className="grid grid-cols-4 h-16">
          {[
            { to: "/", icon: Home, label: "Home" },
            { to: "/mappa", icon: Map, label: "Mappa" },
            { to: "/preferiti", icon: Heart, label: "Preferiti" },
            { to: "/profilo", icon: User, label: "Profilo" },
          ].map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                cn(
                  "flex flex-col items-center justify-center gap-1 text-[11px] font-medium transition-smooth",
                  isActive ? "text-primary" : "text-muted-foreground"
                )
              }
            >
              <Icon className="w-5 h-5" strokeWidth={2} />
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};
