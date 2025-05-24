
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
                    src="/images/AlineFoto.jpeg"
                    alt="Dra. Maria Silva"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-olive mb-2">ALINE HENTZ</h3>
                  <p className="text-olive/70">
                    Formada em Processos Gerenciais, Certificada
                    Consultora de Saúde pelo Hospital Albert Einstein -
                    experiência de 27 anos na área da saúde, atuando em
                    laboratório de análises clinicas, clinica médica e
                    hospital dia. Com foco na gestão por processos e administrativa,
                    aplicando conhecimentos de Lean Healthcare na
                    otimização de processos.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="rounded overflow-hidden">
                  <img
                    src="/images/CarlaFoto.jpeg"
                    alt="Dra. Ana Santos"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-olive mb-2">CARLA PANDOLFO</h3>
                  <p className="text-olive/70">
                    Formada em Gestão Financeira com experiência de
                    29 anos na área da saúde, atuando desde
                    consultórios médicos, clínicas, hospitais e operadora
                    de plano de saúde. Com foco na gestão de pessoas, administrativa e
                    financeira, aplicando conhecimentos sólidos em
                    otimização de processos, Leads e Captação de
                    clientes.
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
