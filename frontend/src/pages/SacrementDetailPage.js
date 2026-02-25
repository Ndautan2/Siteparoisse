import { useParams, Link } from 'react-router-dom';
import { Droplets, Heart, Sparkles, HandHeart, Cross, ArrowLeft, Phone, Mail } from 'lucide-react';
import { SocialIcons } from '@/components/SocialIcons';

// Citations bibliques pour chaque sacrement
const biblicalQuotes = {
  'bapteme': { quote: "Tu es mon fils bien-aimé ; en toi, j'ai mis tout mon amour.", reference: "Marc 1, 11" },
  'premiere-communion': { quote: "Moi, je suis le pain de la vie. Celui qui vient à moi n'aura jamais faim.", reference: "Jean 6, 35" },
  'confirmation': { quote: "Vous allez recevoir une Force, celle de l'Esprit saint, qui descendra sur vous. Vous serez alors mes témoins à Jérusalem, dans toute la Judée et la Samarie, et jusqu'aux extrémités de la terre.", reference: "Actes 1, 8" },
  'reconciliation': { quote: "Tes péchés sont pardonnés, va en paix.", reference: "Luc 7, 48" },
  'mariage': { quote: "Que l'homme ne sépare pas ce que Dieu a uni.", reference: "Matthieu 19, 6" },
  'malades': { quote: "Le Seigneur est mon berger : je ne manque de rien.", reference: "Psaume 22, 1" }
};

const sacrementsData = {
  'bapteme': {
    title: 'Le Baptême',
    subtitle: 'Devenir enfant de Dieu',
    icon: Droplets,
    image: 'https://customer-assets.emergentagent.com/job_c9a89358-b983-4f0b-8ec4-b48d0db621c4/artifacts/gj75c74d_Bapteme.png',
    intro: 'Premier des sacrements, le baptême est le fondement de toute la vie chrétienne, la porte qui ouvre l\'accès aux autres sacrements. Par le baptême nous sommes libérés du péché et régénérés comme filles et fils de Dieu ; nous devenons membres du Christ et de son Église, témoins de sa Bonne Nouvelle.',
    introSecondary: 'Baptiser (du grec "baptizein") signifie "plonger" ou "immerger" ; la plongée dans l\'eau signifie l\'ensevelissement du catéchumène dans la mort du Christ d\'où il sort par la résurrection avec lui, comme nouvelle créature. Chez tous les baptisés, enfants ou adultes, la foi doit croître après le baptême. C\'est pour cela que l\'Église célèbre chaque année, dans la nuit de Pâques, le renouvellement des promesses du baptême.',
    sections: [
      {
        title: 'Baptême des petits enfants',
        content: 'Faire baptiser un petit enfant est un acte important pour les parents. Elle engage leur foi et celles des parrains et marraines. Cette démarche demande réflexion et préparation.\n\nLes parents s\'adressent au presbytère, le plus tôt possible. Le prêtre et les parents font le point sur les motivations de la demande et sur ses conséquences. Ils déterminent ensemble une date de célébration.\n\nLes parents participent ensuite à des rencontres de réflexion et de préparation.\n\n**Responsables des rencontres : Florie et Vianney Languille**\n\nQuelques jours avant le baptême, les parents rencontrent à nouveau le prêtre pour organiser la célébration.'
      },
      {
        title: 'Baptême des enfants en âge scolaire',
        content: 'Les parents qui le souhaitent peuvent demander le baptême pour leur enfant en âge scolaire, quand l\'enfant le désire. Pour cela, il faut contacter un prêtre de la paroisse ou le catéchiste de l\'enfant.\n\nLa préparation se fait en trois étapes : accueil et signe de la croix, rite pénitentiel au cours de messes pour les enfants et leurs familles, puis baptême. Avant chaque étape une rencontre est organisée avec les parents pour approfondir le sens de la démarche. Le baptême est préparé avec le prêtre, les parents et l\'enfant.'
      },
      {
        title: 'Baptême des adultes',
        content: 'Les adultes qui demandent le baptême sont invités à le préparer par un cheminement qui dure souvent deux ans, mais qui peut être plus rapide ou plus long en fonction des situations. Le candidat est accompagné individuellement par des baptisés de la paroisse, en lien avec le prêtre et le service diocésain du catéchuménat.\n\nLe cheminement vers le baptême d\'adultes comprend plusieurs étapes, qui ont lieu en paroisse ou avec les autres catéchumènes du diocèse. Le baptême est le plus souvent célébré dans la nuit de Pâques, fête de la Résurrection. Il peut être accompagné des deux autres sacrements de l\'initiation chrétienne, la confirmation et l\'Eucharistie.'
      }
    ],
    steps: [
      'Contacter le secrétariat paroissial',
      'Rencontre avec un prêtre',
      'Sessions de préparation',
      'Choix du parrain et de la marraine',
      'Célébration du baptême'
    ]
  },
  'premiere-communion': {
    title: 'La Première Communion',
    subtitle: 'Recevoir le Corps du Christ',
    icon: Heart,
    image: 'https://customer-assets.emergentagent.com/job_5166d458-aa97-495f-97c0-2fdcfaf2d885/artifacts/jrek2lhj_Premiere-communion.png',
    intro: 'Les « premières communions » se déroulent en mai et juin.',
    sections: [
      {
        title: 'Pour les enfants',
        content: 'Les enfants qui en sont à leur troisième année de catéchisme peuvent demander à recevoir le sacrement de l\'eucharistie. Cela se passe plutôt en CM2, mais peut se demander à tout âge. La demande est à faire en début d\'année.\n\nUne première rencontre concerne uniquement les parents. Au cours d\'une soirée nous présentons l\'itinéraire que vont vivre les enfants.\n\nPuis les enfants suivent une préparation spécifique :\n• trois rencontres ont lieu le dimanche matin avant les messes des familles ;\n• une matinée pour se préparer et vivre le sacrement de la réconciliation ;\n• une journée de retraite avec les parents.\n\nPour ce qui est la cérémonie elle-même, le père Daniel propose aux parents une rencontre pour expliquer le sacrement de l\'eucharistie. Nous vous proposons de nous retrouver pour préparer ensemble la célébration.\n\nUne rencontre de relecture est organisée après la cérémonie, un dimanche matin, avant la messe des familles.'
      },
      {
        title: 'Pour les adultes',
        content: 'Vous avez été baptisé enfant mais n\'avez jamais fait votre première communion ? Sachez qu\'il n\'y a pas d\'âge pour recevoir l\'Eucharistie et nourrir sa vie spirituelle.\n\nCette démarche est une belle étape de foi qui se prépare sereinement. Nous vous proposons un accompagnement adapté à votre vie d\'adulte pour redécouvrir le sens de ce sacrement, approfondir la Bible et échanger sur vos questions.\n\nChaque parcours respecte votre rythme et vos attentes. Si vous ressentez cet appel ou souhaitez simplement des informations, n\'hésitez pas à nous contacter pour une rencontre informelle. Vous êtes les bienvenus !'
      }
    ],
    steps: [
      'Inscription au catéchisme (3ème année minimum)',
      'Rencontre avec les parents',
      'Sessions de préparation',
      'Journée de retraite avec les parents',
      'Célébration de la première communion'
    ]
  },
  'confirmation': {
    title: 'La Confirmation',
    subtitle: 'Recevoir l\'Esprit Saint',
    icon: Sparkles,
    image: 'https://customer-assets.emergentagent.com/job_957f9676-dd26-4dee-97f5-494fc015f420/artifacts/e13l6wpl_Confirmation.png',
    intro: 'La Confirmation vient achever la grâce du Baptême. Ce sacrement est conféré aux personnes, jeunes et adultes, qui ont mûrement réfléchi à leur vie de Foi et à leur engagement dans le monde et dans l\'Eglise.',
    introSecondary: 'Par la confirmation, le chrétien reçoit les sept dons de l\'Esprit pour fortifier sa foi et décider de témoigner de l\'Évangile auprès des autres.',
    sections: [
      {
        title: 'Un cheminement accompagné',
        content: 'Parce qu\'il s\'agit d\'une étape marquante de la vie chrétienne, la réception de ce sacrement demande un temps de préparation et de discernement.'
      },
      {
        title: 'Pour les jeunes',
        content: 'Les collégiens et lycéens se préparent au sein de l\'aumônerie de l\'enseignement public ou de leur établissement. C\'est un lieu d\'échange et de partage pour grandir ensemble dans la foi.'
      },
      {
        title: 'Pour les adultes',
        content: 'Il n\'y a pas d\'âge pour être confirmé ! Un parcours adapté est proposé aux adultes (baptisés ou non) pour redécouvrir les fondements de la foi et se préparer à recevoir ce souffle nouveau.\n\nCe temps de préparation est une parenthèse de réflexion pour mieux comprendre l\'action de Dieu dans sa vie avant de s\'engager avec confiance.'
      }
    ],
    steps: [
      'Demande auprès du secrétariat ou de l\'aumônerie',
      'Année de préparation',
      'Sessions de préparation',
      'Retraite de préparation',
      'Célébration par l\'évêque'
    ]
  },
  'reconciliation': {
    title: 'La Réconciliation',
    subtitle: 'Le pardon de Dieu',
    icon: HandHeart,
    image: 'https://customer-assets.emergentagent.com/job_957f9676-dd26-4dee-97f5-494fc015f420/artifacts/qhnerpwc_Reconciliation-confession.png',
    intro: 'Le sacrement de réconciliation (ou confession) nous permet de recevoir le pardon de Dieu et de nous réconcilier avec lui et avec l\'Église.',
    practicalInfo: 'Chaque vendredi soir, après la messe de 18h30, à Saint-Orens et Castanet.',
    sections: [
      {
        title: 'Recevoir le Pardon de Dieu',
        content: 'Recevoir le Pardon de Dieu est une démarche qui peut se faire...\n\n• soit au cours d\'une célébration communautaire, avant Noël et Pâques, en consultant le calendrier pour connaître la date ;\n• soit en rencontrant individuellement un prêtre, en prenant rendez-vous.'
      },
      {
        title: 'Se préparer',
        content: 'Avant de recevoir ce sacrement, il est bon de prendre un temps de prière et d\'examen de conscience pour reconnaître ses péchés devant Dieu.'
      },
      {
        title: 'Première confession',
        content: 'Les enfants préparent leur première confession dans le cadre du catéchisme, généralement avant leur première communion.'
      }
    ],
    steps: [
      'Prendre un temps d\'examen de conscience',
      'Se présenter aux permanences (vendredi après 18h30) ou prendre rendez-vous',
      'Confession individuelle avec un prêtre',
      'Recevoir l\'absolution',
      'Accomplir la pénitence donnée par le prêtre'
    ]
  },
  'mariage': {
    title: 'Le Mariage',
    subtitle: 'S\'unir dans l\'amour du Christ',
    icon: Heart,
    image: 'https://customer-assets.emergentagent.com/job_957f9676-dd26-4dee-97f5-494fc015f420/artifacts/5tik9jhg_Mariage.png',
    intro: 'Le mariage à l\'église, est un évènement majeur de votre vie de couple. Aussi sa préparation nécessite-t-elle du temps et il est donc nécessaire de s\'y prendre au moins une année avant le jour J.',
    introSecondary: 'Le mariage chrétien suppose de votre part à tous les 2 une décision libre et qui vous lie POUR LA VIE. Vous allez vous préparer à recevoir le sacrement du mariage et l\'équipe chargée de l\'accompagnement des futurs mariés vous aidera à réfléchir ensemble à cet engagement que vous allez prendre devant Dieu.',
    sections: [
      {
        title: 'La préparation',
        content: 'Dans un premier temps, vous contacterez le secrétariat du secteur paroissial pour planifier un rendez-vous avec le prêtre de la paroisse. Il vous guidera dans votre discernement.\n\nPuis, vous partagerez deux journées et une soirée avec d\'autres couples qui, comme vous, sont dans cette démarche de cheminement vers le mariage.\n\nLa célébration du mariage est finalisée avec le prêtre qui sera témoin de votre mariage.'
      },
      {
        title: 'Offrande',
        content: 'Il faut prévoir une offrande à la paroisse de 200 € pour un mariage.'
      },
      {
        title: 'Responsables',
        content: '**Responsables des préparations au mariage : Françoise et Jean-François Léturgie**'
      }
    ],
    steps: [
      'Contacter le secrétariat au moins 1 an à l\'avance',
      'Rencontre avec un prêtre',
      'Sessions de préparation',
      'Constitution du dossier de mariage',
      'Célébration du mariage'
    ]
  },
  'malades': {
    title: 'Le Sacrement des Malades',
    subtitle: 'Force et réconfort',
    icon: Cross,
    image: 'https://customer-assets.emergentagent.com/job_c9a89358-b983-4f0b-8ec4-b48d0db621c4/artifacts/3dt57dtp_Sacreement-des-malades.png',
    intro: 'Le sacrement des malades apporte réconfort, force et paix aux personnes gravement malades, âgées ou en fin de vie.',
    sections: [
      {
        title: 'Qui peut le recevoir ?',
        content: 'Toute personne gravement malade, âgée ou en danger de mort peut recevoir ce sacrement. Il n\'est pas réservé aux derniers instants de la vie.'
      },
      {
        title: 'Les effets du sacrement',
        content: 'Ce sacrement apporte la grâce de l\'Esprit Saint pour le réconfort, la paix et le courage. Il unit la souffrance du malade à celle du Christ.'
      },
      {
        title: 'Célébration communautaire',
        content: 'Une fois par an, une célébration communautaire du sacrement des malades est organisée dans la paroisse.'
      }
    ],
    steps: [
      'Contacter le secrétariat ou un prêtre',
      'Visite du prêtre au domicile ou à l\'hôpital',
      'Sessions de préparation',
      'Célébration du sacrement (onction et prières)',
      'Possibilité de recevoir l\'Eucharistie'
    ]
  }
};

// Helper function to render content with line breaks and bold text
const renderContent = (content) => {
  const lines = content.split('\n');
  return lines.map((line, index) => {
    // Handle bold text marked with **
    const parts = line.split(/(\*\*.*?\*\*)/g);
    const renderedLine = parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-slate-deep">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
    
    if (line.startsWith('•')) {
      return (
        <li key={index} className="ml-4 text-slate-600">
          {renderedLine}
        </li>
      );
    }
    if (line === '') {
      return <br key={index} />;
    }
    return <p key={index} className="text-slate-600 leading-relaxed">{renderedLine}</p>;
  });
};

const SacrementDetailPage = () => {
  const { sacrementId } = useParams();
  const sacrement = sacrementsData[sacrementId];

  if (!sacrement) {
    return (
      <div className="min-h-screen bg-paper py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-slate-deep mb-4">Page non trouvée</h1>
          <Link to="/demander-sacrement" className="text-gold hover:text-gold-dark">
            Retour aux sacrements
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = sacrement.icon;

  return (
    <div className="min-h-screen bg-paper" data-testid={`sacrement-detail-${sacrementId}`}>
      {/* Hero Section */}
      <div className="relative h-[40vh] min-h-[300px]">
        <img
          src={sacrement.image}
          alt={sacrement.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
        
        <SocialIcons />
        
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/demander-sacrement" 
              className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour aux sacrements
            </Link>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center">
                <IconComponent className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <h1 className="font-serif text-4xl md:text-5xl text-white">{sacrement.title}</h1>
                <p className="text-gold text-lg">{sacrement.subtitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Intro */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-8">
          <p className="text-lg text-slate-700 leading-relaxed">{sacrement.intro}</p>
          {sacrement.introSecondary && (
            <p className="text-lg text-slate-700 leading-relaxed mt-4">{sacrement.introSecondary}</p>
          )}
        </div>

        {/* Practical Info (for Reconciliation) */}
        {sacrement.practicalInfo && (
          <div className="bg-gold/10 rounded-xl p-6 border border-gold/20 mb-8">
            <p className="text-slate-deep font-medium text-center">
              {sacrement.practicalInfo}
            </p>
          </div>
        )}

        {/* Sections */}
        <div className="space-y-6 mb-12">
          {sacrement.sections.map((section, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
              <h2 className="font-serif text-2xl text-slate-deep mb-4">{section.title}</h2>
              <div className="space-y-2">
                {renderContent(section.content)}
              </div>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-8 border border-gold/20 mb-12">
          <h2 className="font-serif text-2xl text-slate-deep mb-6">Les étapes de la démarche</h2>
          <ol className="space-y-4">
            {sacrement.steps.map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-white flex items-center justify-center font-medium mr-4">
                  {index + 1}
                </span>
                <span className="text-slate-700 pt-1">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Contact */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 text-center mb-16">
          <h2 className="font-serif text-2xl text-slate-deep mb-4">Faire une demande</h2>
          <p className="text-slate-600 mb-6">
            Pour toute demande concernant ce sacrement, contactez le secrétariat paroissial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/secretariat"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-white px-6 py-3 rounded-full font-medium transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contacter le secrétariat
            </Link>
          </div>
        </div>

        {/* Citation biblique */}
        {biblicalQuotes[sacrementId] && (
          <div className="bg-gradient-to-r from-gold/10 to-gold/5 rounded-2xl p-8 border border-gold/20 text-center">
            <blockquote className="font-serif text-2xl text-slate-deep italic mb-4">
              "{biblicalQuotes[sacrementId].quote}"
            </blockquote>
            <p className="text-gold font-medium">{biblicalQuotes[sacrementId].reference}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SacrementDetailPage;
