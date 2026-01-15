import React from 'react';
import { ShieldCheck, Zap, Headphones, BadgeDollarSign } from 'lucide-react';

const WhyUs = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: "Secure",
      tag: "Data Safe",
      desc: "Privasi Anda prioritas utama. 100% rahasia.",
      rotation: "-rotate-2"
    },
    {
      icon: Zap,
      title: "Express",
      tag: "Fast Done",
      desc: "Selesai kilat, tepat sebelum deadline Anda.",
      rotation: "rotate-1"
    },
    {
      icon: Headphones,
      title: "Direct",
      tag: "24/7 Chat",
      desc: "Konsultasi kapan saja via WhatsApp kami.",
      rotation: "rotate-2"
    },
    {
      icon: BadgeDollarSign,
      title: "Fair",
      tag: "Best Price",
      desc: "Kualitas premium dengan harga mahasiswa.",
      rotation: "-rotate-1"
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Accent - Grafiti Style */}
      <div className="absolute left-[-5%] top-1/2 -translate-y-1/2 text-[18vw] font-black text-zinc-50 leading-none select-none -z-0 opacity-80 italic tracking-tighter">
        TRUST
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header - Asymmetric & Bold */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-20 gap-8">
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-black"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black italic">Quality First</span>
            </div>
            <h2 className="text-5xl md:text-8xl font-black text-black tracking-tighter uppercase leading-[0.85]">
              Why Us<span className="text-zinc-200">?</span>
            </h2>
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-[10px] mt-2 ml-1">
              Solusi cerdas / pengerjaan tuntas
            </p>
          </div>
          <div className="max-w-xs text-left md:text-right">
             <p className="text-zinc-500 font-medium text-sm leading-relaxed">
               Kami memadukan kecepatan dan kualitas untuk memastikan kepuasan Anda di setiap pesanan.
             </p>
          </div>
        </div>
        
        {/* Grid - Card Style "Bertumpuk" */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className={`group relative p-8 bg-zinc-50 rounded-[40px] border border-zinc-100 transition-all duration-500 hover:bg-black hover:scale-105 hover:shadow-2xl hover:shadow-black/20 ${item.rotation}`}
              >
                {/* Tag Kecil di Pojok */}
                <div className="absolute top-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                   <span className="text-[9px] font-black uppercase tracking-widest text-zinc-500 italic">{item.tag}</span>
                </div>

                {/* Icon Container - Overlapping style */}
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm group-hover:bg-zinc-800 transition-colors duration-500">
                  <Icon size={28} className="text-black group-hover:text-white transition-colors" />
                </div>
                
                {/* Title & Desc */}
                <h3 className="text-2xl font-black text-black uppercase tracking-tighter mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] md:text-xs font-medium text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">
                  {item.desc}
                </p>

                {/* Decorative Line */}
                <div className="mt-6 h-[1px] w-8 bg-zinc-200 group-hover:w-16 group-hover:bg-zinc-700 transition-all"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyUs;