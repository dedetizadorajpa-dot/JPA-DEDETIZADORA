import React from 'react';
import { Shield, Phone } from 'lucide-react';
import { Button } from './Button';
import { WHATSAPP_NUMBER } from '../constants';

export const Header: React.FC = () => {
  return (
    <header className="bg-white py-4 shadow-md sticky top-0 z-40 border-b border-gray-100">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Area */}
        <div className="flex items-center gap-2">
          <div className="bg-brand-dark p-1.5 rounded-lg">
            <Shield className="w-7 h-7 text-brand-accent" />
          </div>
          <div>
            <span className="text-xl md:text-2xl font-black text-brand-dark tracking-tighter block leading-none">JPA</span>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-gray-500 font-bold">Dedetizadora</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex gap-6 text-sm font-bold text-gray-600">
              <li><a href="#servicos" className="hover:text-brand-accent transition-colors">Serviços</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Clientes</a></li>
              <li><a href="#" className="hover:text-brand-accent transition-colors">Método</a></li>
            </ul>
          </nav>
          
          <div className="flex items-center gap-4">
            <div className="text-right hidden lg:block">
              <p className="text-xs text-brand-accent font-bold uppercase tracking-wide">Plantão 24h</p>
              <p className="text-lg font-black text-brand-dark flex items-center justify-end gap-1 font-mono tracking-tight">
                (21) 96685-5159
              </p>
            </div>
            <Button size="md" text="Orçamento Grátis" />
          </div>
        </div>
        
        {/* Mobile Icons */}
        <div className="md:hidden">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="p-2 text-brand-orange">
                <Phone className="w-6 h-6 fill-current" />
            </a>
        </div>
      </div>
    </header>
  );
};