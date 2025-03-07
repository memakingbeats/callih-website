
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Phone, Mail, Instagram, Facebook, MapPin, Send } from 'lucide-react';
import { toast } from "sonner";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Mensagem enviada com sucesso!");
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast.error("Erro ao enviar a mensagem. Tente novamente.");
      }
    } catch (error) {
      toast.error("Erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-white mb-4">Entre em Contato</h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Estamos aqui para ajudar. Entre em contato conosco através dos canais abaixo.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <a href="tel:51996782452" className="flex flex-col items-center p-6 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors">
                <Phone className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-lg font-semibold text-olive mb-2">Telefone</h3>
                <p className="text-olive/70 text-center">(51) 99678-2452</p>
              </a>

              <a href="mailto:aconsultoriadesaude@gmail.com" className="flex flex-col items-center p-6 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors">
                <Mail className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-lg font-semibold text-olive mb-2">Email</h3>
                <p className="text-olive/70 text-center">aconsultoriadesaude@gmail.com</p>
              </a>

              <a href="https://www.instagram.com/callih.consultoria/" target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors">
                <Instagram className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-lg font-semibold text-olive mb-2">Instagram</h3>
                <p className="text-olive/70 text-center">@callih.consultoria</p>
              </a>

              <a href="https://www.facebook.com/callih.consultoria/" target="_blank" rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-secondary/20 rounded-lg hover:bg-secondary/30 transition-colors">
                <Facebook className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-lg font-semibold text-olive mb-2">Facebook</h3>
                <p className="text-olive/70 text-center">Callih Consultoria</p>
              </a>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-olive mb-1">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-olive mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-olive mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-white py-2 px-4 rounded-md hover:bg-gold/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contato;
