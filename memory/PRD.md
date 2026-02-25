# PRD - Site Paroisse Notre Dame d'Autan

## Énoncé du problème original
Création et amélioration itérative d'un site web pour la paroisse Notre Dame d'Autan, comprenant la gestion de l'équipe pastorale, les pages des 16 églises (clochers), et les informations de contact.

## Architecture technique
- **Frontend**: React (Vite), TailwindCSS, Shadcn/UI
- **Backend**: FastAPI
- **Base de données**: MongoDB (non utilisée actuellement - données hardcodées)
- **Cartographie**: Leaflet/OpenStreetMap (carte multi-marqueurs), Google Maps iframe (pages détails)

## Fonctionnalités implémentées

### ✅ Équipe pastorale
- Carousel avec photos
- Modales de détails
- Styling standardisé

### ✅ Mot du curé (Welcome Message)
- Composant ajouté sur plusieurs pages

### ✅ Section "Nos Clochers" (16 églises)
- Fichier de données : `frontend/src/data/clochersData.js`
- Pages de détail dynamiques : `/nos-clochers/:slug`
- Carte Leaflet avec marqueurs personnalisés (croix dorées)
- Google Maps iframe sur chaque page de détail

### ✅ Page Secrétariat (mise à jour 2025-01-XX)
- Présentation de Corinne (secrétaire)
- Deux centres paroissiaux avec coordonnées complètes :
  - Saint-Orens : 05 61 00 51 69
  - Castanet : 05 61 27 76 85
- Horaires de permanence détaillés

## Fichiers clés
- `frontend/src/data/clochersData.js` - Données des 16 églises
- `frontend/src/pages/ClocherDetailPage.js` - Page détail église
- `frontend/src/components/ClochersMap.jsx` - Carte Leaflet avec croix
- `frontend/src/pages/Secretariat.js` - Page secrétariat
- `frontend/src/pages/NosClochersPage.js` - Page principale clochers

## Backlog priorisé

### P0 - Priorité haute
- [ ] Rendre le formulaire de contact fonctionnel (endpoint `/api/contact`)

### P1 - Priorité moyenne
- [ ] Fonctionnalité "Lire la suite" pour les actualités
- [ ] Inscription newsletter fonctionnelle

### P2 - Priorité basse
- [ ] Placeholders horaires de messe sur pages églises
- [ ] Navigation "5 piliers" sur homepage
- [ ] Agenda des événements
- [ ] Confirmation d'envoi formulaire contact

## État actuel
- **Fonctionnel** : Navigation, pages clochers, équipe pastorale, secrétariat
- **Non fonctionnel** : Formulaire contact, newsletter, "Lire la suite"
- **Placeholder** : Horaires de messe

## Langue préférée de l'utilisateur
Français
