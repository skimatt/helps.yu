import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import contactData from '../../data/contact.json'; // Import data kontak

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 md:pt-0 bg-white overflow-hidden relative font-inter">
      {/* ... (bagian dekorasi background tetap sama) ... */}

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full z-10">
        
        {/* Left Content */}
        <div className="lg:col-span-7 text-left relative py-12">
          
          {/* ... (bagian badge & headline tetap sama) ... */}

          {/* Headline Grafiti Style */}
          <div className="relative mb-10">
            <h1 className="text-6xl md:text-8xl lg:text-[110px] font-black text-black leading-[0.85] tracking-tighter uppercase relative z-20">
              Selesaikan <br />
              <span className="relative inline-block mt-2">
                Tugas Anda
                <span className="absolute -top-1 -left-1 text-zinc-100 -z-10 select-none hidden md:block" style={{ WebkitTextStroke: '2px #e4e4e7' }}>
                  Tugas Anda
                </span>
              </span>
            </h1>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black italic text-zinc-200 uppercase leading-none mt-[-10px] md:mt-[-20px] ml-4 md:ml-12 tracking-tighter opacity-80">
              Tanpa Pusing.
            </h2>
          </div>

          <p className="text-lg md:text-xl text-zinc-500 max-w-md mb-12 leading-relaxed font-medium">
            Platform Jasa profesional untuk membantu <span className="text-black font-bold">akademik & proyek kreatif</span> Anda dengan standar tinggi.
          </p>
          
          {/* TOMBOL NAVIGASI - UPDATE DISINI */}
          <div className="flex flex-col sm:flex-row gap-5 items-start">
            {/* Tombol ke WhatsApp */}
            <a 
              href={contactData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-10 py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-zinc-200 group cursor-pointer"
            >
              Get Started <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
            </a>

            {/* Tombol ke Halaman Services */}
            <Link 
              to="/services" 
              className="bg-white text-black border-2 border-zinc-100 px-10 py-5 rounded-2xl text-xs font-black uppercase tracking-[0.2em] hover:border-black transition-all flex items-center gap-2 group cursor-pointer"
            >
              Browse Services <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          {/* ... (bagian Trust Pilot info tetap sama) ... */}
          <div className="mt-16 pt-8 border-t border-zinc-100 flex items-center gap-6">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-zinc-100">
                  <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`} alt="user" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-white bg-black flex items-center justify-center text-[10px] text-white font-bold">
                500+
              </div>
            </div>
            <div className="text-[11px] font-black uppercase tracking-widest text-zinc-400 leading-tight text-left">
              Trusted by <br />
              <span className="text-black">Indonesian Students</span>
            </div>
          </div>

        </div>

        {/* ... (Right Content / Ilustrasi tetap sama) ... */}
        <div className="lg:col-span-5 relative hidden lg:flex justify-center items-center">
            {/* Sesuai kode sebelumnya */}
            <div className="w-full relative animate-[float_6s_ease-in-out_infinite]">
              <div className="absolute top-10 -right-10 w-full h-full border-2 border-zinc-100 rounded-[60px] -z-10 rotate-6"></div>
              <div className="bg-zinc-50 border border-zinc-100 rounded-[60px] p-8 relative shadow-2xl overflow-hidden group">
                {/* ... konten ilustrasi ... */}
                <div className="flex justify-between items-center mb-8">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
                      <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
                    </div>
                    <div className="text-[10px] font-black text-zinc-300 uppercase tracking-widest italic">helps.yu / workspace</div>
                </div>
                <svg viewBox="0 0 400 300" className="w-full h-auto drop-shadow-sm grayscale group-hover:grayscale-0 transition-all duration-700">
                    <rect x="50" y="50" width="300" height="200" rx="20" fill="white" stroke="#18181b" strokeWidth="2" />
                    <path d="M100 120 L200 120 M100 150 L250 150 M100 180 L180 180" stroke="#18181b" strokeWidth="8" strokeLinecap="round" opacity="0.1" />
                    <circle cx="300" cy="150" r="40" stroke="#18181b" strokeWidth="2" fill="#f4f4f5" />
                    <path d="M280 150 L320 150 M300 130 L300 170" stroke="#18181b" strokeWidth="2" />
                </svg>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;