import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const sections = [
  {
    id: 'demander-sacrement',
    title: 'Demander un Sacrement',
    subtitle: 'Baptême, Communion, Confirmation...',
    description: 'Les sacrements jalonnent les grandes étapes de la vie chrétienne',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1544006659-f0b21884ce1d?w=600',
    path: '/demander-sacrement'
  },
  {
    id: 'mariage',
    title: 'Le Mariage',
    subtitle: 'Préparation & célébration',
    description: 'S\'engager dans l\'amour et la fidélité, soutenu par la grâce de Dieu',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600',
    path: '/mariage'
  }
];

const VieSpirituelePage = () => {
  return (
    <div className="min-h-screen bg-paper py-20" data-testid="vie-spirituelle-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gold flex items-center justify-center shadow-lg">
              <Heart className="w-10 h-10 text-white" strokeWidth={1.5} />
            </div>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-slate-deep mb-4">
            Vie Spirituelle & Sacrements
          </h1>
          <p className="text-gold font-medium mb-4">Les grandes étapes de la vie chrétienne</p>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            Recevoir les sacrements et vivre la liturgie en communauté
          </p>
        </div>

        {/* Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <Link
                key={section.id}
                to={section.path}
                className="group"
                data-testid={`section-card-${section.id}`}
              >
                <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 h-full border border-slate-100">
                  <div className="grid md:grid-cols-2 h-full">
                    {/* Image */}
                    <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col justify-center">
                      <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-gold" strokeWidth={1.5} />
                      </div>
                      <span className="text-gold text-sm font-medium mb-2">{section.subtitle}</span>
                      <h3 className="font-serif text-2xl text-slate-deep mb-3 group-hover:text-gold transition-colors">
                        {section.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">
                        {section.description}
                      </p>
                      
                      <div className="flex items-center text-gold text-sm font-medium group-hover:text-gold-dark transition-colors">
                        <span>Découvrir</span>
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        {/* Horaires */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center">
          <h2 className="font-serif text-2xl text-slate-deep mb-4">Horaires des célébrations</h2>
          <p className="text-slate-600 mb-6">
            Retrouvez les horaires des messes et des permanences de confession
          </p>
          <Link
            to="/horaires-messes"
            className="inline-flex items-center bg-gold hover:bg-gold-dark text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Voir les horaires
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VieSpirituelePage;
