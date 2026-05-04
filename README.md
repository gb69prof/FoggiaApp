# FoggiaApp PWA

Web app progressiva per scoprire Foggia: monumenti, storia, luoghi contemporanei e mappa interattiva.

## Cosa è stato aggiunto

- Manifest PWA (`public/manifest.webmanifest`)
- Service worker (`public/sw.js`) con cache dell'app shell e fallback offline
- Icone PWA in più formati (`public/icons/`)
- Meta tag mobile/iOS in `index.html`
- Registrazione del service worker in `src/main.tsx`
- `HashRouter` per evitare errori 404 sulle rotte interne in pubblicazione GitHub Pages
- `base: "./"` in `vite.config.ts` per rendere gli asset compatibili con sottocartelle/repository GitHub Pages
- Allineamento di `react-leaflet` alla versione compatibile con React 18

## Comandi

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Nota

La grafica originale è stata lasciata invariata. Sono stati modificati solo gli elementi necessari per trasformare il progetto in una PWA e renderlo più stabile in pubblicazione.
