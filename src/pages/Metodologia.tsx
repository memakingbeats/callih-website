
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

  // Efeito para carregar a metodologia selecionada e rolar para o topo
  useEffect(() => {
    const metodologia = metodologias.find((m) => m.id === parseInt(metodologiaId));
    setSelectedMetodologia(metodologia);

    // Rola a página para o topo sempre que o metodologiaId mudar
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [metodologiaId]);

  const navigateToPrevious = () => {
    const currentId = parseInt(metodologiaId);
    const prevId = currentId > 1 ? currentId - 1 : metodologias.length;
    navigate(`/metodologia/${prevId}`);
  };

  const navigateToNext = () => {
    const currentId = parseInt(metodologiaId);
    const nextId = currentId < metodologias.length ? currentId + 1 : 1;
    navigate(`/metodologia/${nextId}`);
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

        {/* Metodologia Details Section - Enhanced with navigation arrows */}
        <section className="py-16 bg-gradient-to-b from-white to-gold/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {selectedMetodologia && (
              <div className="relative bg-white rounded-xl shadow-xl p-8 transition-all animate-fadeIn border border-gray-100 hover:border-gold/30">
                {/* Navigation Arrows */}
                <button
                  onClick={navigateToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gold hover:scale-110 duration-300 z-10"
                  aria-label="Metodologia anterior"
                >
                  <ChevronLeft className="w-6 h-6 text-gold" />
                </button>
                
                <button
                  onClick={navigateToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-gold hover:scale-110 duration-300 z-10"
                  aria-label="Próxima metodologia"
                >
                  <ChevronRight className="w-6 h-6 text-gold" />
                </button>

                <div className="text-center mb-8 px-16">
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
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Metodologia;
