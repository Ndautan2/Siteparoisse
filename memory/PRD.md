# Notre Dame d'Autan - Website PRD

## Problem Statement
Refonte complète du site web de la paroisse "Notre Dame d'Autan" avec une approche moderne, spirituelle et accueillante.

## Tech Stack
- **Frontend**: React, Tailwind CSS, Lucide React icons
- **Backend**: FastAPI, MongoDB (motor)
- **Auth**: JWT-based authentication

## Design Guidelines
- **Style**: Spirituel, accueillant, lumineux, épuré
- **Typography**: Playfair Display (titres), Inter (corps)
- **Colors**:
  - Primary accent: `#d0ada6` (rose poudré)
  - Background: `#FDFCF8` (off-white)
  - Text: `#1E293B` (slate deep)
  - Paper: `#F9F9F7`

## Navigation Structure (5 Pillars)
1. Notre Dame d'Autan
2. Familles & Jeunesse
3. Vie Spirituelle & Sacrements
4. Grandir dans la Foi
5. Solidarité & Écoute

---

## Completed Features (Phase 1) - Dec 2025

### ✅ Core Structure
- Full-stack app setup (React + FastAPI + MongoDB)
- Responsive navigation with multi-level menus
- Design system implementation (fonts, colors, spacing)

### ✅ Homepage
- Hero section with church background
- Dynamic action buttons ("Je veux...", "Je suis nouveau", "Faire un don")
- News section with 3 latest articles
- Footer with contact info, quick links, newsletter

### ✅ Content Pages
- Generic ContentPage component for all static pages
- PillarPage component for landing pages
- Secretariat & Contact page
- Horaires des Messes page

### ✅ Admin Foundation
- Login page (`/admin/login`)
- Basic dashboard shell (`/admin/dashboard`)
- JWT authentication backend

### ✅ Bug Fixes
- Mobile menu navigation fixed
- Submenu accessibility improved
- "Made with Emergent" badge removed
- Color scheme updated to rose poudré (#d0ada6)

---

## Phase 2 - Backlog

### P0 - Critical
- [ ] **CMS Admin Dashboard**
  - [ ] News management (CRUD)
  - [ ] Mass schedules management (CRUD)

### P1 - Important
- [ ] **Sacrament Request Forms**
  - [ ] Baptism, Marriage, Confirmation forms
  - [ ] Email notifications
- [ ] **Editable Page Content**
  - [ ] Migrate hardcoded content to MongoDB
  - [ ] Admin interface for page editing

### P2 - Future
- [ ] **Newsletter Signup**
  - [ ] Functional subscription form
  - [ ] Email list management
- [ ] **Media Features**
  - [ ] Photo galleries
  - [ ] Testimonials section

---

## Key Files Reference
- `backend/server.py` - Main API, contains hardcoded page content
- `frontend/src/App.js` - Router configuration
- `frontend/src/pages/PillarPages.js` - Pillar landing pages
- `frontend/src/components/Header.js` - Navigation
- `frontend/tailwind.config.js` - Color definitions

## Admin Credentials (Dev)
- Username: `admin`
- Password: `password`
- Seed script: `scripts/seed_admin.py`

## API Endpoints
- `GET /api/news` - Latest news
- `GET /api/mass-schedules` - Mass schedules
- `GET /api/content/{path}` - Page content
- `POST /api/token` - Admin login
