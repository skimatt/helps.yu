import React, { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import contactData from '../../data/contact.json';

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b border-zinc-100 py-10 transition-all duration-500 ${isOpen ? 'bg-zinc-50/50 px-6 rounded-[32px]' : ''}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-start text-left group"
      >
        <div className="flex gap-6">
          <span className="text-xs font-black text-zinc-300 mt-2 italic">0{index + 1}</span>
          <h3 className={`text-2xl md:text-3xl font-black uppercase tracking-tighter transition-all duration-300 ${isOpen ? 'text-black italic' : 'text-zinc-400 group-hover:text-black'}`}>
            {question}
          </h3>
        </div>
        <div className={`mt-2 transition-transform duration-500 ${isOpen ? 'rotate-180 text-black' : 'text-zinc-300'}`}>
          {isOpen ? <Minus size={28} strokeWidth={3} /> : <Plus size={28} strokeWidth={3} />}
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-8' : 'max-h-0 opacity-0'}`}>
        <div className="flex gap-6">
          <div className="hidden md:block w-8"></div> {/* Spacer untuk menyamakan dengan index */}
          <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-2xl font-medium italic border-l-2 border-black pl-6">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQPage = () => {
  const faqs = [
    { question: "Cara pemesanan?", answer: "Pilih layanan di library, detailkan tugas via WhatsApp, dan tim kami akan segera memprosesnya." },
    { question: "Waktu pengerjaan?", answer: "Variatif sesuai tingkat kesulitan, namun standar pengerjaan kami adalah 24 hingga 48 jam saja." },
    { question: "Garansi revisi?", answer: "Kepuasan Anda mutlak. Kami memberikan gratis revisi selama instruksi masih sesuai kesepakatan awal." },
    { question: "Keamanan data?", answer: "Privasi adalah integritas kami. Semua data dan file Anda akan dihapus permanen setelah proyek selesai." },
    { question: "Metode bayar?", answer: "Mendukung semua Bank utama dan E-Wallet (QRIS, Dana, OVO, GoPay) untuk kemudahan transaksi Anda." }
  ];

  return (
    <main className="pt-40 pb-20 bg-white min-h-screen relative overflow-hidden">
      {/* Background Accent - Grafiti Style */}
      <div className="absolute top-10 right-[-5%] text-[20vw] font-black text-zinc-50 leading-none select-none -z-0 italic tracking-tighter uppercase">
        Help.
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header - Bertumpuk */}
        <div className="mb-32">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-black"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black">Support Center</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-black tracking-tighter uppercase leading-[0.8] mb-8">
            Common <br />
            <span className="text-zinc-200 italic">Questions.</span>
          </h1>
        </div>

        {/* FAQ List */}
        <div className="space-y-2 mb-32">
          {faqs.map((faq, index) => (
            <FAQItem key={index} index={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Final CTA - Dynamic WhatsApp */}
        <div className="bg-black rounded-[48px] p-12 md:p-20 text-center relative overflow-hidden group">
          <div className="relative z-10">
            <p className="text-zinc-500 font-black uppercase tracking-[0.4em] text-[10px] mb-6">Masih punya pertanyaan?</p>
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-10 leading-none">
              Tanyakan Langsung <br />
              <span className="text-zinc-600 italic">ke Admin Kami.</span>
            </h2>
            <a 
              href={contactData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all inline-flex items-center gap-3 group shadow-2xl"
            >
              Contact via WhatsApp <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>
          {/* Background Decor */}
          <div className="absolute bottom-[-20px] left-[-20px] text-8xl font-black text-white/5 italic select-none">
            ASK.
          </div>
        </div>

      </div>
    </main>
  );
};

export default FAQPage;