
import { Heart, UserPlus, Stethoscope, Bath, UserCog, Pill, Activity, HeartPulse, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../components/ui/avatar';

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
              <div className="rounded overflow-hidden w-64 h-96 flex-shrink-0"> {/* Quadrado maior */}
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
                src="/images/Callih_Retrato.jpg"
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
                src="/images/palestra.png"
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
      {/* Depoimentos Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-olive mb-4">Depoimentos</h2>
            <p className="text-olive/80">
              Veja o que nossos clientes dizem sobre nossos serviços
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Depoimento 1 */}
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gray-500 text-white">EV</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-olive">Eduarda Vicente</h3>
                    <p className="text-sm text-olive/60">1 avaliação</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-olive/60 ml-2">7 meses atrás</span>
                    </div>
                  </div>
                </div>
                <p className="text-olive/70 text-sm leading-relaxed">
                  Realizam um trabalho excelente e com maestria, mulheres empoderadas que mostram seu potencial!
                  Vale muito a pena o investimento na consultoria delas, pois o resultado é cem por cento positivo!
                  Obrigada meninas pela ajuda no meu crescimento profissional neste meio!
                </p>
              </CardContent>
            </Card>

            {/* Depoimento 2 */}
            <Card className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gray-500 text-white">AC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-olive">Andreia Christmann</h3>
                    <p className="text-sm text-olive/60">4 avaliações</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm text-olive/60 ml-2">9 meses atrás</span>
                    </div>
                  </div>
                </div>
                <p className="text-olive/70 text-sm leading-relaxed">
                  Super recomendo, profissionais capacitadas e comprometidas com resultados.
                </p>
              </CardContent>
            </Card>

            {/* Depoimento 3 */}
            <Card className="bg-white hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gray-500 text-white">LZ</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-olive">Dr. Leonardo Zacher</h3>
                    <p className="text-sm text-olive/60">Clínica Menezes & Zacher</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-olive/70 text-sm leading-relaxed">
                  "Sou o Dr. Leonardo Zacher, da Clínica Menezes & Zacher, e tive o prazer de contratar a Callih para realizar uma análise completa da gestão do meu consultório.
                  Eles foram responsáveis pelo treinamento da equipe, implementação de um prontuário eletrônico moderno e pela gestão financeira. A equipe da Callih é extremamente
                  profissional e tem vasta experiência em gestão de clínicas de saúde. Fizeram um excelente trabalho que superou todas as expectativas. Recomendo fortemente a Callih
                  para qualquer clínica que deseje aprimorar sua eficiência e qualidade no atendimento. Você pode encontrar mais sobre o trabalho deles no Instagram, no endereço
                  @callihgestao."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
