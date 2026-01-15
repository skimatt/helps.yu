import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const PopularServices = () => {
const popular = [
  { 
    id: 1, 
    name: 'Website', 
    price: 'Mulai 100rb', 
    // Gaya Abstrak Tech - Dominan Hitam/Abu-abu
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=website&backgroundColor=18181b&shape1Color=3f3f46&shape2Color=71717a&shape3Color=a1a1aa',
    slug: 'joki-web-landing-page',
    color: 'bg-zinc-50'
  },
  { 
    id: 2, 
    name: 'Design', 
    price: 'Mulai 50rb', 
    // Gaya Abstrak Kreatif - Warna lebih kontras
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=design&backgroundColor=27272a&shape1Color=52525b&shape2Color=a1a1aa&shape3Color=e4e4e7',
    slug: 'tugas-makalah-paper',
    color: 'bg-zinc-100'
  },
  { 
    id: 3, 
    name: 'Journal', 
    price: 'Mulai 30rb', 
    // Gaya Abstrak Akademik - Lebih soft
    image: 'https://api.dicebear.com/7.x/shapes/svg?seed=journal&backgroundColor=3f3f46&shape1Color=71717a&shape2Color=d4d4d8&shape3Color=f4f4f5',
    slug: 'desain-presentasi-ppt',
    color: 'bg-zinc-50'
  },
];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Accent - Menyambung style Hero */}
      <div className="absolute top-0 right-0 text-[15vw] font-black text-zinc-50 leading-none select-none -z-0 translate-y-[-20%] italic">
        BEST
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header Section - Modern Asymmetric */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-10">
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[2px] w-12 bg-black"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Most Wanted</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-black tracking-tighter uppercase leading-[0.8]">
              Popular <br />
              <span className="text-zinc-200 italic relative">
                Services.
                {/* Graffiti underline effect */}
                <div className="absolute bottom-2 left-0 w-full h-4 bg-zinc-100 -z-10 -rotate-1"></div>
              </span>
            </h2>
          </div>
          
          <div className="max-w-xs text-left lg:text-right">
            <p className="text-zinc-500 font-medium text-sm leading-relaxed mb-6">
              Layanan unggulan yang dikerjakan oleh talent profesional dengan standar kualitas tinggi.
            </p>
            <Link 
              to="/services" 
              className="group inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-black border-b-2 border-black pb-1 hover:text-zinc-400 hover:border-zinc-200 transition-all duration-300"
            >
              Explore Library <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
        
        {/* Grid Section - Bertumpuk Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
          {popular.map((item, index) => (
            <Link 
              key={item.id} 
              to={`/services/${item.slug}`} 
              className={`group flex flex-col relative ${index === 1 ? 'md:-translate-y-8' : ''}`}
            >
              {/* Card Container */}
              <div className={`relative aspect-[1/1] overflow-visible rounded-[48px] ${item.color} mb-8 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-zinc-100`}>
                
                {/* 3D Image - Floating Effect */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-contain drop-shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:-rotate-3 group-hover:grayscale-0 grayscale" 
                  />
                </div>

                {/* Floating Badge Label */}
                <div className="absolute -top-4 -left-4 bg-white border border-zinc-100 px-4 py-2 rounded-2xl shadow-xl z-20">
                   <span className="text-[9px] font-black uppercase tracking-widest text-black">Top Pick 0{item.id}</span>
                </div>
                
                {/* Quick Action Button */}
                <div className="absolute -bottom-6 -right-6 w-16 h-16 bg-black rounded-3xl flex items-center justify-center shadow-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-zinc-800">
                  <ArrowRight size={24} className="text-white" />
                </div>
              </div>

              {/* Text Info - Overlapping Typography */}
              <div className="relative pl-2">
                <h3 className="text-4xl font-black text-black uppercase tracking-tighter leading-none mb-4 group-hover:italic transition-all duration-300">
                  {item.name}
                </h3>
                <div className="flex items-center gap-4">
                   <div className="h-[1px] w-8 bg-zinc-200 group-hover:w-12 group-hover:bg-black transition-all"></div>
                   <p className="text-xs font-black uppercase tracking-widest text-zinc-400 italic group-hover:text-black">
                     {item.price}
                   </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;