import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    status: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          status: '',
          message: '',
        });
      }, 3000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/90 z-10"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/7148384/pexels-photo-7148384.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contactez-Nous</h1>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Chez Néo Solutions, nous accordons une grande importance à vos commentaires, 
              questions et suggestions. Notre équipe est là pour vous accompagner.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-slate-800">Formulaire de contact</h2>
              <p className="text-gray-600 mb-6">
                Pour nous aider à vous répondre au mieux, veuillez remplir les champs ci-dessous.
                Néo Solutions préserve la confidentialité de vos données. Les renseignements que
                vous fournirez dans ce formulaire seront utilisés uniquement pour répondre à votre
                requête.
              </p>

              {submitSuccess ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
                  <strong className="font-bold">Merci pour votre message ! </strong>
                  <span className="block sm:inline">Nous vous répondrons dans les plus brefs délais.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Sujet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                      >
                        <option value="">Sélectionnez un sujet...</option>
                        <option value="info">En savoir plus sur les services proposés</option>
                        <option value="database">Un accès test à la base de données</option>
                        <option value="demo">Une démonstration en ligne</option>
                        <option value="support">Contacter la permanence technique</option>
                        <option value="issue">Signaler un dysfonctionnement</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                        Statut
                      </label>
                      <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                      >
                        <option value="">Sélectionnez votre statut...</option>
                        <option value="finance">Direction financière</option>
                        <option value="commercial">Direction commerciale</option>
                        <option value="ie">Acteurs IE</option>
                        <option value="credit">Credit Management</option>
                        <option value="bank">Banques & Assurances</option>
                        <option value="other">Autres</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    ></textarea>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="privacy"
                      name="privacy"
                      required
                      className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
                    />
                    <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                      J'accepte que mes données soient utilisées pour traiter ma demande *
                    </label>
                  </div>

                  <div className="mt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-medium px-6 py-3 rounded-md transition-colors ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Envoyer le message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-slate-800 rounded-lg shadow-lg p-8 text-white h-full">
                <h2 className="text-2xl font-bold mb-6">Nos Coordonnées</h2>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <MapPin className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Adresse</h3>
                      <address className="not-italic text-gray-300">
                        Centre d'affaires La chope<br />
                        Rue Sebou 5ème Etage<br />
                        Kenitra 14000, Maroc
                      </address>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a href="mailto:contact@neo-solutions.info" className="text-gray-300 hover:text-yellow-400 transition-colors">
                        contact@neo-solutions.info
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="h-6 w-6 text-yellow-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Téléphone</h3>
                      <a href="tel:+21200000000" className="text-gray-300 hover:text-yellow-400 transition-colors">
                        +212 00 00 00 00
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h3 className="font-medium mb-3">Horaires d'ouverture</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex justify-between">
                      <span>Lundi - Vendredi:</span>
                      <span>9:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Samedi:</span>
                      <span>9:00 - 13:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Dimanche:</span>
                      <span>Fermé</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium mb-3">Assistance d'urgence</h3>
                  <p className="text-gray-300">
                    Notre service d'assistance est disponible 24h/24 et 7j/7 pour nos clients sous contrat.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Notre Bureau</h2>
            <p className="text-gray-600">
              Rendez-nous visite dans nos locaux au centre d'affaires La chope à Kenitra.
            </p>
          </motion.div>

          <motion.div
            className="rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=La+chope,+Kenitra&key=AIzaSyCldgLp4_6_oAdDwgZvti4WXiiiKZHxW7Y"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            title="Bureau"
          ></iframe>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;