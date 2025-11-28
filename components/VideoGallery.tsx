import React from 'react';

const VIDEO_DATA = [
  {
    id: 1,
    title: "Aplicação no Corpo de Bombeiros",
    category: "Autoridade",
    filename: "bombeiros.mp4"
  },
  {
    id: 2,
    title: "Barreira Química Contra Cupins",
    category: "Técnica",
    filename: "cupim.mp4"
  },
  {
    id: 3,
    title: "Sanitização em Clínicas",
    category: "Higiene",
    filename: "clinica.mp4"
  },
  {
    id: 4,
    title: "Nebulização em Condomínio",
    category: "Grande Porte",
    filename: "condominio.mp4"
  }
];

export const VideoGallery: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark text-white border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-brand-orange font-bold tracking-wider uppercase mb-2">Nossa Atuação em Campo</h2>
          <h3 className="text-3xl md:text-4xl font-black mb-4">
            Veja a JPA Resolvendo Problemas Reais
          </h3>
          <p className="text-gray-300">
            Tecnologia de ponta e equipamentos profissionais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VIDEO_DATA.map((video) => (
            <div key={video.id} className="group relative bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 hover:border-brand-orange transition-all aspect-[9/16]">
              
              {/* VIDEO TAG IMPLEMENTATION */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
              >
                {/* 
                    INSTRUÇÃO:
                    Para ver os vídeos, adicione os arquivos na pasta /videos/ com os nomes:
                    bombeiros.mp4, cupim.mp4, clinica.mp4, condominio.mp4
                */}
                <source src={`/videos/${video.filename}`} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>

              {/* Overlay Gradient & Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none">
                <div className="mb-2">
                    <span className="bg-brand-orange text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wide shadow-sm">
                        {video.category}
                    </span>
                </div>
                <h4 className="font-bold text-white text-lg leading-tight drop-shadow-md">
                    {video.title}
                </h4>
                
                {/* Live/Rec Indicator */}
                <div className="absolute top-4 right-4 bg-red-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-1 rounded-md animate-pulse flex items-center gap-1.5 shadow-sm">
                    <div className="w-1.5 h-1.5 bg-white rounded-full"></div> REC
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
            <p className="text-sm text-gray-500 italic">
                * Imagens reais dos serviços técnicos da JPA Dedetizadora.
            </p>
        </div>
      </div>
    </section>
  );
};