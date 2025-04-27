import { NavLink } from 'react-router-dom';
import { Shield, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-yellow-500" />
              <span className="text-xl font-bold">
                <span className="text-yellow-500">Néo</span> Solutions
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Expert en Intelligence Stratégique et Sécurité des Affaires depuis 2010.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <MapPin className="h-4 w-4 text-yellow-500 flex-shrink-0" />
              <address className="not-italic">
                Centre d'affaires La chope<br />
                Rue Sebou 5ème Etage<br />
                Kenitra 14000, Maroc
              </address>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  À Propos
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/client-area" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Espace Client
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/services#renseignement" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Renseignement d'Affaires
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#due-diligence" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Due Diligence
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#compliance" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Compliance
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#cybersecurite" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Cybersécurité
                </NavLink>
              </li>
              <li>
                <NavLink to="/services#base-donnees" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  Bases de Données
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-yellow-500" />
                <a href="mailto:contact@neo-solutions.info" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  contact@neo-solutions.info
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-yellow-500" />
                <a href="tel:+21200000000" className="text-gray-400 hover:text-yellow-400 transition-colors text-sm">
                  +212 00 00 00 00
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <NavLink 
                to="/contact" 
                className="inline-block px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 rounded-md font-medium text-sm transition-colors"
              >
                Nous Contacter
              </NavLink>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 text-sm text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© {new Date().getFullYear()} NEO BUSINESS SOLUTIONS. Tous droits réservés.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400 transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;