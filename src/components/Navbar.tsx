
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm fixed w-full z-20 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-semibold text-olive">Callih</Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            <Link to="/" className="text-olive hover:text-gold transition-colors uppercase text-sm tracking-wider">Home</Link>
            <Link to="/entrega" className="text-olive hover:text-gold transition-colors uppercase text-sm tracking-wider">Entrega</Link>
            <Link to="/servicos" className="text-olive hover:text-gold transition-colors uppercase text-sm tracking-wider">Serviços</Link>
            <Link to="/sobre-nos" className="text-olive hover:text-gold transition-colors uppercase text-sm tracking-wider">Sobre Nós</Link>
            <Link to="/contato" className="text-olive hover:text-gold transition-colors uppercase text-sm tracking-wider">Contato</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-olive hover:text-gold focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-olive hover:text-gold transition-colors uppercase text-sm tracking-wider">Home</Link>
              <Link to="/entrega" className="block px-3 py-2 text-olive hover:text-gold transition-colors uppercase text-sm tracking-wider">Entrega</Link>
              <Link to="/servicos" className="block px-3 py-2 text-olive hover:text-gold transition-colors uppercase text-sm tracking-wider">Serviços</Link>
              <Link to="/sobre-nos" className="block px-3 py-2 text-olive hover:text-gold transition-colors uppercase text-sm tracking-wider">Sobre Nós</Link>
              <Link to="/contato" className="block px-3 py-2 text-olive hover:text-gold transition-colors uppercase text-sm tracking-wider">Contato</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
