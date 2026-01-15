import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, GraduationCap, FileText, Users, HelpCircle, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', path: '/services', icon: FileText },
    { name: 'About', path: '/about', icon: Sparkles },
    { name: 'Team', path: '/team', icon: Users },
    { name: 'FAQ', path: '/faq', icon: HelpCircle },
  ];

  return (
    <>
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'w-[95%] max-w-5xl' 
          : 'w-[98%] max-w-7xl'
      }`}>
        <div className={`relative transition-all duration-500 ${
          scrolled 
            ? 'bg-black/95 backdrop-blur-xl rounded-full shadow-2xl shadow-black/20 border border-white/10' 
            : 'bg-white/80 backdrop-blur-md rounded-3xl shadow-lg shadow-black/5 border border-black/5'
        }`}>
          <div className="px-6 md:px-8 py-4">
            <div className="flex justify-between items-center">
              
              {/* Logo with Icon */}
              <a href="/" className="group flex items-center gap-2 relative">
                <div className={`p-2 rounded-xl transition-all duration-300 ${
                  scrolled 
                    ? 'bg-white/10' 
                    : 'bg-black'
                }`}>
                  <GraduationCap 
                    size={20} 
                    className={`transition-colors duration-300 ${
                      scrolled ? 'text-white' : 'text-white'
                    }`}
                  />
                </div>
                <span className={`text-xl md:text-2xl font-black tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-white' : 'text-black'
                }`}>
                  Helps<span className={`font-light ${scrolled ? 'text-white/40' : 'text-zinc-400'}`}>.Yu</span>
                </span>
                {!scrolled && (
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                )}
              </a>

              {/* Desktop Menu */}
              <div className="hidden lg:flex items-center gap-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a 
                      key={link.name} 
                      href={link.path} 
                      className={`group flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                        scrolled 
                          ? 'text-white/70 hover:text-white hover:bg-white/10' 
                          : 'text-zinc-600 hover:text-black hover:bg-black/5'
                      }`}
                    >
                      <Icon size={16} className="transition-transform group-hover:scale-110" />
                      <span className="hidden xl:inline">{link.name}</span>
                    </a>
                  );
                })}
              </div>

              {/* CTA Button */}
              <div className="hidden md:flex items-center gap-3">
                <a 
                  href="/services" 
                  className={`group flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    scrolled 
                      ? 'bg-white text-black hover:bg-white/90 hover:scale-105' 
                      : 'bg-black text-white hover:bg-zinc-800 hover:scale-105'
                  } shadow-lg active:scale-95`}
                >
                  Get Started 
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className={`lg:hidden p-3 rounded-full transition-all duration-300 ${
                  scrolled 
                    ? 'bg-white/10 text-white hover:bg-white/20' 
                    : 'bg-black/5 text-black hover:bg-black/10'
                }`}
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      <div className={`fixed inset-x-4 top-24 z-40 lg:hidden transition-all duration-300 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-black/5 overflow-hidden">
          <div className="p-6 space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a 
                  key={link.name} 
                  href={link.path} 
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center gap-3 p-4 rounded-2xl text-black hover:bg-black/5 transition-all duration-300"
                >
                  <div className="p-2 bg-black/5 rounded-xl group-hover:bg-black group-hover:scale-110 transition-all duration-300">
                    <Icon size={18} className="text-black group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-semibold">{link.name}</span>
                  <ArrowUpRight size={16} className="ml-auto text-zinc-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                </a>
              );
            })}
          </div>
          <div className="p-6 pt-0">
            <a 
              href="/services"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-black text-white py-4 rounded-2xl font-bold uppercase tracking-wider text-sm hover:bg-zinc-800 transition-all active:scale-95"
            >
              Get Started
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;