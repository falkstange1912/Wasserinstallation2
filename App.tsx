import { MapPin, Phone, CheckCircle, Wrench, Clock, Droplets, Zap, ShieldCheck, ArrowRight, ChevronRight } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050A12] text-stone-300 font-sans selection:bg-[#B87333] selection:text-white relative overflow-hidden">
      
      {/* Subtiler Blueprint Grid Hintergrund */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ backgroundImage: 'linear-gradient(#111827 1px, transparent 1px), linear-gradient(90deg, #111827 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.6 }}></div>

      {/* HEADER */}
      <header className="fixed top-0 w-full z-50 bg-[#050A12]/90 backdrop-blur-xl border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 border border-[#B87333] flex items-center justify-center">
              <Droplets className="w-4 h-4 text-[#B87333]" />
            </div>
            <h1 className="text-xl font-medium tracking-[0.25em] uppercase text-white">Lehnert</h1>
          </div>
          <nav className="hidden md:flex gap-10 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">
            <a href="#leistungen" className="hover:text-[#B87333] transition-colors">Leistungen</a>
            <a href="#projekte" className="hover:text-[#B87333] transition-colors">Projekte</a>
            <a href="#kontakt" className="hover:text-[#B87333] transition-colors">Kontakt</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-40 pb-32 px-6 border-b border-[#1E293B] z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#B87333] text-xs font-semibold uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#B87333]"></span>
              Meisterbetrieb Cremlingen
            </span>
            <h2 className="text-5xl md:text-7xl font-light mb-8 tracking-tight text-white leading-tight">
              Präzision in <br />
              <span className="font-bold">Sanitär & Heizung.</span>
            </h2>
            <p className="text-stone-400 text-lg mb-12 max-w-lg leading-relaxed font-light">
              Wir transformieren technische Komplexität in ein stressfreies, perfektes Wohlfühlerlebnis. Ingenieurhafte Exzellenz für Ihr Zuhause.
            </p>
            <div className="flex gap-6">
              <a href="#kontakt" className="flex items-center gap-3 bg-[#B87333] text-white px-8 py-4 font-semibold uppercase tracking-[0.15em] text-xs hover:bg-[#9c612b] transition-colors">
                Projekt starten <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Architektonisches Bild */}
          <div className="relative">
            <div className="absolute inset-0 border border-[#1E293B] translate-x-4 translate-y-4 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Minimalistisches, modernes Badezimmer" 
              className="w-full h-[600px] object-cover grayscale-[20%] contrast-125"
            />
            <div className="absolute bottom-0 left-0 bg-[#050A12] p-6 border-t border-r border-[#1E293B]">
              <p className="text-[#B87333] text-xs font-semibold uppercase tracking-[0.2em] mb-1">Materialität</p>
              <p className="text-white text-sm tracking-wide">Fokus auf Ästhetik</p>
            </div>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN - Mathematisch präzises Grid */}
      <section id="leistungen" className="py-32 px-6 z-10 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-light tracking-tight text-white mb-4">Technische <span className="font-bold">Expertise</span></h2>
            <p className="text-stone-400 tracking-wide">Kompromisslose Qualität in der Umsetzung.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-[#1E293B] border border-[#1E293B]">
            {[
              { icon: Droplets, title: "Sanitärtechnik", desc: "Präzise Installation von hochwertigen Armaturen und Rohrleitungssystemen. Maßgeschneiderte Badarchitektur." },
              { icon: Zap, title: "Heizungssysteme", desc: "Innovative, energieeffiziente Wärmelösungen. Von der Wärmepumpe bis zur smarten Steuerungstechnik." },
              { icon: ShieldCheck, title: "Wartung & Diagnostik", desc: "Systematische Inspektionen und schnelle Fehlerbehebung für den kompromisslosen Schutz Ihrer Infrastruktur." }
            ].map((item, i) => (
              <div key={i} className="bg-[#050A12] p-12 hover:bg-[#0A101D] transition-colors group">
                <div className="mb-12 border-b border-[#1E293B] pb-8 flex justify-between items-center">
                  <item.icon className="w-8 h-8 text-[#B87333]" />
                  <span className="text-[#1E293B] font-mono text-xl group-hover:text-[#B87333]/30 transition-colors">0{i+1}</span>
                </div>
                <h3 className="font-semibold text-xl mb-4 tracking-wide text-white">{item.title}</h3>
                <p className="text-stone-400 text-sm leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL STORYTELLING */}
      <section id="projekte" className="py-32 border-y border-[#1E293B] relative z-10 overflow-hidden bg-[#0A101D]">
         <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-0">
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Kupferrohre und Armaturen" 
              className="w-full h-[500px] object-cover grayscale-[30%] border border-[#1E293B]"
            />
            <div className="p-16 md:p-24 flex flex-col justify-center border border-[#1E293B] border-t-0 md:border-t md:border-l-0 bg-[#050A12]">
              <h3 className="text-3xl font-light text-white mb-6">Perfektion im <span className="font-bold">Detail</span></h3>
              <p className="text-stone-400 leading-relaxed font-light mb-8">
                Wir überlassen nichts dem Zufall. Jede Verschraubung, jede Leitungsführung wird mit höchster handwerklicher Präzision ausgeführt, um Langlebigkeit und makellose Ästhetik zu garantieren.
              </p>
              <a href="#kontakt" className="flex items-center gap-2 text-[#B87333] uppercase text-xs tracking-[0.2em] font-semibold hover:text-white transition-colors">
                Unsere Referenzen <ChevronRight className="w-4 h-4" />
              </a>
            </div>
         </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" className="py-32 px-6 max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-light mb-12 tracking-tight text-white">System <span className="font-bold">initiieren.</span></h2>
        <div className="border border-[#1E293B] p-16 bg-[#050A12]/80 backdrop-blur-sm relative">
          {/* Eck-Akzente */}
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#B87333]"></div>
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#B87333]"></div>
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#B87333]"></div>
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#B87333]"></div>

          <p className="text-stone-400 mb-8 uppercase tracking-[0.3em] text-xs font-semibold">Direkte Verbindung</p>
          <div className="flex items-center justify-center gap-6 text-3xl md:text-4xl font-light tracking-tight text-white">
            <Phone className="w-8 h-8 text-[#B87333]" />
            <span>05306 7757</span>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center text-stone-600 text-[10px] uppercase tracking-[0.3em] border-t border-[#1E293B] relative z-10 bg-[#050A12]">
        © {new Date().getFullYear()} Installationsbetrieb Lehnert // Cremlingen // Engineering Excellence
      </footer>
    </div>
  );
}
