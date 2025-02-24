
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-20 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-semibold text-primary">Seven</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Serviços</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Blog</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Quem Somos</a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">Contato</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Serviços</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Blog</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Quem Somos</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors">Contato</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
