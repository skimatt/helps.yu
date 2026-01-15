import React, { useState, useEffect } from 'react';
import { Search, ArrowRight, MousePointerClick } from 'lucide-react';
import { Link } from 'react-router-dom';
import initialData from '../../data/services.json';

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('jokipro_services');
    const finalData = savedData ? JSON.parse(savedData) : initialData;
    setServices(finalData);
    setFilteredServices(finalData);
  }, []);

  useEffect(() => {
    const results = services.filter(service =>
      service.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.keyword?.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredServices(results);
  }, [searchTerm, services]);

  return (
    <main className="pt-40 pb-20 bg-white min-h-screen relative overflow-hidden">
      {/* Background Graffiti Decor */}
      <div className="absolute top-10 right-[-10%] text-[25vw] font-black text-zinc-50 leading-none select-none -z-0 italic tracking-tighter uppercase opacity-60">
        Library
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        
        {/* Header - Asymmetric Design */}
        <div className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[2px] w-12 bg-black"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-black italic">Collection</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-black tracking-tighter uppercase leading-[0.8] mb-8">
            Expert <br />
            <span className="text-zinc-200 italic">Solutions.</span>
          </h1>
          <p className="text-zinc-500 text-lg md:text-xl max-w-xl font-medium leading-relaxed border-l-4 border-zinc-100 pl-6">
            Jelajahi berbagai layanan profesional yang dirancang untuk membantu Anda <span className="text-black font-bold">tumbuh lebih cepat</span> dan efisien.
          </p>
        </div>

        {/* Search Bar - Modern & Clean */}
        <div className="relative mb-32 group">
          <div className="absolute inset-y-0 left-8 flex items-center pointer-events-none transition-colors group-focus-within:text-black">
            <Search className="text-zinc-300 group-focus-within:text-black" size={28} />
          </div>
          <input
            type="text"
            placeholder="Search for solutions..."
            className="w-full bg-zinc-50 border-2 border-zinc-100 text-black py-8 pl-20 pr-10 rounded-[32px] 
                       focus:outline-none focus:border-black transition-all duration-500 text-xl font-black uppercase tracking-tighter placeholder:text-zinc-200 shadow-sm focus:shadow-2xl focus:shadow-zinc-100"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Grid Section */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-x-10 md:gap-y-20">
            {filteredServices.map((service, index) => (
              <Link 
                key={service.id} 
                to={`/services/${service.slug}`} 
                className={`group flex flex-col relative ${index % 2 !== 0 ? 'md:translate-y-12' : ''}`}
              >
                {/* Image Wrapper */}
                <div className="relative aspect-[1/1] overflow-hidden rounded-[48px] bg-zinc-50 mb-8 border border-zinc-100 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-zinc-100 group-hover:bg-white">
                  <img 
                    src={service.gambar} 
                    className="w-full h-full object-contain p-10 grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110 group-hover:rotate-3"
                    alt={service.nama}
                  />
                  
                  {/* Floating ID Tag */}
                  <div className="absolute top-8 left-8">
                     <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300 group-hover:text-black transition-colors italic">Ref. 0{index + 1}</span>
                  </div>

                  {/* Icon on Hover */}
                  <div className="absolute bottom-8 right-8 w-14 h-14 bg-black rounded-2xl flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                    <ArrowRight size={24} className="text-white" />
                  </div>
                </div>

                {/* Typography Overlap Style */}
                <div className="pl-4 relative">
                  <h3 className="text-4xl font-black text-black mb-3 tracking-tighter uppercase leading-none group-hover:italic transition-all">
                    {service.nama}
                  </h3>
                  <div className="flex items-center gap-4">
                    <div className="h-[2px] w-10 bg-zinc-100 group-hover:w-20 group-hover:bg-black transition-all duration-500"></div>
                    <span className="text-xs font-black uppercase tracking-widest text-zinc-300 italic group-hover:text-black">
                      {service.harga}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-zinc-50 rounded-[60px] border-4 border-dashed border-zinc-100">
            <MousePointerClick className="mx-auto text-zinc-100 mb-8 animate-bounce" size={80} />
            <h3 className="text-3xl font-black text-black uppercase tracking-tighter mb-2">No Service Found.</h3>
            <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs italic">Try different keywords or contact us</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default ServicesPage;