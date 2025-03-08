
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-secondary overflow-hidden text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-2xl font-semibold " style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: "300" }}>CALLIH</Link>
            <p className="text-secondary/80 text-white ">
              TRANSFORMAMOS PROCESSOS PARA O SUCESSO DO SEU NEGÓCIO
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/callihgestao/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <Instagram size={24} className="hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.facebook.com/callihgestao" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">
                <Facebook size={24} className="hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>


          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white">
                <Phone size={20} className="text-white" />
                <span>(51) 99678-2452</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <Mail size={20} className="text-white" />
                <span>aconsultoriadesaude@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-white">
                <MapPin size={20} className="text-white" />
                <span>Canoas, RS</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white"></h3>
            <ul className="space-y-2 text-white">
              <li><Link to="/" className="hover:text-gold transition-colors text-white">Home</Link></li>
              <li><Link to="/servicos/1" className="hover:text-gold transition-colors text-white">Serviços</Link></li>
              <li><Link to="/metodologia/1" className="hover:text-gold transition-colors text-white">Metodologia</Link></li>
              <li><Link to="/sobre-nos" className="hover:text-gold transition-colors text-white">Sobre Nós</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-8 pt-8 text-center text-secondary/60">
          <p>&copy; {new Date().getFullYear()} Callih. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
