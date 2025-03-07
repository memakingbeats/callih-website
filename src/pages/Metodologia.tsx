import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

        {/* Metodologia Details Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {selectedMetodologia && (
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-olive mb-4">{selectedMetodologia.title}</h2>
                <p className="text-olive/70 mb-8">{selectedMetodologia.description}</p>
                <div className="text-left max-w-2xl mx-auto">
                  <ul className="list-disc list-inside space-y-2 text-olive/70">
                    {selectedMetodologia.detailedDescription.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Carousel Section */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-olive mb-8 text-center">Mais Metodologias</h3>
              <div className="relative">
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {metodologias.map((metodologia) => (
                      <div key={metodologia.id} className="w-full flex-shrink-0 px-4">
                        <div
                          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all h-full text-center cursor-pointer"
                          onClick={() => navigate(`/metodologia/${metodologia.id}`)}
                        >
                          <h3 className="text-xl font-semibold text-olive">{metodologia.title}</h3>
                        </div>
                      </div>
                    ))}
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

export default Metodologia;