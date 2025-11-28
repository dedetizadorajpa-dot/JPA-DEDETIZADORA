import React from 'react';
import { ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { Button } from './Button';
import { WHATSAPP_DISPLAY } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-dark overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1584650548401-155047b38d36?q=80&w=2070&auto=format&fit=crop" 
          alt="JPA Dedetizadora Rio de Janeiro" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-brand-dark/60"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-28 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center bg-brand-orange/20 border border-brand-orange/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-brand-orange rounded-full mr-2 animate-ping"></span>
            <span className="text-brand-orange text-sm font-bold tracking-wider uppercase">Atendimento 24h no Rio de Janeiro</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            25 Anos Protegendo o Rio de Janeiro.<br />
            <span className="text-brand-orange">A Dedetizadora de Confiança do Corpo de Bombeiros.</span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed font-medium max-w-2xl">
            Elimine pragas com segurança e eficácia comprovada. Tecnologia <span className="text-white font-bold">Sem Cheiro</span> e <span className="text-white font-bold">Tripla Ação</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button size="lg" text={`Orçamento Rápido via WhatsApp ${WHATSAPP_DISPLAY}`} className="bg-brand-whatsapp hover:bg-brand-whatsappHover animate-pulse shadow-[0_0_20px_rgba(37,211,102,0.5)]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-8 h-8 text-brand-orange" />
              <div>
                <p className="font-bold text-white">Certificada</p>
                <p className="text-sm text-gray-400">INEA e Vigilância</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-brand-orange" />
              <div>
                <p className="font-bold text-white">Rapidez</p>
                <p className="text-sm text-gray-400">Atendimento Imediato</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-brand-orange" />
              <div>
                <p className="font-bold text-white">Confiança</p>
                <p className="text-sm text-gray-400">25 anos de mercado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};