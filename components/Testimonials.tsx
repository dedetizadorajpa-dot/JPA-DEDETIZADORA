import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-orange font-bold tracking-wider uppercase mb-2">Depoimentos</h2>
          <h3 className="text-3xl md:text-4xl font-black mb-4">
            O que nossos clientes dizem
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div key={item.id} className="bg-white/5 border border-white/10 p-8 rounded-2xl relative">
              <div className="flex gap-1 mb-4">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-brand-orange fill-brand-orange" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center text-lg font-bold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-brand-orange">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};