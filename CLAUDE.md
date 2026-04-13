# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Démarre le serveur de dev sur http://localhost:3000
npm run build     # Build de production
npm run lint      # ESLint (max-warnings 0, doit passer sans warning)
npm run fix       # Formate le code avec Prettier
npm run preview   # Prévisualise le build de production
npm run clean     # Supprime node_modules, lock files et dist
```

Pas de tests automatisés dans ce projet.

## Architecture

Site vitrine single-page en React 19 + Vite 8 + Tailwind CSS 4 pour une voyante (tirage de cartes, consultations).

### Routing

`App.jsx` définit un `createBrowserRouter` avec un layout principal (`Layout`) contenant :
- `/` → `Home` (page principale, sections empilées verticalement)
- Routes légales : `/mentions-legales`, `/conditions-generales-vente`, `/conditions-generales-utilisation`, `/politique-confidentialite`

### Structure des sections (Home)

`Home.jsx` compose les sections dans l'ordre : `Hero` → `About` → `Price` → `FreeDraw` → `Reviews` → `FAQ`. Chaque section a un `id` correspondant aux ancres de navigation définies dans `src/constants/navigation.js`.

### Composants UI réutilisables (`src/components/ui/`)

- **`Button`** — polymorphique via prop `as` (`button` ou `a`). Variants : `primary` (gradient violet→indigo), `outline`. Tailles : `sm`, `md`.
- **`FadeIn`** — animation d'entrée par scroll via `IntersectionObserver`. Prop `threshold` configurable.
- **`OptimizedImage`** — wrapper d'image optimisée.
- **`StarField`** — fond animé étoilé, monté dans `App.jsx` derrière tout le contenu (fixed, z-index: -1).
- **`DropdownMenu`** — menu déroulant (utilisé dans le header mobile).

### Hooks (`src/hooks/`)

- **`useSmoothScroll`** — intercepte tous les clics sur `<a href="#...">` et applique un scroll fluide. Monté dans `App`.
- **`useFocusTrap`** — piège le focus dans un conteneur (accessibilité, menu mobile).

### Données statiques (`src/constants/`)

Tout le contenu textuel est externalisé : `navigation.js` (liens nav principale + légales), `faq.js`, `reviews.js`. Modifier le contenu se fait dans ces fichiers, pas dans les composants.

### Thème visuel

Palette violet/indigo sur fond sombre. Le `body` a `background-color: #0f172a`. Le wrapper `App.jsx` est `bg-transparent` pour laisser apparaître le `StarField`. Les cartes utilisent `bg-white/10 backdrop-blur-sm border-white/20` pour un effet glassmorphism.

#### Couleurs custom (définies dans `src/index.css` via `@theme`)

| Classe Tailwind | Valeur | Usage |
|---|---|---|
| `bg-dark` / `text-dark` | `#0f172a` | Fond sombre (footer, etc.) |
| `bg-light` / `text-light` | `#f9f8fa` | Texte clair |
| `text-accent` | `#a855f7` | Violet d'accentuation |
| `text-text-primary` | `#f9f8fa` | Texte principal |
| `bg-background-primary` | `#1e293b` | Fond hover (dropdown) |

### Tailwind v4

Pas de `tailwind.config.js` ni de `postcss.config.js`. Tailwind est intégré via le plugin Vite `@tailwindcss/vite` dans `vite.config.js`. La configuration du thème et les styles globaux sont dans `src/index.css` avec `@import "tailwindcss"` et `@theme {}`.

### Paiement

La section tarifs pointe vers PayPal via des liens directs dans les données des cartes. `NotePaypal` est un composant de note/disclaimer PayPal.
