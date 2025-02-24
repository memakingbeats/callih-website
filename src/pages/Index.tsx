
import { Heart, UserPlus, Stethoscope } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="animate-fadeIn">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Somos especializados em cuidados hospitalares
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Elaboramos um conjunto de soluções ideais com foco na antecipação de futuros riscos diversos.
              </p>
              <div className="space-x-4">
                <a href="#" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
                  Leia Mais
                </a>
                <a href="#" className="bg-white text-primary px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
                  Fale Conosco
                </a>
              </div>
            </div>
            <div className="animate-fadeIn">
              <img
                src="/lovable-uploads/5020651a-5040-4979-83fb-3fd50dfa8eed.png"
                alt="Healthcare Professional"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Serviços</h2>
            <p className="text-gray-600">
              Para assegurar um cuidado abrangente aos pacientes, a Seven colabora com equipes multidisciplinares.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Heart className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Internação Domiciliar</h3>
              <p className="text-gray-600">
                Atendimento especializado para pacientes que precisam de cuidados contínuos em casa.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <UserPlus className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Assistência Domiciliar</h3>
              <p className="text-gray-600">
                Suporte médico e de enfermagem personalizado no conforto do lar.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <Stethoscope className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emergências Médicas</h3>
              <p className="text-gray-600">
                Atendimento 24 horas para situações que requerem cuidados imediatos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Home Care Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Home Care e Atendimento Domiciliar
            </h2>
            <p className="text-gray-600">
              Oferecemos diversos serviços para melhor lhe atender
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
                alt="Dieta"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Dieta</h3>
                <p className="text-gray-600 mb-4">
                  A Seven reúne uma equipe experiente para desenvolver um programa que permita desospitalizar com qualidade.
                </p>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  Mais detalhes →
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
                alt="Medicações Especiais"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Medicações Especiais</h3>
                <p className="text-gray-600 mb-4">
                  Antes mesmo à chegada à clínica, algumas medicações especiais podem ser administradas.
                </p>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  Mais detalhes →
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800"
                alt="Antibióticos"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Antibióticos</h3>
                <p className="text-gray-600 mb-4">
                  Acompanhamento do paciente para continuidade ou início do tratamento medicamentoso.
                </p>
                <a href="#" className="text-primary hover:text-primary/80 transition-colors">
                  Mais detalhes →
                </a>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="#" className="bg-primary text-white px-8 py-3 rounded-md hover:bg-primary/90 transition-colors inline-block">
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
