import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import contactData from '../../data/contact.json'; // Import data dinamis

import Hero from './Hero';
import PopularServices from './PopularServices';
import WhyUs from './WhyUs';
import HowToOrder from './HowToOrder';

const HomePage = () => {
  return (
    <main className="bg-white">
      <Hero />
      <PopularServices />
      <WhyUs />
      <HowToOrder />
      
      {/* Final CTA Section - High-Contrast Graffiti Style */}
      <section className="py-32 md:py-48 bg-white border-t border-zinc-100 relative overflow-hidden">
        
        {/* Dekorasi Background - Bertumpuk (Subtle) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-black text-zinc-50 leading-none select-none -z-0 italic tracking-tighter opacity-70">
          GO!
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-10 text-center relative z-10">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 mb-10 px-5 py-2 bg-black text-white rounded-full shadow-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">
              Ready to take orders
            </span>
          </div>

          {/* Headline Grafiti / Overlap */}
          <div className="relative mb-12">
            <h2 className="text-6xl md:text-[120px] font-black text-black tracking-tighter uppercase leading-[0.8] mb-4">
              Let's Make <br />
              <span className="relative inline-block">
                It Happen.
                {/* Background offset text */}
                <div className="absolute -top-1 -left-1 text-zinc-100 -z-10 select-none hidden md:block" style={{ WebkitTextStroke: '2px #f4f4f5' }}>
                   It Happen.
                </div>
              </span>
            </h2>
            <div className="text-zinc-300 italic text-4xl md:text-6xl font-black mt-[-10px] md:mt-[-30px] ml-10 md:ml-20 tracking-tighter">
              Start your project.
            </div>
          </div>

          <p className="text-zinc-500 mb-16 text-lg md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed">
            Jangan biarkan deadline menghambat kreativitas Anda. <span className="text-black font-bold italic">helps.yu</span> siap membantu kapan saja.
          </p>

          {/* Dynamic WhatsApp Button */}
          <div className="flex flex-col items-center gap-8">
            <a 
              href={contactData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black hover:bg-zinc-800 text-white px-10 md:px-16 py-6 md:py-8 rounded-[30px] text-xl md:text-2xl font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.2)] inline-flex items-center gap-5 group"
            >
              Contact Admin <ArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            
            {/* Trust Footer */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 opacity-40">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black italic">Fast Response</span>
              <div className="hidden md:block h-1 w-1 bg-black rounded-full"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black italic">Professional Talent</span>
              <div className="hidden md:block h-1 w-1 bg-black rounded-full"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black italic">Secure Payment</span>
            </div>
          </div>
        </div>

        {/* Aksen Tambahan di Pojok */}
        <div className="absolute bottom-10 right-10 flex flex-col items-end opacity-10 rotate-90 origin-bottom-right hidden lg:flex">
          <span className="text-4xl font-black tracking-tighter italic">helps.yu</span>
          <span className="text-[10px] font-bold tracking-[1em] uppercase -mt-2">Copyright 2026</span>
        </div>
      </section>
    </main>
  );
};

export default HomePage;