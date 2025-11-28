import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from '../constants';

interface ButtonProps {
  text?: string;
  fullWidth?: boolean;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  size?: 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  text = "Solicitar Orçamento Grátis", 
  fullWidth = false, 
  variant = 'primary',
  className = '',
  size = 'md'
}) => {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  const baseStyles = "inline-flex items-center justify-center font-bold transition-all duration-300 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  // Updated colors to match brand definitions in index.html (WhatsApp green for primary)
  const variants = {
    primary: "bg-[#25D366] hover:bg-[#128C7E] text-white focus:ring-[#25D366]", 
    secondary: "bg-white text-brand-green hover:bg-gray-100 focus:ring-white",
    outline: "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white"
  };

  const sizes = {
    md: "py-3 px-6 text-base",
    lg: "py-4 px-8 text-lg uppercase tracking-wide"
  };

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      <MessageCircle className="w-5 h-5 mr-2 animate-pulse" />
      {text}
    </a>
  );
};