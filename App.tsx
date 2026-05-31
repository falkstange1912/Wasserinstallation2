import { Phone, MapPin, Droplet, Flame, Wrench, CheckCircle2, Wind } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Droplet className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-xl leading-tight">Detlef Lehnert</h1>
              <p className="text-xs text-slate-500 font-medium">Gas- u. Wasserinstallation</p>
            </div>
          </div>
          <a href="tel:053067757" className="hidden md:flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition shadow-sm">
            <Phone className="w-4 h-4" />
            05306 7757
          </a>
        </div>
      </header>

      {/* HERO SECTION MIT BILD */}
      <section 
        className="relative py-32 px-4 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1607472586893-edb57cb31422?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
      >
        {/* Dunkles Overlay für bessere Lesbarkeit */}
        <div className="absolute inset-0 bg-slate-900/75"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 font-semibold text-sm mb-6 border border-blue-400/30">
            Meisterbetrieb in Cremlingen
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-white">
            Ihr verlässlicher Partner für moderne Haustechnik
          </h2>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Professionelle Gas- und Wasserinstallationen, Heizungsbau, Klimaanlagen und Klempnerarbeiten. Wir sind vor Ort, wenn Sie uns brauchen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#kontakt" className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-500 transition shadow-lg hover:shadow-blue-600/30">
              <Phone className="w-5 h-5" />
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>

      {/* NEU: BILD-TEXT BEREICH */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-2xl transform translate-x-4 translate-y-4 opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Modernes Waschbecken" 
              className="rounded-2xl shadow-xl relative z-10 w-full object-cover h-[400px]"
            />
          </div>
          <div>
            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Erfahrung & Qualität</h3>
            <h4 className="text-3xl font-bold mb-6">Handwerk, auf das Sie sich verlassen können.</h4>
            <p className="text-slate-600 leading-relaxed mb-6 text-lg">
              Egal ob ein tropfender Wasserhahn, die komplette Sanierung Ihres Badezimmers oder die Installation einer modernen, energieeffizienten Heizungsanlage – wir legen größten Wert auf saubere Ausführung und langlebige Ergebnisse.
            </p>
            <ul className="space-y-3">
              {[
                "Regional verwurzelt in Cremlingen", 
                "Persönlicher & direkter Ansprechpartner", 
                "Fachgerechte, saubere Handwerksarbeit"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
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
            <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Unser Fachgebiet</h3>
            <h4 className="text-3xl md:text-4xl font-bold">Unsere Leistungen im Überblick</h4>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Droplet className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="text-xl font-bold mb-3">Gas- & Wasserinstallation</h4>
              <p className="text-slate-600 leading-relaxed">Fachgerechte Installation, Reparatur und Wartung Ihrer Sanitär- und Gasanlagen für höchste Sicherheit im ganzen Haus.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Flame className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className="text-xl font-bold mb-3">Heizungsbau</h4>
              <p className="text-slate-600 leading-relaxed">Moderne und energieeffiziente Heizsysteme. Wir begleiten Sie von der Beratung über den Einbau bis zur regelmäßigen Wartung.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div className="bg-teal-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Wind className="w-8 h-8 text-teal-600" />
              </div>
              <h4 className="text-xl font-bold mb-3">Klima & Klempnerarbeiten</h4>
              <p className="text-slate-600 leading-relaxed">Wir sorgen für das perfekte Raumklima mit modernen Klimaanlagen und kümmern uns zuverlässig um alle anfallenden Klempnerarbeiten.</p>
            </div>
          </div>
        </div>
      </section>

      {/* KONTAKT / FOOTER */}
      <section id="kontakt" className="bg-slate-900 text-white py-24 px-4 relative">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Wir sind für Sie da.</h3>
            <p className="text-slate-400 mb-10 text-lg">Haben Sie ein konkretes Anliegen, einen Notfall oder planen Sie eine Modernisierung? Rufen Sie uns direkt an.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-blue-600/20 p-4 rounded-xl border border-blue-500/20">
                  <Phone className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Telefonische Beratung</p>
                  <p className="font-bold text-2xl mb-1 hover:text-blue-400 transition cursor-pointer">05306 7757</p>
                  <p className="font-bold text-2xl text-slate-300 hover:text-blue-400 transition cursor-pointer">05306 7859</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-blue-600/20 p-4 rounded-xl border border-blue-500/20">
                  <MapPin className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Betriebssitz</p>
                  <p className="font-bold text-xl">Hauptstr. 33</p>
                  <p className="font-medium text-lg text-slate-300">38162 Cremlingen</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 text-center shadow-2xl">
            <h4 className="text-2xl font-bold mb-3 text-slate-900">Jetzt direkt anrufen</h4>
            <p className="text-slate-500 mb-8">Klicken Sie auf eine der Nummern, um sofort vom Smartphone aus verbunden zu werden.</p>
            <div className="space-y-4">
              <a href="tel:053067757" className="flex justify-center items-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition text-lg shadow-md hover:shadow-lg">
                <Phone className="w-5 h-5" />
                05306 7757
              </a>
              <a href="tel:053067859" className="flex justify-center items-center gap-2 w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-4 rounded-xl transition text-lg border border-slate-300 shadow-sm hover:shadow-md">
                <Phone className="w-5 h-5" />
                05306 7859
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mini-Footer */}
      <footer className="bg-slate-950 text-slate-500 py-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Detlef Lehnert Gas- u. Wasserinstallation. Alle Rechte vorbehalten.</p>
      </footer>
    </div>
  );
}
