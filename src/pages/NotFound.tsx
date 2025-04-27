import { NavLink } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-bold text-yellow-500">404</h1>
        <h2 className="text-3xl font-bold text-slate-800 mt-4 mb-6">Page introuvable</h2>
        <p className="text-gray-600 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <NavLink
            to="/"
            className="bg-yellow-500 hover:bg-yellow-600 text-slate-900 font-medium px-6 py-3 rounded-md inline-flex items-center justify-center gap-2 transition-colors"
          >
            <Home className="h-4 w-4" />
            <span>Retour à l'accueil</span>
          </NavLink>
          <button
            onClick={() => window.history.back()}
            className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-medium px-6 py-3 rounded-md inline-flex items-center justify-center gap-2 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Page précédente</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;