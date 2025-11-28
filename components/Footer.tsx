import React from 'react';
import { Shield, Phone, MapPin, Star, MessageCircle } from 'lucide-react';
import { WHATSAPP_DISPLAY, WHATSAPP_SECONDARY, GOOGLE_REVIEWS_URL } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 py-12 pb-24 md:pb-12 border-t-4 border-brand-orange">
      <div className="container mx-auto px-4">
        
        {/* Footer CTA Section */}
        <div className="bg-white/5 rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10">
            <div>
                <h3 className="text-white text-2xl font-black mb-2">A confiança que só 25 anos trazem.</h3>
                <p className="text-gray-400">Proteja seu patrimônio com quem entende do assunto.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <a 
                  href={GOOGLE_REVIEWS_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-brand-dark px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
                >
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  Ler Avaliações no Google
                </a>
                <a 
                  href="https://wa.me/5521966855159" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-whatsapp text-white px-6 py-3 rounded-lg font-bold hover:bg-brand-whatsappHover transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Fale com um Especialista
                </a>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4 text-white">
              <Shield className="w-8 h-8 text-brand-green" />
              <div>
                <span className="text-xl font-black tracking-tight block leading-none">JPA</span>
                <span className="text-xs font-bold text-brand-orange uppercase">Dedetizadora</span>
              </div>
            </div>
            <p className="text-sm mb-6 leading-relaxed">
              JPA Dedetizadora e Conservadora Ltda.<br/>
              Referência em controle de pragas e conservação predial no Rio de Janeiro.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider border-b border-brand-green/30 pb-2 inline-block">Serviços Chave</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Controle de Pragas</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Limpeza de Caixas d'Água</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Sanitização COVID-19</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Terceirização de Mão de Obra</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider border-b border-brand-green/30 pb-2 inline-block">Áreas de Atuação</h4>
            <ul className="space-y-2 text-sm">
              <li>Jacarepaguá e Região</li>
              <li>Barra da Tijuca e Recreio</li>
              <li>Zona Sul</li>
              <li>Tijuca e Centro</li>
              <li>Niterói (Sob consulta)</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider border-b border-brand-green/30 pb-2 inline-block">Fale Conosco</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-orange" />
                <span className="text-white font-bold">{WHATSAPP_DISPLAY}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-orange" />
                <span>{WHATSAPP_SECONDARY}</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span>Rio de Janeiro - RJ</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2025 JPA Dedetizadora e Conservadora Ltda. Todos os direitos reservados.</p>
          <p className="opacity-50">CNPJ: Ativo e Regular</p>
        </div>
      </div>
    </footer>
  );
};