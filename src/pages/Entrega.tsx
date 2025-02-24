
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Truck, Clock, CheckCircle, MapPin } from 'lucide-react';

const Entrega = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Nosso Processo de Entrega</h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Garantimos que todos os equipamentos e medicamentos cheguem com segurança e no prazo estabelecido.
              </p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <CheckCircle className="text-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-olive">Confirmação</h3>
                <p className="text-olive/70">
                  Verificação completa dos itens necessários para o atendimento.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Clock className="text-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-olive">Agendamento</h3>
                <p className="text-olive/70">
                  Definição do melhor horário para entrega dos equipamentos.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Truck className="text-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-olive">Transporte</h3>
                <p className="text-olive/70">
                  Transporte especializado com todos os cuidados necessários.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <MapPin className="text-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-olive">Instalação</h3>
                <p className="text-olive/70">
                  Montagem e instalação completa no local indicado.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Entrega;
