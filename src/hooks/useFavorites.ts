import { useEffect, useState, useCallback } from "react";

const KEY = "foggiaapp_favorites";

export const useFavorites = () => {
  const [favs, setFavs] = useState<string[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setFavs(JSON.parse(raw));
    } catch {}
  }, []);

  const persist = (next: string[]) => {
    setFavs(next);
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {}
  };

  const toggle = useCallback(
    (id: string) => {
      setFavs((prev) => {
        const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
        try {
          localStorage.setItem(KEY, JSON.stringify(next));
        } catch {}
        return next;
      });
    },
    []
  );

  const isFav = useCallback((id: string) => favs.includes(id), [favs]);

  return { favs, toggle, isFav, setFavs: persist };
};
