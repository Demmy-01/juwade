import { useState } from 'react';
import { useDocumentTitle } from '@/hooks';

export function Home() {
  useDocumentTitle('JUWADE');

  const [selectedProduct, setSelectedProduct] = useState<null | {
    title: string;
    edition: string;
    calibre: string;
    price: string;
    image: string;
    desc: string;
  }>(null);

  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const products = [
    {
      id: '01',
      title: 'Juwade Bauhaus Chrono',
      type: '01 // CHRONOGRAPH',
      tag: 'LIMITED TO 50 PIECES',
      tagColor: 'text-primary',
      calibre: 'Automatic Calibre J-04 • 42h Reserve',
      price: '₦2,175,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi7IrOB4GW9N3jM8za1vfosZ24pgUNocRk4Frs4g7evIbtnUMh1xqdetxYzkcPyVilEb79SAheGvBZsDMS-zQd82gVLJUqboP0sGqf-im3zPt8Hs4AJR7ebl4hHZLczCMWq1vkODfVp4FErjEdlEHFYPPbEZOUdRDkjUOoav-YUA2J_ZTFPuldv32DnH0vG17bdpmSj4-EyLUh3k5y8dKcz-aOh4jUeUYVBRd34eSM9x6BC4qRl1RRmQ',
      desc: 'Elegant minimalist chronograph with pure white dial, crisp black indices, dual subdials, and tempered blue hands housed in a polished surgical steel case.',
    },
    {
      id: '02',
      title: 'Juwade Classic 38mm Automatic',
      type: '02 // THREE-HAND',
      tag: 'CLASSIC LINE',
      tagColor: 'text-secondary',
      calibre: 'Calibre J-02 Slimline • 48h Reserve',
      price: '₦1,875,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXPbYpnhXwOz2xjQBvKETloT4mGc6biSyaRy_I_syGQfc_Crr-c7jrzXLXlnEvgk2F2bUh-GXDLxpW9vEflCMKRDPHxHOPnQWRA_w3ftZ5UHSBhHWgbTJUD_2C2cr_KRLsYmKUtd-O24z3K7i3W0enmwDaRb1O2FIOmiBH2Vh8fVn2uDff5tx1vXUAvXbD0HeFWKftRqqx72qL42ULMWbrC99K63C0BXt85z2CbAdp2vKqW-JMt_sOkw',
      desc: 'Sophisticated dress watch featuring an eggshell-white dial, ultra-thin hands, sapphire exhibition caseback, and handcrafted black leather strap.',
    },
    {
      id: '03',
      title: 'Juwade Monolith Pure Black',
      type: '03 // MONOCHROME',
      tag: 'SPECIAL ATELIER EDITION',
      tagColor: 'text-primary',
      calibre: 'DLC Calibre J-03 • 40h Reserve',
      price: '₦2,370,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC43Bn0dK6UBFUp5bGhhcKQQ0T5AK37hVJRjBgwGFtc91cu3j1oHrUX3DG1SymOuOOmwKoBFgo1sk0uHuASwSGjrPSM7oCK4_GjbDnGwlB4anLmNNqiVknzVvWiC3sF82JXLtFLJT_hGOmf0SRCVFIuyLZXqG5OxREaWSJVhXiCsBdTuyGxRCbDd5UcltMnAlcN8rPdhgRVLRG-isgIsUm_hWvzhSa8eF2WiJoyYMo9MwXi_R-QsBFybw',
      desc: 'All-black modern watch featuring a DLC coated obsidian case, matte charcoal dial, stealth indices, and double-domed anti-reflective sapphire glass.',
    },
    {
      id: '04',
      title: 'Juwade Aurelia Gold Edition',
      type: '04 // PRECIOUS METAL',
      tag: 'LIMITED TO 25 PIECES',
      tagColor: 'text-primary',
      calibre: 'Manual-Wind Calibre J-01M • 56h',
      price: '₦2,880,000',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfWDkDs2JmdK9I4fHIHpWtTQCRyZZrZn3arip01tl0f2UT5ycu43loF2Xec6rjoknA93GkaZj8gAkaVsPFw9cdkc0MJlsr_sMdyPA8kDBaaeACSKsY8uDSNNqYWMkNx65jFZ-aKZX_CV6PX2fX5cSa_MMvAPpcJARvIXxWyMdEX7pngEsydGKFTW6fbvRViRMLr3odyGGxbcZm6cyGZ9XNfu_Nfpj5cVDcP1hqQ8a-J66H3R_cQRzgXg',
      desc: 'Brushed champagne gold bezel with hand-finished dial, fine gold accents, and a rich caramel hand-stitched leather strap.',
    },
  ];

  return (
    <div className="bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container">
      {/* FULL-BLEED HERO SECTION */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center border-b border-surface-variant bg-surface-container-lowest overflow-hidden">
        <div className="max-w-7xl mx-auto w-full px-margin md:px-margin-desktop py-space-xl grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
          {/* Left Editorial Text Anchor */}
          <div className="lg:col-span-7 flex flex-col justify-center z-10 space-y-space-md pr-0 lg:pr-6">
            <div className="flex items-center space-x-3">
              <span className="h-px w-8 bg-primary-container"></span>
              <span className="font-label-uppercase text-label-uppercase text-primary tracking-widest uppercase">
                NIGERIAN HOROLOGY • LIMITED EDITIONS
              </span>
            </div>
            <h1 className="font-display-hero text-headline-xl md:text-display-hero text-on-surface leading-none tracking-widest uppercase font-normal">
              CRAFTING TIME FOR THE MODERN ERA
            </h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-xl pt-2">
              Bold Nigerian craftsmanship meets Swiss horological precision. Designed with elegance and assembled with passion in our Lagos atelier to celebrate every milestone.
            </p>
            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                className="inline-flex items-center justify-center h-[52px] px-space-lg bg-on-surface text-surface font-label-uppercase text-label-uppercase tracking-widest uppercase border border-transparent hover:border-primary-container hover:bg-inverse-surface transition-all duration-300"
                href="#timepieces"
              >
                Explore Collection
              </a>
              <a
                className="inline-flex items-center justify-center h-[52px] px-space-sm font-label-uppercase text-label-uppercase text-on-surface tracking-widest uppercase border-b-2 border-primary-container pb-1 hover:text-primary transition-colors duration-200"
                href="#manifesto"
              >
                Our Story
                <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
          {/* Right Stage */}
          <div className="lg:col-span-5 relative flex items-center justify-center p-2 lg:p-4">
            <div className="relative w-full max-w-md aspect-[4/5] bg-surface-container-low border border-surface-variant flex items-center justify-center group overflow-hidden mx-auto shadow-sm">
              <img
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700 ease-out"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoFqqGBj9OfHT2c0k6Ks_Q7NUhsQKq1QMobTZ0d6gEstGs5t6-mPoBGxT-8nzO_vWQB35ZQSHF9Li9Qo-N8Bsnak3m4cGxOY4nFaDtTyAA4yb2hAQ6T-KvXDcBB6KhuDKB8ZjJiWqizlzw39Nowrp7OlNavUENptvXVWGJmint4Nn9XQTU9EdUKRf2pCwHwNtkArT2-Jb9Pegu0KIfBHlyYzu8cH9IZbmbmUSBzXUdiFdoxs4Kt7GYng"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/timepiece.png';
                }}
                alt="Juwade Luxury Dress Watch"
              />
              {/* Coordinate Calibration Marks */}
              <div className="absolute top-4 left-4 font-technical-data text-technical-data text-on-surface/60">
                AXIS_REF: 6°31′N 3°22′E (LAGOS)
              </div>
              <div className="absolute bottom-4 right-4 font-technical-data text-technical-data text-primary uppercase">
                CALIBRE J-01 EXHIBITION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CURATED TIMEPIECES (4-PRODUCT GRID) */}
      <section className="py-space-2xl bg-surface border-b border-surface-variant" id="timepieces">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-space-xl border-b border-surface-variant pb-space-md">
            <div>
              <span className="font-label-uppercase text-label-uppercase text-primary tracking-widest uppercase block mb-1">
                PORTFOLIO
              </span>
              <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Curated Iconic Timepieces</h2>
            </div>
            <p className="font-body-sm text-body-sm text-secondary max-w-md mt-2 md:mt-0">
              Handcrafted luxury timepieces individually tested and perfected. Each watch comes with a serialized Juwade Certificate of Authenticity.
            </p>
          </div>
          {/* 4-Product Horizontal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-surface-variant">
            {products.map((item) => (
              <div
                key={item.id}
                className="group border-r border-b border-surface-variant bg-surface-container-lowest p-6 flex flex-col justify-between hover:bg-surface-bright transition-all duration-300 relative cursor-pointer"
                onClick={() => setSelectedProduct({
                  title: item.title,
                  edition: item.tag,
                  calibre: item.calibre,
                  price: item.price,
                  image: item.image,
                  desc: item.desc,
                })}
              >
                <div>
                  <div className="flex justify-between items-start font-technical-data text-technical-data text-secondary mb-4">
                    <span>{item.type}</span>
                    <span className={item.tagColor}>{item.tag}</span>
                  </div>
                  <div className="w-full aspect-square bg-surface-container-low mb-6 border border-surface-variant overflow-hidden relative">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      src={item.image}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/timepiece.png';
                      }}
                      alt={item.title}
                    />
                    <div className="absolute inset-0 bg-inverse-surface/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-surface px-4 py-2 font-label-uppercase text-label-uppercase tracking-widest text-on-surface border border-surface-variant">
                        Quick Inspect
                      </span>
                    </div>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">{item.title}</h3>
                  <p className="font-technical-data text-technical-data text-secondary mt-1">{item.calibre}</p>
                </div>
                <div className="pt-6 mt-6 border-t border-surface-variant flex justify-between items-center">
                  <span className="font-title-sm text-title-sm text-on-surface">
                    {item.price} <span className="font-technical-data text-technical-data text-secondary">NGN</span>
                  </span>
                  <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors duration-200 text-sm">
                    arrow_forward
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-space-lg flex justify-end">
            <a
              className="font-label-uppercase text-label-uppercase tracking-widest uppercase text-on-surface hover:text-primary inline-flex items-center space-x-2 transition-colors"
              href="#collections"
            >
              <span>View Full Collection</span>
              <span className="material-symbols-outlined text-sm">east</span>
            </a>
          </div>
        </div>
      </section>

      {/* BRAND STORY MANIFESTO SECTION */}
      <section className="py-space-2xl bg-surface-container-lowest border-b border-surface-variant" id="manifesto">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop">
            <div className="lg:col-span-4 border-r border-surface-variant pr-8 flex flex-col justify-between">
              <div>
                <span className="font-label-uppercase text-label-uppercase text-primary tracking-widest uppercase block mb-4">
                  02 / OUR STORY
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
                “WE CRAFT TIMEPIECES THAT CELEBRATE YOUR JOURNEY.”
              </blockquote>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-secondary font-body-md text-body-md">
                <p>
                  Luxury is not about complexity; it is about authentic craftsmanship and timeless design. At JUWADE, we eliminate distraction to craft watches that reflect confidence, heritage, and precision.
                </p>
                <p>
                  Sculpted from cold-forged 316L medical-grade stainless steel and protected by scratch-resistant sapphire glass, every Juwade watch is engineered to stand the test of time.
                </p>
              </div>
              {/* Material Detail Inset */}
              <div className="mt-space-xl p-6 bg-surface-container-low border border-surface-variant grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <span className="font-label-uppercase text-label-uppercase text-on-surface uppercase block mb-1">
                    Cold-Forged 316L
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    Surgical grade steel casing with razor-brushed bevels and zero nickel release.
                  </span>
                </div>
                <div>
                  <span className="font-label-uppercase text-label-uppercase text-on-surface uppercase block mb-1">
                    7-Layer AR Sapphire
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    Double-domed anti-reflective sapphire glass eliminating optical glare.
                  </span>
                </div>
                <div>
                  <span className="font-label-uppercase text-label-uppercase text-on-surface uppercase block mb-1">
                    Precision Movement
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    High-accuracy caliber engineered to perform flawlessly in all environments.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP PILLARS */}
      <section className="py-space-2xl bg-surface border-b border-surface-variant" id="craftsmanship">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop">
          <div className="text-center max-w-2xl mx-auto mb-space-xl">
            <span className="font-label-uppercase text-label-uppercase text-primary tracking-widest uppercase block mb-2">
              Pillars of Excellence
            </span>
            <h2 className="font-headline-lg text-headline-lg text-on-surface uppercase">Master Horology & Craftsmanship</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-surface-variant">
            {/* Pillar 1 */}
            <div className="border-r border-b border-surface-variant p-space-lg bg-surface-container-lowest flex flex-col justify-between">
              <div>
                <span className="font-technical-data text-technical-data text-primary uppercase tracking-widest block mb-4">
                  PILLAR I
                </span>
                <div className="w-full aspect-[4/3] bg-surface-container-low border border-surface-variant mb-6 overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale contrast-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_ObVbOzvTGHvW4o1HXtW3RNiEpMZSNZ4OY9l85IGZgpfBi5Qt0iErminGDzoioBpvrSuqSOqebtGljPJWF6ES8KnYA2Up44kKrg8r7EiPlYW-UekF9p767g7ZT0rDhdbhb7NRLtJW_a_xjT3dd8ItsNQUXrd6_k-SzbdrK5q9AsgBT0mAHHrP5Gf7-tU1p_j6fVJK6eWHLc3IKJrRwYcLkbhK3rzT6vIZkhugwpVvSK0EdKNnxGVoVA"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/caliber.png';
                    }}
                    alt="Precision Assembly"
                  />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-3">Precision Assembly</h3>
                <p className="font-body-sm text-body-sm text-secondary">
                  Every Juwade watch is assembled with surgical precision and calibrated across multiple positions over 21 consecutive days to guarantee flawless accuracy.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-surface-variant">
                <span className="font-technical-data text-technical-data text-on-surface-variant">
                  QUALITY ASSURED: ISO 3159
                </span>
              </div>
            </div>
            {/* Pillar 2 */}
            <div className="border-r border-b border-surface-variant p-space-lg bg-surface-container-lowest flex flex-col justify-between">
              <div>
                <span className="font-technical-data text-technical-data text-primary uppercase tracking-widest block mb-4">
                  PILLAR II
                </span>
                <div className="w-full aspect-[4/3] bg-surface-container-low border border-surface-variant mb-6 overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale contrast-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxABszI7FidjioVp8EPDY9OCqwuPBYGcknJAaPuHGhYBsy-CCwGlnzjxfdx87bga64w1LuywdvGFGzd0bIAgfAxgH5q698wR8B9owoJzcvJ0_c1jpcwdGjbhrENqkRwCv5ombUrSpigfJsTcZGtLIL6qbcPp37IXF7MSlPMjQ8grfFvUN4sE_Ng-K6yJnipL3CNWD7TGXXZ7LDZg4ZhOUVrD-uQ_WaBwD3TT99rwws5JgNcUbSbxdTTg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/timepiece.png';
                    }}
                    alt="Hand-Selected Leather"
                  />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-3">Hand-Selected Leather</h3>
                <p className="font-body-sm text-body-sm text-secondary">
                  Supple, vegetable-tanned leather straps crafted with care that feel comfortable on the wrist and age beautifully over time.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-surface-variant">
                <span className="font-technical-data text-technical-data text-on-surface-variant">
                  PREMIUM LEATHER • NATURAL FINISH
                </span>
              </div>
            </div>
            {/* Pillar 3 */}
            <div className="border-r border-b border-surface-variant p-space-lg bg-surface-container-lowest flex flex-col justify-between">
              <div>
                <span className="font-technical-data text-technical-data text-primary uppercase tracking-widest block mb-4">
                  PILLAR III
                </span>
                <div className="w-full aspect-[4/3] bg-surface-container-low border border-surface-variant mb-6 overflow-hidden">
                  <img
                    className="w-full h-full object-cover grayscale contrast-110"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-8lyIX20KciG4guwkc6Gms-Y8Ij0vuesdw2Nz2ZXxECDZppWSSzebAbCVdPbBLRPrk2nlIk36CDcfbPAp5mxqxaICMvxRn9fDGgZ5KVjPH_OgxMVnRid1zBNJnB2kSTzMnJgU4ZkTWxCCwmnr7AyvxKgdJ_vz0HpgrbdFrVD4DsAK_xTYbtGVOPtdnL5PuHaJxZH33HB4EhUwZRLXkAr8fCrQQnbaPvkg0Hoxo2rw_XSG0RbvDzXRog"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/caliber.png';
                    }}
                    alt="Lifetime Service Guarantee"
                  />
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface uppercase mb-3">Lifetime Guarantee</h3>
                <p className="font-body-sm text-body-sm text-secondary">
                  We build for generations. Every Juwade timepiece comes backed by our local service commitment and lifetime warranty.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-surface-variant">
                <span className="font-technical-data text-technical-data text-on-surface-variant">
                  WARRANTY: FULL LOCAL CONCIERGE CARE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER INVITATION */}
      <section className="py-space-xl bg-surface-container-lowest border-b border-surface-variant">
        <div className="max-w-4xl mx-auto px-margin text-center">
          <span className="font-label-uppercase text-label-uppercase text-primary tracking-widest uppercase block mb-2">
            STAY CONNECTED
          </span>
          <h3 className="font-headline-lg text-headline-lg text-on-surface uppercase mb-4">Join The Juwade Circle</h3>
          <p className="font-body-md text-body-md text-secondary max-w-lg mx-auto mb-8">
            Be the first to receive invitations to private product drops, new collection releases, and stories from our Lagos studio.
          </p>
          {emailSubmitted ? (
            <div className="p-4 bg-surface-container-low border border-primary-container text-primary font-technical-data text-technical-data">
              WELCOME TO THE JUWADE CIRCLE — DISPATCH CONFIRMED
            </div>
          ) : (
            <form
              className="max-w-md mx-auto flex items-center border-b border-on-surface pb-2"
              onSubmit={(e) => {
                e.preventDefault();
                setEmailSubmitted(true);
              }}
            >
              <input
                className="bg-transparent border-0 focus:ring-0 p-0 text-body-md font-body-md w-full text-on-surface placeholder:text-outline font-technical-data text-technical-data tracking-widest focus:outline-none"
                placeholder="your.email@domain.com"
                required
                type="email"
              />
              <button
                aria-label="Submit Dispatch Subscription"
                className="ml-4 text-primary hover:text-on-primary-fixed-variant transition-colors"
                type="submit"
              >
                <span className="material-symbols-outlined">east</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* MINIMAL FOOTER */}
      <footer className="w-full bg-surface-container-low dark:bg-inverse-surface border-t border-surface-variant dark:border-outline-variant/20 transition-all duration-200 ease-in-out">
        <div className="w-full px-margin md:px-margin-desktop py-space-xl max-w-7xl mx-auto">
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter-desktop mb-space-xl">
            {/* Col 1: Brand & Ethos */}
            <div className="space-y-4 md:col-span-1">
              <div className="font-display-hero text-headline-md text-on-surface dark:text-inverse-on-surface tracking-widest uppercase">
                JUWADE
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant leading-relaxed">
                Contemporary luxury watchmaking born in Nigeria. Dedicated to authentic craftsmanship, timeless style, and precision.
              </p>
            </div>
            {/* Col 2: Navigation Links */}
            <div>
              <span className="font-label-uppercase text-label-uppercase text-primary dark:text-inverse-primary uppercase tracking-widest block mb-4">
                Explore Index
              </span>
              <ul className="space-y-2">
                <li>
                  <a className="text-on-surface-variant dark:text-outline-variant font-body-sm text-body-sm hover:text-on-surface dark:hover:text-inverse-on-surface transition-colors duration-200" href="#timepieces">
                    Concierge & Care
                  </a>
                </li>
                <li>
                  <a className="text-on-surface-variant dark:text-outline-variant font-body-sm text-body-sm hover:text-on-surface dark:hover:text-inverse-on-surface transition-colors duration-200" href="#manifesto">
                    Our Heritage & Story
                  </a>
                </li>
                <li>
                  <a className="text-on-surface-variant dark:text-outline-variant font-body-sm text-body-sm hover:text-on-surface dark:hover:text-inverse-on-surface transition-colors duration-200" href="#craftsmanship">
                    Atelier Ethics
                  </a>
                </li>
                <li>
                  <a className="text-on-surface-variant dark:text-outline-variant font-body-sm text-body-sm hover:text-on-surface dark:hover:text-inverse-on-surface transition-colors duration-200" href="#manifesto">
                    Terms & Guarantee
                  </a>
                </li>
              </ul>
            </div>
            {/* Col 3: Atelier Boutiques */}
            <div>
              <span className="font-label-uppercase text-label-uppercase text-primary dark:text-inverse-primary uppercase tracking-widest block mb-4">
                Boutiques & Salons
              </span>
              <div className="space-y-3 font-technical-data text-technical-data text-on-surface-variant dark:text-outline-variant">
                <div>
                  <span className="block text-on-surface dark:text-inverse-on-surface font-semibold">LAGOS</span>
                  <span>Victoria Island, Lagos • By Appointment</span>
                </div>
                <div>
                  <span className="block text-on-surface dark:text-inverse-on-surface font-semibold">ABUJA</span>
                  <span>Maitama, Abuja • Private Suite</span>
                </div>
                <div>
                  <span className="block text-on-surface dark:text-inverse-on-surface font-semibold">PORT HARCOURT</span>
                  <span>GRA Phase 2 • Showroom Atelier</span>
                </div>
              </div>
            </div>
            {/* Col 4: Technical Escrow Details */}
            <div>
              <span className="font-label-uppercase text-label-uppercase text-primary dark:text-inverse-primary uppercase tracking-widest block mb-4">
                Certification
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-outline-variant mb-4">
                Independently tested and certified under ISO 3159 chronometer guidelines.
              </p>
              <div className="font-technical-data text-technical-data text-primary dark:text-primary-fixed-dim">
                BOUTIQUE STATUS: OPEN • NIGERIAN DISPATCH ACTIVE
              </div>
            </div>
          </div>
          {/* Bottom Hairline Separator and Copyright */}
          <div className="pt-8 border-t border-surface-variant dark:border-outline-variant/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-technical-data text-technical-data tracking-widest text-on-surface-variant dark:text-outline-variant">
              © 2025 JUWADE. ALL RIGHTS RESERVED. MADE IN NIGERIA.
            </p>
            <div className="flex items-center space-x-6 font-technical-data text-technical-data text-on-surface-variant dark:text-outline-variant">
              <span>LAT: 6.5244° N</span>
              <span>LON: 3.3792° E</span>
              <span className="text-primary dark:text-primary-fixed-dim">NIGERIA</span>
            </div>
          </div>
        </div>
      </footer>

      {/* QUICK INSPECT MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-surface max-w-2xl w-full border border-surface-variant p-space-lg relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-on-surface hover:text-primary"
              onClick={() => setSelectedProduct(null)}
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg items-center">
              <div className="w-full aspect-square bg-surface-container-low border border-surface-variant overflow-hidden">
                <img
                  src={selectedProduct.image}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/timepiece.png';
                  }}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <span className="font-technical-data text-technical-data text-primary block">{selectedProduct.edition}</span>
                <h3 className="font-headline-lg text-headline-lg text-on-surface">{selectedProduct.title}</h3>
                <p className="font-technical-data text-technical-data text-secondary">{selectedProduct.calibre}</p>
                <p className="font-body-sm text-body-sm text-secondary">{selectedProduct.desc}</p>
                <div className="pt-4 border-t border-surface-variant flex items-center justify-between">
                  <span className="font-title-sm text-title-sm text-on-surface">{selectedProduct.price} NGN</span>
                  <button
                    className="px-space-md py-3 bg-on-surface text-surface font-label-uppercase text-label-uppercase tracking-widest uppercase hover:bg-primary-container hover:text-on-primary-container transition-colors"
                    onClick={() => {
                      alert(`Inquiry sent for ${selectedProduct.title}`);
                      setSelectedProduct(null);
                    }}
                  >
                    ORDER TIMEPIECE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
