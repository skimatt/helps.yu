import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Shield, Zap, RefreshCcw, Star } from 'lucide-react';
import initialData from '../../data/services.json';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem('jokipro_services');
    const services = savedData ? JSON.parse(savedData) : initialData;
    const found = services.find((s) => s.slug === slug);
    
    if (found) {
      setService(found);
    } else {
      navigate('/services');
    }
  }, [slug, navigate]);

  if (!service) return null;

  return (
    <main className="pt-40 pb-20 bg-white min-h-screen relative overflow-hidden">
      {/* Background Graffiti Text */}
      <div className="absolute top-20 left-[-5%] text-[18vw] font-black text-zinc-50 leading-none select-none -z-0 italic tracking-tighter uppercase">
        Detail.
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Navigation */}
        <Link 
          to="/services" 
          className="inline-flex items-center gap-3 text-black hover:text-zinc-400 transition-all mb-16 group"
        >
          <div className="w-10 h-10 rounded-full border border-zinc-100 flex items-center justify-center group-hover:border-black transition-colors">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.3em]">Back to Gallery</span>
        </Link>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Left: Sticky Image Section */}
          <div className="flex-1 w-full lg:sticky lg:top-40">
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute inset-0 border-2 border-zinc-100 rounded-[60px] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-500"></div>
              
              <div className="aspect-square rounded-[50px] overflow-hidden bg-zinc-50 border border-zinc-100 shadow-2xl shadow-zinc-100">
                <img 
                  src={service.gambar} 
                  className="w-full h-full object-contain p-12 grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                  alt={service.nama} 
                />
              </div>

              {/* Float Badge */}
              <div className="absolute -bottom-6 -left-6 bg-black text-white p-6 rounded-3xl shadow-2xl rotate-[-5deg]">
                <Star size={24} fill="white" />
              </div>
            </div>
          </div>

          {/* Right: Content Section */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-black"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black italic">Project Specs</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-black tracking-tighter uppercase leading-[0.85] mb-4">
              {service.nama}
            </h1>
            <h2 className="text-4xl md:text-5xl font-black italic text-zinc-200 uppercase tracking-tighter mb-10">
              {service.harga}
            </h2>
            
            <div className="h-[1px] w-full bg-zinc-100 mb-10"></div>

            <p className="text-zinc-500 text-xl leading-relaxed mb-12 font-medium italic border-l-4 border-black pl-8">
              {service.deskripsi}
            </p>

            {/* Features Mini Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { icon: <Shield size={20} />, label: "Secure" },
                { icon: <Zap size={20} />, label: "Express" },
                { icon: <RefreshCcw size={20} />, label: "Verified" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-zinc-50 border border-zinc-100 group hover:bg-black hover:text-white transition-all duration-300">
                  <div className="text-black group-hover:text-white">{item.icon}</div>
                  <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Massive Call to Action */}
            <a 
              href={service.whatsapp} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-black text-white py-8 px-10 rounded-[30px] text-xl font-black uppercase tracking-[0.2em] flex items-center justify-center gap-6 hover:bg-zinc-800 transition-all shadow-2xl shadow-zinc-200 group relative overflow-hidden"
            >
              <span className="relative z-10">Initiate Project</span>
              <Send size={24} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </a>
            
            <p className="mt-8 text-center text-[9px] font-black uppercase tracking-[0.5em] text-zinc-300">
              Click to start instant consultation
            </p>
          </div>

        </div>
      </div>

      {/* Side Label */}
      <div className="absolute bottom-20 right-[-40px] rotate-90 hidden xl:block">
        <span className="text-[10px] font-black uppercase tracking-[1em] text-zinc-100">helps.yu / official</span>
      </div>
    </main>
  );
};

export default ServiceDetailPage;