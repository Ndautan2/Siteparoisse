import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { DarkModeProvider } from '@/contexts/DarkModeContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';
import { ScrollToTop } from '@/components/ScrollToTop';

// Eagerly loaded: critical path
import HomePage from '@/pages/HomePage';

// Lazy-loaded pages (code splitting)
const HorairesMesses = lazy(() => import('@/pages/HorairesMesses'));
const Secretariat = lazy(() => import('@/pages/Secretariat'));
const AdminLogin = lazy(() => import('@/pages/AdminLogin'));
const AdminDashboard = lazy(() => import('@/pages/AdminDashboard'));
const ContentPage = lazy(() => import('@/pages/ContentPage'));
const NotreDameAutanPage = lazy(() => import('@/pages/NotreDameAutanPage'));
const FamillesJeunessePage = lazy(() => import('@/pages/FamillesJeunessePage'));
const VieSpirituelePage = lazy(() => import('@/pages/VieSpirituelePage'));
const GrandirFoiPage = lazy(() => import('@/pages/GrandirFoiPage'));
const SolidaritePage = lazy(() => import('@/pages/SolidaritePage'));
const VieEconomiquePage = lazy(() => import('@/pages/VieEconomiquePage'));
const EquipePastoralePage = lazy(() => import('@/pages/EquipePastoralePage'));
const NosClochersPage = lazy(() => import('@/pages/NosClochersPage'));
const ClocherDetailPage = lazy(() => import('@/pages/ClocherDetailPage'));
const DemanderSacrementPage = lazy(() => import('@/pages/DemanderSacrementPage'));
const SacrementDetailPage = lazy(() => import('@/pages/SacrementDetailPage'));
const JeSuisNouveauPage = lazy(() => import('@/pages/JeSuisNouveauPage'));
const AgendaPage = lazy(() => import('@/pages/AgendaPage'));
const ActualitesPage = lazy(() => import('@/pages/ActualitesPage'));
const LettrePereDanielPage = lazy(() => import('@/pages/LettrePereDanielPage'));
const ServirPage = lazy(() => import('@/pages/ServirPage'));
const LegsEtDonsPage = lazy(() => import('@/pages/LegsEtDonsPage'));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-10 h-10 border-3 border-gold/30 border-t-gold rounded-full animate-spin" />
  </div>
);

function App() {
  return (
    <>
      <DarkModeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-offwhite dark:bg-slate-900 transition-colors duration-300">
          <Routes>
            {/* Admin routes without header/footer */}
            <Route path="/admin/login" element={<Suspense fallback={<PageLoader />}><AdminLogin /></Suspense>} />
            <Route path="/admin/dashboard" element={<Suspense fallback={<PageLoader />}><AdminDashboard /></Suspense>} />

            {/* Public routes with header/footer */}
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <FloatingButtons />
                  <main className="flex-grow">
                    <Suspense fallback={<PageLoader />}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/horaires-messes" element={<HorairesMesses />} />
                      <Route path="/secretariat" element={<Secretariat />} />
                      <Route path="/je-suis-nouveau" element={<JeSuisNouveauPage />} />
                      <Route path="/agenda" element={<AgendaPage />} />
                      <Route path="/actualites" element={<ActualitesPage />} />
                      <Route path="/lettre-pere-daniel" element={<LettrePereDanielPage />} />
                      <Route path="/servir" element={<ServirPage />} />
                      <Route path="/soutenir" element={<LegsEtDonsPage />} />
                      
                      {/* Pillar landing pages with cards */}
                      <Route path="/notre-dame-autan" element={<NotreDameAutanPage />} />
                      <Route path="/familles-jeunesse" element={<FamillesJeunessePage />} />
                      <Route path="/vie-spirituelle" element={<VieSpirituelePage />} />
                      <Route path="/grandir-foi" element={<GrandirFoiPage />} />
                      <Route path="/solidarite" element={<SolidaritePage />} />
                      
                      {/* Pillar 1: Notre Dame d'Autan - Sub-pages */}
                      <Route path="/equipe-pastorale" element={<EquipePastoralePage />} />
                      <Route path="/equipe-pastorale/:memberId" element={<ContentPage section="equipe-detail" />} />
                      <Route path="/vie-economique" element={<VieEconomiquePage />} />
                      <Route path="/nos-clochers" element={<NosClochersPage />} />
                      <Route path="/nos-clochers/:clocherId" element={<ClocherDetailPage />} />
                      <Route path="/services-transverses" element={<ContentPage section="services" />} />
                      
                      {/* Pillar 2: Familles & Jeunesse - Sub-pages */}
                      <Route path="/eveil-foi" element={<ContentPage section="eveil" />} />
                      <Route path="/catechisme" element={<ContentPage section="catechisme" />} />
                      <Route path="/aumonerie" element={<ContentPage section="aumonerie" />} />
                      <Route path="/mouvements" element={<ContentPage section="mouvements" />} />
                      <Route path="/servants-vocations" element={<ContentPage section="servants" />} />
                      
                      {/* Pillar 3: Vie Spirituelle - Sub-pages */}
                      <Route path="/demander-sacrement" element={<DemanderSacrementPage />} />
                      <Route path="/sacrements/:sacrementId" element={<SacrementDetailPage />} />
                      <Route path="/mariage" element={<ContentPage section="mariage" />} />
                      <Route path="/liturgie-musique" element={<ContentPage section="liturgie" />} />
                      <Route path="/funerailles" element={<ContentPage section="funerailles" />} />
                      
                      {/* Pillar 4: Grandir dans la Foi - Sub-pages */}
                      <Route path="/alpha-catechumenat" element={<ContentPage section="alpha" />} />
                      <Route path="/groupes-partage" element={<ContentPage section="groupes" />} />
                      <Route path="/meditation" element={<ContentPage section="meditation" />} />
                      <Route path="/ressources" element={<ContentPage section="ressources" />} />
                      
                      {/* Pillar 5: Solidarité - Sub-pages */}
                      <Route path="/service-ecoute" element={<ContentPage section="ecoute" />} />
                      <Route path="/visite-malades" element={<ContentPage section="malades" />} />
                      <Route path="/entraide" element={<ContentPage section="entraide" />} />
                    </Routes>
                    </Suspense>
                  </main>
                  <Footer />
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
      </DarkModeProvider>
      <Toaster richColors position="top-right" />
    </>
  );
}

export default App;