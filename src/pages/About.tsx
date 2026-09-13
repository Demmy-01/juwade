import { useDocumentTitle } from '@/hooks';

export function About() {
  useDocumentTitle('Our Story | JUWADE Luxury Horology');

  return (
    <div className="bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen">

      {/* EDITORIAL HERO */}
      <section className="w-full border-b border-surface-variant bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop py-space-xl lg:py-space-2xl">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="font-label-uppercase text-label-uppercase text-primary uppercase tracking-widest">
                OUR HERITAGE &amp; STORY
              </span>
            </div>
            <h1 className="font-display-hero text-headline-xl md:text-display-hero text-on-surface tracking-widest leading-none uppercase font-normal">
              Crafting World-Class Timepieces in Nigeria
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed pt-2 max-w-2xl">
              JUWADE was born from a vision to redefine luxury watchmaking in Africa. Combining bold design, premium materials, and precision engineering, we craft limited-edition timepieces designed to celebrate achievement, confidence, and culture.
            </p>
          </div>
        </div>
      </section>

      {/* BRAND MANIFESTO */}
      <section className="py-space-2xl bg-surface border-b border-surface-variant">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-surface-variant pb-8 lg:pb-0 lg:pr-8 flex flex-col justify-between">
              <div>
                <span className="font-label-uppercase text-label-uppercase text-primary tracking-widest uppercase block mb-4">
                  01 / THE VISION
                </span>
                <h4 className="font-technical-data text-technical-data text-secondary uppercase tracking-widest">
                  LUXURY WATCHMAKING • LAGOS, NIGERIA
                </h4>
              </div>
              <div className="hidden lg:block pt-12">
                <span className="font-technical-data text-technical-data text-on-surface-variant block">
                  ISO 3159 CHRONOMETER STANDARD COMPLIANT
                </span>
                <span className="font-technical-data text-technical-data text-secondary block mt-1">
                  DOCUMENTED ATELIER REF: #JUWADE-NG-2025
                </span>
              </div>
            </div>
            <div className="lg:col-span-8 pl-0 lg:pl-6 flex flex-col justify-center">
              <blockquote className="font-display-hero text-headline-xl lg:text-display-hero text-on-surface leading-tight uppercase mb-8">
                "WE CRAFT TIMEPIECES THAT CELEBRATE YOUR JOURNEY."
              </blockquote>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-secondary font-body-md text-body-md">
                <p>
                  Luxury is not about complexity; it is about authentic craftsmanship and timeless design. At JUWADE, we eliminate distraction to craft watches that reflect confidence, heritage, and precision.
                </p>
                <p>
                  Every Juwade watch is assembled with meticulous attention to detail, using cold-forged 316L stainless steel, scratch-resistant sapphire glass, and high-precision movements engineered to stand the test of time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIAL PILLARS */}
      <section className="py-space-2xl bg-surface-container-lowest border-b border-surface-variant">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <span className="font-label-uppercase text-label-uppercase text-primary tracking-widest uppercase block mb-2">
              Pillars of Excellence
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Master Horology &amp; Craftsmanship</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-surface-variant">
            <div className="border-r border-b border-surface-variant p-space-lg bg-surface-container-lowest">
              <span className="font-technical-data text-technical-data text-primary uppercase tracking-widest block mb-4">PILLAR I</span>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-3">Cold-Forged 316L</h3>
              <p className="font-body-sm text-body-sm text-secondary">
                Surgical grade steel casing with razor-brushed bevels and zero nickel release. Built to endure generations of daily wear.
              </p>
            </div>
            <div className="border-r border-b border-surface-variant p-space-lg bg-surface-container-lowest">
              <span className="font-technical-data text-technical-data text-primary uppercase tracking-widest block mb-4">PILLAR II</span>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-3">7-Layer AR Sapphire</h3>
              <p className="font-body-sm text-body-sm text-secondary">
                Double-domed anti-reflective sapphire glass eliminating optical glare under all lighting conditions.
              </p>
            </div>
            <div className="border-r border-b border-surface-variant p-space-lg bg-surface-container-lowest">
              <span className="font-technical-data text-technical-data text-primary uppercase tracking-widest block mb-4">PILLAR III</span>
              <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-3">Precision Movement</h3>
              <p className="font-body-sm text-body-sm text-secondary">
                High-accuracy caliber engineered to perform flawlessly in all environments with lifetime service guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ATELIER LOCATIONS */}
      <section className="py-space-xl bg-surface border-b border-surface-variant">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="font-label-uppercase text-label-uppercase text-primary tracking-widest uppercase block mb-4">
                02 / OUR ATELIERS
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-4">Where We Are</h2>
              <p className="font-body-md text-body-md text-secondary max-w-md">
                Visit us by appointment at any of our private atelier boutiques across Nigeria.
              </p>
            </div>
            <div className="space-y-4 font-technical-data text-technical-data text-on-surface-variant">
              <div className="p-6 bg-surface-container-lowest border border-surface-variant">
                <span className="block text-on-surface font-semibold mb-1">LAGOS</span>
                <span>Victoria Island, Lagos • By Appointment</span>
              </div>
              <div className="p-6 bg-surface-container-lowest border border-surface-variant">
                <span className="block text-on-surface font-semibold mb-1">ABUJA</span>
                <span>Maitama, Abuja • Private Suite</span>
              </div>
              <div className="p-6 bg-surface-container-lowest border border-surface-variant">
                <span className="block text-on-surface font-semibold mb-1">PORT HARCOURT</span>
                <span>GRA Phase 2 • Showroom Atelier</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-surface-container-low border-t border-surface-variant">
        <div className="w-full px-margin md:px-margin-desktop py-space-xl max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter-desktop mb-space-xl">
            <div className="space-y-4 md:col-span-1">
              <div className="font-display-hero text-headline-md text-on-surface tracking-widest uppercase">
                JUWADE
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Contemporary luxury watchmaking born in Nigeria. Dedicated to authentic craftsmanship, timeless style, and precision.
              </p>
            </div>
            <div>
              <span className="font-label-uppercase text-label-uppercase text-primary uppercase tracking-widest block mb-4">
                Explore Index
              </span>
              <ul className="space-y-2">
                <li><a className="text-on-surface-variant font-body-sm text-body-sm hover:text-on-surface transition-colors duration-200" href="/collections">Collections &amp; Editions</a></li>
                <li><a className="text-on-surface-variant font-body-sm text-body-sm hover:text-on-surface transition-colors duration-200" href="/about">Our Story &amp; Heritage</a></li>
                <li><a className="text-on-surface-variant font-body-sm text-body-sm hover:text-on-surface transition-colors duration-200" href="/#craftsmanship">Atelier Ethics</a></li>
                <li><a className="text-on-surface-variant font-body-sm text-body-sm hover:text-on-surface transition-colors duration-200" href="/about">Terms &amp; Guarantee</a></li>
              </ul>
            </div>
            <div>
              <span className="font-label-uppercase text-label-uppercase text-primary uppercase tracking-widest block mb-4">
                Boutiques &amp; Salons
              </span>
              <div className="space-y-3 font-technical-data text-technical-data text-on-surface-variant">
                <div>
                  <span className="block text-on-surface font-semibold">LAGOS</span>
                  <span>Victoria Island, Lagos • By Appointment</span>
                </div>
                <div>
                  <span className="block text-on-surface font-semibold">ABUJA</span>
                  <span>Maitama, Abuja • Private Suite</span>
                </div>
                <div>
                  <span className="block text-on-surface font-semibold">PORT HARCOURT</span>
                  <span>GRA Phase 2 • Showroom Atelier</span>
                </div>
              </div>
            </div>
            <div>
              <span className="font-label-uppercase text-label-uppercase text-primary uppercase tracking-widest block mb-4">
                Certification
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                Independently tested and certified under ISO 3159 chronometer guidelines.
              </p>
              <div className="font-technical-data text-technical-data text-primary">
                BOUTIQUE STATUS: OPEN • NIGERIAN DISPATCH ACTIVE
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-surface-variant flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-technical-data text-technical-data tracking-widest text-on-surface-variant">
              © 2025 JUWADE. ALL RIGHTS RESERVED. MADE IN NIGERIA.
            </p>
            <div className="flex items-center space-x-6 font-technical-data text-technical-data text-on-surface-variant">
              <span>LAT: 6.5244° N</span>
              <span>LON: 3.3792° E</span>
              <span className="text-primary">NIGERIA</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
