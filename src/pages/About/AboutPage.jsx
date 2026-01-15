import React from 'react';
import { ArrowUpRight, Zap, Target, Star, Smile } from 'lucide-react';
import contactData from '../../data/contact.json';

const AboutPage = () => {
  return (
    <main className="pt-40 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Intro Section - Editorial Style */}
        <div className="flex flex-col lg:flex-row gap-20 mb-40 items-start">
          <div className="flex-[1.5]">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-[2px] w-12 bg-black"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Since 2024</span>
            </div>
            <h1 className="text-6xl md:text-9xl font-black text-black tracking-tighter uppercase leading-[0.85] mb-10">
              We Are <br />
              <span className="text-zinc-200 italic">helps.yu</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-500 leading-relaxed font-medium max-w-2xl">
              Kami hadir sebagai partner strategis untuk membantu Anda menaklukkan tantangan akademik dan digital dengan hasil yang presisi dan profesional.
            </p>
          </div>
          <div className="flex-1 w-full aspect-square bg-zinc-50 rounded-[60px] overflow-hidden border border-zinc-100 flex items-center justify-center relative">
              <div className="text-center z-10">
                <div className="text-[100px] md:text-[140px] font-black text-black leading-none tracking-tighter italic">10K+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-300 mt-4">Projects Delivered</div>
              </div>
              {/* Dekorasi Grid Halus */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
          </div>
        </div>

        {/* Core Values - Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-40">
          {[
            { icon: <Zap size={28} />, title: "Precision", desc: "Kami tidak hanya mengerjakan, kami memastikan setiap detail sesuai dengan standar kualitas terbaik." },
            { icon: <Target size={28} />, title: "Efficiency", desc: "Waktu adalah aset berharga. Sistem kami dirancang untuk pengerjaan kilat tanpa kompromi." },
            { icon: <Star size={28} />, title: "Integrity", desc: "Kerahasiaan data dan kejujuran dalam pengerjaan adalah fondasi utama layanan kami." }
          ].map((item, idx) => (
            <div key={idx} className="group">
              <div className="mb-8 text-black group-hover:scale-110 transition-transform duration-500 origin-left">{item.icon}</div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 flex items-center gap-3">
                {item.title}
                <span className="h-[1px] w-8 bg-zinc-100 group-hover:w-16 group-hover:bg-black transition-all"></span>
              </h3>
              <p className="text-zinc-500 leading-relaxed font-medium text-lg">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Cari bagian CTA Section di dalam return, lalu ubah button menjadi tag <a> */}
          <div className="bg-black rounded-[50px] p-16 md:p-24 text-center relative overflow-hidden group">
            <div className="relative z-10">
              <Smile size={48} className="mx-auto text-zinc-600 mb-8" />
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-10 tracking-tighter leading-none">
                Ready to collaborate <br />
                <span className="text-zinc-500 italic">with us?</span>
              </h2>
              
              {/* Tombol diubah menjadi Link WhatsApp yang dinamis */}
              <a 
                href={contactData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-12 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all inline-flex items-center gap-3 shadow-2xl cursor-pointer"
              >
                Talk to Our Team <ArrowUpRight size={18} />
              </a>
            </div>

            {/* Subtle Accent */}
            <div className="absolute top-0 right-0 p-10 opacity-5 text-white font-black italic text-8xl pointer-events-none">
              HY.
            </div>
          </div>
      </div>
    </main>
  );
};

export default AboutPage;