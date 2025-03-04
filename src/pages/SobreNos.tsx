
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Award, Users, Target, Heart } from 'lucide-react';

const SobreNos = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Sobre Nós</h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Conheça nossa história e nossa missão de proporcionar o melhor cuidado em saúde.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Award className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-olive mb-2">Excelência</h3>
                <p className="text-olive/70">Comprometimento com a qualidade em todos os aspectos.</p>
              </div>

              <div className="text-center">
                <Heart className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-olive mb-2">Cuidado</h3>
                <p className="text-olive/70">Atenção individualizada para cada paciente.</p>
              </div>

              <div className="text-center">
                <Target className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-olive mb-2">Precisão</h3>
                <p className="text-olive/70">Atendimento preciso e personalizado.</p>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 text-gold mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-olive mb-2">Equipe</h3>
                <p className="text-olive/70">Profissionais altamente qualificados.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="rounded overflow-hidden">
                  <img
                    src="/images/socia.jpeg"
                    alt="Dra. Maria Silva"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-olive mb-2">Dra. Maria Silva</h3>
                  <p className="text-olive/70">
                    Especialista em gestão de saúde com mais de 15 anos de experiência. 
                    Lidera nossa equipe de cuidados domiciliares com dedicação e excelência.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="rounded overflow-hidden">
                  <img
                    src="/images/carla.jpeg"
                    alt="Dra. Ana Santos"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-olive mb-2">Dra. Ana Santos</h3>
                  <p className="text-olive/70">
                    Coordenadora de operações com especialização em cuidados intensivos.
                    Responsável por desenvolver protocolos personalizados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SobreNos;
