import { motion } from 'framer-motion';
import { ShieldCheck, Users, BookOpen } from 'lucide-react';

const About = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/90 z-10"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">À Propos de Néo Solutions</h1>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Expert en Intelligence Stratégique et Sécurité des Affaires, nous accompagnons les entreprises 
              dans la prise de décisions éclairées et la sécurisation de leurs activités.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Approach Section */}
      <section id="approche" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Notre Approche</h2>
              <h3 className="text-xl font-semibold mb-4 text-slate-700">Un levier stratégique incontournable</h3>
              <p className="text-gray-700 mb-4">
                L'Intelligence Économique est un pilier essentiel de la stratégie moderne d'entreprise, 
                plaçant l'information au cœur du management. Elle repose sur une gestion optimisée des 
                données pour concevoir des solutions adaptées à vos enjeux.
              </p>
              <p className="text-gray-700 mb-4">
                Grâce à une approche protectrice, prospective et proactive, nous concevons des solutions 
                innovantes de gestion de la connaissance, adaptées aux environnements les plus complexes.
              </p>
              <p className="text-gray-700">
                Notre démarche repose sur une synergie entre les nouvelles technologies de l'information 
                et des solutions spécifiques – qu'elles soient techniques, procédurales ou organisationnelles.
              </p>
            </motion.div>
            <motion.div
              className="relative rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Approche stratégique"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="order-2 lg:order-1 relative rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Expertise professionnelle"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              className="order-1 lg:order-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Notre Expertise</h2>
              <h3 className="text-xl font-semibold mb-4 text-slate-700">Optimisez votre stratégie d'information</h3>
              <p className="text-gray-700 mb-4">
                Dans un monde marqué par la mondialisation, l'accélération des échanges et la 
                prolifération des sources d'information, les entreprises du nouveau millénaire doivent 
                repenser leur stratégie d'information.
              </p>
              <p className="text-gray-700 mb-4">
                Fini l'infobésité. Il ne s'agit plus d'être submergé par un flot de données inutiles ou 
                obsolètes, mais de transformer l'information en un levier de performance et de croissance.
              </p>
              <p className="text-gray-700">
                Notre force ? Un réseau de praticiens expérimentés, animés par une culture du 
                résultat et une approche résolument opérationnelle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="valeurs" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Nos Valeurs</h2>
            <p className="text-gray-600">
              Nous nous engageons à respecter les plus hauts standards professionnels et éthiques 
              dans toutes nos missions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="h-12 w-12 text-yellow-500" />,
                title: "Déontologie",
                description: "Respecter la loi constitue l'essence même de notre Profession. Néo Solutions inscrit toutes ses activités dans le cadre strict de la règlementation et possède les agrémentations nécessaires à l'exercice de ses fonctions."
              },
              {
                icon: <BookOpen className="h-12 w-12 text-yellow-500" />,
                title: "Éthique",
                description: "Néo Solutions s'engage à la plus absolue confidentialité vis-à-vis des tiers sur les informations recueillies dans le cadre de ses interventions. Nous refusons toute mission pouvant faire apparaître un conflit d'intérêt entre nos clients."
              },
              {
                icon: <Users className="h-12 w-12 text-yellow-500" />,
                title: "Professionnalisme",
                description: "Des praticiens passionnés et confirmés, imprégnés de la culture du résultat pour vous garantir un rendu fiable et exhaustif en toute indépendance."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white shadow rounded-lg p-6 border border-gray-100"
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-center text-slate-800">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Néo Solutions – Expert en Intelligence Stratégique</h2>
            <p className="text-xl leading-relaxed mb-8">
              Chez Néo Solutions, nous accompagnons les entreprises dans la prise de décisions 
              éclairées et la sécurisation de leurs activités. Spécialistes du renseignement 
              d'affaires, de la due diligence, de la compliance, de la cybersécurité et de la gestion 
              des données d'entreprise, nous vous aidons à anticiper les risques, à renforcer votre 
              conformité et à protéger vos actifs stratégiques.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a
                href="/contact"
                className="inline-block bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-medium px-6 py-3 rounded-md transition-colors"
              >
                Discutez de vos besoins avec nos experts
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;