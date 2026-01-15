import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2, Minus, Sparkles } from 'lucide-react';
import contactData from '../data/contact.json';

const AIChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Halo. Ada yang bisa saya bantu jelaskan terkait tugas atau proyek Anda hari ini?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const context = messages.slice(-3).map(m => ({ role: m.role, content: m.content }));
      const response = await fetch("https://skimatt.rahmatyoung10.workers.dev/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "google/gemini-2.0-flash-001",
          messages: [
            { role: "system", content: "Kamu adalah Yu-Assistant dari helps.yu. Singkat, padat, profesional. Jika user butuh eksekusi tugas, arahkan ke layanan kami." },
            ...context,
            { role: "user", content: input }
          ],
        }),
      });

      const result = await response.json();
      const answer = result.choices?.[0]?.message?.content || "Maaf, silakan coba lagi.";
      setMessages(prev => [...prev, { role: 'assistant', content: answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Koneksi terputus. Hubungi kami via WA jika mendesak." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[999] font-inter">
      {/* Trigger Button - Minimal Circle */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-12 h-12 bg-white border border-zinc-100 flex items-center justify-center rounded-full hover:border-black transition-all duration-500 shadow-sm"
        >
          <Sparkles size={18} className="text-zinc-400 group-hover:text-black transition-colors" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-black rounded-full border-2 border-white"></span>
        </button>
      )}

      {/* Chat Window - Slim & Transparent */}
      {isOpen && (
        <div className="w-[320px] md:w-[360px] bg-white/80 backdrop-blur-xl rounded-[32px] border border-zinc-100 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
          
          {/* Header - Super Clean */}
          <div className="px-6 py-4 border-b border-zinc-50 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black">Yu-AI</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-black transition-colors">
              <Minus size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-[350px] overflow-y-auto px-6 py-6 space-y-6 no-scrollbar">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] text-xs leading-relaxed font-medium ${
                  msg.role === 'user' 
                  ? 'text-black text-right' 
                  : 'text-zinc-500 border-l border-zinc-200 pl-4 py-1'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <Loader2 size={12} className="animate-spin text-zinc-300" />
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-zinc-50/50">
            <div className="relative flex items-center bg-white border border-zinc-100 rounded-2xl px-4 py-3 group focus-within:border-black transition-all">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask helps.yu..."
                className="w-full bg-transparent text-[11px] focus:outline-none font-medium placeholder:text-zinc-300"
              />
              <button 
                onClick={handleSend}
                className="text-zinc-300 hover:text-black transition-colors disabled:opacity-30"
                disabled={isLoading}
              >
                <Send size={14} />
              </button>
            </div>
            <div className="mt-3 flex justify-center">
               <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-200">Intelligence by helps.yu</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatBubble;