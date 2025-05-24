
import { Heart, UserPlus, Stethoscope, Bath, UserCog, Pill, Activity, HeartPulse } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    id: 1,
    icon: Heart,
    title: 'Mapeamento e Redesenho de Processos',
  },
  {
    id: 2,
    icon: UserPlus,
    title: 'Melhoria do Fluxo e Experiência do Paciente',
  },
  {
    id: 3,
    icon: Stethoscope,
    title: 'Implementação de Protocolos Operacionais Padrão (POPs)',
  },
  {
    id: 4,
    icon: Activity,
    title: 'Gestão de Agendas e Otimização de Tempo',
  },
  {
    id: 5,
    icon: Pill,
    title: 'Capacitação e Treinamento de Equipes',
  },
  {
    id: 6,
    icon: Bath,
    title: 'Gestão de Custos e Processos Financeiros',
  },
  {
    id: 7,
    icon: UserCog,
    title: 'Gestão de Relacionamento com o Paciente (CRM)',
  },
  {
    id: 8,
    icon: HeartPulse,
    title: 'Gestão Estratégica para Consultórios',
  },
];

const Index = () => {
  const navigate = useNavigate();

  // Função para rolar até a seção de serviços
  const scrollToServicos = () => {
    const servicosSection = document.getElementById('servicos');
    if (servicosSection) {
      servicosSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Função para redirecionar para a página de contato
  const goToContato = () => {
    navigate('/contato');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content with Logo Above - Left */}
            <div className="animate-fadeInLeft">
              {/* Logo centralizada e menor acima do texto */}
              <div className="flex justify-center mb-8">
                <img
                  src="/images/logoverde.png"
                  alt="CALLIH Logo"
                  className="rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 w-32 h-auto"
                />
              </div>
              
              <h2 className="text-white mb-4 transform transition-all duration-500 hover:scale-105 text-center" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '17pt' }}>
                CALLIH Gestão em Saúde
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 transform transition-all duration-500 hover:scale-105 text-center">
                TRANSFORMAMOS PROCESSOS PARA O SUCESSO DO SEU NEGÓCIO
              </h1>
              <p className="text-lg text-white/90 mb-8 transform transition-all duration-500 hover:scale-105 text-center">
                Descomplique a gestão da sua clínica e foque no crescimento!
              </p>
              <div className="space-x-4 text-center">
                <button
                  onClick={scrollToServicos}
                  className="bg-gold text-white px-6 py-3 rounded-md hover:bg-gold/90 transition-colors transform hover:scale-105 duration-300"
                >
                  Ver Mais
                </button>
                <button
                  onClick={goToContato}
                  className="bg-white/10 text-white px-6 py-3 rounded-md hover:bg-white/20 transition-colors backdrop-blur-sm transform hover:scale-105 duration-300"
                >
                  Fale Conosco
                </button>
              </div>
            </div>

            {/* Header Photo - Right */}
            <div className="flex justify-center md:justify-end animate-fadeInRight">
              <img
                src="/images/fotoHeader.png"
                alt="Healthcare Professional"
                className="rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-olive mb-4">Serviços</h2>
            <p className="text-olive/80">
              Nossa consultoria atua de forma personalizada, otimizando processos, capacitando equipes e
              melhorando sua previsibilidade financeira, através de:
            </p>
          </div>

          {/* Grid de 8 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow h-full flex flex-col items-center text-center cursor-pointer"
                onClick={() => navigate(`/servicos/${service.id}`)}
              >
                <service.icon className="text-gold w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-olive">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre Nós Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-olive mb-4">Sobre Nós</h2>
            <p className="text-olive/80">
              Somos especialistas em gestão na área da saúde e estamos comprometidas em
              transformar a organização do seu consultório ou clínica, trazendo mais
              eficiência, rentabilidade e qualidade no atendimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="rounded overflow-hidden w-64 h-96 flex-shrink-0"> {/* Quadrado maior */}
                <img
                  src="/images/socia.jpeg"
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
              <div className="rounded overflow-hidden w-64 h-96 flex-shrink-0"> {/* Quadrado maior */}
                <img
                  src="/images/Carla2.jpg"
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

      {/* Metodologia Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-olive mb-4">
              NOSSA METODOLOGIA
            </h2>
            <p className="text-olive/70">
              A organização de processos, a eficiência operacional e a gestão estratégica são fundamentais para garantir um negócio saudável e sustentável. É exatamente aqui que a CALLIH Gestão em Saúde pode ajudar.
            </p>
          </div>

          {/* Grid com 4 colunas em desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div
              className="bg-secondary/20 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate('/metodologia/1')} // Redireciona para a página de metodologia com ID 1
            >
              <img
                src="/images/canva1.png"
                alt="Entendimento do Contexto"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-olive">Entendimento do Contexto</h3>
                <p className="text-olive/70 mb-4">
                  Realização de reunião inicial com o objetivo de compreender a cultura organizacional, identificar os objetivos estratégicos e compreender as dificuldades e desafios específicos enfrentados.
                </p>
                <a href="#" className="text-gold hover:text-gold/80 transition-colors">
                  Mais detalhes →
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-secondary/20 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate('/metodologia/2')} // Redireciona para a página de metodologia com ID 2
            >
              <img
                src="/images/canva3.png"
                alt="Análise de Gargalos e Ineficiências"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-olive">Análise de Gargalos e Ineficiências</h3>
                <p className="text-olive/70 mb-4">
                  Realização de análise minuciosa das rotinas e processos atuais, com foco na identificação de áreas problemáticas, gargalos e oportunidades de melhoria.
                </p>
                <a href="#" className="text-gold hover:text-gold/80 transition-colors">
                  Mais detalhes →
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="bg-secondary/20 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate('/metodologia/3')} // Redireciona para a página de metodologia com ID 3
            >
              <img
                src="/images/canva2.png"
                alt="Mapeamento de Processos"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-olive">Mapeamento de Processos</h3>
                <ul className="custom-list list-inside text-olive/70 space-y-2">
                  <li>Identificação e documentação dos processos existentes</li>
                  <li>Análise dos fluxos de trabalho, entradas, saídas, atividades e interações entre departamentos.</li>
                  <li>Criação de mapas de processos para visualizar o fluxo end-to-end.</li>
                </ul>
                <a href="#" className="text-gold hover:text-gold/80 transition-colors">
                  Mais detalhes →
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div
              className="bg-secondary/20 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => navigate('/metodologia/4')} // Redireciona para a página de metodologia com ID 4
            >
              <img
                src="/images/palestra.jpg"
                alt="Treinamento e Manuais"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-olive">Treinamento e Manuais</h3>
                <p className="text-olive/70 mb-4">
                  Realização de treinamentos personalizados, auxílio e suporte na criação de manuais detalhados para capacitar a equipe na implementação eficaz dos novos processos e melhorias.
                </p>
                <a href="#" className="text-gold hover:text-gold/80 transition-colors">
                  Mais detalhes →
                </a>
              </div>
            </div>
          </div>

          {/* Botão "Mais Detalhes" */}
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/metodologia/1')} // Redireciona para a página de metodologia com ID 1
              className="bg-olive text-white px-8 py-3 rounded-md hover:bg-olive/90 transition-colors inline-block"
            >
              Mais Detalhes
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
