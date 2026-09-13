import { useState, useMemo } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import { useDocumentTitle } from '@/hooks';

interface Product {
  id: string;
  edition: string;
  title: string;
  caliber: string;
  details: string;
  priceNum: number;
  priceFormatted: string;
  tag: string;
  collection: string;
  caseSize: string;
  dialFinish: string;
  strapMaterial: string;
  img1: string;
  img2: string;
  desc: string;
}

export function Collections() {
  useDocumentTitle('Timepieces & Collections | JUWADE');

  // Interactive Filter States
  const [selectedCollections, setSelectedCollections] = useState<string[]>([
    'Klassik Minimal',
    'Chronographe',
  ]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>(['38 MM']);
  const [selectedDials, setSelectedDials] = useState<string[]>([]);
  const [selectedStraps, setSelectedStraps] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(6000000);
  const [sortBy, setSortBy] = useState<string>('Curated Atelier Selection');

  // Accordion Open/Close States
  const [openAccordions, setOpenAccordions] = useState<{ [key: string]: boolean }>({
    collection: true,
    case: true,
    dial: true,
    strap: false,
    price: true,
  });

  // Quick Inspect Modal State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Mobile Filter Drawer State
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const resetFilters = () => {
    setSelectedCollections([]);
    setSelectedSizes([]);
    setSelectedDials([]);
    setSelectedStraps([]);
    setMaxPrice(6000000);
    setSortBy('Curated Atelier Selection');
  };

  const handleCollectionChange = (name: string) => {
    setSelectedCollections((prev) =>
      prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
    );
  };

  const handleSizeToggle = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((item) => item !== size) : [...prev, size]
    );
  };

  const handleDialToggle = (dial: string) => {
    setSelectedDials((prev) =>
      prev.includes(dial) ? prev.filter((item) => item !== dial) : [...prev, dial]
    );
  };

  const handleStrapToggle = (strap: string) => {
    setSelectedStraps((prev) =>
      prev.includes(strap) ? prev.filter((item) => item !== strap) : [...prev, strap]
    );
  };

  // Full Catalog of 12 Timepieces
  const allProducts: Product[] = [
    {
      id: '01',
      edition: 'EDITION 01',
      title: 'KLASSIK I AUTOMATIK',
      caliber: 'Caliber J-01 // 38mm',
      details: 'Opaline White Dial • Italian Calfskin',
      priceNum: 2450000,
      priceFormatted: '₦ 2,450,000',
      tag: 'Lagos Atelier Standard',
      collection: 'Klassik Minimal',
      caseSize: '38 MM',
      dialFinish: 'Opaline White',
      strapMaterial: 'Italian Calfskin',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgy7PcqF0RPbcnVz2n8KifMIPbJREqIHmYqXGQWRQw5W7KYqTx5wOSAihiR3-UCdVOdjMS3Dx_5Ly-sEVIVJK9Ur_od3bmX2mTMYNZDjq1OwOAu6RFrzsXOnLjUHKliwJXMUrQpqXZ6lKGdnUU97dOJ0Aszy71yR1bxquP4Ct-cQoXCqWNTHKHwib_wxzuFIfsuvGIaVk0G6XY2tD3RBSDBpPhbt5b60dn1yQPxu9WpJmZ-MzT1Y63Aw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMnHWGAZY3RShTLUmcwzAT2YtjHhjQ4waaNpUzvMkpGp6dI6Lg9lK0-f8SBh5GkgEbI5c6_CmxcFyTnqkXddvxub_y6ogOyyA87w-e1OKVYvtnZMr3NuNvYDD4sfsUzhfnrk8nkWnSkPOzlu87A99NyrLLhDlmDJoEap30wzCv2bHqGqspEb8P_fH_niV3A1KPCXrSG8WS61ufQdQ1pmd-EcQ16wwgXLc3r2xHXNANMQVWwd6fUwE5Ag',
      desc: 'A luxury minimalist steel wristwatch with an opaline white dial and blued steel hands resting on a warm studio background. Surgical precision brushed bezel and hand-stitched calfskin band.',
    },
    {
      id: '02',
      edition: 'EDITION 02',
      title: 'CHRONOGRAPHE MONO',
      caliber: 'Caliber J-08 Flyback // 40mm',
      details: 'Sunray Slate Dial • Cordovan Leather',
      priceNum: 3850000,
      priceFormatted: '₦ 3,850,000',
      tag: 'LIMITED // 50 PCS',
      collection: 'Chronographe',
      caseSize: '40 MM',
      dialFinish: 'Sunray Slate',
      strapMaterial: 'Cordovan Leather',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmsu_XVE0KFO17gWTa5sFA9ZlcTkd1YLd9mtnzwMZyv7PxXUgN5r-V8udriCDR9IGSa1b9aHqovERMZKkgCFqhfhUnHXvTbTWCAkGxSa3hpW6e3b62W28ZBVf-oSTj3kCG7FBDoNITPHv1nYa_gsv_-ZWylxORo_J4ChlT1eBCvwAAe83KGG9PbZ7nDHtotpOrefIAfVJme26ugSsGWzKWDIhOdfjNjo7rNqi7oY-8YeCk6x7bPlJXZw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXIZydMzJ_BKROQMDDtFWtJUMsuxxlCjPq934WSSE2pQt-z_aS6OLWvCvkvhSDon-SdJL6ooY9ynqbvoBzPPKWpK0GaqJhDo1lUPlJiDaMQfIBBxvzN6TGKDHAjZmNHGnzqjzUT2unAT96UFv_CV-fD1EzODwNyrG5xzYwFgIXMF3I3-gzlWDbXVhqyHACIKnatmMM6FVKzYo_2tLLoL-v1b2x3sAl1AHgVxbvV2Q9ACC40nE9dpPO6g',
      desc: 'Precision bicompax chronograph watch with slate grey sunray sub-dials and matte black PVD case. High-contrast chamfered pushers and sapphire crystal.',
    },
    {
      id: '03',
      edition: 'EDITION 03',
      title: 'BAUHAUS PURIST 36',
      caliber: 'Manual Wind Caliber J-M2 // 36mm',
      details: 'Pure Opaline • Milanese Mesh',
      priceNum: 1950000,
      priceFormatted: '₦ 1,950,000',
      tag: 'Ultra-Slim 6.2mm',
      collection: 'Bauhaus Automatik',
      caseSize: '36 MM',
      dialFinish: 'Opaline White',
      strapMaterial: 'Milanese Mesh',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmkDRBBipnt8OWmP7RRUv7wU_YMII-GhIbbV-p8X9eTqQXDx6Ot7SPB_aBlqZguK6ceHsRMeuETwOS-Oy3KvotmX0GRiPQTH2IBkmqNPc90kbLS4N751qEDoHBK2iRsw1jQGgAaKJ6MdoZqax81AHHKHmDQKCAhqWGklMagW0_vx2LOFes47ye8vP4yHM_sNeYqZnOvYZb2ZcIeWQExC-P25YpmgPgyCewISHc518HjL6CLBpJ4MIuug',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqhsFekLXkc7yHSibSByGMJzfKBXr546cxO4NY_fLt_nMjCi2sugq0kamlq25UZ5g4IcS2Ea4KViiWHJtMVXroGgEBbG0ahVGzCmxjL7rFHvIUDHxzMu9Wnzy0pH26Wpj5jrpdRY5o8neONQc_Z9zXUDCb4UkJB4TNd8lspKustcr0hz9v04qHFIo8zb4h7DOrT9kBuTWuYzmiDKufLlYfY4E8eZUBDaA0JQFk4jZOnMioy7E2gdZAAw',
      desc: 'Ultra-slim 36mm dress watch with a sterile bone-white dial and delicate wire lugs. Designed with minimalist aesthetics and fluid steel mesh band.',
    },
    {
      id: '04',
      edition: 'EDITION 04',
      title: 'MONOLITH OBSIDIAN',
      caliber: 'Caliber J-09 Titanium // 42mm',
      details: 'Obsidian Matte • Matte PVD Steel',
      priceNum: 4200000,
      priceFormatted: '₦ 4,200,000',
      tag: 'DLC Coating',
      collection: 'Monolith Series',
      caseSize: '42 MM',
      dialFinish: 'Obsidian Matte',
      strapMaterial: 'Matte PVD Steel',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnJD6m3oGysAaNqlJxZNFONpR7j6FR3AeVtLKxJgecqBNvTHZtkmtMwRS5ScHxucDzjPhZWJuBcmXRT0Lqw67jJCsFbCD1Tei_el_lwrTTpa9mguJlvxRJh5_1ZbHSG7vcWOwdq3Fs0J_5CnytGbAfuTlPX-St4K-UVeb4bKs-zKqAETArBvYbCVYmLyLmTam5jVnvAzGIXLEaVht-e6QFLH2oGBekHH4lIfluZWVqGO2O76mQYnPRGQ',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIVw-I_kzMudypGAenFvZwLHNxq2akju2_RoUXC6X_8c1NkTACyorKZ-ng8Go5A0oAKJSiKkFgli24rRXp9lk7Rv5nl_OSmp87G9AzXQ0M8eVuZezxLII-C7M-UXn5B74Rfeq-ryGHkNIVhZGAv7AzOEWPNKRN6dO9MQad-oJkh1bQyLWsdRA7WxNzl32mDrllbb0Oi5RxOepy47SXfUs-2alHQe_qk7itfX7imDsjw2CATsrC9Jexwg',
      desc: 'Masculine 42mm matte carbon-coated black wristwatch featuring a stealth dial with brushed gold hands and indices. Micro-sandblasted titanium case.',
    },
    {
      id: '05',
      edition: 'EDITION 05',
      title: 'KLASSIK II CHAMPAGNE',
      caliber: 'Caliber J-02 Aurum // 38mm',
      details: 'Brushed Champagne • Honey Calfskin',
      priceNum: 3100000,
      priceFormatted: '₦ 3,100,000',
      tag: '18K Accents',
      collection: 'Klassik Minimal',
      caseSize: '38 MM',
      dialFinish: 'Brushed Champagne',
      strapMaterial: 'Italian Calfskin',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUQvtOQ2Ci7Kwsw0FdLjYacbxb5cSWoPJekXh3VnCFSrN45uWEH2cWxYqodGcZxUyjMRPF_JMS8NX1ERjs_yWPtXwM6dbJw5X-yWTDI9l0QxFUbmdY6gZ7VQSXU1fBcYFtxMtpMw4lrIXrWfo5cUiw0kucZpdYBZ1Av8sS_dav2jN8TwHt5nspFBdTlDj4XZ7H0nGAGcxU-zRDWvl5XdcUAYQ6YDfljD111-welFFH1LZfW2Xwba6wnw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD30PtlJQg09jIlSEIny0xQ_8qBBWcQty_1gG6YvjoZ0g-xvA3Gsw3DWDGsMFs1dHG-IXLdGQMhp1d2fdUptlfrrG4erbLVYTypgyj5-oVRtCzYdRsCKWZsj4jho5_Lgx4GG96YmdxvlHJi-RJGqb8H6sTqTmUZK4EpG-3n1EvfLzq9lXCm-9z-P5Uxiv3yRu6gMDAz_rZk7STG1WPBqht4SE2VZRYiulH44r7vHQ6ZS59gEqTyT9wLrQ',
      desc: 'Refined watch with champagne brushed dial encased in 18k yellow gold accents and paired with a rich honey brown Italian calfskin band.',
    },
    {
      id: '06',
      edition: 'EDITION 06',
      title: 'RÉGULATEUR PREMIER',
      caliber: 'Caliber J-R1 Regulateur // 40mm',
      details: 'Frosted Opaline • Cordovan Black',
      priceNum: 4650000,
      priceFormatted: '₦ 4,650,000',
      tag: 'Decoupled Dial',
      collection: 'Chronographe',
      caseSize: '40 MM',
      dialFinish: 'Opaline White',
      strapMaterial: 'Cordovan Leather',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA37tryKAqCWxQf7WcwLPYrE24Bq5_7GJdduGh_0iXBFcmL1rtSl0AknCdGbdUO-7D25YOmr6P5B9ovLzRsd4yUmcL6XGEUomA_Z_eEebuF7Jsxbr5bZ_I5pcZSwmw7vmV7ZjWBHpVK5-890W5Tkk8BvHkh0EPH4RPZDlzGmAn9ocf3bpJ5cKKwkrXeWMbxvoeuE4UYCULSNBl_mfYsUGQm-rgMk5hKkbuOnse5lrEM-mLYld6kXD2qFw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpcH7SypMmUa7KJFNgD53GGUYUReFoAVgZC7XPH5BhYDrW7YmxOcjdAUUifyhlBsWRdZz7i7XTw86thGLJNcdQwuiBiVZkEo4PKFg0OdQh46KePXtTBt7jcA_4vBMY7t-xAjMcBe7fmODUL6pPvm0ZCa-AClM_1JLg-AF41tGapwbvO8rRoEipPAvzn2RiUQVKJVHrJX_oMTuCdJXpi6y5UyQxv-XHUvOyZ7uiMG2jIlHY1k-rCg9QxQ',
      desc: 'Artisanal regulateur wristwatch with decoupled hour, minute, and second sub-dials on a frosted opaline dial surface with perlage graining.',
    },
    {
      id: '07',
      edition: 'EDITION 07',
      title: 'BAUHAUS SLATE 38',
      caliber: 'Caliber J-04 // 38mm',
      details: 'Sunray Slate • Milanese Mesh',
      priceNum: 2250000,
      priceFormatted: '₦ 2,250,000',
      tag: '52h Power Reserve',
      collection: 'Bauhaus Automatik',
      caseSize: '38 MM',
      dialFinish: 'Sunray Slate',
      strapMaterial: 'Milanese Mesh',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUvWK2shivllvzNnbw5iS28s2FhK72-Nc7MCkyjwv_IS6lA21McDEvGwwQAaqfp0J8RRLc9OPG5bDYVk0_Xozp0o8Yq2B3-yGr_o_tBfRITqaOUVYpsOUx2ODJAZOBrBRaq4iQliT_-aZEwCjAxLPAsQ-4T3I8epyG6mdDeNywT8P6kQGXeCZzAri5DPbPVbTNothwHYmjaTZLf5nGvQ0wlM7XcK0HwXnZ_zzZ-PZdbNKU2L6lPlxCiw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg0epJ7pMjlLzoTVQkmMn6XouXHSNwZ4jw0e1bf92NUrJTdYmzrfGlCGapD-fQNm_xerMOYzM7YgPsvGqKJLZXEGF-8MoHoymlKNMrU3xCtCefQzJ_51ilFIwRMKegpyVaU-q1PcNAdB5xFSUaTLYMpujH14SzMiaD5NNdG3tm3AqP-KU4dMj8RQQ3tw58t-Gw6F7I6i3a2sk8wTBcNCUfJtuJoQqmkEudDTuwHwqKxGcx_XCuaU8o-Q',
      desc: 'Bauhaus-inspired automatic timepiece with a deep sunray slate dial, recessed date window at 6 o clock, and slim rhodium baton hands.',
    },
    {
      id: '08',
      edition: 'EDITION 08',
      title: 'MONOLITH STEALTH CHRONO',
      caliber: 'Caliber J-09 Chrono // 42mm',
      details: 'Obsidian Matte • Cordovan Leather',
      priceNum: 5200000,
      priceFormatted: '₦ 5,200,000',
      tag: 'Stealth Edition',
      collection: 'Monolith Series',
      caseSize: '42 MM',
      dialFinish: 'Obsidian Matte',
      strapMaterial: 'Cordovan Leather',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6xnGATTNlkmc55ReTqzVOIDGHk-2v65bcW0irp-rLU1oZ3U7T_DWTQhnKEPqRFJbCwrEVhKXbWiK4yNI8Z7zpYtTQwtVG65YgZ1zjnJmYuSuJnpGiGT7xt8nEU1t9K189zQdBZGVpwlRli8XdpnX4meAoanTZbb6Ilgeq-ro-dKVU46_EIa4nJKb3qRyWObfnnOzXK4BxRXX29c1_zWtfdDzNNYA-jOU6iie8m0ettMAg3BsMkKnoBw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3DWukIPcC1FEUYDyOoNooYnfy2qt0OcmDbPXqCtGYWO5SecVnqB-rfOnHabTKejqbwmeEjkVC9Gy_-Winy0EchTzDQLgioGadrrZudibDQHT10GQgJBGEWsOYE5hb0nRrZFDKRErQRSH5l0SESf8vXFpqJfrMhVznORmyCEDbIvTIEIZmEbIU2VRWkNb-2h56EawcCRc0IQ-q-zzYvbEZpHaVnj3UoPWMZ62rT6nKcVstZk__A9pF8Q',
      desc: 'Tactical luxury chronograph watch with full black sandblasted steel body, three tonal obsidian registers, and micro-machined winding crown.',
    },
    {
      id: '09',
      edition: 'EDITION 09',
      title: 'KLASSIK SLIM 36',
      caliber: 'Caliber J-01 Slim // 36mm',
      details: 'Opaline White • Italian Calfskin',
      priceNum: 2100000,
      priceFormatted: '₦ 2,100,000',
      tag: 'Ultra-Comfort',
      collection: 'Klassik Minimal',
      caseSize: '36 MM',
      dialFinish: 'Opaline White',
      strapMaterial: 'Italian Calfskin',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXPbYpnhXwOz2xjQBvKETloT4mGc6biSyaRy_I_syGQfc_Crr-c7jrzXLXlnEvgk2F2bUh-GXDLxpW9vEflCMKRDPHxHOPnQWRA_w3ftZ5UHSBhHWgbTJUD_2C2cr_KRLsYmKUtd-O24z3K7i3W0enmwDaRb1O2FIOmiBH2Vh8fVn2uDff5tx1vXUAvXbD0HeFWKftRqqx72qL42ULMWbrC99K63C0BXt85z2CbAdp2vKqW-JMt_sOkw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgy7PcqF0RPbcnVz2n8KifMIPbJREqIHmYqXGQWRQw5W7KYqTx5wOSAihiR3-UCdVOdjMS3Dx_5Ly-sEVIVJK9Ur_od3bmX2mTMYNZDjq1OwOAu6RFrzsXOnLjUHKliwJXMUrQpqXZ6lKGdnUU97dOJ0Aszy71yR1bxquP4Ct-cQoXCqWNTHKHwib_wxzuFIfsuvGIaVk0G6XY2tD3RBSDBpPhbt5b60dn1yQPxu9WpJmZ-MzT1Y63Aw',
      desc: 'Slim profile classic dress timepiece featuring crisp opaline white dial, blued hands, and hand-stitched tan calfskin strap.',
    },
    {
      id: '10',
      edition: 'EDITION 10',
      title: 'BAUHAUS CHRONO 40',
      caliber: 'Caliber J-08 Bauhaus // 40mm',
      details: 'Opaline White • Cordovan Leather',
      priceNum: 3450000,
      priceFormatted: '₦ 3,450,000',
      tag: 'Double Register',
      collection: 'Bauhaus Automatik',
      caseSize: '40 MM',
      dialFinish: 'Opaline White',
      strapMaterial: 'Cordovan Leather',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi7IrOB4GW9N3jM8za1vfosZ24pgUNocRk4Frs4g7evIbtnUMh1xqdetxYzkcPyVilEb79SAheGvBZsDMS-zQd82gVLJUqboP0sGqf-im3zPt8Hs4AJR7ebl4hHZLczCMWq1vkODfVp4FErjEdlEHFYPPbEZOUdRDkjUOoav-YUA2J_ZTFPuldv32DnH0vG17bdpmSj4-EyLUh3k5y8dKcz-aOh4jUeUYVBRd34eSM9x6BC4qRl1RRmQ',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmkDRBBipnt8OWmP7RRUv7wU_YMII-GhIbbV-p8X9eTqQXDx6Ot7SPB_aBlqZguK6ceHsRMeuETwOS-Oy3KvotmX0GRiPQTH2IBkmqNPc90kbLS4N751qEDoHBK2iRsw1jQGgAaKJ6MdoZqax81AHHKHmDQKCAhqWGklMagW0_vx2LOFes47ye8vP4yHM_sNeYqZnOvYZb2ZcIeWQExC-P25YpmgPgyCewISHc518HjL6CLBpJ4MIuug',
      desc: 'Minimalist double-register chronograph merging clean Nigerian design sensibilities with high-accuracy mechanical movements.',
    },
    {
      id: '11',
      edition: 'EDITION 11',
      title: 'MONOLITH TITANIUM',
      caliber: 'Caliber J-09 Pure // 42mm',
      details: 'Sunray Slate • Cordovan Leather',
      priceNum: 4800000,
      priceFormatted: '₦ 4,800,000',
      tag: 'Grade 5 Titanium',
      collection: 'Monolith Series',
      caseSize: '42 MM',
      dialFinish: 'Sunray Slate',
      strapMaterial: 'Cordovan Leather',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC43Bn0dK6UBFUp5bGhhcKQQ0T5AK37hVJRjBgwGFtc91cu3j1oHrUX3DG1SymOuOOmwKoBFgo1sk0uHuASwSGjrPSM7oCK4_GjbDnGwlB4anLmNNqiVknzVvWiC3sF82JXLtFLJT_hGOmf0SRCVFIuyLZXqG5OxREaWSJVhXiCsBdTuyGxRCbDd5UcltMnAlcN8rPdhgRVLRG-isgIsUm_hWvzhSa8eF2WiJoyYMo9MwXi_R-QsBFybw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIVw-I_kzMudypGAenFvZwLHNxq2akju2_RoUXC6X_8c1NkTACyorKZ-ng8Go5A0oAKJSiKkFgli24rRXp9lk7Rv5nl_OSmp87G9AzXQ0M8eVuZezxLII-C7M-UXn5B74Rfeq-ryGHkNIVhZGAv7AzOEWPNKRN6dO9MQad-oJkh1bQyLWsdRA7WxNzl32mDrllbb0Oi5RxOepy47SXfUs-2alHQe_qk7itfX7imDsjw2CATsrC9Jexwg',
      desc: 'Grade 5 titanium monolithic timepiece with charcoal sunray face, luminous indices, and resilient cordovan leather strap.',
    },
    {
      id: '12',
      edition: 'EDITION 12',
      title: 'KLASSIK III NOIR',
      caliber: 'Caliber J-01 Noir // 38mm',
      details: 'Obsidian Matte • Cordovan Black',
      priceNum: 2750000,
      priceFormatted: '₦ 2,750,000',
      tag: 'Dark Sapphire',
      collection: 'Klassik Minimal',
      caseSize: '38 MM',
      dialFinish: 'Obsidian Matte',
      strapMaterial: 'Cordovan Leather',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfWDkDs2JmdK9I4fHIHpWtTQCRyZZrZn3arip01tl0f2UT5ycu43loF2Xec6rjoknA93GkaZj8gAkaVsPFw9cdkc0MJlsr_sMdyPA8kDBaaeACSKsY8uDSNNqYWMkNx65jFZ-aKZX_CV6PX2fX5cSa_MMvAPpcJARvIXxWyMdEX7pngEsydGKFTW6fbvRViRMLr3odyGGxbcZm6cyGZ9XNfu_Nfpj5cVDcP1hqQ8a-J66H3R_cQRzgXg',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUQvtOQ2Ci7Kwsw0FdLjYacbxb5cSWoPJekXh3VnCFSrN45uWEH2cWxYqodGcZxUyjMRPF_JMS8NX1ERjs_yWPtXwM6dbJw5X-yWTDI9l0QxFUbmdY6gZ7VQSXU1fBcYFtxMtpMw4lrIXrWfo5cUiw0kucZpdYBZ1Av8sS_dav2jN8TwHt5nspFBdTlDj4XZ7H0nGAGcxU-zRDWvl5XdcUAYQ6YDfljD111-welFFH1LZfW2Xwba6wnw',
      desc: 'Deep obsidian matte dial timepiece with black PVD hands, sapphire exhibition back, and fine leather finishing.',
    },
    {
      id: '13',
      edition: 'EDITION 13',
      title: 'CHRONOGRAPHE AUREUS 42',
      caliber: 'Caliber J-08 Aurum // 42mm',
      details: 'Brushed Champagne • Italian Calfskin',
      priceNum: 3950000,
      priceFormatted: '₦ 3,950,000',
      tag: 'Precious Accent',
      collection: 'Chronographe',
      caseSize: '42 MM',
      dialFinish: 'Brushed Champagne',
      strapMaterial: 'Italian Calfskin',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUQvtOQ2Ci7Kwsw0FdLjYacbxb5cSWoPJekXh3VnCFSrN45uWEH2cWxYqodGcZxUyjMRPF_JMS8NX1ERjs_yWPtXwM6dbJw5X-yWTDI9l0QxFUbmdY6gZ7VQSXU1fBcYFtxMtpMw4lrIXrWfo5cUiw0kucZpdYBZ1Av8sS_dav2jN8TwHt5nspFBdTlDj4XZ7H0nGAGcxU-zRDWvl5XdcUAYQ6YDfljD111-welFFH1LZfW2Xwba6wnw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXIZydMzJ_BKROQMDDtFWtJUMsuxxlCjPq934WSSE2pQt-z_aS6OLWvCvkvhSDon-SdJL6ooY9ynqbvoBzPPKWpK0GaqJhDo1lUPlJiDaMQfIBBxvzN6TGKDHAjZmNHGnzqjzUT2unAT96UFv_CV-fD1EzODwNyrG5xzYwFgIXMF3I3-gzlWDbXVhqyHACIKnatmMM6FVKzYo_2tLLoL-v1b2x3sAl1AHgVxbvV2Q9ACC40nE9dpPO6g',
      desc: 'Distinguished 42mm bicompax chronograph featuring a brushed champagne sub-dial matrix and supple hand-stitched Italian calfskin band.',
    },
    {
      id: '14',
      edition: 'EDITION 14',
      title: 'BAUHAUS NOIR 38',
      caliber: 'Caliber J-04 Noir // 38mm',
      details: 'Obsidian Matte • Milanese Mesh',
      priceNum: 2650000,
      priceFormatted: '₦ 2,650,000',
      tag: 'Monochrome Edition',
      collection: 'Bauhaus Automatik',
      caseSize: '38 MM',
      dialFinish: 'Obsidian Matte',
      strapMaterial: 'Milanese Mesh',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC43Bn0dK6UBFUp5bGhhcKQQ0T5AK37hVJRjBgwGFtc91cu3j1oHrUX3DG1SymOuOOmwKoBFgo1sk0uHuASwSGjrPSM7oCK4_GjbDnGwlB4anLmNNqiVknzVvWiC3sF82JXLtFLJT_hGOmf0SRCVFIuyLZXqG5OxREaWSJVhXiCsBdTuyGxRCbDd5UcltMnAlcN8rPdhgRVLRG-isgIsUm_hWvzhSa8eF2WiJoyYMo9MwXi_R-QsBFybw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg0epJ7pMjlLzoTVQkmMn6XouXHSNwZ4jw0e1bf92NUrJTdYmzrfGlCGapD-fQNm_xerMOYzM7YgPsvGqKJLZXEGF-8MoHoymlKNMrU3xCtCefQzJ_51ilFIwRMKegpyVaU-q1PcNAdB5xFSUaTLYMpujH14SzMiaD5NNdG3tm3AqP-KU4dMj8RQQ3tw58t-Gw6F7I6i3a2sk8wTBcNCUfJtuJoQqmkEudDTuwHwqKxGcx_XCuaU8o-Q',
      desc: 'Obsidian matte dial with minimalist Bauhaus geometry paired with fluid black Milanese steel mesh strap.',
    },
    {
      id: '15',
      edition: 'EDITION 15',
      title: 'MONOLITH EXECUTIVE 40',
      caliber: 'Caliber J-09 Executive // 40mm',
      details: 'Sunray Slate • Matte PVD Steel',
      priceNum: 4500000,
      priceFormatted: '₦ 4,500,000',
      tag: 'Atelier Executive',
      collection: 'Monolith Series',
      caseSize: '40 MM',
      dialFinish: 'Sunray Slate',
      strapMaterial: 'Matte PVD Steel',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnJD6m3oGysAaNqlJxZNFONpR7j6FR3AeVtLKxJgecqBNvTHZtkmtMwRS5ScHxucDzjPhZWJuBcmXRT0Lqw67jJCsFbCD1Tei_el_lwrTTpa9mguJlvxRJh5_1ZbHSG7vcWOwdq3Fs0J_5CnytGbAfuTlPX-St4K-UVeb4bKs-zKqAETArBvYbCVYmLyLmTam5jVnvAzGIXLEaVht-e6QFLH2oGBekHH4lIfluZWVqGO2O76mQYnPRGQ',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3DWukIPcC1FEUYDyOoNooYnfy2qt0OcmDbPXqCtGYWO5SecVnqB-rfOnHabTKejqbwmeEjkVC9Gy_-Winy0EchTzDQLgioGadrrZudibDQHT10GQgJBGEWsOYE5hb0nRrZFDKRErQRSH5l0SESf8vXFpqJfrMhVznORmyCEDbIvTIEIZmEbIU2VRWkNb-2h56EawcCRc0IQ-q-zzYvbEZpHaVnj3UoPWMZ62rT6nKcVstZk__A9pF8Q',
      desc: 'Executive 40mm titanium monolithic case featuring a sunray slate dial face and integrated PVD steel link bracelet.',
    },
  ];

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = allProducts.filter((product) => {
      // Collection filter
      if (selectedCollections.length > 0 && !selectedCollections.includes(product.collection)) {
        return false;
      }
      // Case Size filter
      if (selectedSizes.length > 0 && !selectedSizes.includes(product.caseSize)) {
        return false;
      }
      // Dial Finish filter
      if (selectedDials.length > 0 && !selectedDials.includes(product.dialFinish)) {
        return false;
      }
      // Strap Material filter
      if (selectedStraps.length > 0 && !selectedStraps.includes(product.strapMaterial)) {
        return false;
      }
      // Max Price filter
      if (product.priceNum > maxPrice) {
        return false;
      }
      return true;
    });

    // Sorting
    if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.priceNum - b.priceNum);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.priceNum - a.priceNum);
    } else if (sortBy === 'Release Date: Newest First') {
      result.sort((a, b) => Number(b.id) - Number(a.id));
    } else if (sortBy === 'Case Caliber: Automatic') {
      result = result.filter((p) => p.caliber.toLowerCase().includes('caliber') || p.title.toLowerCase().includes('automatik'));
    }

    return result;
  }, [selectedCollections, selectedSizes, selectedDials, selectedStraps, maxPrice, sortBy]);

  return (
    <div className="bg-background text-on-background antialiased selection:bg-primary-container selection:text-on-primary-container min-h-screen">
      {/* EDITORIAL CATEGORY HEADER */}
      <section className="w-full border-b border-surface-variant bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-margin md:px-margin-desktop py-space-xl lg:py-space-2xl">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center space-x-3">
                <span className="w-8 h-[1px] bg-primary"></span>
                <span className="font-label-uppercase text-label-uppercase text-primary uppercase tracking-widest">
                  NIGERIAN HOROLOGY & ARCHITECTURE
                </span>
              </div>
              <h1 className="font-display-hero text-headline-xl md:text-display-hero text-on-surface tracking-widest leading-none uppercase font-normal">
                COLLECTIONS & EDITIONS
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed pt-2">
                Engineered through rigorous chronometric disciplines and calibrated in our Lagos ateliers. Each monolithic dial is hand-finished with surgical precision, balanced between architectural discipline and timeless mechanical poetry.
              </p>
            </div>
            <div className="flex flex-col items-start lg:items-end space-y-2 border-t lg:border-t-0 pt-4 lg:pt-0 border-surface-variant">
              <span className="font-technical-data text-technical-data uppercase tracking-widest text-secondary">
                CATALOG ARCHIVE // 2025
              </span>
              <div className="flex items-center space-x-2">
                <span className="inline-block w-2 h-2 rounded-full bg-primary-container"></span>
                <span className="font-label-uppercase text-label-uppercase text-on-surface font-semibold tracking-widest">
                  Showing {filteredProducts.length} Timepieces
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER, SORT & PRODUCT CATALOG MAIN SECTION */}
      <main className="max-w-7xl mx-auto px-margin md:px-margin-desktop py-space-xl">
        {/* Top Horizontal Filter / Sort Controller */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between pb-8 mb-8 border-b border-surface-variant gap-4">
          <div className="flex items-center space-x-4">
            {/* Mobile Filter Toggle */}
            <button
              className="lg:hidden inline-flex items-center gap-2 font-technical-data text-technical-data text-on-surface tracking-widest font-semibold border border-surface-variant px-4 py-2 hover:border-primary transition-colors"
              onClick={() => setIsMobileFilterOpen(true)}
            >
              <SlidersHorizontal size={14} />
              FILTERS
            </button>
            <span className="hidden lg:inline-flex font-technical-data text-technical-data text-on-surface tracking-widest font-semibold items-center gap-2">
              <span className="material-symbols-outlined text-sm">tune</span> SPECIFICATION FILTERS
            </span>
            <button
              className="font-technical-data text-technical-data uppercase tracking-widest text-secondary hover:text-primary transition-colors underline underline-offset-4 cursor-pointer"
              onClick={resetFilters}
            >
              Reset All
            </button>
          </div>
          <div className="flex items-center space-x-4 self-stretch md:self-auto justify-between md:justify-end">
            <label className="font-label-uppercase text-label-uppercase text-secondary uppercase" htmlFor="sortDropdown">
              Sort By:
            </label>
            <div className="relative inline-block">
              <select
                id="sortDropdown"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-surface-container-low border border-surface-variant text-on-surface font-technical-data text-technical-data uppercase tracking-widest py-2.5 pl-4 pr-10 focus:outline-none focus:border-primary cursor-pointer"
              >
                <option value="Curated Atelier Selection">Curated Atelier Selection</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Release Date: Newest First">Release Date: Newest First</option>
                <option value="Case Caliber: Automatic">Case Caliber: Automatic</option>
              </select>
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-secondary text-sm">
                expand_more
              </span>
            </div>
          </div>
        </div>

        {/* Asymmetric Workbench Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* STICKY FILTER PANEL (3 Columns on Desktop, hidden on mobile) */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6 lg:sticky lg:top-28">
            {/* Accordion Item 1: Collection */}
            <div className="border border-surface-variant bg-surface-container-lowest p-5">
              <div
                className="flex items-center justify-between cursor-pointer select-none"
                onClick={() => toggleAccordion('collection')}
              >
                <h2 className="font-headline-md text-body-md font-semibold text-on-surface tracking-wider">
                  01 // COLLECTION
                </h2>
                <span className="material-symbols-outlined text-secondary text-sm transition-transform duration-200">
                  {openAccordions.collection ? 'remove' : 'add'}
                </span>
              </div>
              {openAccordions.collection && (
                <div className="mt-4 space-y-2.5 pt-2 border-t border-surface-variant/50">
                  {[
                    { name: 'Klassik Minimal', count: '04' },
                    { name: 'Chronographe', count: '03' },
                    { name: 'Bauhaus Automatik', count: '03' },
                    { name: 'Monolith Series', count: '02' },
                  ].map((col) => (
                    <label
                      key={col.name}
                      className="flex items-center justify-between text-on-surface-variant hover:text-on-surface cursor-pointer font-body-sm text-body-sm group"
                    >
                      <span className="flex items-center space-x-2.5">
                        <input
                          type="checkbox"
                          checked={selectedCollections.includes(col.name)}
                          onChange={() => handleCollectionChange(col.name)}
                          className="custom-checkbox w-4 h-4 border border-outline focus:ring-0 text-primary-container cursor-pointer"
                        />
                        <span>{col.name}</span>
                      </span>
                      <span className="font-technical-data text-technical-data text-secondary group-hover:text-primary">
                        {col.count}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Accordion Item 2: Case Diameter */}
            <div className="border border-surface-variant bg-surface-container-lowest p-5">
              <div
                className="flex items-center justify-between cursor-pointer select-none"
                onClick={() => toggleAccordion('case')}
              >
                <h2 className="font-headline-md text-body-md font-semibold text-on-surface tracking-wider">
                  02 // CASE DIAMETER
                </h2>
                <span className="material-symbols-outlined text-secondary text-sm transition-transform duration-200">
                  {openAccordions.case ? 'remove' : 'add'}
                </span>
              </div>
              {openAccordions.case && (
                <div className="mt-4 grid grid-cols-2 gap-2 pt-2 border-t border-surface-variant/50">
                  {['36 MM', '38 MM', '40 MM', '42 MM'].map((size) => {
                    const isSelected = selectedSizes.includes(size);
                    return (
                      <button
                        key={size}
                        type="button"
                        onClick={() => handleSizeToggle(size)}
                        className={`p-2 text-center font-technical-data text-technical-data tracking-widest transition-colors ${
                          isSelected
                            ? 'border border-primary bg-primary-container/10 text-primary font-semibold'
                            : 'border border-surface-variant text-on-surface hover:border-primary hover:bg-surface-container-low'
                        }`}
                      >
                        {size}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Accordion Item 3: Dial Finish */}
            <div className="border border-surface-variant bg-surface-container-lowest p-5">
              <div
                className="flex items-center justify-between cursor-pointer select-none"
                onClick={() => toggleAccordion('dial')}
              >
                <h2 className="font-headline-md text-body-md font-semibold text-on-surface tracking-wider">
                  03 // DIAL FINISH
                </h2>
                <span className="material-symbols-outlined text-secondary text-sm transition-transform duration-200">
                  {openAccordions.dial ? 'remove' : 'add'}
                </span>
              </div>
              {openAccordions.dial && (
                <div className="mt-4 space-y-2.5 pt-2 border-t border-surface-variant/50">
                  {[
                    { name: 'Opaline White', color: 'bg-[#F5F5F0]' },
                    { name: 'Sunray Slate', color: 'bg-[#686B73]' },
                    { name: 'Obsidian Matte', color: 'bg-[#1A1A1A]' },
                    { name: 'Brushed Champagne', color: 'bg-[#D8C29D]' },
                  ].map((dial) => {
                    const isSelected = selectedDials.includes(dial.name);
                    return (
                      <label
                        key={dial.name}
                        onClick={() => handleDialToggle(dial.name)}
                        className={`flex items-center space-x-3 cursor-pointer font-body-sm text-body-sm transition-colors ${
                          isSelected ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-on-surface'
                        }`}
                      >
                        <span className={`w-3.5 h-3.5 rounded-full border border-outline-variant ${dial.color}`}></span>
                        <span>{dial.name}</span>
                      </label>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Accordion Item 4: Strap Material */}
            <div className="border border-surface-variant bg-surface-container-lowest p-5">
              <div
                className="flex items-center justify-between cursor-pointer select-none"
                onClick={() => toggleAccordion('strap')}
              >
                <h2 className="font-headline-md text-body-md font-semibold text-on-surface tracking-wider">
                  04 // STRAP MATERIAL
                </h2>
                <span className="material-symbols-outlined text-secondary text-sm transition-transform duration-200">
                  {openAccordions.strap ? 'remove' : 'add'}
                </span>
              </div>
              {openAccordions.strap && (
                <div className="mt-4 space-y-2.5 pt-2 border-t border-surface-variant/50">
                  {['Italian Calfskin', 'Milanese Mesh', 'Matte PVD Steel', 'Cordovan Leather'].map((strap) => (
                    <label
                      key={strap}
                      className="flex items-center space-x-2 text-on-surface-variant hover:text-on-surface cursor-pointer font-body-sm text-body-sm"
                    >
                      <input
                        type="checkbox"
                        checked={selectedStraps.includes(strap)}
                        onChange={() => handleStrapToggle(strap)}
                        className="custom-checkbox w-4 h-4 border border-outline text-primary-container"
                      />
                      <span>{strap}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Price Range Slider */}
            <div className="border border-surface-variant bg-surface-container-lowest p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-headline-md text-body-md font-semibold text-on-surface tracking-wider">
                  05 // PRICE RANGE
                </h2>
                <span className="font-technical-data text-technical-data text-primary font-bold">
                  UP TO ₦{(maxPrice / 1000000).toFixed(2)}M
                </span>
              </div>
              <div className="pt-2">
                <input
                  type="range"
                  min={1500000}
                  max={6000000}
                  step={250000}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full h-1 bg-surface-variant appearance-none cursor-pointer"
                />
                <div className="flex justify-between items-center mt-3 font-technical-data text-technical-data text-secondary tracking-widest">
                  <span>₦1.5M</span>
                  <span className="text-primary-container font-semibold">MID: ₦3.5M</span>
                  <span>₦6.0M+</span>
                </div>
              </div>
            </div>

            {/* Quick Assistance Card */}
            <div className="border border-surface-variant/80 bg-surface-container-low p-6 text-center space-y-3">
              <span className="material-symbols-outlined text-primary text-2xl">support_agent</span>
              <h3 className="font-headline-md text-body-sm tracking-wider font-semibold text-on-surface">
                ATELIER CONCIERGE
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Need consultation regarding case proportions, bespoke strap leathers, or private viewing appointments in Lagos or Abuja?
              </p>
              <a
                href="#concierge"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Thank you for contacting Juwade Concierge. Our atelier representative will reach out shortly.');
                }}
                className="inline-block pt-1 font-label-uppercase text-label-uppercase tracking-widest text-primary hover:text-on-surface border-b border-primary uppercase"
              >
                Schedule Consultation
              </a>
            </div>
          </aside>

          {/* PRODUCT MATRIX (full-width on mobile, 9 Columns on Desktop - 3-Column Grid) */}
          <section aria-label="Product Showcase" className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="p-12 text-center bg-surface-container-lowest border border-surface-variant space-y-4">
                <span className="material-symbols-outlined text-4xl text-secondary">manage_search</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">No Timepieces Match Your Filter</h3>
                <p className="font-body-sm text-body-sm text-secondary">
                  Try adjusting your case diameter, collection selection, or price slider.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="px-6 py-3 bg-on-surface text-surface font-label-uppercase text-label-uppercase tracking-widest uppercase hover:bg-primary transition-colors mt-2"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map((item) => (
                  <article
                    key={item.id}
                    className="group relative bg-surface-container-lowest border border-surface-variant hover:border-primary-container transition-all duration-300 flex flex-col justify-between cursor-pointer"
                    onClick={() => setSelectedProduct(item)}
                  >
                    <div className="relative w-full aspect-[4/5] bg-[#F6F3F2] overflow-hidden flex items-center justify-center p-8">
                      <span className="absolute top-3 left-3 font-technical-data text-technical-data tracking-widest text-secondary uppercase z-10">
                        {item.edition}
                      </span>
                      <span className="absolute top-3 right-3 font-technical-data text-technical-data tracking-widest text-primary font-semibold z-10">
                        {item.tag}
                      </span>

                      {/* Primary Watch Image */}
                      <img
                        className="w-full h-full object-contain transition-opacity duration-500 group-hover:opacity-0 scale-95 group-hover:scale-100"
                        src={item.img1}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/timepiece.png';
                        }}
                        alt={item.title}
                      />

                      {/* Secondary Hover Angle Image */}
                      <img
                        className="w-full h-full object-contain absolute inset-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100"
                        src={item.img2}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/caliber.png';
                        }}
                        alt={`${item.title} profile angle`}
                      />

                      {/* Quick Select Overlay Action */}
                      <div className="absolute inset-x-4 bottom-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <button
                          className="w-full h-11 bg-on-surface text-surface font-label-uppercase text-label-uppercase uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center space-x-2"
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProduct(item);
                          }}
                        >
                          <span>Select Strap & Size</span>
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                      </div>
                    </div>

                    <div className="p-5 border-t border-surface-variant flex flex-col justify-between flex-grow">
                      <div>
                        <p className="font-technical-data text-technical-data text-secondary tracking-widest uppercase">
                          {item.caliber}
                        </p>
                        <h3 className="font-headline-md text-body-lg text-on-surface tracking-wider font-semibold uppercase mt-1">
                          {item.title}
                        </h3>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          {item.details}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-surface-variant/40 flex items-center justify-between">
                        <span className="font-body-md text-body-md font-semibold text-on-surface tracking-wider">
                          {item.priceFormatted}
                        </span>
                        <span className="font-technical-data text-technical-data text-primary tracking-widest uppercase">
                          {item.caseSize}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      {/* QUICK INSPECT & ORDER MODAL */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-surface max-w-2xl w-full border border-surface-variant p-space-lg relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-on-surface hover:text-primary cursor-pointer p-1"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg items-center">
              <div className="w-full aspect-square bg-surface-container-low border border-surface-variant overflow-hidden p-4 flex items-center justify-center">
                <img
                  src={selectedProduct.img1}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/timepiece.png';
                  }}
                  alt={selectedProduct.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <span className="font-technical-data text-technical-data text-primary block">
                    {selectedProduct.edition} • {selectedProduct.tag}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface uppercase mt-1">
                    {selectedProduct.title}
                  </h3>
                  <p className="font-technical-data text-technical-data text-secondary mt-1">
                    {selectedProduct.caliber}
                  </p>
                </div>
                <p className="font-body-sm text-body-sm text-secondary leading-relaxed">
                  {selectedProduct.desc}
                </p>
                <div className="space-y-1 font-technical-data text-technical-data text-on-surface-variant pt-2 border-t border-surface-variant/60">
                  <div>COLLECTION: <span className="text-on-surface font-semibold">{selectedProduct.collection}</span></div>
                  <div>DIAL FINISH: <span className="text-on-surface font-semibold">{selectedProduct.dialFinish}</span></div>
                  <div>STRAP MATERIAL: <span className="text-on-surface font-semibold">{selectedProduct.strapMaterial}</span></div>
                </div>
                <div className="pt-4 border-t border-surface-variant flex items-center justify-between">
                  <span className="font-title-sm text-title-sm text-on-surface font-bold">
                    {selectedProduct.priceFormatted}
                  </span>
                  <button
                    className="px-space-md py-3 bg-on-surface text-surface font-label-uppercase text-label-uppercase tracking-widest uppercase hover:bg-primary-container hover:text-on-primary-container transition-colors cursor-pointer"
                    onClick={() => {
                      alert(`Inquiry received for ${selectedProduct.title}. A Juwade concierge specialist will contact you.`);
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

      {/* MOBILE FILTER DRAWER */}
      {isMobileFilterOpen && (
        <div
          className="fixed inset-0 z-50 bg-inverse-surface/60 backdrop-blur-sm flex"
          onClick={() => setIsMobileFilterOpen(false)}
        >
          <div
            className="ml-auto w-full max-w-sm h-full bg-surface flex flex-col overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-surface-variant">
              <span className="font-headline-md text-body-md font-semibold text-on-surface tracking-wider uppercase">Filters</span>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="text-on-surface hover:text-primary transition-colors"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>
            {/* Filter Content */}
            <div className="flex-1 p-6 space-y-6">
              {/* Collection */}
              <div className="border border-surface-variant bg-surface-container-lowest p-5">
                <div className="flex items-center justify-between cursor-pointer select-none" onClick={() => toggleAccordion('collection')}>
                  <h2 className="font-headline-md text-body-md font-semibold text-on-surface tracking-wider">01 // COLLECTION</h2>
                  <span className="material-symbols-outlined text-secondary text-sm">{openAccordions.collection ? 'remove' : 'add'}</span>
                </div>
                {openAccordions.collection && (
                  <div className="mt-4 space-y-2.5 pt-2 border-t border-surface-variant/50">
                    {[{ name: 'Klassik Minimal', count: '04' }, { name: 'Chronographe', count: '03' }, { name: 'Bauhaus Automatik', count: '03' }, { name: 'Monolith Series', count: '02' }].map((col) => (
                      <label key={col.name} className="flex items-center justify-between text-on-surface-variant hover:text-on-surface cursor-pointer font-body-sm text-body-sm group">
                        <span className="flex items-center space-x-2.5">
                          <input type="checkbox" checked={selectedCollections.includes(col.name)} onChange={() => handleCollectionChange(col.name)} className="custom-checkbox w-4 h-4" />
                          <span>{col.name}</span>
                        </span>
                        <span className="font-technical-data text-technical-data text-secondary group-hover:text-primary">{col.count}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
              {/* Case Diameter */}
              <div className="border border-surface-variant bg-surface-container-lowest p-5">
                <div className="flex items-center justify-between cursor-pointer select-none" onClick={() => toggleAccordion('case')}>
                  <h2 className="font-headline-md text-body-md font-semibold text-on-surface tracking-wider">02 // CASE DIAMETER</h2>
                  <span className="material-symbols-outlined text-secondary text-sm">{openAccordions.case ? 'remove' : 'add'}</span>
                </div>
                {openAccordions.case && (
                  <div className="mt-4 grid grid-cols-2 gap-2 pt-2 border-t border-surface-variant/50">
                    {['36 MM', '38 MM', '40 MM', '42 MM'].map((size) => (
                      <button key={size} type="button" onClick={() => handleSizeToggle(size)}
                        className={`p-2 text-center font-technical-data text-technical-data tracking-widest transition-colors ${selectedSizes.includes(size) ? 'border border-primary bg-primary-container/10 text-primary font-semibold' : 'border border-surface-variant text-on-surface hover:border-primary hover:bg-surface-container-low'}`}>
                        {size}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Price Range */}
              <div className="border border-surface-variant bg-surface-container-lowest p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-headline-md text-body-md font-semibold text-on-surface tracking-wider">03 // PRICE RANGE</h2>
                  <span className="font-technical-data text-technical-data text-primary font-bold">UP TO ₦{(maxPrice / 1000000).toFixed(2)}M</span>
                </div>
                <input type="range" min={1500000} max={6000000} step={250000} value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full h-1 bg-surface-variant appearance-none cursor-pointer" />
              </div>
            </div>
            {/* Drawer Footer */}
            <div className="p-6 border-t border-surface-variant">
              <button
                type="button"
                onClick={() => { setIsMobileFilterOpen(false); }}
                className="w-full h-12 bg-on-surface text-surface font-label-uppercase text-label-uppercase tracking-widest uppercase hover:bg-primary transition-colors"
              >
                Apply Filters ({filteredProducts.length} Results)
              </button>
            </div>
          </div>
        </div>
      )}

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
                  <a className="text-on-surface-variant dark:text-outline-variant font-body-sm text-body-sm hover:text-on-surface dark:hover:text-inverse-on-surface transition-colors duration-200" href="/collections">
                    Collections & Editions
                  </a>
                </li>
                <li>
                  <a className="text-on-surface-variant dark:text-outline-variant font-body-sm text-body-sm hover:text-on-surface dark:hover:text-inverse-on-surface transition-colors duration-200" href="/about">
                    Our Story & Heritage
                  </a>
                </li>
                <li>
                  <a className="text-on-surface-variant dark:text-outline-variant font-body-sm text-body-sm hover:text-on-surface dark:hover:text-inverse-on-surface transition-colors duration-200" href="/#craftsmanship">
                    Atelier Ethics
                  </a>
                </li>
                <li>
                  <a className="text-on-surface-variant dark:text-outline-variant font-body-sm text-body-sm hover:text-on-surface dark:hover:text-inverse-on-surface transition-colors duration-200" href="/about">
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
            {/* Col 4: Technical Details */}
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
    </div>
  );
}
