import React from 'react';

const HowToOrder = () => {
  const steps = [
    { step: "01", title: "Select", desc: "Pilih layanan di library." },
    { step: "02", title: "Chat", desc: "Briefing via WhatsApp." },
    { step: "03", title: "Secure", desc: "Payment transparan." },
    { step: "04", title: "Grab", desc: "Terima hasil terbaik." }
  ];

  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      {/* Background Accent - Terpotong (Grafiti style) */}
      <div className="absolute top-0 left-10 text-[10vw] font-black text-zinc-50 leading-none select-none opacity-50 italic uppercase tracking-tighter">
        Workflow
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="bg-black text-white rounded-[40px] p-8 md:p-20 relative overflow-hidden shadow-2xl shadow-black/10">
          
          {/* Header Ringkas & Bold */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-6">
            <div className="relative">
              <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.85]">
                How It <br />
                <span className="text-zinc-600 italic">Works.</span>
              </h2>
            </div>
            <p className="text-zinc-500 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] max-w-[150px] leading-relaxed">
              4 Langkah Cepat Menuju Beres.
            </p>
          </div>

          {/* Grid: Compact di Mobile, Bold di Desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 md:gap-12 relative z-10">
            {steps.map((item, index) => (
              <div key={index} className="group relative">
                {/* Number & Line - Grafiti style */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[12px] font-black italic text-zinc-500 group-hover:text-white transition-colors">
                    {item.step}
                  </span>
                  <div className="h-[2px] w-8 bg-zinc-800 group-hover:w-full group-hover:bg-zinc-400 transition-all duration-500"></div>
                </div>

                {/* Judul & Desc */}
                <h3 className="text-xl md:text-3xl font-black uppercase tracking-tighter mb-2 group-hover:italic transition-all">
                  {item.title}
                </h3>
                <p className="text-zinc-500 text-[10px] md:text-sm leading-tight md:leading-relaxed font-medium">
                  {item.desc}
                </p>

                {/* Mobile Highlight (Hanya muncul di mobile saat aktif/scroll) */}
                <div className="absolute -inset-2 bg-zinc-900/50 rounded-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity md:hidden"></div>
              </div>
            ))}
          </div>

          {/* Decorative Text (Grafiti Overlap) */}
          <div className="absolute -bottom-6 -right-4 opacity-10 pointer-events-none select-none">
            <span className="text-7xl md:text-[120px] font-black italic tracking-tighter text-zinc-300">
              FAST.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;