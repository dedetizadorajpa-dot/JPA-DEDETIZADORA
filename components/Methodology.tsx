import React from 'react';
import { Wind, Zap, Shield, Sparkles } from 'lucide-react';

export const Methodology: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-green via-brand-whatsapp to-brand-green"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-green font-bold tracking-wider uppercase mb-2">Diferencial Técnico</h2>
          <h3 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            Método Exclusivo <span className="text-brand-orange">Tripla Ação</span>
          </h3>
          <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full font-bold">
            <Sparkles className="w-5 h-5" />
            <span>Aplicação Sem Cheiro e Sem Sujeira</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Desalojante */}
          <div className="bg-white rounded-2xl p-8 border-b-4 border-brand-green shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto bg-brand-gray rounded-full flex items-center justify-center mb-6">
              <Wind className="w-8 h-8 text-brand-green" />
            </div>
            <h4 className="text-xl font-bold text-brand-dark mb-2 text-center">1. Ação Desalojante</h4>
            <p className="text-gray-600 text-center leading-relaxed">
              Tira a praga do ninho. Obrigamos os insetos a saírem de frestas profundas e esconderijos, forçando o contato com o produto.
            </p>
          </div>

          {/* Card 2: Impactante */}
          <div className="bg-white rounded-2xl p-8 border-b-4 border-brand-orange shadow-xl scale-105 z-10 relative">
            <div className="inline-block px-3 py-1 bg-brand-orange text-white text-xs font-bold rounded-full absolute top-4 right-4 uppercase">
              Choque
            </div>
            <div className="w-16 h-16 mx-auto bg-brand-orange/10 rounded-full flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-brand-orange" />
            </div>
            <h4 className="text-xl font-bold text-brand-dark mb-2 text-center">2. Ação Impactante</h4>
            <p className="text-gray-600 text-center leading-relaxed">
              Mata instantaneamente. Efeito "Knock-down" que paralisa e elimina baratas, ratos e cupins assim que entram na barreira.
            </p>
          </div>

          {/* Card 3: Residual */}
          <div className="bg-white rounded-2xl p-8 border-b-4 border-brand-green shadow-lg hover:-translate-y-2 transition-transform duration-300">
            <div className="w-16 h-16 mx-auto bg-brand-gray rounded-full flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-brand-green" />
            </div>
            <h4 className="text-xl font-bold text-brand-dark mb-2 text-center">3. Ação Residual</h4>
            <p className="text-gray-600 text-center leading-relaxed">
              Proteção contínua. O produto permanece ativo cristalizado nas superfícies, protegendo seu imóvel por meses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};