
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const metodologias = [
  {
    id: 1,
    title: 'Entendimento do Contexto',
    description: 'Realização de reunião inicial com o objetivo de compreender a cultura organizacional, identificar os objetivos estratégicos e compreender as dificuldades e desafios específicos enfrentados.',
    detailedDescription: [
      'Reunião inicial para alinhamento de expectativas.',
      'Análise da cultura organizacional.',
      'Identificação de objetivos estratégicos.',
      'Compreensão dos desafios específicos.',
    ],
  },
  {
    id: 2,
    title: 'Análise de Gargalos e Ineficiências',
    description: 'Realização de análise minuciosa das rotinas e processos atuais, com foco na identificação de áreas problemáticas, gargalos e oportunidades de melhoria.',
    detailedDescription: [
      'Análise detalhada dos processos atuais.',
      'Identificação de gargalos operacionais.',
      'Detecção de oportunidades de melhoria.',
      'Relatório de diagnóstico com recomendações.',
    ],
  },
  {
    id: 3,
    title: 'Mapeamento de Processos',
    description: 'Identificação e documentação dos processos existentes, análise dos fluxos de trabalho, entradas, saídas, atividades e interações entre departamentos.',
    detailedDescription: [
      'Documentação dos processos existentes.',
      'Análise de fluxos de trabalho.',
      'Criação de mapas de processos.',
      'Identificação de interações entre departamentos.',
    ],
  },
  {
    id: 4,
    title: 'Treinamento e Manuais',
    description: 'Realização de treinamentos personalizados, auxílio e suporte na criação de manuais detalhados para capacitar a equipe na implementação eficaz dos novos processos e melhorias.',
    detailedDescription: [
      'Treinamentos personalizados para a equipe.',
      'Criação de manuais detalhados.',
      'Suporte na implementação de novos processos.',
      'Acompanhamento pós-treinamento.',
    ],
  },
];

const Metodologia = () => {
  const { metodologiaId } = useParams();
  const navigate = useNavigate();
  const [selectedMetodologia, setSelectedMetodologia] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Efeito para carregar a metodologia selecionada e rolar para o topo
  useEffect(() => {
    const metodologia = metodologias.find((m) => m.id === parseInt(metodologiaId));
    setSelectedMetodologia(metodologia);

    // Rola a página para o topo sempre que o metodologiaId mudar
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [metodologiaId]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % metodologias.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + metodologias.length) % metodologias.length);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Nossa Metodologia</h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Conheça nossa abordagem para transformar a gestão da sua clínica ou consultório.
              </p>
            </div>
          </div>
        </section>

        {/* Metodologia Details Section - Now with gradient background */}
        <section className="py-16 bg-gradient-to-b from-white to-gold/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {selectedMetodologia && (
              <div className="bg-white rounded-xl shadow-lg p-8 transition-all animate-fadeIn">
                <div className="text-center mb-8">
                  <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full mb-4 font-medium">
                    Etapa {selectedMetodologia.id} de {metodologias.length}
                  </span>
                  <h2 className="text-3xl font-bold text-olive mb-4">{selectedMetodologia.title}</h2>
                  <p className="text-olive/70 mb-6 text-lg">{selectedMetodologia.description}</p>
                </div>
                <div className="text-left max-w-2xl mx-auto bg-gold/5 p-6 rounded-lg border border-gold/10">
                  <h3 className="font-semibold text-olive text-xl mb-4">O que inclui:</h3>
                  <ul className="list-disc list-inside space-y-3 text-olive/80">
                    {selectedMetodologia.detailedDescription.map((item, index) => (
                      <li key={index} className="leading-relaxed">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Carousel Section - Now with a different background */}
            <div className="mt-16 bg-olive/5 py-12 px-6 rounded-xl">
              <h3 className="text-2xl font-bold text-olive mb-10 text-center">Nossa Metodologia Completa</h3>
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {metodologias.map((metodologia) => (
                      <div key={metodologia.id} className="w-full flex-shrink-0 px-4">
                        <div
                          className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all h-full text-center cursor-pointer
                            ${parseInt(metodologiaId) === metodologia.id ? 'ring-2 ring-gold' : ''}
                          `}
                          onClick={() => navigate(`/metodologia/${metodologia.id}`)}
                        >
                          <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-gold/10 rounded-full">
                            <span className="text-gold font-bold">{metodologia.id}</span>
                          </div>
                          <h3 className="text-xl font-semibold text-olive">{metodologia.title}</h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Improved navigation buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                  aria-label="Previous methodology"
                >
                  <ChevronLeft className="w-5 h-5 text-gold" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gold"
                  aria-label="Next methodology"
                >
                  <ChevronRight className="w-5 h-5 text-gold" />
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

export default Metodologia;
