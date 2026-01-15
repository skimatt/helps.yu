import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Loader2, Minus, Sparkles } from 'lucide-react';

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
            { role: "system", content: "Kamu adalah Yu-Assistant dari helps.yu. Singkat, padat, profesional." },
            ...context,
            { role: "user", content: input }
          ],
        }),
      });

      const result = await response.json();
      const answer = result.choices?.[0]?.message?.content || "Maaf, silakan coba lagi.";
      setMessages(prev => [...prev, { role: 'assistant', content: answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Koneksi terputus." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    /* FIX 1: Z-INDEX diturunkan sedikit (z-[80]) agar Navbar (z-[100]) tetap di atasnya */
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[80] font-inter flex flex-col items-end">
      
      {/* Chat Window Container */}
      <div 
        className={`
          mb-4 w-[280px] sm:w-[320px] md:w-[360px] bg-white/90 backdrop-blur-xl rounded-[32px] border border-zinc-100 shadow-2xl overflow-hidden
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-bottom-right
          ${isOpen 
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 scale-90 translate-y-10 pointer-events-none'
          }
        `}
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-50 flex items-center justify-between bg-white/50">
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 bg-black rounded-full"></div>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-black">Yu-AI</span>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-zinc-300 hover:text-black transition-colors cursor-pointer p-1">
            <Minus size={18} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="h-[300px] md:h-[350px] overflow-y-auto px-6 py-6 space-y-6 no-scrollbar">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[90%] text-[11px] md:text-xs leading-relaxed font-medium ${
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
              className="text-zinc-300 hover:text-black transition-colors disabled:opacity-30 cursor-pointer"
              disabled={isLoading}
            >
              <Send size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-12 h-12 bg-black flex items-center justify-center rounded-full hover:scale-110 active:scale-95 transition-all duration-500 shadow-xl shadow-black/10 cursor-pointer overflow-hidden z-[81]"
      >
        <div className="relative w-full h-full flex items-center justify-center">
            <Sparkles 
                size={18} 
                className={`text-white absolute transition-all duration-500 ${isOpen ? 'opacity-0 scale-0 rotate-90' : 'opacity-100 scale-100 rotate-0'}`} 
            />
            <X 
                size={18} 
                className={`text-white absolute transition-all duration-500 ${isOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 -rotate-90'}`} 
            />
        </div>
      </button>
    </div>
  );
};

export default AIChatBubble;