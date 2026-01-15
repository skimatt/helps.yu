import React from 'react';
import teamData from '../../data/team.json';
import contactData from '../../data/contact.json'; // Import data kontak
import { Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const TeamPage = () => {
  return (
    <main className="pt-40 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header - Editorial Design */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-black"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Expertise</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter uppercase leading-[0.85] mb-6">
              The <br />
              <span className="text-zinc-200 italic">Talents.</span>
            </h1>
            <p className="text-zinc-500 text-lg md:text-xl font-medium leading-relaxed">
              Kolektif individu kreatif yang berdedikasi untuk memberikan hasil kerja dengan presisi tinggi dan standar profesional.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12 lg:gap-20">
          {teamData.map((member) => (
            <div key={member.id} className="group">
              {/* Image Container dengan Grayscale effect */}
              <div className="relative aspect-[4/5] rounded-[48px] overflow-hidden bg-zinc-50 mb-8 border border-zinc-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-zinc-100">
                <img 
                  src={member.gambar} 
                  alt={member.nama}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                
                {/* Social Overlay yang Smooth */}
                <div className="absolute bottom-8 left-8 flex gap-3 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                  <a href="#" className="p-4 bg-white/90 backdrop-blur-md rounded-full text-black hover:bg-black hover:text-white transition-all shadow-xl">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="p-4 bg-white/90 backdrop-blur-md rounded-full text-black hover:bg-black hover:text-white transition-all shadow-xl">
                    <Linkedin size={18} />
                  </a>
                </div>
              </div>

              {/* Info Member */}
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-300 mb-2 block">
                    {member.role}
                  </span>
                  <h3 className="text-3xl font-black text-black uppercase tracking-tighter leading-none group-hover:italic transition-all">
                    {member.nama}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  <span className="text-[10px] font-bold bg-zinc-50 text-zinc-500 px-3 py-1 rounded-full border border-zinc-100 uppercase tracking-wider">
                    {member.spesialis}
                  </span>
                </div>

                <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                  {member.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Join Us - Compact & Dinamis ke WA */}
        <div className="mt-40 border-t border-zinc-100 pt-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic text-zinc-100 mb-6 tracking-tighter">Want to join us?</h2>
              <a 
                href={contactData.whatsapp} 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] border-b-2 border-black pb-2 hover:text-zinc-400 hover:border-zinc-200 transition-all group"
              >
                Submit Your Portfolio <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
            {/* Background Accent */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-[15vw] font-black text-zinc-50 select-none -z-0">
              CAREERS
            </div>
        </div>

      </div>
    </main>
  );
};

export default TeamPage;