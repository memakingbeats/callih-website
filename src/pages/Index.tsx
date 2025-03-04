import { Heart, UserPlus, Stethoscope } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';



const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fadeInLeft">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 transform transition-all duration-500 hover:scale-105">
                TRANSFORMAMOS PROCESSOS PARA
                O SUCESSO DO SEU NEGÓCIO
              </h1>
              <p className="text-lg text-white/90 mb-8 transform transition-all duration-500 hover:scale-105">
                Descomplique a gestão da
                sua clínica e foque no
                crescimento!
              </p>
              <div className="space-x-4">
                <a href="#" className="bg-gold text-white px-6 py-3 rounded-md hover:bg-gold/90 transition-colors transform hover:scale-105 duration-300">
                  Leia Mais
                </a>
                <a href="#" className="bg-white/10 text-white px-6 py-3 rounded-md hover:bg-white/20 transition-colors backdrop-blur-sm transform hover:scale-105 duration-300">
                  Fale Conosco
                </a>
              </div>
            </div>
            <div className="animate-fadeInRight">
              <img
                src="../../public/images/duplaBG.png"
                alt="Healthcare Professional with Stethoscope"
                className="rounded-lg shadow-lg w-full transform transition-all duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-olive mb-4">Serviços</h2>
            <p className="text-olive/80">
              Nossa consultoria atua de forma personalizada
              otimizando processos, capacitando equipes e
              melhorando sua previsibilidade financeira,
              através de:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Heart className="text-gold w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-olive"></h3>
              <p className="text-olive/70">
                Além de nossa consultoria
                completa, oferecemos um
                serviço exclusivo para
                consultórios médicos: a
                Gestão Estratégica.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <UserPlus className="text-gold w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-olive"></h3>
              <ul className="custom-list list-inside text-olive/70 space-y-2">
                <li>Mapeamento e Redesenho de Processos</li>
                <li>Melhoria do Fluxo e Experiência do Paciente</li>
                <li>Implementação de Protocolos Operacionais Padrão (POPs)</li>
                <li>Gestão de Estoque e Insumos</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Stethoscope className="text-gold w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-olive"></h3>
              <ul className="custom-list list-inside text-olive/70 space-y-2">
                <li>Gestão de Agendas e Otimização
                  de Tempo</li>
                <li>Capacitação e Treinamento de
                  Equipes</li>
                <li>Gestão de Custos e Análise
                  Financeira</li>
                <li>Gestão de Relacionamento com
                  o Paciente (CRM)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre Nós Section */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-olive mb-4">Sobre Nós</h2>
            <p className="text-olive/80">
              Somos especialistas em gestão na área
              da saúde e estamos comprometidas em
              transformar a organização do seu
              consultório ou clínica, trazendo mais
              eficiência, rentabilidade e qualidade no
              atendimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className=" rounded overflow-hidden">
                <img
                  src="../../public/images/socia.jpeg"
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
              <div className=" rounded overflow-hidden">
                <img
                  src="../../public/images/carla.jpeg"
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

      {/* Home Care Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-olive mb-4">
              NOSSA METODOLOGIA
            </h2>
            <p className="text-olive/70">
              Oferecemos diversos serviços para melhor lhe atender
            </p>
          </div>

          {/* Grid com 4 colunas em desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-secondary/20 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="../../public/images/agenda.jpg"
                alt="Dieta"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-olive">Entendimento do Contexto</h3>
                <p className="text-olive/70 mb-4">
                  Realização de reunião inicial com o objetivo de compreender a cultura organizacional,
                  identificar os objetivos estratégicos e
                  compreender as dificuldades e desafios
                  específicos enfrentados.
                </p>
                <a href="#" className="text-gold hover:text-gold/80 transition-colors">
                  Mais detalhes →
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-secondary/20 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="../../public/images/doc1.jpg"
                alt="Medicações Especiais"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-olive">Análise de Gargalos e Ineficiências</h3>
                <p className="text-olive/70 mb-4">
                  Realização de análise minuciosa das rotinas
                  e processos atuais, com foco na
                  identificação de áreas problemáticas,
                  gargalos e oportunidades de melhoria.
                </p>
                <a href="#" className="text-gold hover:text-gold/80 transition-colors">
                  Mais detalhes →
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-secondary/20 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="../../public/images/doc2.jpg"
                alt="Antibióticos"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-olive">Mapeamento de Processos</h3>
                <ul className="custom-list list-inside text-olive/70 space-y-2">
                  <li>Identificação e documentação dos
                    processos existentes</li>
                  <li>Análise dos fluxos de trabalho, entradas,
                    saídas, atividades e interações entre departamentos.</li>
                  <li>Criação de mapas de processos para
                    visualizar o fluxo end-to-end.</li>

                </ul>
                <a href="#" className="text-gold hover:text-gold/80 transition-colors">
                  Mais detalhes →
                </a>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-secondary/20 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="../../public/images/doc3.jpg"
                alt="Outro Serviço"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-olive">Treinamento e Manuais</h3>
                <p className="text-olive/70 mb-4">
                  Realização de treinamentos personalizados, auxílio e suporte na
                  criação de manuais detalhados para
                  capacitar a equipe na implementação
                  eficaz dos novos processos e melhorias.
                </p>
                <a href="#" className="text-gold hover:text-gold/80 transition-colors">
                  Mais detalhes →
                </a>
              </div>
            </div>
          </div>

          {/* Botão "Mais Serviços" */}
          <div className="text-center mt-12">
            <a href="#" className="bg-olive text-white px-8 py-3 rounded-md hover:bg-olive/90 transition-colors inline-block">
              Mais Serviços
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
