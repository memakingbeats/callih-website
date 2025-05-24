
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm fixed w-full z-20 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-30">
          {/* Logo centralizada e menor acima do texto */}
          <div className="flex justify-center mr-4">
            <img
              src="/images/logoverde.png"
              alt="CALLIH Logo"
              className="rounded-lg shadow-lg transform transition-all duration-500 hover:scale-80 w-20 h-auto"
            />
          </div>
          {/* Logo Section - Centered and Smaller */}
          <div className="flex-1 flex justify-center md:justify-start">

            <Link to="/" className="text-xl md:text-2xl font-semibold text-olive" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: "300" }}>
              CALLIH Gestão em Saúde
            </Link>
          </div>



          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 ml-8">
            <Link to="/" className="text-olive hover:text-gold transition-colors uppercase text-sm tracking-wider">Home</Link>
            <Link to="/metodologia/1" className="text-olive hover:text-gold transition-colors uppercase text-sm tracking-wider">Metodologia</Link>
            <Link to="/servicos/1" className="text-olive hover:text-gold transition-colors uppercase text-sm tracking-wider">Serviços</Link>
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
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-olive hover:text-gold transition-colors uppercase text-sm tracking-wider">Home</Link>
              <Link to="/metodologia/1" className="block px-3 py-2 text-olive hover:text-gold transition-colors uppercase text-sm tracking-wider">Metodologia</Link>
              <Link to="/servicos/1" className="block px-3 py-2 text-olive hover:text-gold transition-colors uppercase text-sm tracking-wider">Serviços</Link>
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
