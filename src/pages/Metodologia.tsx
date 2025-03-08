
import React, { useState, useEffect } from 'react';
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
        {/* Hero Section - Enhanced with better gradient */}
        <section className="bg-gradient-to-r from-gold via-gold/90 to-olive py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-md">Nossa Metodologia</h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Conheça nossa abordagem para transformar a gestão da sua clínica ou consultório.
              </p>
            </div>
          </div>
        </section>

        {/* Metodologia Details Section - Enhanced with visual depth */}
        <section className="py-16 bg-gradient-to-b from-white to-gold/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {selectedMetodologia && (
              <div className="bg-white rounded-xl shadow-xl p-8 transition-all animate-fadeIn border border-gray-100 hover:border-gold/30">
                <div className="text-center mb-8">
                  <span className="inline-block px-6 py-2 bg-gold/10 text-gold rounded-full mb-6 font-medium shadow-inner">
                    Etapa {selectedMetodologia.id} de {metodologias.length}
                  </span>
                  <h2 className="text-3xl font-bold text-olive mb-6">{selectedMetodologia.title}</h2>
                  <p className="text-olive/70 mb-8 text-lg max-w-3xl mx-auto leading-relaxed">{selectedMetodologia.description}</p>
                </div>
                <div className="text-left max-w-2xl mx-auto bg-gradient-to-br from-gold/5 to-olive/5 p-8 rounded-lg shadow-sm border border-gold/10">
                  <h3 className="font-semibold text-olive text-xl mb-6 flex items-center">
                    <span className="w-8 h-1 bg-gold mr-3 rounded-full"></span>
                    O que inclui
                    <span className="w-8 h-1 bg-gold ml-3 rounded-full"></span>
                  </h3>
                  <ul className="list-disc list-inside space-y-4 text-olive/80">
                    {selectedMetodologia.detailedDescription.map((item, index) => (
                      <li key={index} className="leading-relaxed pl-2">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Carousel Section - Enhanced with visual depth */}
            <div className="mt-20 bg-gradient-to-r from-olive/5 via-gold/5 to-olive/5 py-16 px-8 rounded-xl shadow-inner">
              <h3 className="text-2xl font-bold text-olive mb-12 text-center relative">
                <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-4 w-20 h-1 bg-gold rounded-full"></span>
                Nossa Metodologia Completa
              </h3>
              <div className="relative mt-8">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {metodologias.map((metodologia) => (
                      <div key={metodologia.id} className="w-full flex-shrink-0 px-4">
                        <div
                          className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all h-full text-center cursor-pointer transform hover:-translate-y-1 duration-300
                            ${parseInt(metodologiaId) === metodologia.id ? 'ring-2 ring-gold' : 'hover:ring-1 hover:ring-gold/30'}
                          `}
                          onClick={() => navigate(`/metodologia/${metodologia.id}`)}
                        >
                          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-br from-gold/20 to-gold/10 rounded-full shadow-inner">
                            <span className="text-gold font-bold text-xl">{metodologia.id}</span>
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
                  className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gold hover:scale-110 duration-300"
                  aria-label="Previous methodology"
                >
                  <ChevronLeft className="w-6 h-6 text-gold" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gold hover:scale-110 duration-300"
                  aria-label="Next methodology"
                >
                  <ChevronRight className="w-6 h-6 text-gold" />
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
