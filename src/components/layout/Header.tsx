import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Shield, Lock } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) => 
    `transition-colors duration-300 px-3 py-2 rounded-md ${isActive 
      ? 'text-yellow-500 font-medium' 
      : 'text-gray-100 hover:text-yellow-400'}`;

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 shadow-lg backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <Shield className="h-7 w-7 text-yellow-500" />
            <span className="text-xl font-bold text-white tracking-tight">
              <span className="text-yellow-500">Néo</span> Solutions
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <NavLink to="/" className={navLinkClasses}>Accueil</NavLink>
            <NavLink to="/about" className={navLinkClasses}>À Propos</NavLink>
            <NavLink to="/services" className={navLinkClasses}>Services</NavLink>
            <NavLink to="/contact" className={navLinkClasses}>Contact</NavLink>
            
            <NavLink 
              to="/client-area" 
              className="ml-4 flex items-center gap-1 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-medium px-4 py-2 rounded-md transition-colors duration-300"
            >
              <Lock className="h-4 w-4" />
              <span>Espace Client</span>
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm shadow-lg overflow-hidden transition-all duration-300 md:hidden ${
          isMenuOpen ? 'max-h-[400px]' : 'max-h-0'
        }`}
      >
        <nav className="flex flex-col p-4">
          <NavLink to="/" 
            className="py-3 px-4 text-gray-100 hover:bg-slate-800/70 hover:text-yellow-400 rounded-md"
            onClick={closeMenu}
          >
            Accueil
          </NavLink>
          <NavLink to="/about" 
            className="py-3 px-4 text-gray-100 hover:bg-slate-800/70 hover:text-yellow-400 rounded-md"
            onClick={closeMenu}
          >
            À Propos
          </NavLink>
          <NavLink to="/services" 
            className="py-3 px-4 text-gray-100 hover:bg-slate-800/70 hover:text-yellow-400 rounded-md"
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink to="/contact" 
            className="py-3 px-4 text-gray-100 hover:bg-slate-800/70 hover:text-yellow-400 rounded-md"
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <div className="mt-2 pt-2 border-t border-slate-700">
            <NavLink 
              to="/client-area" 
              className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-medium py-3 px-4 rounded-md w-full"
              onClick={closeMenu}
            >
              <Lock className="h-4 w-4" />
              <span>Espace Client</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;