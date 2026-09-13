import { useState, useMemo } from 'react';
import { SlidersHorizontal, X, Watch } from 'lucide-react';
import { useDocumentTitle } from '@/hooks';

interface Product {
  id: string;
  edition: string;
  brand: string;
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

  // Brand Filter & Sort States
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<string>('Wristwatch Brand (A-Z)');

  // Quick Inspect Modal State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Mobile Filter Drawer State
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((item) => item !== brand) : [...prev, brand]
    );
  };

  const resetFilters = () => {
    setSelectedBrands([]);
    setSortBy('Wristwatch Brand (A-Z)');
  };

  // Luxury Wristwatch Brands Catalog
  const allProducts: Product[] = [
    {
      id: '01',
      edition: 'EDITION 01',
      brand: 'Rolex',
      title: 'ROLEX SUBMARINER DATE',
      caliber: 'Caliber 3235 // 41mm',
      details: 'Opaline White Dial • Oystersteel Bracelet',
      priceNum: 8450000,
      priceFormatted: '₦ 8,450,000',
      tag: 'Certified Pre-Owned',
      collection: 'Professional Dive',
      caseSize: '41 MM',
      dialFinish: 'Opaline White',
      strapMaterial: 'Oystersteel',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgy7PcqF0RPbcnVz2n8KifMIPbJREqIHmYqXGQWRQw5W7KYqTx5wOSAihiR3-UCdVOdjMS3Dx_5Ly-sEVIVJK9Ur_od3bmX2mTMYNZDjq1OwOAu6RFrzsXOnLjUHKliwJXMUrQpqXZ6lKGdnUU97dOJ0Aszy71yR1bxquP4Ct-cQoXCqWNTHKHwib_wxzuFIfsuvGIaVk0G6XY2tD3RBSDBpPhbt5b60dn1yQPxu9WpJmZ-MzT1Y63Aw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMnHWGAZY3RShTLUmcwzAT2YtjHhjQ4waaNpUzvMkpGp6dI6Lg9lK0-f8SBh5GkgEbI5c6_CmxcFyTnqkXddvxub_y6ogOyyA87w-e1OKVYvtnZMr3NuNvYDD4sfsUzhfnrk8nkWnSkPOzlu87A99NyrLLhDlmDJoEap30wzCv2bHqGqspEb8P_fH_niV3A1KPCXrSG8WS61ufQdQ1pmd-EcQ16wwgXLc3r2xHXNANMQVWwd6fUwE5Ag',
      desc: 'The iconic Rolex Submariner Date with opaline white dial and unidirectional rotatable Cerachrom bezel. Precision engineered for marine performance and timeless luxury.',
    },
    {
      id: '02',
      edition: 'EDITION 02',
      brand: 'Patek Philippe',
      title: 'PATEK PHILIPPE NAUTILUS',
      caliber: 'Caliber 26-330 S C // 40mm',
      details: 'Sunray Slate Blue Dial • Integrated Steel',
      priceNum: 42500000,
      priceFormatted: '₦ 42,500,000',
      tag: 'Grand Complication',
      collection: 'Nautilus Series',
      caseSize: '40 MM',
      dialFinish: 'Sunray Slate',
      strapMaterial: 'Integrated Steel',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmsu_XVE0KFO17gWTa5sFA9ZlcTkd1YLd9mtnzwMZyv7PxXUgN5r-V8udriCDR9IGSa1b9aHqovERMZKkgCFqhfhUnHXvTbTWCAkGxSa3hpW6e3b62W28ZBVf-oSTj3kCG7FBDoNITPHv1nYa_gsv_-ZWylxORo_J4ChlT1eBCvwAAe83KGG9PbZ7nDHtotpOrefIAfVJme26ugSsGWzKWDIhOdfjNjo7rNqi7oY-8YeCk6x7bPlJXZw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXIZydMzJ_BKROQMDDtFWtJUMsuxxlCjPq934WSSE2pQt-z_aS6OLWvCvkvhSDon-SdJL6ooY9ynqbvoBzPPKWpK0GaqJhDo1lUPlJiDaMQfIBBxvzN6TGKDHAjZmNHGnzqjzUT2unAT96UFv_CV-fD1EzODwNyrG5xzYwFgIXMF3I3-gzlWDbXVhqyHACIKnatmMM6FVKzYo_2tLLoL-v1b2x3sAl1AHgVxbvV2Q9ACC40nE9dpPO6g',
      desc: 'Patek Philippe Nautilus with horizontal embossed slate blue dial. Rounded octagonal bezel construction with sapphire crystal case back exhibiting hand-decorated movement.',
    },
    {
      id: '03',
      edition: 'EDITION 03',
      brand: 'Audemars Piguet',
      title: 'AUDEMARS PIGUET ROYAL OAK',
      caliber: 'Caliber 4302 // 41mm',
      details: 'Grande Tapisserie Black Dial • Steel Case',
      priceNum: 32000000,
      priceFormatted: '₦ 32,000,000',
      tag: 'Iconic Octagon',
      collection: 'Royal Oak',
      caseSize: '41 MM',
      dialFinish: 'Obsidian Matte',
      strapMaterial: 'Stainless Steel',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmkDRBBipnt8OWmP7RRUv7wU_YMII-GhIbbV-p8X9eTqQXDx6Ot7SPB_aBlqZguK6ceHsRMeuETwOS-Oy3KvotmX0GRiPQTH2IBkmqNPc90kbLS4N751qEDoHBK2iRsw1jQGgAaKJ6MdoZqax81AHHKHmDQKCAhqWGklMagW0_vx2LOFes47ye8vP4yHM_sNeYqZnOvYZb2ZcIeWQExC-P25YpmgPgyCewISHc518HjL6CLBpJ4MIuug',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqhsFekLXkc7yHSibSByGMJzfKBXr546cxO4NY_fLt_nMjCi2sugq0kamlq25UZ5g4IcS2Ea4KViiWHJtMVXroGgEBbG0ahVGzCmxjL7rFHvIUDHxzMu9Wnzy0pH26Wpj5jrpdRY5o8neONQc_Z9zXUDCb4UkJB4TNd8lspKustcr0hz9v04qHFIo8zb4h7DOrT9kBuTWuYzmiDKufLlYfY4E8eZUBDaA0JQFk4jZOnMioy7E2gdZAAw',
      desc: 'Audemars Piguet Royal Oak Selfwinding featuring black Grande Tapisserie dial, white gold applied hour-markers, and hand-brushed octagonal bezel with exposed hexagonal screws.',
    },
    {
      id: '04',
      edition: 'EDITION 04',
      brand: 'Omega',
      title: 'OMEGA SPEEDMASTER MOONWATCH',
      caliber: 'Caliber 3861 // 42mm',
      details: 'Obsidian Matte Dial • Hesalite Crystal',
      priceNum: 6200000,
      priceFormatted: '₦ 6,200,000',
      tag: 'Flight-Qualified',
      collection: 'Speedmaster',
      caseSize: '42 MM',
      dialFinish: 'Obsidian Matte',
      strapMaterial: 'Brushed Steel',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnJD6m3oGysAaNqlJxZNFONpR7j6FR3AeVtLKxJgecqBNvTHZtkmtMwRS5ScHxucDzjPhZWJuBcmXRT0Lqw67jJCsFbCD1Tei_el_lwrTTpa9mguJlvxRJh5_1ZbHSG7vcWOwdq3Fs0J_5CnytGbAfuTlPX-St4K-UVeb4bKs-zKqAETArBvYbCVYmLyLmTam5jVnvAzGIXLEaVht-e6QFLH2oGBekHH4lIfluZWVqGO2O76mQYnPRGQ',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIVw-I_kzMudypGAenFvZwLHNxq2akju2_RoUXC6X_8c1NkTACyorKZ-ng8Go5A0oAKJSiKkFgli24rRXp9lk7Rv5nl_OSmp87G9AzXQ0M8eVuZezxLII-C7M-UXn5B74Rfeq-ryGHkNIVhZGAv7AzOEWPNKRN6dO9MQad-oJkh1bQyLWsdRA7WxNzl32mDrllbb0Oi5RxOepy47SXfUs-2alHQe_qk7itfX7imDsjw2CATsrC9Jexwg',
      desc: 'The Omega Speedmaster Professional Moonwatch Co-Axial Master Chronometer. Legendary manual-winding chronograph movement tested in lunar environments.',
    },
    {
      id: '05',
      edition: 'EDITION 05',
      brand: 'Cartier',
      title: 'CARTIER SANTOS DE CARTIER',
      caliber: 'Caliber 1847 MC // 39.8mm',
      details: 'Brushed Silver Dial • QuickSwitch Steel',
      priceNum: 7100000,
      priceFormatted: '₦ 7,100,000',
      tag: 'Signature Square',
      collection: 'Santos',
      caseSize: '38 MM',
      dialFinish: 'Brushed Champagne',
      strapMaterial: 'QuickSwitch Steel',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUQvtOQ2Ci7Kwsw0FdLjYacbxb5cSWoPJekXh3VnCFSrN45uWEH2cWxYqodGcZxUyjMRPF_JMS8NX1ERjs_yWPtXwM6dbJw5X-yWTDI9l0QxFUbmdY6gZ7VQSXU1fBcYFtxMtpMw4lrIXrWfo5cUiw0kucZpdYBZ1Av8sS_dav2jN8TwHt5nspFBdTlDj4XZ7H0nGAGcxU-zRDWvl5XdcUAYQ6YDfljD111-welFFH1LZfW2Xwba6wnw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD30PtlJQg09jIlSEIny0xQ_8qBBWcQty_1gG6YvjoZ0g-xvA3Gsw3DWDGsMFs1dHG-IXLdGQMhp1d2fdUptlfrrG4erbLVYTypgyj5-oVRtCzYdRsCKWZsj4jho5_Lgx4GG96YmdxvlHJi-RJGqb8H6sTqTmUZK4EpG-3n1EvfLzq9lXCm-9z-P5Uxiv3yRu6gMDAz_rZk7STG1WPBqht4SE2VZRYiulH44r7vHQ6ZS59gEqTyT9wLrQ',
      desc: 'Cartier Santos featuring square silvered opaline dial, blued-steel sword-shaped hands, and SmartLink sizing system with QuickSwitch interchangeable leather strap.',
    },
    {
      id: '06',
      edition: 'EDITION 06',
      brand: 'Hublot',
      title: 'HUBLOT BIG BANG UNICO',
      caliber: 'HUB1280 Flyback // 42mm',
      details: 'Skeleton Dial • Black Structured Rubber',
      priceNum: 14650000,
      priceFormatted: '₦ 14,650,000',
      tag: 'Art of Fusion',
      collection: 'Big Bang',
      caseSize: '42 MM',
      dialFinish: 'Obsidian Matte',
      strapMaterial: 'Structured Rubber',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA37tryKAqCWxQf7WcwLPYrE24Bq5_7GJdduGh_0iXBFcmL1rtSl0AknCdGbdUO-7D25YOmr6P5B9ovLzRsd4yUmcL6XGEUomA_Z_eEebuF7Jsxbr5bZ_I5pcZSwmw7vmV7ZjWBHpVK5-890W5Tkk8BvHkh0EPH4RPZDlzGmAn9ocf3bpJ5cKKwkrXeWMbxvoeuE4UYCULSNBl_mfYsUGQm-rgMk5hKkbuOnse5lrEM-mLYld6kXD2qFw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpcH7SypMmUa7KJFNgD53GGUYUReFoAVgZC7XPH5BhYDrW7YmxOcjdAUUifyhlBsWRdZz7i7XTw86thGLJNcdQwuiBiVZkEo4PKFg0OdQh46KePXtTBt7jcA_4vBMY7t-xAjMcBe7fmODUL6pPvm0ZCa-AClM_1JLg-AF41tGapwbvO8rRoEipPAvzn2RiUQVKJVHrJX_oMTuCdJXpi6y5UyQxv-XHUvOyZ7uiMG2jIlHY1k-rCg9QxQ',
      desc: 'Hublot Big Bang Unico Black Magic with micro-blasted black ceramic case, openworked skeleton dial exposing the UNICO manufacture flyback chronograph movement.',
    },
    {
      id: '07',
      edition: 'EDITION 07',
      brand: 'TAG Heuer',
      title: 'TAG HEUER CARRERA CHRONO',
      caliber: 'Calibre Heuer 02 // 39mm',
      details: 'Sunray Blue Dial • Perforated Leather',
      priceNum: 5250000,
      priceFormatted: '₦ 5,250,000',
      tag: 'Glassbox Design',
      collection: 'Carrera',
      caseSize: '38 MM',
      dialFinish: 'Sunray Slate',
      strapMaterial: 'Perforated Leather',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUvWK2shivllvzNnbw5iS28s2FhK72-Nc7MCkyjwv_IS6lA21McDEvGwwQAaqfp0J8RRLc9OPG5bDYVk0_Xozp0o8Yq2B3-yGr_o_tBfRITqaOUVYpsOUx2ODJAZOBrBRaq4iQliT_-aZEwCjAxLPAsQ-4T3I8epyG6mdDeNywT8P6kQGXeCZzAri5DPbPVbTNothwHYmjaTZLf5nGvQ0wlM7XcK0HwXnZ_zzZ-PZdbNKU2L6lPlxCiw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg0epJ7pMjlLzoTVQkmMn6XouXHSNwZ4jw0e1bf92NUrJTdYmzrfGlCGapD-fQNm_xerMOYzM7YgPsvGqKJLZXEGF-8MoHoymlKNMrU3xCtCefQzJ_51ilFIwRMKegpyVaU-q1PcNAdB5xFSUaTLYMpujH14SzMiaD5NNdG3tm3AqP-KU4dMj8RQQ3tw58t-Gw6F7I6i3a2sk8wTBcNCUfJtuJoQqmkEudDTuwHwqKxGcx_XCuaU8o-Q',
      desc: 'TAG Heuer Carrera Glassbox Chronograph featuring dome sapphire crystal, trindex blue sub-dials, and automatic Heuer 02 column-wheel movement.',
    },
    {
      id: '08',
      edition: 'EDITION 08',
      brand: 'Vacheron Constantin',
      title: 'VACHERON CONSTANTIN OVERSEAS',
      caliber: 'Caliber 5100 // 41mm',
      details: 'Deep Blue Lacquer • Interchangeable Strap',
      priceNum: 28500000,
      priceFormatted: '₦ 28,500,000',
      tag: 'Geneva Seal',
      collection: 'Overseas Collection',
      caseSize: '40 MM',
      dialFinish: 'Sunray Slate',
      strapMaterial: 'Interchangeable Steel/Rubber',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6xnGATTNlkmc55ReTqzVOIDGHk-2v65bcW0irp-rLU1oZ3U7T_DWTQhnKEPqRFJbCwrEVhKXbWiK4yNI8Z7zpYtTQwtVG65YgZ1zjnJmYuSuJnpGiGT7xt8nEU1t9K189zQdBZGVpwlRli8XdpnX4meAoanTZbb6Ilgeq-ro-dKVU46_EIa4nJKb3qRyWObfnnOzXK4BxRXX29c1_zWtfdDzNNYA-jOU6iie8m0ettMAg3BsMkKnoBw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3DWukIPcC1FEUYDyOoNooYnfy2qt0OcmDbPXqCtGYWO5SecVnqB-rfOnHabTKejqbwmeEjkVC9Gy_-Winy0EchTzDQLgioGadrrZudibDQHT10GQgJBGEWsOYE5hb0nRrZFDKRErQRSH5l0SESf8vXFpqJfrMhVznORmyCEDbIvTIEIZmEbIU2VRWkNb-2h56EawcCRc0IQ-q-zzYvbEZpHaVnj3UoPWMZ62rT6nKcVstZk__A9pF8Q',
      desc: 'Vacheron Constantin Overseas Self-Winding bearing Hallmarked Geneva Seal. Translucent blue lacquered dial with Maltese cross-inspired bezel structure.',
    },
    {
      id: '09',
      edition: 'EDITION 09',
      brand: 'Breitling',
      title: 'BREITLING NAVITIMER B01',
      caliber: 'Manufacture B01 // 41mm',
      details: 'Silver & Black Dial • Pilot Bracelet',
      priceNum: 7900000,
      priceFormatted: '₦ 7,900,000',
      tag: 'Aviation Legend',
      collection: 'Navitimer',
      caseSize: '41 MM',
      dialFinish: 'Opaline White',
      strapMaterial: 'Steel Pilot Bracelet',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXPbYpnhXwOz2xjQBvKETloT4mGc6biSyaRy_I_syGQfc_Crr-c7jrzXLXlnEvgk2F2bUh-GXDLxpW9vEflCMKRDPHxHOPnQWRA_w3ftZ5UHSBhHWgbTJUD_2C2cr_KRLsYmKUtd-O24z3K7i3W0enmwDaRb1O2FIOmiBH2Vh8fVn2uDff5tx1vXUAvXbD0HeFWKftRqqx72qL42ULMWbrC99K63C0BXt85z2CbAdp2vKqW-JMt_sOkw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgy7PcqF0RPbcnVz2n8KifMIPbJREqIHmYqXGQWRQw5W7KYqTx5wOSAihiR3-UCdVOdjMS3Dx_5Ly-sEVIVJK9Ur_od3bmX2mTMYNZDjq1OwOAu6RFrzsXOnLjUHKliwJXMUrQpqXZ6lKGdnUU97dOJ0Aszy71yR1bxquP4Ct-cQoXCqWNTHKHwib_wxzuFIfsuvGIaVk0G6XY2tD3RBSDBpPhbt5b60dn1yQPxu9WpJmZ-MzT1Y63Aw',
      desc: 'Breitling Navitimer B01 Chronograph 41 featuring circular slide rule bezel, AOPA wings emblem, and COSC-certified Breitling Manufacture Caliber 01.',
    },
    {
      id: '10',
      edition: 'EDITION 10',
      brand: 'Rolex',
      title: 'ROLEX DAYTONA CHRONOGRAPH',
      caliber: 'Caliber 4131 // 40mm',
      details: 'Opaline Panda Dial • Cerachrom Bezel',
      priceNum: 24500000,
      priceFormatted: '₦ 24,500,000',
      tag: 'Iconic Chrono',
      collection: 'Cosmograph Daytona',
      caseSize: '40 MM',
      dialFinish: 'Opaline White',
      strapMaterial: 'Oystersteel',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAi7IrOB4GW9N3jM8za1vfosZ24pgUNocRk4Frs4g7evIbtnUMh1xqdetxYzkcPyVilEb79SAheGvBZsDMS-zQd82gVLJUqboP0sGqf-im3zPt8Hs4AJR7ebl4hHZLczCMWq1vkODfVp4FErjEdlEHFYPPbEZOUdRDkjUOoav-YUA2J_ZTFPuldv32DnH0vG17bdpmSj4-EyLUh3k5y8dKcz-aOh4jUeUYVBRd34eSM9x6BC4qRl1RRmQ',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmkDRBBipnt8OWmP7RRUv7wU_YMII-GhIbbV-p8X9eTqQXDx6Ot7SPB_aBlqZguK6ceHsRMeuETwOS-Oy3KvotmX0GRiPQTH2IBkmqNPc90kbLS4N751qEDoHBK2iRsw1jQGgAaKJ6MdoZqax81AHHKHmDQKCAhqWGklMagW0_vx2LOFes47ye8vP4yHM_sNeYqZnOvYZb2ZcIeWQExC-P25YpmgPgyCewISHc518HjL6CLBpJ4MIuug',
      desc: 'Rolex Cosmograph Daytona in Oystersteel with white opaline "Panda" dial and black Cerachrom tachymetric scale bezel.',
    },
    {
      id: '11',
      edition: 'EDITION 11',
      brand: 'Patek Philippe',
      title: 'PATEK PHILIPPE CALATRAVA',
      caliber: 'Caliber 30-255 PS // 39mm',
      details: 'Clous de Paris Bezel • Alligator Strap',
      priceNum: 21800000,
      priceFormatted: '₦ 21,800,000',
      tag: 'Dress Perfection',
      collection: 'Calatrava',
      caseSize: '38 MM',
      dialFinish: 'Sunray Slate',
      strapMaterial: 'Alligator Leather',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC43Bn0dK6UBFUp5bGhhcKQQ0T5AK37hVJRjBgwGFtc91cu3j1oHrUX3DG1SymOuOOmwKoBFgo1sk0uHuASwSGjrPSM7oCK4_GjbDnGwlB4anLmNNqiVknzVvWiC3sF82JXLtFLJT_hGOmf0SRCVFIuyLZXqG5OxREaWSJVhXiCsBdTuyGxRCbDd5UcltMnAlcN8rPdhgRVLRG-isgIsUm_hWvzhSa8eF2WiJoyYMo9MwXi_R-QsBFybw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIVw-I_kzMudypGAenFvZwLHNxq2akju2_RoUXC6X_8c1NkTACyorKZ-ng8Go5A0oAKJSiKkFgli24rRXp9lk7Rv5nl_OSmp87G9AzXQ0M8eVuZezxLII-C7M-UXn5B74Rfeq-ryGHkNIVhZGAv7AzOEWPNKRN6dO9MQad-oJkh1bQyLWsdRA7WxNzl32mDrllbb0Oi5RxOepy47SXfUs-2alHQe_qk7itfX7imDsjw2CATsrC9Jexwg',
      desc: 'Patek Philippe Calatrava with guilloché hobnail "Clous de Paris" bezel, charcoal grey dial with applied gold hour markers, and hand-stitched alligator strap.',
    },
    {
      id: '12',
      edition: 'EDITION 12',
      brand: 'Audemars Piguet',
      title: 'AUDEMARS PIGUET OFFSHORE',
      caliber: 'Caliber 4401 // 43mm',
      details: 'Méga Tapisserie • Titanium Case',
      priceNum: 29750000,
      priceFormatted: '₦ 29,750,000',
      tag: 'Extreme Diver',
      collection: 'Royal Oak Offshore',
      caseSize: '42 MM',
      dialFinish: 'Obsidian Matte',
      strapMaterial: 'Titanium Link',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfWDkDs2JmdK9I4fHIHpWtTQCRyZZrZn3arip01tl0f2UT5ycu43loF2Xec6rjoknA93GkaZj8gAkaVsPFw9cdkc0MJlsr_sMdyPA8kDBaaeACSKsY8uDSNNqYWMkNx65jFZ-aKZX_CV6PX2fX5cSa_MMvAPpcJARvIXxWyMdEX7pngEsydGKFTW6fbvRViRMLr3odyGGxbcZm6cyGZ9XNfu_Nfpj5cVDcP1hqQ8a-J66H3R_cQRzgXg',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUQvtOQ2Ci7Kwsw0FdLjYacbxb5cSWoPJekXh3VnCFSrN45uWEH2cWxYqodGcZxUyjMRPF_JMS8NX1ERjs_yWPtXwM6dbJw5X-yWTDI9l0QxFUbmdY6gZ7VQSXU1fBcYFtxMtpMw4lrIXrWfo5cUiw0kucZpdYBZ1Av8sS_dav2jN8TwHt5nspFBdTlDj4XZ7H0nGAGcxU-zRDWvl5XdcUAYQ6YDfljD111-welFFH1LZfW2Xwba6wnw',
      desc: 'Audemars Piguet Royal Oak Offshore Selfwinding Chronograph. Grade 5 titanium construction with Méga Tapisserie dial and ceramic pushpieces.',
    },
    {
      id: '13',
      edition: 'EDITION 13',
      brand: 'Juwade Atelier',
      title: 'JUWADE MONOLITH ATELIER',
      caliber: 'Caliber J-01 Lagos // 40mm',
      details: 'Obsidian Matte • Hand-stitched Nigerian Leather',
      priceNum: 3950000,
      priceFormatted: '₦ 3,950,000',
      tag: 'Lagos Bespoke',
      collection: 'Monolith Series',
      caseSize: '40 MM',
      dialFinish: 'Obsidian Matte',
      strapMaterial: 'Nigerian Calfskin',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUQvtOQ2Ci7Kwsw0FdLjYacbxb5cSWoPJekXh3VnCFSrN45uWEH2cWxYqodGcZxUyjMRPF_JMS8NX1ERjs_yWPtXwM6dbJw5X-yWTDI9l0QxFUbmdY6gZ7VQSXU1fBcYFtxMtpMw4lrIXrWfo5cUiw0kucZpdYBZ1Av8sS_dav2jN8TwHt5nspFBdTlDj4XZ7H0nGAGcxU-zRDWvl5XdcUAYQ6YDfljD111-welFFH1LZfW2Xwba6wnw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXIZydMzJ_BKROQMDDtFWtJUMsuxxlCjPq934WSSE2pQt-z_aS6OLWvCvkvhSDon-SdJL6ooY9ynqbvoBzPPKWpK0GaqJhDo1lUPlJiDaMQfIBBxvzN6TGKDHAjZmNHGnzqjzUT2unAT96UFv_CV-fD1EzODwNyrG5xzYwFgIXMF3I3-gzlWDbXVhqyHACIKnatmMM6FVKzYo_2tLLoL-v1b2x3sAl1AHgVxbvV2Q9ACC40nE9dpPO6g',
      desc: 'Contemporary Nigerian horology masterpiece crafted in Victoria Island ateliers. Matte obsidian titanium case with hand-calibrated automatic movement.',
    },
    {
      id: '14',
      edition: 'EDITION 14',
      brand: 'Cartier',
      title: 'CARTIER TANK MUST XL',
      caliber: 'Caliber 1847 MC // 31mm',
      details: 'Silver Flinqué Dial • Grained Leather',
      priceNum: 4650000,
      priceFormatted: '₦ 4,650,000',
      tag: 'Art Deco Classic',
      collection: 'Tank',
      caseSize: '36 MM',
      dialFinish: 'Opaline White',
      strapMaterial: 'Grained Leather',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC43Bn0dK6UBFUp5bGhhcKQQ0T5AK37hVJRjBgwGFtc91cu3j1oHrUX3DG1SymOuOOmwKoBFgo1sk0uHuASwSGjrPSM7oCK4_GjbDnGwlB4anLmNNqiVknzVvWiC3sF82JXLtFLJT_hGOmf0SRCVFIuyLZXqG5OxREaWSJVhXiCsBdTuyGxRCbDd5UcltMnAlcN8rPdhgRVLRG-isgIsUm_hWvzhSa8eF2WiJoyYMo9MwXi_R-QsBFybw',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAg0epJ7pMjlLzoTVQkmMn6XouXHSNwZ4jw0e1bf92NUrJTdYmzrfGlCGapD-fQNm_xerMOYzM7YgPsvGqKJLZXEGF-8MoHoymlKNMrU3xCtCefQzJ_51ilFIwRMKegpyVaU-q1PcNAdB5xFSUaTLYMpujH14SzMiaD5NNdG3tm3AqP-KU4dMj8RQQ3tw58t-Gw6F7I6i3a2sk8wTBcNCUfJtuJoQqmkEudDTuwHwqKxGcx_XCuaU8o-Q',
      desc: 'Cartier Tank Must XL automatic watch with rectangular silver flinqué dial, Roman numerals, cabochon synthetic spinel crown, and supple black leather band.',
    },
    {
      id: '15',
      edition: 'EDITION 15',
      brand: 'Omega',
      title: 'OMEGA SEAMASTER DIVER 300M',
      caliber: 'Caliber 8800 // 42mm',
      details: 'Laser-Engraved Wave Dial • Steel Mesh',
      priceNum: 5500000,
      priceFormatted: '₦ 5,500,000',
      tag: 'Co-Axial Master',
      collection: 'Seamaster',
      caseSize: '42 MM',
      dialFinish: 'Sunray Slate',
      strapMaterial: 'Steel Mesh',
      img1: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnJD6m3oGysAaNqlJxZNFONpR7j6FR3AeVtLKxJgecqBNvTHZtkmtMwRS5ScHxucDzjPhZWJuBcmXRT0Lqw67jJCsFbCD1Tei_el_lwrTTpa9mguJlvxRJh5_1ZbHSG7vcWOwdq3Fs0J_5CnytGbAfuTlPX-St4K-UVeb4bKs-zKqAETArBvYbCVYmLyLmTam5jVnvAzGIXLEaVht-e6QFLH2oGBekHH4lIfluZWVqGO2O76mQYnPRGQ',
      img2: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3DWukIPcC1FEUYDyOoNooYnfy2qt0OcmDbPXqCtGYWO5SecVnqB-rfOnHabTKejqbwmeEjkVC9Gy_-Winy0EchTzDQLgioGadrrZudibDQHT10GQgJBGEWsOYE5hb0nRrZFDKRErQRSH5l0SESf8vXFpqJfrMhVznORmyCEDbIvTIEIZmEbIU2VRWkNb-2h56EawcCRc0IQ-q-zzYvbEZpHaVnj3UoPWMZ62rT6nKcVstZk__A9pF8Q',
      desc: 'Omega Seamaster Diver 300M featuring laser-engraved blue wave dial, helium escape valve, and METAS certified Master Chronometer Caliber 8800.',
    },
  ];

  // List of distinct brands with watch counts
  const brandListWithCounts = useMemo(() => {
    const counts: { [key: string]: number } = {};
    allProducts.forEach((p) => {
      counts[p.brand] = (counts[p.brand] || 0) + 1;
    });
    return Object.keys(counts).map((brand) => ({
      brand,
      count: counts[brand],
    }));
  }, [allProducts]);

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = allProducts.filter((product) => {
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }
      return true;
    });

    // Sorting Logic
    if (sortBy === 'Wristwatch Brand (A-Z)') {
      result.sort((a, b) => a.brand.localeCompare(b.brand));
    } else if (sortBy === 'Wristwatch Brand (Z-A)') {
      result.sort((a, b) => b.brand.localeCompare(a.brand));
    } else if (sortBy === 'Price: Low to High') {
      result.sort((a, b) => a.priceNum - b.priceNum);
    } else if (sortBy === 'Price: High to Low') {
      result.sort((a, b) => b.priceNum - a.priceNum);
    } else if (sortBy === 'Release Date: Newest First') {
      result.sort((a, b) => Number(b.id) - Number(a.id));
    }

    return result;
  }, [allProducts, selectedBrands, sortBy]);

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
                  LUXURY TIMEPIECE SELECTION
                </span>
              </div>
              <h1 className="font-display-hero text-headline-xl md:text-display-hero text-on-surface tracking-widest leading-none uppercase font-normal">
                WRISTWATCH BRANDS & CATALOG
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed pt-2">
                Explore legendary luxury watchmakers and haute horlogerie editions available through Juwade. Authenticated, calibrated, and serviced in our Lagos ateliers with full international provenance guarantee.
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

      {/* MAIN CATALOG & BRAND FILTER SECTION */}
      <main className="max-w-7xl mx-auto px-margin md:px-margin-desktop py-space-xl">
        {/* Top Filter & Sort Bar Controller */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between pb-8 mb-8 border-b border-surface-variant gap-4">
          <div className="flex items-center space-x-4">
            {/* Mobile Filter Trigger */}
            <button
              className="lg:hidden inline-flex items-center gap-2 font-technical-data text-technical-data text-on-surface tracking-widest font-semibold border border-surface-variant px-4 py-2 hover:border-primary transition-colors"
              onClick={() => setIsMobileFilterOpen(true)}
            >
              <SlidersHorizontal size={14} />
              FILTER BY BRAND
            </button>
            <span className="hidden lg:inline-flex font-technical-data text-technical-data text-on-surface tracking-widest font-semibold items-center gap-2">
              <Watch size={16} className="text-primary" /> WRISTWATCH BRAND FILTER
            </span>
            {selectedBrands.length > 0 && (
              <button
                className="font-technical-data text-technical-data uppercase tracking-widest text-secondary hover:text-primary transition-colors underline underline-offset-4 cursor-pointer"
                onClick={resetFilters}
              >
                Reset Brand Filter ({selectedBrands.length})
              </button>
            )}
          </div>

          {/* Sort Controller */}
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
                <option value="Wristwatch Brand (A-Z)">Wristwatch Brand (A-Z)</option>
                <option value="Wristwatch Brand (Z-A)">Wristwatch Brand (Z-A)</option>
                <option value="Price: Low to High">Price: Low to High</option>
                <option value="Price: High to Low">Price: High to Low</option>
                <option value="Release Date: Newest First">Release Date: Newest First</option>
              </select>
              <span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-secondary text-sm">
                expand_more
              </span>
            </div>
          </div>
        </div>

        {/* Workbench Layout: Left Sidebar (Brand Filter) + Right Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* LEFT SIDEBAR: WRISTWATCH BRANDS ONLY */}
          <aside className="hidden lg:block lg:col-span-3 space-y-6 lg:sticky lg:top-28">
            <div className="border border-surface-variant bg-surface-container-lowest p-6">
              <div className="flex items-center justify-between pb-4 border-b border-surface-variant mb-4">
                <h2 className="font-headline-md text-body-md font-semibold text-on-surface tracking-wider uppercase flex items-center gap-2">
                  <Watch size={16} className="text-primary" />
                  WRISTWATCH BRANDS
                </h2>
                {selectedBrands.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSelectedBrands([])}
                    className="font-technical-data text-technical-data text-secondary hover:text-primary underline text-xs"
                  >
                    CLEAR
                  </button>
                )}
              </div>

              <div className="space-y-1.5">
                {/* All Brands Option */}
                <button
                  type="button"
                  onClick={() => setSelectedBrands([])}
                  className={`w-full flex items-center justify-between px-3 py-2.5 font-technical-data text-technical-data tracking-widest text-left transition-all ${
                    selectedBrands.length === 0
                      ? 'bg-on-surface text-surface font-bold'
                      : 'text-on-surface hover:bg-surface-container-low'
                  }`}
                >
                  <span>ALL BRANDS</span>
                  <span className="text-xs opacity-75">({allProducts.length})</span>
                </button>

                {/* Individual Brands */}
                {brandListWithCounts.map(({ brand, count }) => {
                  const isSelected = selectedBrands.includes(brand);
                  return (
                    <button
                      key={brand}
                      type="button"
                      onClick={() => handleBrandToggle(brand)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 font-technical-data text-technical-data tracking-widest text-left transition-all border ${
                        isSelected
                          ? 'border-primary bg-primary-container/10 text-primary font-bold'
                          : 'border-transparent text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => {}} // handled by button click
                          className="custom-checkbox w-3.5 h-3.5 border border-outline focus:ring-0 text-primary cursor-pointer"
                        />
                        <span>{brand.toUpperCase()}</span>
                      </span>
                      <span className="font-technical-data text-xs text-secondary">
                        {String(count).padStart(2, '0')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* PRODUCT MATRIX (9 Columns on Desktop) */}
          <section aria-label="Product Showcase" className="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div className="p-12 text-center bg-surface-container-lowest border border-surface-variant space-y-4">
                <span className="material-symbols-outlined text-4xl text-secondary">manage_search</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">No Timepieces Found</h3>
                <p className="font-body-sm text-body-sm text-secondary">
                  No timepieces available for the selected brand filters.
                </p>
                <button
                  type="button"
                  onClick={resetFilters}
                  className="px-6 py-3 bg-on-surface text-surface font-label-uppercase text-label-uppercase tracking-widest uppercase hover:bg-primary transition-colors mt-2"
                >
                  Show All Brands
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 md:gap-6">
                {filteredProducts.map((item) => (
                  <article
                    key={item.id}
                    className="group relative bg-surface-container-lowest border border-surface-variant hover:border-primary-container transition-all duration-300 flex flex-col justify-between cursor-pointer"
                    onClick={() => setSelectedProduct(item)}
                  >
                    <div className="relative w-full aspect-[4/5] bg-[#F6F3F2] overflow-hidden flex items-center justify-center">
                      <span className="absolute top-2 left-2 md:top-3 md:left-3 font-technical-data text-[9px] sm:text-technical-data tracking-widest text-secondary uppercase z-10 bg-surface-container-lowest/80 px-1.5 md:px-2 py-0.5 backdrop-blur-sm">
                        {item.edition}
                      </span>
                      <span className="absolute top-2 right-2 md:top-3 md:right-3 font-technical-data text-[9px] sm:text-technical-data tracking-widest text-primary font-semibold z-10 bg-surface-container-lowest/80 px-1.5 md:px-2 py-0.5 backdrop-blur-sm">
                        {item.tag}
                      </span>

                      {/* Primary Watch Image */}
                      <img
                        className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-0 group-hover:scale-105"
                        src={item.img1}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/timepiece.png';
                        }}
                        alt={item.title}
                      />

                      {/* Secondary Hover Angle Image */}
                      <img
                        className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                        src={item.img2}
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = '/caliber.png';
                        }}
                        alt={`${item.title} profile angle`}
                      />

                      {/* Quick Select Overlay Action */}
                      <div className="hidden sm:block absolute inset-x-4 bottom-4 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <button
                          className="w-full h-11 bg-on-surface text-surface font-label-uppercase text-label-uppercase uppercase tracking-widest hover:bg-primary transition-colors flex items-center justify-center space-x-2"
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProduct(item);
                          }}
                        >
                          <span>Inspect Timepiece</span>
                          <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </button>
                      </div>
                    </div>

                    <div className="p-3 md:p-5 border-t border-surface-variant flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex items-center justify-between">
                          <span className="font-technical-data text-[10px] sm:text-technical-data text-primary font-bold tracking-widest uppercase">
                            {item.brand}
                          </span>
                          <span className="font-technical-data text-[10px] sm:text-technical-data text-secondary tracking-widest uppercase">
                            {item.caseSize}
                          </span>
                        </div>
                        <h3 className="font-headline-md text-xs sm:text-body-lg text-on-surface tracking-wider font-semibold uppercase mt-1 line-clamp-1">
                          {item.title}
                        </h3>
                        <p className="font-body-sm text-[11px] sm:text-body-sm text-on-surface-variant mt-0.5 line-clamp-1">
                          {item.details}
                        </p>
                      </div>
                      <div className="mt-2.5 md:mt-4 pt-2 md:pt-3 border-t border-surface-variant/40 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-3">
                        <span className="font-headline-md text-xs sm:text-body-md font-bold text-on-surface tracking-wider shrink-0 whitespace-nowrap">
                          {item.priceFormatted}
                        </span>
                        <span className="font-technical-data text-[9px] sm:text-technical-data text-secondary tracking-widest uppercase text-left sm:text-right truncate">
                          {item.caliber}
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
              <div className="w-full aspect-square bg-surface-container-low border border-surface-variant overflow-hidden flex items-center justify-center">
                <img
                  src={selectedProduct.img1}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/timepiece.png';
                  }}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-technical-data text-technical-data text-primary font-bold uppercase">
                      {selectedProduct.brand}
                    </span>
                    <span className="text-secondary">•</span>
                    <span className="font-technical-data text-technical-data text-secondary">
                      {selectedProduct.edition}
                    </span>
                  </div>
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
                  <div>MANUFACTURER: <span className="text-on-surface font-semibold">{selectedProduct.brand}</span></div>
                  <div>DIAL FINISH: <span className="text-on-surface font-semibold">{selectedProduct.dialFinish}</span></div>
                  <div>CASE SIZE: <span className="text-on-surface font-semibold">{selectedProduct.caseSize}</span></div>
                </div>
                <div className="pt-4 border-t border-surface-variant flex items-center justify-between gap-4">
                  <span className="font-title-sm text-title-sm text-on-surface font-bold whitespace-nowrap shrink-0">
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

      {/* MOBILE BRAND FILTER DRAWER */}
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
              <span className="font-headline-md text-body-md font-semibold text-on-surface tracking-wider uppercase flex items-center gap-2">
                <Watch size={16} className="text-primary" /> Filter by Brand
              </span>
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="text-on-surface hover:text-primary transition-colors"
                aria-label="Close filters"
              >
                <X size={20} />
              </button>
            </div>

            {/* Drawer Content */}
            <div className="flex-1 p-6 space-y-4">
              <p className="font-technical-data text-technical-data text-secondary uppercase tracking-widest">
                SELECT BRANDS
              </p>
              
              <button
                type="button"
                onClick={() => setSelectedBrands([])}
                className={`w-full flex items-center justify-between p-3 font-technical-data text-technical-data border ${
                  selectedBrands.length === 0
                    ? 'border-primary bg-primary-container/10 text-primary font-bold'
                    : 'border-surface-variant text-on-surface'
                }`}
              >
                <span>ALL BRANDS</span>
                <span>({allProducts.length})</span>
              </button>

              {brandListWithCounts.map(({ brand, count }) => {
                const isSelected = selectedBrands.includes(brand);
                return (
                  <button
                    key={brand}
                    type="button"
                    onClick={() => handleBrandToggle(brand)}
                    className={`w-full flex items-center justify-between p-3 font-technical-data text-technical-data border ${
                      isSelected
                        ? 'border-primary bg-primary-container/10 text-primary font-bold'
                        : 'border-surface-variant text-on-surface'
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() => {}}
                        className="custom-checkbox w-4 h-4"
                      />
                      <span>{brand.toUpperCase()}</span>
                    </span>
                    <span className="text-secondary">{String(count).padStart(2, '0')}</span>
                  </button>
                );
              })}
            </div>

            {/* Drawer Footer */}
            <div className="p-6 border-t border-surface-variant">
              <button
                type="button"
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full h-12 bg-on-surface text-surface font-label-uppercase text-label-uppercase tracking-widest uppercase hover:bg-primary transition-colors"
              >
                View ({filteredProducts.length}) Timepieces
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
