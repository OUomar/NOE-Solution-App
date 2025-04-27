import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Shield, Check, Lock, FileText, Clock, Archive } from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20 md:pt-40 md:pb-28">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/90 z-10"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-yellow-500">Néo</span> Business Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Un cabinet d'Intelligence Économique, expert en recherche d'informations économiques, 
              concurrentielles et en cybersécurité.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <NavLink
                to="/services"
                className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-medium px-6 py-3 rounded-md inline-block text-center transition-colors"
              >
                Découvrir nos Services
              </NavLink>
              <NavLink
                to="/contact"
                className="bg-transparent hover:bg-white/10 text-white border border-white/30 font-medium px-6 py-3 rounded-md inline-block text-center transition-colors"
              >
                Nous Contacter
              </NavLink>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Pourquoi Choisir Néo Solutions ?</h2>
            <p className="text-gray-600">
              Nous accompagnons les entreprises dans leurs démarches stratégiques pour maîtriser leur environnement 
              et prendre les meilleures décisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-10 w-10 text-yellow-500" />,
                title: "Expertise Éprouvée",
                description: "Une expertise éprouvée dans l'analyse des risques et la protection des entreprises."
              },
              {
                icon: <Check className="h-10 w-10 text-yellow-500" />,
                title: "Solutions Sur Mesure",
                description: "Des solutions sur mesure adaptées à vos enjeux spécifiques et à votre secteur d'activité."
              },
              {
                icon: <Lock className="h-10 w-10 text-yellow-500" />,
                title: "Approche Proactive",
                description: "Une approche proactive pour sécuriser et optimiser vos décisions stratégiques."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-3 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-semibold text-center mb-3 text-slate-800">{item.title}</h3>
                <p className="text-gray-600 text-justify">{item.description}</p>
              </motion.div>
            ))}
          </div>


          <div className="text-center mt-12">
            <p className="text-lg font-medium text-slate-800 mb-4">
              Anticipez, sécurisez, prospérez avec Néo Solutions.
            </p>
            <NavLink
              to="/contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-medium px-6 py-3 rounded-md transition-colors"
            >
              Contactez-nous pour en savoir plus
            </NavLink>
          </div>
        </div>
      </section>

      {/* Client Area Showcase */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4 text-slate-800">Un Espace Client Sécurisé et Intuitif</h2>
                <p className="text-gray-600 mb-6">
                  Accédez à un espace client sécurisé conçu pour simplifier la gestion de vos commandes en toute confidentialité.
                </p>
                <ul className="space-y-4">
                  {[
                    {
                      icon: <FileText className="h-5 w-5 text-yellow-500" />,
                      text: "Commandez vos enquêtes en ligne en quelques clics, avec un suivi en temps réel."
                    },
                    {
                      icon: <Archive className="h-5 w-5 text-yellow-500" />,
                      text: "Archivage automatisé de vos commandes pour un accès rapide à l'historique."
                    },
                    {
                      icon: <Clock className="h-5 w-5 text-yellow-500" />,
                      text: "Historique détaillé de vos demandes avec gestion des rapports et documents."
                    },
                    {
                      icon: <Lock className="h-5 w-5 text-yellow-500" />,
                      text: "Interface intuitive et sécurisée accessible 24h/24, 7j/7."
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-3 mt-1">{item.icon}</span>
                      <span className="text-gray-700">{item.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <NavLink
                    to="/client-area"
                    className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-6 py-3 rounded-md transition-colors"
                  >
                    <Lock className="h-4 w-4" />
                    <span>Accéder à l'espace client</span>
                  </NavLink>
                </div>
              </motion.div>
            </div>
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Espace client interface"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
              
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;