import { Link, useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';

export const FloatingContactButton = () => {
  const location = useLocation();
  
  // Ne pas afficher sur la page d'accueil et sur mobile
  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="hidden lg:block fixed top-24 right-[140px] sm:right-[180px] lg:right-[200px] z-40">
      <Link
        to="/secretariat"
        className="flex items-center justify-center bg-gold backdrop-blur-sm border-2 border-gold text-white hover:bg-gold-dark hover:border-gold-dark rounded-full w-10 h-10 sm:w-12 sm:h-12 font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
        data-testid="floating-contact-button"
        title="Nous contacter"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
      </Link>
    </div>
  );
};
