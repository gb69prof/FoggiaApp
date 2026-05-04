import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);


if (import.meta.env.PROD && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    const swUrl = new URL(`${import.meta.env.BASE_URL}sw.js`, window.location.href);
    navigator.serviceWorker.register(swUrl);
  });
}
