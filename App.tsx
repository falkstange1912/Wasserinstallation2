import { Phone, MapPin, Droplet, Flame, CheckCircle2, Wind } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* HEADER (Handy-optimiert) */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Droplet className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg md:text-xl leading-tight">Detlef Lehnert</h1>
              <p className="text-[10px] md:text-xs text-slate-500 font-medium uppercase tracking-wider">Gas- & Wasserinstallation</p>
            </div>
          </div>
          {/* Sichtbar auf Handy & Desktop */}
          <a href="tel:053067757" className="flex items-center justify-center bg-blue-100 text-blue-700 w-10 h-10 md:w-auto md:h-auto md:px-5 md:py-2.5 rounded-full md:rounded-md font-semibold hover:bg-blue-200 transition">
            <Phone className="w-5 h-5 md:w-4 md:h-4 md:mr-2" />
            <span className="hidden md:inline">05306 7757</span>
          </a>
        </div>
      </header>

      {/* HERO SECTION (Handy-optimiert: Knackig & Visuell) */}
      <section 
        className="relative min-h-[75vh] flex flex-col justify-center px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607472586893-edb57cb31422?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
      >
        {/* Weicherer Farbverlauf, damit das Bild oben besser sichtbar bleibt */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900/95"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10 w-full mt-8">
          
          {/* Trust-Badge */}
          <div className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-slate-800/80 text-blue-300 font-medium text-xs sm:text-sm mb-8 border border-slate-700 backdrop-blur-md shadow-lg">
            <MapPin className="w-3.5 h-3.5" />
            Direkt aus Cremlingen
          </div>
          
          {/* Knallharte, kurze Headline */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 tracking-tight text-white leading-[1.1]">
            Wasser. Wärme.<br/> <span className="text-blue-500">Handwerk.</span>
          </h2>
          
          {/* Schnelle Bullet-Points statt Fließtext */}
          <div className="flex flex-col items-center gap-3 mb-10 text-sm md:text-base font-medium text-slate-200">
            <div className="flex items-center gap-2">
               <CheckCircle2 className="w-5 h-5 text-blue-500"/> 
               <span>Zuverlässige Installation & Reparatur</span>
            </div>
            <div className="flex items-center gap-2">
               <CheckCircle2 className="w-5 h-5 text-blue-500"/> 
               <span>Heizung, Sanitär & Klima</span>
            </div>
          </div>
          
          {/* Riesen-Button für den Daumen */}
          <div className="px-2">
            <a href="#kontakt" className="flex justify-center items-center gap-3 w-full sm:w-auto mx-auto max-w-sm bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 transition shadow-[0_0_20px_rgba(37,99,235,0.4)]">
              <Phone className="w-6 h-6 animate-pulse" />
              Notdienst & Kontakt
            </a>
          </div>
          
        </div>
      </section>

      {/* BILD-TEXT BEREICH */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform translate-x-3 translate-y-3 opacity-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Modernes Waschbecken" 
              className="rounded-2xl shadow-xl relative z-10 w-full object-cover h-[350px] md:h-[400px]"
            />
          </div>
          <div>
            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Erfahrung & Qualität</h3>
            <h4 className="text-3xl font-bold mb-6 leading-tight">Handwerk, auf das Sie sich verlassen können.</h4>
            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              Egal ob ein tropfender Wasserhahn, die Sanierung Ihres Badezimmers oder die Installation einer modernen Heizungsanlage – wir legen größten Wert auf saubere Ausführung und langlebige Ergebnisse.
            </p>
            <ul className="space-y-4">
              {[
                "Regional verwurzelt in der Gemeinde", 
                "Persönlicher Ansprechpartner", 
                "Saubere & pünktliche Ausführung"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="bg-slate-100 py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Fachgebiet</h3>
            <h4 className="text-3xl font-bold">Unsere Leistungen</h4>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="bg-blue-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Droplet className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-3">Gas- & Wasser</h4>
              <p className="text-slate-600 leading-relaxed">Installation, Reparatur und Wartung Ihrer Sanitär- und Gasanlagen für höchste Sicherheit.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="bg-orange-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Flame className="w-7 h-7 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold mb-3">Heizungsbau</h4>
              <p className="text-slate-600 leading-relaxed">Energieeffiziente Heizsysteme. Von der Beratung über den Einbau bis zur Wartung.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="bg-teal-50 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Wind className="w-7 h-7 text-teal-600" />
              </div>
              <h4 className="text-xl font-bold mb-3">Klima & Klempner</h4>
              <p className="text-slate-600 leading-relaxed">Perfektes Raumklima mit modernen Anlagen und zuverlässige Klempnerarbeiten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT / FOOTER */}
      <section id="kontakt" className="bg-slate-900 text-white py-20 px-4 relative">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h3 className="text-3xl font-bold mb-6">Wir sind für Sie da.</h3>
            <p className="text-slate-400 mb-10 text-lg">Ein konkretes Anliegen oder ein Notfall? Rufen Sie uns direkt an.</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-5 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <a href="tel:053067757" className="block font-bold text-xl hover:text-blue-400 transition">05306 7757</a>
                  <a href="tel:053067859" className="block font-bold text-xl text-slate-300 hover:text-blue-400 transition mt-1">05306 7859</a>
                </div>
              </div>
              
              <div className="flex items-center gap-5 bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                <div className="bg-blue-600/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="font-bold text-lg">Hauptstr. 33</p>
                  <p className="text-slate-300">38162 Cremlingen</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center shadow-xl">
            <h4 className="text-2xl font-bold mb-3 text-slate-900">Jetzt anrufen</h4>
            <p className="text-slate-500 mb-6 text-sm">Direkt vom Smartphone aus verbinden lassen.</p>
            <div className="space-y-3">
              <a href="tel:053067757" className="flex justify-center items-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition shadow-md">
                <Phone className="w-5 h-5" />
                05306 7757
              </a>
              <a href="tel:053067859" className="flex justify-center items-center gap-2 w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-4 rounded-xl transition border border-slate-300">
                <Phone className="w-5 h-5" />
                05306 7859
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mini-Footer */}
      <footer className="bg-slate-950 text-slate-600 py-6 text-center text-xs">
        <p>© {new Date().getFullYear()} Detlef Lehnert Gas- u. Wasserinstallation.</p>
      </footer>
    </div>
  );
}
