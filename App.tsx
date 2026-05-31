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

      {/* HERO SECTION */}
      <section className="bg-slate-900 text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/20"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Ihr verlässlicher Partner für Haustechnik in Cremlingen</h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Professionelle Gas- und Wasserinstallationen, Heizungsbau, Klimaanlagen und Klempnerarbeiten. Wir sind vor Ort, wenn Sie uns brauchen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#kontakt" className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-blue-500 transition shadow-lg">
              <Phone className="w-5 h-5" />
              Jetzt anrufen
            </a>
          </div>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">Unser Fachgebiet</h3>
          <h4 className="text-3xl md:text-4xl font-bold">Unsere Leistungen im Überblick</h4>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Droplet className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold mb-3">Gas- & Wasserinstallation</h4>
            <p className="text-slate-600 leading-relaxed">Fachgerechte Installation, Reparatur und Wartung Ihrer Sanitär- und Gasanlagen für höchste Sicherheit im ganzen Haus.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="bg-orange-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Flame className="w-8 h-8 text-orange-500" />
            </div>
            <h4 className="text-xl font-bold mb-3">Heizungsbau</h4>
            <p className="text-slate-600 leading-relaxed">Moderne und energieeffiziente Heizsysteme. Wir begleiten Sie von der Beratung über den Einbau bis zur regelmäßigen Wartung.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition">
            <div className="bg-teal-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Wind className="w-8 h-8 text-teal-600" />
            </div>
            <h4 className="text-xl font-bold mb-3">Klima & Klempnerarbeiten</h4>
            <p className="text-slate-600 leading-relaxed">Wir sorgen für das perfekte Raumklima mit modernen Klimaanlagen und kümmern uns zuverlässig um alle anfallenden Klempnerarbeiten.</p>
          </div>
        </div>
      </section>

      {/* VORTEILE */}
      <section className="bg-white py-20 px-4 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10">Warum Detlef Lehnert?</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Regional verwurzelt in Cremlingen", 
              "Persönlicher & direkter Ansprechpartner", 
              "Schnelle Reaktionszeiten bei Notfällen", 
              "Fachgerechte, saubere Handwerksarbeit"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-slate-50 p-5 rounded-xl border border-slate-100">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT / FOOTER */}
      <section id="kontakt" className="bg-slate-900 text-white py-24 px-4">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Wir sind für Sie da.</h3>
            <p className="text-slate-400 mb-10 text-lg">Haben Sie ein konkretes Anliegen, einen Notfall oder planen Sie eine Modernisierung? Rufen Sie uns direkt an.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-blue-600/20 p-4 rounded-xl">
                  <Phone className="w-7 h-7 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Telefonische Beratung</p>
                  <p className="font-bold text-2xl mb-1">05306 7757</p>
                  <p className="font-bold text-2xl text-slate-300">05306 7859</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="bg-blue-600/20 p-4 rounded-xl">
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
          
          <div className="bg-slate-800 p-8 md:p-10 rounded-2xl border border-slate-700 text-center shadow-xl">
            <h4 className="text-2xl font-bold mb-3">Jetzt direkt anrufen</h4>
            <p className="text-slate-400 mb-8">Klicken Sie auf eine der Nummern, um sofort vom Smartphone aus verbunden zu werden.</p>
            <div className="space-y-4">
              <a href="tel:053067757" className="flex justify-center items-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition text-lg">
                <Phone className="w-5 h-5" />
                05306 7757 anrufen
              </a>
              <a href="tel:053067859" className="flex justify-center items-center gap-2 w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-4 rounded-xl transition text-lg border border-slate-600">
                <Phone className="w-5 h-5" />
                05306 7859 anrufen
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
