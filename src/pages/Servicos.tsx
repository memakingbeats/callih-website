import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  HeartPulse,
  Stethoscope,
  Activity,
  Pill,
  UserCog,
  Bath,
  Heart,
  Baby,
  UserPlus
} from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Heart,
    title: 'Mapeamento e Redesenho de Processos',
    description: 'O sucesso de um consultório ou clínica depende da eficiência dos seus processos. Mapear e redesenhar fluxos de trabalho permite que a equipe execute suas funções com maior produtividade, reduzindo falhas e otimizando o tempo.',
    detailedDescription: [
      'Diagnóstico completo dos processos administrativos e operacionais.',
      'Identificação de gargalos e pontos de melhoria.',
      'Redesenho de fluxos de trabalho para maior eficiência.',
      'Implementação de novas rotinas e treinamentos para a equipe.',
      'Criação de padrões para garantir a continuidade dos processos.',
    ],
  },
  {
    id: 2,
    icon: UserPlus,
    title: 'Melhoria do Fluxo e Experiência do Paciente',
    description: 'O atendimento humanizado e a agilidade nos processos impactam diretamente na satisfação e fidelização dos pacientes. Organizamos e otimizamos a jornada do paciente dentro da clínica, desde o agendamento até o pós-atendimento.',
    detailedDescription: [
      'Redução do tempo de espera e otimização dos atendimentos.',
      'Modernização da recepção e triagem para um fluxo organizado.',
      'Implementação de estratégias para melhor acolhimento do paciente.',
      'Treinamento da equipe para aprimorar o relacionamento e atendimento.',
      'Definição de protocolos para feedbacks e acompanhamento pós-consulta.',
    ],
  },
  {
    id: 3,
    icon: Stethoscope,
    title: 'Implementação de Protocolos Operacionais Padrão (POPs)',
    description: 'A padronização dos procedimentos internos melhora a eficiência da equipe, reduz erros e garante conformidade com normas e regulamentações da área da saúde. Auxiliamos na criação de protocolos claros e aplicáveis para cada setor do consultório ou clínica.',
    detailedDescription: [
      'Auxílio na criação e desenvolvimento de manuais operacionais.',
      'Estruturação de procedimentos para padronização do atendimento.',
      'Treinamento da equipe para correta aplicação dos protocolos.',
      'Acompanhamento e ajustes periódicos para manter a eficiência.',
    ],
  },
  {
    id: 4,
    icon: Activity,
    title: 'Gestão de Agendas e Otimização de Tempo',
    description: 'Uma agenda bem organizada impacta diretamente na produtividade e no faturamento do consultório. Evitamos horários ociosos, reduzimos faltas e atrasos e garantimos um fluxo eficiente de atendimentos.',
    detailedDescription: [
      'Diagnóstico da agenda atual e análise de ocupação.',
      'Estratégias para reduzir faltas e otimizar encaixes.',
      'Implementação de regras de agendamento para melhor organização.',
      'Criação de fluxo padronizado para confirmação de consultas.',
      'Treinamento da equipe para melhor gerenciamento da agenda.',
    ],
  },
  {
    id: 5,
    icon: Pill,
    title: 'Capacitação e Treinamento de Equipes',
    description: 'A equipe é peça-chave para um atendimento eficiente e de qualidade. Preparamos seus colaboradores para desempenharem suas funções com excelência, garantindo maior organização e satisfação dos pacientes.',
    detailedDescription: [
      'Treinamento de recepcionistas, secretários e equipe administrativa.',
      'Desenvolvimento de habilidades em atendimento humanizado.',
      'Capacitação para gestão eficiente de agenda e processos internos.',
      'Acompanhamento e reciclagem periódica para manter a qualidade.',
    ],
  },
  {
    id: 6,
    icon: Bath,
    title: 'Gestão de Custos e Análise Financeira',
    description: 'A falta de controle financeiro pode impactar diretamente a saúde da clínica ou consultório. Organizamos e estruturamos processos para garantir clareza sobre as entradas e saídas, permitindo uma visão precisa do faturamento, recebimentos e glosas.',
    detailedDescription: [
      'Organização e padronização do fluxo financeiro, garantindo controle total sobre receitas e despesas.',
      'Monitoramento detalhado de faturamento x recebimento x glosas, proporcionando maior previsibilidade financeira.',
      'Definição de processos para conciliação financeira, evitando perdas e melhorando a recuperação de valores.',
      'Criação de métodos para otimização de custos operacionais, reduzindo desperdícios e aumentando a eficiência.',
      'Estruturação de relatórios e indicadores financeiros, facilitando a tomada de decisão e o planejamento estratégico.',
    ],
  },
  {
    id: 7,
    icon: UserCog,
    title: 'Gestão de Relacionamento com o Paciente (CRM)',
    description: 'A fidelização do paciente vai além do atendimento clínico. Implementamos um sistema de relacionamento estruturado, garantindo que cada paciente se sinta acolhido e tenha um atendimento personalizado e contínuo.',
    detailedDescription: [
      'Implementação de ferramentas para gestão do relacionamento com o paciente.',
      'Estratégias para acompanhamento pré e pós-consulta.',
      'Criação de fluxos de comunicação para engajamento do paciente.',
      'Desenvolvimento de campanhas para fidelização e retenção.',
    ],
  },
  {
    id: 8,
    icon: HeartPulse,
    title: 'Gestão Estratégica para Consultórios',
    description: 'A gestão eficiente do seu consultório é fundamental para o crescimento sustentável e para garantir um atendimento de qualidade. Nossa consultoria estratégica assume o papel de organizar, acompanhar e planejar todas as operações administrativas, financeiras e operacionais, permitindo que você foque no atendimento aos pacientes.',
    detailedDescription: [
      'Definição de metas estratégicas para crescimento e lucratividade.',
      'Monitoramento e análise de indicadores financeiros e operacionais.',
      'Organização da equipe e otimização de processos internos.',
      'Identificação e correção de gargalos administrativos.',
      'Planejamento e acompanhamento contínuo para garantir melhorias constantes.',
    ],
  },
];



const Servicos = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Efeito para carregar o serviço selecionado e rolar para o topo
  useEffect(() => {
    const service = services.find((s) => s.id === parseInt(serviceId));
    setSelectedService(service);

    // Rola a página para o topo sempre que o serviceId mudar
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

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

        {/* Service Details Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {selectedService && (
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-olive mb-4">{selectedService.title}</h2>
                <p className="text-olive/70 mb-8">{selectedService.description}</p>
                <div className="text-left max-w-2xl mx-auto">
                  <ul className="list-disc list-inside space-y-2 text-olive/70">
                    {selectedService.detailedDescription.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Carousel Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-olive mb-8 text-center">Mais Serviços</h3>
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <div key={service.id} className="w-full flex-shrink-0 px-4">
                          <div
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all h-full text-center cursor-pointer"
                            onClick={() => navigate(`/servicos/${service.id}`)}
                          >
                            <div className="flex justify-center mb-4">
                              <Icon className="w-12 h-12 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-olive">{service.title}</h3>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Botões de navegação */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  &lt;
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                >
                  &gt;
                </button>
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