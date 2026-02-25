# PRD - Site Paroisse Notre Dame d'Autan

## Enonce du probleme original
Creation et amelioration iterative d'un site web pour la paroisse Notre Dame d'Autan, comprenant la gestion de l'equipe pastorale, les pages des 16 eglises (clochers), et les informations de contact.

## Architecture technique
- **Frontend**: React (Vite), TailwindCSS, Shadcn/UI
- **Backend**: FastAPI
- **Base de donnees**: MongoDB (non utilisee actuellement - donnees hardcodees)
- **Cartographie**: Leaflet/OpenStreetMap (carte multi-marqueurs), Google Maps iframe (pages details)

## Fonctionnalites implementees

### Equipe pastorale
- Carousel avec photos
- Modales de details
- Styling standardise

### Mot du cure (Welcome Message)
- Composant ajoute sur plusieurs pages

### Section "Nos Clochers" (16 eglises)
- Fichier de donnees : `frontend/src/data/clochersData.js`
- Pages de detail dynamiques : `/nos-clochers/:slug`
- Carte Leaflet avec marqueurs personnalises (croix dorees)
- Google Maps iframe sur chaque page de detail

### Page Secretariat
- Presentation de Corinne (secretaire)
- Deux centres paroissiaux avec coordonnees completes
- Adresses cliquables (liens Google Maps)
- Horaires de permanence detailles

### Pages de contenu (ContentPage.js)
- Configuration centralisee dans des fichiers *Config.js
- Modales detaillees pour chaque activite/groupe
- Espacement standardise (flexbox + gap inline style au lieu de space-y Tailwind)

### Corrections session precedente
- Adresses cliquables sur Secretariat (Google Maps)
- Couleur banniere Funerailles (bleu-vert)
- Image hero Parcours Alpha (object-top)
- Image hero Vie Economique remplacee
- Espacement contenu sur: Eveil a la Foi, Parcours Alpha, Groupes de Partage, Adoration, Meditation, Ressources, Entraide, Visite des Malades

### Correction mobile (Fev 2026)
- Vignettes ContentPage: layout responsive (vertical sur mobile, horizontal sur desktop)
- Icone centree en haut + texte en dessous sur mobile
- Padding reduit sur mobile (p-4 vs p-6)
- Tailles de texte adaptees (base/xs mobile, lg/sm desktop)
- break-words pour eviter debordement texte
- Applique sur: cartes standard, cartes Entraide 1ere rangee, cartes Entraide 2eme rangee

## Fichiers cles
- `frontend/src/pages/ContentPage.js` - Page de contenu principale (vignettes, modales)
- `frontend/src/data/clochersData.js` - Donnees des 16 eglises
- `frontend/src/pages/ClocherDetailPage.js` - Page detail eglise
- `frontend/src/components/ClochersMap.jsx` - Carte Leaflet avec croix
- `frontend/src/pages/Secretariat.js` - Page secretariat
- `frontend/src/pages/FamillesJeunessePage.js` - Page pilier Familles
- `frontend/src/pages/GrandirFoiPage.js` - Page pilier Grandir dans la Foi
- `frontend/src/pages/SolidaritePage.js` - Page pilier Solidarite
- `frontend/src/pages/VieEconomiquePage.js` - Page Vie Economique
- `frontend/src/components/ResourceModal.js` - Modal des ressources

## Patterns techniques importants
- **Espacement**: NE PAS utiliser `space-y-*` de Tailwind (bug avec React conditionnel). Utiliser: `<div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>...</div>`
- **Contenu**: Gere via fichiers Config.js OU composants dedies (ex: VieEconomiquePage.js). Si un changement config ne se reflete pas, verifier s'il existe un composant dedie qui override.
- **Vignettes mobile**: Layout responsive avec `flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left sm:space-x-4`

## Backlog priorise

### P0 - Priorite haute
- [ ] Rendre le formulaire de contact fonctionnel (endpoint `/api/contact`)

### P1 - Priorite moyenne
- [ ] Fonctionnalite "Lire la suite" pour les actualites
- [ ] Inscription newsletter fonctionnelle

### P2 - Priorite basse
- [ ] Placeholders horaires de messe sur pages eglises
- [ ] Agenda des evenements
- [ ] Confirmation d'envoi formulaire contact
- [ ] Composant ContentWrapper reutilisable pour espacement

## Etat actuel
- **Fonctionnel**: Navigation, pages clochers, equipe pastorale, secretariat, toutes les pages de contenu, version mobile
- **Non fonctionnel**: Formulaire contact, newsletter, "Lire la suite"
- **Placeholder**: Horaires de messe

## Langue preferee de l'utilisateur
Francais
