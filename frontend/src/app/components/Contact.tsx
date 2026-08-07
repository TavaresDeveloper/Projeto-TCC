import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você integrará com sua API Java/MySQL
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada! Em breve entraremos em contato.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contato" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-amber-900 mb-12">
          Entre em Contato
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-amber-800 mb-6">Fale Conosco</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-amber-900 mb-2 font-semibold">Nome</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
              <div>
                <label className="block text-amber-900 mb-2 font-semibold">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
              <div>
                <label className="block text-amber-900 mb-2 font-semibold">Telefone</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
              </div>
              <div>
                <label className="block text-amber-900 mb-2 font-semibold">Mensagem</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-amber-800 mb-6">Informações</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-amber-600 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-amber-900">Endereço</p>
                  <p className="text-gray-600">Rua das Flores, 123<br />Centro - Cidade/UF</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-amber-600 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-amber-900">Telefone</p>
                  <p className="text-gray-600">(00) 1234-5678</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-amber-600 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-amber-900">Email</p>
                  <p className="text-gray-600">contato@apimel.com.br</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h4 className="font-bold text-amber-900 mb-3">Horário de Atendimento</h4>
              <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
              <p className="text-gray-600">Sábado: 8h às 12h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
