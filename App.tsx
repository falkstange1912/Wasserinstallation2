import { Menu, Phone, Droplet, ArrowRight, CheckCircle2, Star, Mail } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary-500 text-white p-2 flex items-center justify-center">
            <Droplet className="w-5 h-5" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-zinc-900">
            AQUA<span className="text-primary-500">PRO</span>
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#leistungen" className="text-sm font-medium text-zinc-600 hover:text-primary-500 transition-colors">Leistungen</a>
          <a href="#ueber-uns" className="text-sm font-medium text-zinc-600 hover:text-primary-500 transition-colors">Über uns</a>
          <a href="#referenzen" className="text-sm font-medium text-zinc-600 hover:text-primary-500 transition-colors">Referenzen</a>
        </nav>

        <div className="flex items-center gap-4">
          <a 
            href="tel:+49123456789" 
            className="hidden md:flex items-center gap-2 text-sm font-bold text-zinc-900 hover:text-primary-500 transition-colors"
          >
            <Phone className="w-4 h-4" />
            0800 123 456 78
          </a>
          <a 
            href="#kontakt" 
            className="hidden md:inline-flex bg-primary-500 hover:bg-primary-600 text-white px-5 py-2.5 text-sm font-medium transition-colors"
          >
            Angebot anfordern
          </a>
          <button className="md:hidden text-zinc-900 p-2">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-zinc-900 text-white">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=3270&auto=format&fit=crop" 
          alt="Modern plumbing pipes" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Subtle Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider uppercase text-zinc-200">24/7 Notdienst Aktiv</span>
          </div>

          {/* Hook */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
            Wasserhahn tropft? <br />
            <span className="text-primary-500">Rohrbruch?</span> Wir sind sofort zur Stelle.
          </h1>
          
          {/* Promise of Value */}
          <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-xl leading-relaxed">
            Zuverlässige Wasserinstallationen, Reparaturen und Sanierungen für Ihr Zuhause. Transparent, meisterhaft und ohne versteckte Kosten.
          </p>
          
          {/* Action */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#kontakt" 
              className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 text-base font-medium transition-all group"
            >
              Jetzt Termin vereinbaren
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="tel:+49123456789" 
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-8 py-4 text-base font-medium transition-all"
            >
              0800 123 456 78 anrufen
            </a>
          </div>
        </div>
      </div>
      
      {/* Visual Accent (inspired by image 2) */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3 aspect-square bg-primary-500 mix-blend-multiply opacity-80 blur-3xl rounded-full"></div>
    </section>
  );
}

export function ValuePromise() {
  return (
    <section id="leistungen" className="py-0">
      {/* Top Dark Bar - The Process Hooks */}
      <div className="bg-zinc-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            
            {/* Step 01 */}
            <div className="flex items-start gap-4">
              <div className="font-display text-6xl leading-none font-bold text-outline opacity-40">
                01.
              </div>
              <div className="pt-2">
                <div className="w-12 h-0.5 bg-primary-500 mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Unverbindlich <br />Kontaktieren</h3>
                <p className="text-sm text-zinc-400">Rufen Sie uns an oder nutzen Sie unser Anfrageformular.</p>
              </div>
            </div>

            {/* Step 02 */}
            <div className="flex items-start gap-4">
              <div className="font-display text-6xl leading-none font-bold text-outline opacity-40">
                02.
              </div>
              <div className="pt-2">
                <div className="w-12 h-0.5 bg-primary-500 mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Besprechung des <br />Vorhabens</h3>
                <p className="text-sm text-zinc-400">Wir analysieren Ihr Problem vor Ort und beraten Sie.</p>
              </div>
            </div>

            {/* Step 03 */}
            <div className="flex items-start gap-4">
              <div className="font-display text-6xl leading-none font-bold text-outline opacity-40">
                03.
              </div>
              <div className="pt-2">
                <div className="w-12 h-0.5 bg-primary-500 mb-4"></div>
                <h3 className="text-xl font-bold mb-2">Fachgerechte <br />Umsetzung</h3>
                <p className="text-sm text-zinc-400">Schnelle, saubere und meisterhafte Installation.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Details Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Image (similar to the construction worker image in the reference) */}
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1542013936693-884638332954?q=80&w=3387&auto=format&fit=crop" 
                alt="Installateur bei der Arbeit" 
                className="w-full h-auto aspect-[4/5] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary-500 text-white p-8 max-w-xs shadow-xl hidden md:block">
                <p className="font-display text-3xl font-bold mb-2">24h</p>
                <p className="text-sm font-medium">Notdienst für akute Wasser- und Rohrschäden.</p>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4 block">Zertifizierter Fachbetrieb</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
                Unser Fachbereich: <br /> Wasser & Sanitär
              </h2>
              
              <div className="prose prose-lg text-zinc-600 mb-10">
                <p className="mb-4">
                  Wir von AquaPro sind darauf spezialisiert, Eigenheimbesitzern und Unternehmen bei allen Belangen rund um Wasser und Sanitär zu helfen. 
                </p>
                <p>
                  Egal ob die Reparatur eines Rohrbruchs, die Installation neuer Leitungen für Ihr Traumbad oder der Austausch der Heizungsanlage – unsere langjährige Erfahrung macht uns zum idealen Partner in allen Angelegenheiten.
                </p>
              </div>

              <ul className="space-y-4">
                {[
                  "Rohrbrüche & Wasserschäden beheben",
                  "Neuinstallation von Sanitäranlagen",
                  "Badrenovierung & Modernisierung",
                  "Heizungswartung und Installation"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-zinc-800 font-medium pb-2 border-b border-zinc-100 last:border-0">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export function Proof() {
  return (
    <section id="referenzen" className="py-24 bg-zinc-50 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-zinc-900 mb-4">
            Vertrauen durch Erfahrung
          </h2>
          <p className="text-zinc-600">
            Wir lassen unsere Arbeit für sich selbst sprechen. Hunderte zufriedene Kunden vertrauen auf unsere Expertise im Sanitär- und Heizungsbau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Stat 1 */}
          <div className="bg-white p-8 border border-zinc-200 text-center">
            <div className="font-display text-5xl font-bold text-zinc-900 mb-2">15+</div>
            <div className="text-sm font-semibold tracking-wider uppercase text-primary-600">Jahre Erfahrung</div>
          </div>
          
          {/* Stat 2 */}
          <div className="bg-white p-8 border border-zinc-200 text-center">
            <div className="font-display text-5xl font-bold text-zinc-900 mb-2">500+</div>
            <div className="text-sm font-semibold tracking-wider uppercase text-primary-600">Projekte</div>
          </div>

          {/* Testimonial */}
          <div className="bg-zinc-900 text-white p-8 lg:col-span-2 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute right-0 top-0 text-[120px] leading-none font-serif text-white/5 opacity-50">&quot;</div>
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary-500 text-primary-500" />
              ))}
            </div>
            <p className="text-lg italic text-zinc-300 mb-6 relative z-10">
              "Schnell, kompetent und sehr freundlich. Nach unserem Wasserrohrbruch war das Team von AquaPro innerhalb von 45 Minuten vor Ort und hat Schlimmeres verhindert. Absolut zu empfehlen!"
            </p>
            <div>
              <p className="font-bold text-white">Familie Weber</p>
              <p className="text-sm text-zinc-400">Einfamilienhaus, München</p>
            </div>
          </div>
        </div>
        
        {/* Logos (Conceptual) */}
        <div className="mt-20 border-t border-zinc-200 pt-10">
          <p className="text-center text-sm font-semibold text-zinc-500 tracking-wider uppercase mb-8">Zertifizierte Partner von</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
            {/* Generic placeholder SVGs for Brand Logos */}
            <div className="font-display font-bold text-xl text-zinc-400 flex items-center gap-2">
              <span className="w-6 h-6 rounded bg-zinc-300 inline-block"></span>
              Grohe
            </div>
            <div className="font-display font-bold text-xl text-zinc-400 flex items-center gap-2">
              <span className="w-4 h-4 rotate-45 bg-zinc-300 inline-block"></span>
              Hansgrohe
            </div>
            <div className="font-display font-bold text-xl text-zinc-400 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-zinc-300 inline-block"></span>
              Geberit
            </div>
            <div className="font-display font-bold text-xl text-zinc-400 flex items-center gap-2">
              <span className="w-8 h-4 rounded-sm bg-zinc-300 inline-block"></span>
              Villeroy & Boch
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="kontakt" className="bg-primary-500 py-24 relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20 hidden lg:block">
        <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#ffffff" d="M42.7,-73.4C55.9,-65.4,67.7,-53.4,76.6,-40.1C85.5,-26.8,91.5,-12.1,89.2,1.8C86.9,15.7,76.3,28.8,66.1,40.6C55.9,52.4,46.1,62.9,33.9,71.2C21.7,79.5,7.1,85.6,-7.1,84.9C-21.3,84.2,-34.9,76.7,-47.5,67.8C-60.1,58.9,-71.7,48.5,-79.8,35.4C-87.9,22.3,-92.5,6.5,-90.1,-8.2C-87.7,-22.9,-78.3,-36.5,-67.2,-47.6C-56.1,-58.7,-43.3,-67.3,-30.1,-73.6C-16.9,-79.9,-3.3,-83.9,10.6,-82.4C24.5,-80.9,38.6,-73.9,42.7,-73.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-zinc-900 mb-6 leading-tight">
              Wir lassen Sie nicht <br /> im Regen stehen.
            </h2>
            <p className="text-xl text-zinc-800 mb-8 max-w-lg">
              Rufen Sie uns direkt an oder schreiben Sie uns eine Nachricht. Wir melden uns umgehend bei Ihnen zurück.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+49123456789" 
                className="inline-flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 text-base font-medium transition-colors"
              >
                <Phone className="w-5 h-5" />
                0800 123 456 78
              </a>
              <a 
                href="mailto:info@aquapro.de" 
                className="inline-flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 text-zinc-900 border border-zinc-900/10 px-8 py-4 text-base font-medium transition-colors"
              >
                <Mail className="w-5 h-5" />
                Nachricht senden
              </a>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="bg-white p-8 md:p-10 shadow-2xl">
            <h3 className="font-display text-2xl font-bold text-zinc-900 mb-6">Kostenlose Anfrage</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 mb-1">Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow text-zinc-900" placeholder="Max Mustermann" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 mb-1">Telefon</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow text-zinc-900" placeholder="0123 456789" />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-zinc-700 mb-1">Was benötigen Sie?</label>
                <select id="service" className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow text-zinc-900">
                  <option>Wasserrohrbruch / Notfall</option>
                  <option>Badrenovierung</option>
                  <option>Heizungsinstallation</option>
                  <option>Sonstige Reparatur</option>
                </select>
              </div>
              <button 
                className="w-full bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-4 text-base font-medium transition-colors flex items-center justify-center gap-2 group mt-2"
              >
                Anfrage senden
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 text-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white">
            <span className="font-display font-bold text-xl tracking-tight">
              AQUA<span className="text-primary-500">PRO</span>
            </span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Impressum</a>
            <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
            <a href="#" className="hover:text-white transition-colors">AGB</a>
          </div>
          
          <div>
            &copy; {new Date().getFullYear()} AquaPro Sanitärtechnik. Alle Rechte vorbehalten.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans selection:bg-primary-500 selection:text-white">
      <Header />
      <Hero />
      <ValuePromise />
      <Proof />
      <CTA />
      <Footer />
    </div>
  );
}
