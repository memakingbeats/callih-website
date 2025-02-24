
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { 
  HeartPulse, 
  Stethoscope, 
  Activity, 
  Pill,
  UserCog,
  Bath,
  Baby,
  Syringe
} from 'lucide-react';

const Servicos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Nossos Serviços</h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Oferecemos uma ampla gama de serviços de saúde especializados para atender às suas necessidades.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                <HeartPulse className="text-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-olive">Monitoramento Cardíaco</h3>
                <p className="text-olive/70">
                  Acompanhamento contínuo dos sinais vitais e condições cardíacas.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                <Stethoscope className="text-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-olive">Consultas Médicas</h3>
                <p className="text-olive/70">
                  Atendimento médico especializado no conforto do seu lar.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                <Activity className="text-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-olive">Fisioterapia</h3>
                <p className="text-olive/70">
                  Reabilitação física com profissionais qualificados.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                <Pill className="text-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-olive">Gestão de Medicamentos</h3>
                <p className="text-olive/70">
                  Controle e administração de medicações prescritas.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                <Bath className="text-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-olive">Cuidados Pessoais</h3>
                <p className="text-olive/70">
                  Auxílio em atividades diárias e higiene pessoal.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all">
                <UserCog className="text-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-olive">Cuidados Especializados</h3>
                <p className="text-olive/70">
                  Atendimento personalizado para necessidades específicas.
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

export default Servicos;
