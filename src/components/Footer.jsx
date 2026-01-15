import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Instagram,
  MessageCircle,
  ArrowUpRight,
  X,
  Smartphone,
} from 'lucide-react';
import contactData from '../data/contact.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-white border-t border-zinc-100 pt-24 pb-12 relative overflow-hidden font-inter">
      {/* ================= DECORATIVE BACKGROUND (VISUAL ONLY) ================= */}
      <div className="absolute right-0 bottom-0 pointer-events-none text-[10vw] font-black text-zinc-50 leading-none select-none opacity-40 italic tracking-tighter">
        HY.
      </div>

      {/* ================= FOOTER CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10 pointer-events-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div>
            <Link
              to="/"
              className="inline-block mb-8 group touch-manipulation"
            >
              <span className="text-3xl font-black tracking-tighter text-black uppercase italic group-hover:text-zinc-400 transition-colors">
                helps<span className="not-italic text-zinc-300">.</span>yu
              </span>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs font-medium italic">
              "Partner strategis untuk menaklukkan tantangan akademik dan digital."
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-black mb-8 border-l-2 border-black pl-4">
              Navigasi
            </h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Team', 'About', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-xs font-bold text-zinc-400 hover:text-black transition-all flex items-center gap-1 group touch-manipulation"
                  >
                    {item}
                    <ArrowUpRight
                      size={12}
                      className="opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-black mb-8 border-l-2 border-black pl-4">
              Bantuan
            </h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/privacy"
                  className="text-xs font-bold text-zinc-400 hover:text-black transition-all touch-manipulation"
                >
                  Kebijakan Privasi
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-xs font-bold text-zinc-400 hover:text-black transition-all flex items-center gap-1 cursor-pointer touch-manipulation"
                >
                  Hubungi Kami
                </button>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-black mb-8 border-l-2 border-black pl-4">
              Socials
            </h4>
            <div className="flex gap-4">
              <a
                href={contactData.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-500 shadow-sm touch-manipulation"
              >
                <Instagram size={22} />
              </a>
              <a
                href={contactData.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-2xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-500 shadow-sm touch-manipulation"
              >
                <MessageCircle size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-zinc-50 gap-6">
          <p className="text-[10px] font-black uppercase tracking-widest text-zinc-300">
            © {currentYear} helps.yu — All Rights Reserved.
          </p>

          <div className="flex items-center gap-4 group">
            <div className="h-[1px] w-8 bg-zinc-100 group-hover:w-12 transition-all" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-300 italic group-hover:text-black transition-colors">
              Rahmat Mulia<span className="text-zinc-200">.</span>
            </span>
          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={() => setIsModalOpen(false)}
          />

          <div className="bg-white w-full max-w-sm rounded-[40px] p-10 relative z-10 shadow-[0_32px_64px_rgba(0,0,0,0.1)] border border-zinc-100">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-8 right-8 text-zinc-300 hover:text-black transition-colors touch-manipulation"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-10">
              <div className="w-20 h-20 bg-zinc-50 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-inner">
                <Smartphone size={32} className="text-black" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter">
                Connect.
              </h3>
              <p className="text-zinc-400 text-[10px] font-bold uppercase tracking-widest mt-2 leading-relaxed px-4">
                Pilih platform untuk memulai konsultasi instan Anda.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={contactData.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between w-full p-5 bg-black text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-zinc-800 transition-all touch-manipulation"
              >
                WhatsApp Admin <MessageCircle size={20} />
              </a>
              <a
                href={contactData.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between w-full p-5 bg-white text-black border-2 border-zinc-100 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:border-black transition-all touch-manipulation"
              >
                Instagram DM <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
