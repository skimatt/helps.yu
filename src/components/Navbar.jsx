import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ArrowUpRight,
  GraduationCap,
  FileText,
  Users,
  HelpCircle,
  Sparkles,
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto close on route change
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, [location]);

  const toggleMenu = () => {
    const next = !isOpen;
    setIsOpen(next);
    document.body.style.overflow = next ? 'hidden' : 'unset';
  };

  const navLinks = [
    { name: 'Services', path: '/services', icon: FileText },
    { name: 'About', path: '/about', icon: Sparkles },
    { name: 'Team', path: '/team', icon: Users },
    { name: 'FAQ', path: '/faq', icon: HelpCircle },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        role="navigation"
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ${
          scrolled ? 'pt-3' : 'pt-6'
        }`}
      >
        <div
          className={`mx-auto transition-all duration-700 ${
            scrolled
              ? 'w-[90%] max-w-5xl bg-black/80 backdrop-blur-2xl border border-white/10 rounded-full py-2.5 shadow-2xl'
              : 'w-[95%] max-w-7xl bg-white/40 backdrop-blur-md border border-white/20 rounded-[32px] py-4 shadow-sm'
          }`}
        >
          <div className="px-6 md:px-10 flex justify-between items-center relative z-[110] pointer-events-auto">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group touch-manipulation">
              <div
                className={`p-2.5 rounded-2xl transition-all duration-500 ${
                  scrolled || isOpen ? 'bg-white text-black' : 'bg-black text-white'
                } group-hover:rotate-[10deg]`}
              >
                <GraduationCap size={22} />
              </div>
              <span
                className={`text-xl font-black uppercase tracking-tighter transition-colors duration-500 ${
                  scrolled || isOpen ? 'text-white' : 'text-black'
                }`}
              >
                Helps
                <span className={scrolled || isOpen ? 'text-zinc-500' : 'text-zinc-400'}>
                  .Yu
                </span>
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`flex items-center gap-2 px-5 py-2 rounded-full
                    text-[11px] font-black uppercase tracking-[0.15em]
                    transition-all duration-300 group touch-manipulation ${
                      scrolled
                        ? 'text-zinc-400 hover:text-white hover:bg-white/5'
                        : 'text-zinc-600 hover:text-black hover:bg-black/5'
                    }`}
                  >
                    <Icon size={14} className="group-hover:-translate-y-0.5 transition-transform" />
                    {link.name}
                  </Link>
                );
              })}
              <Link
                to="/services"
                className={`ml-4 px-6 py-3 rounded-full
                text-[11px] font-black uppercase tracking-widest
                transition-all hover:scale-105 active:scale-95
                flex items-center gap-2 touch-manipulation ${
                  scrolled
                    ? 'bg-white text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                    : 'bg-black text-white hover:bg-zinc-800'
                }`}
              >
                Get Started <ArrowUpRight size={14} />
              </Link>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={toggleMenu}
              className={`lg:hidden p-3 rounded-full
              transition-all duration-500 relative z-[120]
              touch-manipulation ${
                scrolled || isOpen ? 'bg-white text-black' : 'bg-black text-white'
              }`}
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE FULLSCREEN MENU ================= */}
      <div
        className={`fixed inset-0 z-[90] lg:hidden transition-all duration-700 ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        {/* Decorative background ONLY */}
        <div
          className={`absolute inset-0 bg-black pointer-events-none
          transition-transform duration-700 ${
            isOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        />

        {/* Interactive menu */}
        <div
          className={`relative z-[95] h-full flex flex-col justify-center
          px-8 sm:px-12 gap-4 pointer-events-auto touch-manipulation
          transition-all duration-700 delay-150 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="text-zinc-500 text-xs font-black uppercase tracking-[0.3em] mb-4">
            Navigation
          </p>

          {navLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={toggleMenu}
                className="group flex items-center justify-between
                border-b border-white/5 py-4 touch-manipulation"
              >
                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-black text-zinc-700 italic font-mono">
                    0{index + 1}
                  </span>
                  <div className="flex items-center gap-5">
                    <Icon
                      size={28}
                      className="text-zinc-600 group-hover:text-white
                      group-hover:rotate-6 transition-all duration-500"
                    />
                    <span className="text-5xl sm:text-6xl font-black
                    uppercase tracking-tighter text-white">
                      {link.name}
                    </span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/10
                flex items-center justify-center
                group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <ArrowUpRight size={24} />
                </div>
              </Link>
            );
          })}

          <Link
            to="/services"
            onClick={toggleMenu}
            className="mt-12 w-full bg-white text-black py-7 rounded-[24px]
            text-center font-black uppercase tracking-[0.2em] text-sm
            hover:bg-zinc-200 transition-all flex items-center justify-center
            gap-3 shadow-[0_20px_40px_rgba(255,255,255,0.1)]
            active:scale-[0.98] touch-manipulation"
          >
            Start A Project <ArrowUpRight size={20} />
          </Link>

          {/* Footer note (visual) */}
          <div className="absolute bottom-10 left-8 right-8 flex justify-between
          items-center text-zinc-500 text-[10px] font-bold uppercase tracking-widest
          pointer-events-none">
            <span>© 2026 HELPS.YU</span>
            <div className="flex gap-4">
              <span>IG</span>
              <span>LI</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-4 md:h-8" />
    </>
  );
};

export default Navbar;
