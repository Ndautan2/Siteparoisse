# PRD - Paroisse Notre Dame d'Autan

## Problème Original
Site web paroissial pour Notre Dame d'Autan (Castanet-Tolosan / Saint-Orens). Application full-stack React + FastAPI + MongoDB.

## Architecture
- **Frontend:** React, TailwindCSS, Shadcn/UI, Lucide icons
- **Backend:** FastAPI, MongoDB
- **Intégrations:** Resend (formulaire contact), Google Maps

## Ce qui est implémenté

### Fonctionnalités Core
- Site paroissial complet avec navigation multi-pages
- Formulaire de contact fonctionnel (Resend)
- Recherche site complète
- Responsive mobile

### Gestion Admin (CRUD)
- Actualités (news)
- Horaires des messes
- Funérailles
- Événements / Agenda

### Page Agenda (Feb 2026)
- Page publique `/agenda` avec hero, filtres par catégorie, événements groupés par mois
- Section "Prochains événements" sur la page d'accueil (4 max)
- Catégories : Liturgie, Communauté, Jeunesse, Solidarité, Formation
- Onglet admin pour CRUD des événements

### Actualités (Feb 2026)
- Vignettes cliquables pour ouvrir l'article (en plus du "Lire la suite")
- Page archives `/actualites` avec liste complète de toutes les actualités
- Bouton "Voir les archives" sous le carrousel de la page d'accueil

### Améliorations Visuelles (Feb 2026)
- Hero 40vh sur mobile (sous-pages), 80vh accueil
- Animations fade-in au scroll (IntersectionObserver)
- Icônes sociales repositionnées en haut à droite sur mobile

### SEO (Feb 2026)
- Langue FR, titres/metas dynamiques, alt images, sitemap.xml, robots.txt

## Backlog
- P2: Refactoring ContentPage.js, amélioration indexation recherche

## Notes Techniques
- Ne PAS utiliser `react-helmet-async` (cause écran blanc)
- Admin credentials: admin / admin123
