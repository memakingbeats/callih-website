
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Seven</h3>
            <p className="text-gray-400">
              Cuidados especializados em saúde, proporcionando atendimento de qualidade e personalizado.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone size={20} />
                <span>(XX) XXXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail size={20} />
                <span>contato@seven.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin size={20} />
                <span>São Paulo, SP</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quem Somos</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Seven. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
