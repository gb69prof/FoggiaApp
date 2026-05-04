import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Monumenti from "./pages/Monumenti.tsx";
import Moderna from "./pages/Moderna.tsx";
import PlaceDetail from "./pages/PlaceDetail.tsx";
import MapPage from "./pages/MapPage.tsx";
import Favorites from "./pages/Favorites.tsx";
import Profile from "./pages/Profile.tsx";
import EmptyList from "./pages/EmptyList.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/monumenti" element={<Monumenti />} />
          <Route path="/moderna" element={<Moderna />} />
          <Route path="/luogo/:id" element={<PlaceDetail />} />
          <Route path="/mappa" element={<MapPage />} />
          <Route path="/preferiti" element={<Favorites />} />
          <Route path="/profilo" element={<Profile />} />
          <Route
            path="/ristoranti"
            element={
              <EmptyList
                title="Ristoranti"
                subtitle="Trova dove mangiare a Foggia: tradizione pugliese, pizzerie, cucina contemporanea."
              />
            }
          />
          <Route
            path="/locali"
            element={
              <EmptyList
                title="Locali & Nightlife"
                subtitle="Cocktail bar, pub, lounge: i luoghi in cui vivere la sera foggiana."
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
