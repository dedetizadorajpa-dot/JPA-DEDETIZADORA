import React from 'react';
import { CLIENTS_LIST } from '../constants';
import { Building2, Shield, CheckCircle2 } from 'lucide-react';

export const Authority: React.FC = () => {
  return (
    <section className="py-16 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        
        {/* Hook */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-brand-dark font-black text-2xl md:text-3xl mb-4">
            "Se protegemos o quartel dos Bombeiros e Clínicas de Saúde, <span className="text-brand-orange">sua casa está em boas mãos."</span>
          </h2>
        </div>

        {/* Client List Section */}
        <div className="mb-12">
            <p className="text-center text-gray-500 font-bold uppercase tracking-widest text-sm mb-8">Clientes e Parceiros Oficiais:</p>
            {/* Grid for placeholders/names */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center">
              {CLIENTS_LIST.map((client, index) => (
                  <div key={index} className="flex flex-col items-center justify-center p-4 bg-gray-50 border border-gray-200 rounded-xl hover:shadow-md transition-shadow">
                    <div className="bg-brand-green/10 p-3 rounded-full mb-3">
                        {/* Placeholder for Logo Image - Developer Note: Insert <img src="logo.png" /> here */}
                        {client.includes("Bombeiros") ? <Shield className="w-6 h-6 text-brand-green" /> : <Building2 className="w-6 h-6 text-brand-green" />}
                    </div>
                    <span className="font-bold text-brand-dark text-xs md:text-sm text-center leading-tight">{client}</span>
                  </div>
              ))}
            </div>
        </div>

        {/* Technical Differential Box */}
        <div className="bg-brand-dark rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl mt-12">
           <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-brand-orange opacity-20 rounded-full blur-3xl"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">Segurança Técnica Comprovada</h3>
                <p className="text-gray-300">
                  Responsável Técnico (Biólogo) registrado, produtos de primeira linha (Bayer/Syngenta) e laudos válidos para fiscalização.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-w-[200px]">
                 <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-brand-orange w-5 h-5" /> <span className="font-semibold">Registro no INEA</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-brand-orange w-5 h-5" /> <span className="font-semibold">Vigilância Sanitária</span>
                 </div>
                 <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-brand-orange w-5 h-5" /> <span className="font-semibold">CRBio (Biólogo)</span>
                 </div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};