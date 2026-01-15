import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit3, Save, X, Download, Copy, Check } from 'lucide-react';
import initialServices from '../../data/services.json';

const AdminPage = () => {
  const [services, setServices] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    id: '', nama: '', slug: '', deskripsi: '', keyword: '', harga: '', gambar: '', whatsapp: ''
  });

  // Load data dari LocalStorage atau file JSON awal
  useEffect(() => {
    const savedData = localStorage.getItem('jokipro_services');
    if (savedData) {
      setServices(JSON.parse(savedData));
    } else {
      setServices(initialServices);
    }
  }, []);

  const saveToLocal = (data) => {
    setServices(data);
    localStorage.setItem('jokipro_services', JSON.stringify(data));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === 'nama' && !isEditing) {
      setFormData(prev => ({ ...prev, slug: value.toLowerCase().replace(/ /g, '-') }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const updated = services.map(s => s.id === isEditing ? { ...formData, id: isEditing } : s);
      saveToLocal(updated);
      setIsEditing(null);
    } else {
      const newService = { ...formData, id: Date.now() };
      saveToLocal([...services, newService]);
    }
    setFormData({ id: '', nama: '', slug: '', deskripsi: '', keyword: '', harga: '', gambar: '', whatsapp: '' });
  };

  const deleteService = (id) => {
    if (window.confirm('Hapus layanan ini?')) {
      const filtered = services.filter(s => s.id !== id);
      saveToLocal(filtered);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(services, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="pt-32 pb-20 bg-white min-h-screen font-inter">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black uppercase tracking-tighter">Admin <span className="text-zinc-300 italic">Panel.</span></h1>
            <p className="text-zinc-500 text-sm mt-2 font-bold uppercase tracking-widest">Manage your services locally</p>
          </div>
          <button 
            onClick={copyToClipboard}
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-zinc-800 transition-all"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            {copied ? 'Copied!' : 'Export JSON Data'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Form Section */}
          <div className="lg:col-span-1">
            <form onSubmit={handleSubmit} className="p-8 border-2 border-black rounded-3xl sticky top-32">
              <h2 className="text-xl font-black uppercase mb-6">{isEditing ? 'Edit Service' : 'Add New Service'}</h2>
              <div className="space-y-4">
                <input type="text" name="nama" placeholder="Service Name" value={formData.nama} onChange={handleInputChange} className="w-full border-b-2 border-zinc-100 py-2 focus:border-black outline-none font-bold" required />
                <input type="text" name="harga" placeholder="Price (e.g. Mulai 50rb)" value={formData.harga} onChange={handleInputChange} className="w-full border-b-2 border-zinc-100 py-2 focus:border-black outline-none text-sm" />
                <input type="text" name="gambar" placeholder="Image URL (Unsplash)" value={formData.gambar} onChange={handleInputChange} className="w-full border-b-2 border-zinc-100 py-2 focus:border-black outline-none text-sm" />
                <textarea name="deskripsi" placeholder="Full Description" value={formData.deskripsi} onChange={handleInputChange} className="w-full border-b-2 border-zinc-100 py-2 focus:border-black outline-none text-sm h-24" required />
                <button type="submit" className="w-full bg-black text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                  {isEditing ? <Save size={18} /> : <Plus size={18} />}
                  {isEditing ? 'Update' : 'Create Service'}
                </button>
                {isEditing && (
                  <button onClick={() => setIsEditing(null)} className="w-full bg-zinc-100 text-black py-4 rounded-2xl font-black uppercase tracking-widest text-sm">Cancel</button>
                )}
              </div>
            </form>
          </div>

          {/* List Section */}
          <div className="lg:col-span-2 space-y-4">
            {services.map((s) => (
              <div key={s.id} className="group border border-zinc-100 p-6 rounded-3xl flex items-center justify-between hover:border-black transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-zinc-100 rounded-2xl overflow-hidden">
                    <img src={s.gambar} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="" />
                  </div>
                  <div>
                    <h3 className="font-black uppercase tracking-tight">{s.nama}</h3>
                    <p className="text-xs text-zinc-400 font-bold">{s.harga}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => { setIsEditing(s.id); setFormData(s); }}
                    className="p-3 bg-zinc-50 text-black rounded-full hover:bg-black hover:text-white transition-all"
                  >
                    <Edit3 size={18} />
                  </button>
                  <button 
                    onClick={() => deleteService(s.id)}
                    className="p-3 bg-zinc-50 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-all"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminPage;