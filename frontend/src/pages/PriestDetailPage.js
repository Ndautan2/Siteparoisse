import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import { priests } from './EquipePastoralePage';

const PriestDetailPage = () => {
  const { priestId } = useParams();
  
  // Find the priest by ID
  const priest = priests.find(p => p.id === priestId);
  
  // If priest not found, show error
  if (!priest) {
    return (
      <div className="min-h-screen bg-paper flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-slate-deep mb-4">Prêtre non trouvé</h1>
          <Link to="/equipe-pastorale" className="text-gold hover:text-gold-dark">
            Retour à l'équipe pastorale
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper" data-testid="priest-detail-page">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-end">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#93B5B7] to-[#7da4a6]"></div>
        
        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <Link 
            to="/equipe-pastorale" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à l'équipe pastorale
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-20 pb-16">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Photo */}
            <div className="md:w-1/3">
              <div className="aspect-square md:h-full">
                <img 
                  src={priest.image} 
                  alt={priest.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div className="md:w-2/3 p-8 md:p-10">
              {priest.isCure && (
                <span className="inline-block bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Curé de la paroisse
                </span>
              )}
              
              <h1 className="font-serif text-4xl text-slate-deep mb-2">
                {priest.name}
              </h1>
              
              <p className="text-[#93B5B7] font-medium text-lg mb-6">
                {priest.role}
              </p>

              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 leading-relaxed text-lg">
                  {priest.description}
                </p>
              </div>

              {/* Contact info */}
              <div className="mt-8 pt-8 border-t border-slate-100">
                <h3 className="font-serif text-lg text-slate-deep mb-4">Prendre contact</h3>
                <p className="text-slate-600 mb-4">
                  Pour contacter {priest.name}, vous pouvez passer par le secrétariat paroissial.
                </p>
                <Link
                  to="/secretariat"
                  className="inline-flex items-center bg-gold hover:bg-gold-dark text-white px-6 py-3 rounded-full font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contacter le secrétariat
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other priests */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl text-slate-deep mb-6">Les autres prêtres</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {priests.filter(p => p.id !== priestId).map((otherPriest) => (
              <Link
                key={otherPriest.id}
                to={`/equipe-pastorale/${otherPriest.id}`}
                className="group"
              >
                <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 flex items-center p-3">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={otherPriest.image} 
                      alt={otherPriest.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-serif text-base text-slate-deep group-hover:text-gold transition-colors">
                      {otherPriest.name}
                    </h3>
                    <p className="text-slate-500 text-sm">{otherPriest.role}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriestDetailPage;
