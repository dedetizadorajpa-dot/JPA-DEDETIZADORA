import React from 'react';
import { Button } from './Button';
import { Phone } from 'lucide-react';

export const StickyCTA: React.FC = () => {
  return (
    <>
      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden z-50 flex items-center gap-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a 
          href="tel:0800123456" 
          className="flex flex-col items-center justify-center min-w-[60px] text-gray-600"
        >
          <Phone className="w-6 h-6" />
          <span className="text-xs mt-1">Ligar</span>
        </a>
        <div className="flex-1">
          <Button fullWidth text="Orçamento no WhatsApp" />
        </div>
      </div>

      {/* Desktop Floating Button */}
      <div className="hidden md:block fixed bottom-8 right-8 z-50">
        <Button 
          size="lg" 
          className="shadow-2xl !rounded-full !py-4 !px-8 border-4 border-white" 
          text="Orçamento Rápido" 
        />
      </div>
    </>
  );
};