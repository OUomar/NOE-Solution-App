import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Search, Check, Scale, Shield, Database, FileSearch } from 'lucide-react';

const ServiceCard = ({ 
  id, 
  icon, 
  title, 
  description, 
  index 
}: { 
  id: string; 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  index: number; 
}) => {
  return (
    <motion.div
      id={id}
      className="bg-white rounded-lg shadow-md border border-gray-100 p-6 hover:shadow-lg transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="mb-3 text-yellow-500 flex justify-center">{icon}</div>
      <h3 className="text-xl font-semibold text-center mb-3 text-slate-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mt-auto">
        <NavLink
          to="/contact"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          En savoir plus
          <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </NavLink>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      id: "renseignement",
      icon: <Search className="h-10 w-10" />,
      title: "Renseignement d'Affaires",
      description: "Obtenez une vision complète de votre environnement concurrentiel et commercial. Nous analysons et collectons des informations stratégiques pour vous aider à identifier des opportunités et à minimiser les menaces."
    },
    {
      id: "due-diligence",
      icon: <Check className="h-10 w-10" />,
      title: "Due Diligence",
      description: "Évaluez la fiabilité de vos partenaires, clients et fournisseurs avant de vous engager. Nos enquêtes approfondies vous permettent de prendre des décisions en toute confiance et d'éviter les risques financiers, juridiques et réputationnels."
    },
    {
      id: "compliance",
      icon: <Scale className="h-10 w-10" />,
      title: "Compliance",
      description: "Assurez la conformité de votre entreprise face aux réglementations en vigueur. Nos solutions vous aident à prévenir la fraude, la corruption et les risques liés à la protection des données et à la gouvernance d'entreprise."
    },
    {
      id: "cybersecurite",
      icon: <Shield className="h-10 w-10" />,
      title: "Cybersécurité",
      description: "Protégez vos systèmes, vos données et votre organisation contre les cybermenaces. Nous mettons en place des stratégies de sécurité robustes pour prévenir les attaques et garantir l'intégrité de vos infrastructures numériques."
    },
    {
      id: "base-donnees",
      icon: <Database className="h-10 w-10" />,
      title: "Bases de Données",
      description: "Nous agrégeons les données d'entreprises, incluant vos clients, fournisseurs, actionnaires et partenaires. Notre technologie vous offre un accès rapide à des informations financières, juridiques et à des indicateurs clés pour optimiser votre gestion des risques."
    },
    {
      id: "recherches-civiles",
      icon: <FileSearch className="h-10 w-10" />,
      title: "Recherches Civiles",
      description: "Les investigations civiles, menées principalement pour le compte de compagnies d'assurances et d'établissements financiers, visent à localiser des débiteurs, des héritiers et des personnes disparues."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/90 z-10"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
            opacity: 0.4
          }}
        />
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nos Services</h1>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Des solutions complètes pour sécuriser vos activités et optimiser vos prises de décision.
              Découvrez notre gamme de services spécialisés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.id}
                id={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Database Details */}
      <section id="database-details" className="py-16 bg-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Base de Données</h2>
              <p className="text-gray-700 mb-6">
                Nous agrégeons les données d'entreprises, incluant vos clients, fournisseurs, 
                actionnaires et partenaires. Notre technologie vous offre un accès rapide à des 
                informations financières, juridiques et à des indicateurs clés.
              </p>
              <ul className="space-y-3">
                {[
                  "Optimisez la gestion des risques (KYC, KYS et due diligence).",
                  "Renforcez vos décisions stratégiques avec des informations précises et actualisées.",
                  "Facilitez la prospection B2B grâce à des données qualifiées."
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <NavLink
                  to="/contact"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-medium px-6 py-3 rounded-md transition-colors"
                >
                  Demander un accès test
                </NavLink>
              </div>
            </motion.div>
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Base de données"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Civil Research Details */}
      <section id="civil-research" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1 relative rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.pexels.com/photos/5323542/pexels-photo-5323542.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Recherches civiles"
                className="w-full h-auto rounded-lg"
              />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Recherches Civiles</h2>
              <p className="text-gray-700 mb-4">
                Les investigations civiles, menées principalement pour le compte de compagnies 
                d'assurances et d'établissements financiers, visent à localiser des débiteurs, 
                des héritiers et des personnes disparues.
              </p>
              <p className="text-gray-700 mb-4">
                Nos interventions couvrent plusieurs domaines :
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-yellow-500 rounded-full p-1">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-gray-700">
                    Identification et localisation de débiteurs afin de faciliter le recouvrement 
                    de créances et l'exécution des décisions de justice.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-yellow-500 rounded-full p-1">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                  </div>
                  <span className="text-gray-700">
                    Recherche d'héritiers dans le cadre de successions complexes, en s'appuyant 
                    sur des bases de données publiques et privées.
                  </span>
                </li>
              </ul>
              <p className="text-gray-700">
                Nous recueillons également des preuves de solvabilité, telles que le patrimoine 
                immobilier, flottant ou volant, afin d'optimiser les procédures de recouvrement.
              </p>
              <div className="mt-8">
                <NavLink
                  to="/contact"
                  className="inline-block bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-medium px-6 py-3 rounded-md transition-colors"
                >
                  Discuter de votre cas
                </NavLink>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Besoin d'une consultation personnalisée?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Nos experts sont disponibles pour discuter de vos besoins spécifiques et vous proposer 
              des solutions adaptées à votre situation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <NavLink
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-medium px-6 py-3 rounded-md transition-colors"
              >
                Nous Contacter
              </NavLink>
              <a
                href="mailto:contact@neo-solutions.info"
                className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-md transition-colors flex items-center gap-2"
              >
                {/*<Mail className="h-4 w-4" />*/}
                contact@neo-solutions.info
              </a>
              <a
                href="tel:+21200000000"
                className="bg-transparent border border-white/30 hover:bg-white/10 text-white font-medium px-6 py-3 rounded-md transition-colors flex items-center gap-2"
              >
                {/*<Phone className="h-4 w-4" />*/}
                +212 00 00 00 00
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;