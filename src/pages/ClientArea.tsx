import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff } from 'lucide-react';

const ClientArea = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Fonctionnalité de connexion simulée. Dans une application réelle, vous seriez connecté à l\'espace client.');
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white pt-32 pb-20">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-slate-900/90 z-10"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/374559/pexels-photo-374559.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Espace Client</h1>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Connectez-vous à votre espace client sécurisé pour accéder à vos rapports et gérer vos demandes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto">
            <motion.div
              className="bg-white rounded-lg shadow-lg p-8 border border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-yellow-500 rounded-full p-3">
                  <Lock className="h-6 w-6 text-slate-900" />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-6 text-slate-800 text-center">Connexion à l'Espace Client</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500 pr-10"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="rememberMe"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleChange}
                      className="h-4 w-4 text-yellow-500 focus:ring-yellow-500 border-gray-300 rounded"
                    />
                    <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
                      Se souvenir de moi
                    </label>
                  </div>
                  <a href="#" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                    Mot de passe oublié?
                  </a>
                </div>
                
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
                      Connexion...
                    </>
                  ) : (
                    <>
                      <Lock className="h-4 w-4" />
                      Se connecter
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Vous n'avez pas encore de compte? <a href="/contact" className="font-medium text-blue-600 hover:text-blue-800">Demandez un accès</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-slate-800">Fonctionnalités de l'Espace Client</h2>
            <p className="text-gray-600">
              Notre espace client vous offre des outils puissants pour gérer vos demandes et accéder à vos informations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
            {[
              {
                icon: "📊",
                title: "Tableau de bord",
                description: "Visualisez toutes vos activités et suivez l'état de vos demandes en temps réel."
              },
              {
                icon: "📝",
                title: "Gestion des demandes",
                description: "Créez et suivez vos demandes d'enquêtes facilement depuis votre interface."
              },
              {
                icon: "📁",
                title: "Rapports et archives",
                description: "Accédez à vos rapports et à l'historique complet de vos dossiers à tout moment."
              },
              {
                icon: "🔐",
                title: "Sécurité renforcée",
                description: "Vos données sont protégées par des protocoles de sécurité avancés."
              },
              {
                icon: "📱",
                title: "Accès multi-appareils",
                description: "Connectez-vous depuis n'importe quel appareil, n'importe où et n'importe quand."
              },
              {
                icon: "💬",
                title: "Support dédié",
                description: "Bénéficiez d'une assistance personnalisée via notre système de messagerie intégré."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl flex justify-center mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center text-slate-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientArea;