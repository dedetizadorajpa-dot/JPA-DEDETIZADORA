import React from 'react';
import { SERVICES } from '../constants';
import { Button } from './Button';

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-green font-bold tracking-wider uppercase mb-2">Nossos Serviços</h2>
          <h3 className="text-3xl md:text-4xl font-black text-brand-dark mb-4">
            Soluções completas para cada necessidade
          </h3>
          <p className="text-gray-600 text-lg">
            De residências a grandes indústrias. Atendemos com documentação completa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-brand-green rounded-xl flex items-center justify-center mb-6 shadow-md">
                <service.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                {service.description}
              </p>
              <a href={`https://wa.me/5521966855159?text=Tenho interesse em ${service.title}`} className="inline-flex items-center font-bold text-sm text-brand-green hover:text-brand-orange transition-colors uppercase tracking-wide">
                Pedir cotação <span className="ml-2">→</span>
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary" text="Falar com um Especialista Agora" />
        </div>
      </div>
    </section>
  );
};