import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, X, ChevronDown, Menu } from 'lucide-react';

export function Navbar() {
  const location = useLocation();

  // Drawers and Modals State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Selected Currency & Language
  const [currency, setCurrency] = useState('NGN');
  const [language, setLanguage] = useState('EN');
  const [cartCount] = useState(0);
  const [wishlistCount] = useState(0);

  const navLinks = [
    { label: 'Timepieces', path: '/' },
    { label: 'Collections', path: '/collections' },
    { label: 'Atelier Story', path: '/about' },
    { label: 'Journal', path: '/journal' },
  ];

  const currencies = ['NGN'];
  const languages = ['EN', 'DE', 'FR'];

  return (
    <>
      <header className="hairline-top-bar">
        {/* Left: Navigation Links */}
        <nav style={{ display: 'flex', gap: '2.25rem', alignItems: 'center' }} className="desktop-only-nav">
          {navLinks.map((item) => {
            const isActive = location.pathname === item.path || (item.path === '/' && location.pathname === '/');
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`nav-link-item ${isActive ? 'nav-link-active' : ''}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          type="button"
          className="utility-icon-btn mobile-only-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Center: Brand Title */}
        <Link to="/" className="brand-logo-text">
          JUWADE
        </Link>

        {/* Right: Utilities */}
        <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
          {/* Currency / Language Selector */}
          <div style={{ position: 'relative' }} className="desktop-only-currency">
            <button
              type="button"
              onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
              className="label-uppercase"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                cursor: 'pointer',
                color: 'var(--on-surface)',
                fontSize: '0.75rem',
                letterSpacing: '0.18em',
                padding: '4px 6px',
              }}
            >
              {currency} / {language} <ChevronDown size={12} style={{ opacity: 0.6 }} />
            </button>

            {/* Currency Dropdown Menu */}
            {isCurrencyOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  right: 0,
                  width: '160px',
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--surface-container-highest)',
                  padding: 'var(--space-md)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
                  zIndex: 101,
                }}
              >
                <div style={{ marginBottom: 'var(--space-md)' }}>
                  <p className="technical-data" style={{ color: 'var(--color-titanium)', marginBottom: 'var(--space-xs)' }}>
                    CURRENCY
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {currencies.map((curr) => (
                      <button
                        key={curr}
                        type="button"
                        onClick={() => {
                          setCurrency(curr);
                          setIsCurrencyOpen(false);
                        }}
                        className="body-sm"
                        style={{
                          textAlign: 'left',
                          color: currency === curr ? 'var(--primary)' : 'var(--on-surface)',
                          fontWeight: currency === curr ? 600 : 400,
                          cursor: 'pointer',
                          padding: '2px 0',
                        }}
                      >
                        {curr}
                      </button>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid var(--surface-container-highest)', paddingTop: 'var(--space-sm)' }}>
                  <p className="technical-data" style={{ color: 'var(--color-titanium)', marginBottom: 'var(--space-xs)' }}>
                    LANGUAGE
                  </p>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    {languages.map((lang) => (
                      <button
                        key={lang}
                        type="button"
                        onClick={() => {
                          setLanguage(lang);
                          setIsCurrencyOpen(false);
                        }}
                        className="body-sm"
                        style={{
                          color: language === lang ? 'var(--primary)' : 'var(--on-surface)',
                          fontWeight: language === lang ? 600 : 400,
                          cursor: 'pointer',
                        }}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Search Icon Trigger */}
          <button
            type="button"
            className="utility-icon-btn"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            aria-label="Search"
          >
            <Search size={18} strokeWidth={1.5} />
          </button>

          {/* Wishlist Icon Trigger */}
          <button
            type="button"
            className="utility-icon-btn"
            onClick={() => setIsWishlistOpen(true)}
            aria-label="Wishlist"
          >
            <Heart size={18} strokeWidth={1.5} />
            {wishlistCount > 0 && <span className="cart-badge-pill">{wishlistCount}</span>}
          </button>

          {/* Cart Icon Trigger */}
          <button
            type="button"
            className="utility-icon-btn"
            onClick={() => setIsCartOpen(true)}
            aria-label="Shopping Cart"
          >
            <ShoppingBag size={18} strokeWidth={1.5} />
            <span className="cart-badge-pill">{cartCount}</span>
          </button>
        </div>

        {/* Top Search Bar Overlay */}
        {isSearchOpen && (
          <div className="search-bar-overlay">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', maxWidth: '1000px', margin: '0 auto' }}>
              <Search size={20} style={{ color: 'var(--color-titanium)' }} />
              <input
                type="text"
                placeholder="Search Juwade timepieces, collections, or stories..."
                className="input-field-line"
                style={{ flex: 1, fontSize: '1rem' }}
                autoFocus
              />
              <button
                type="button"
                className="utility-icon-btn"
                onClick={() => setIsSearchOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Slide-out Cart Drawer */}
      {isCartOpen && (
        <div className="drawer-backdrop" onClick={() => setIsCartOpen(false)}>
          <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div
              style={{
                padding: 'var(--space-lg)',
                borderBottom: '1px solid var(--surface-container-highest)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <p className="label-uppercase" style={{ color: 'var(--color-titanium)' }}>
                  YOUR SELECTIONS
                </p>
                <h3 className="headline-md">Cart ({cartCount})</h3>
              </div>
              <button type="button" className="utility-icon-btn" onClick={() => setIsCartOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div style={{ flex: 1, padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <ShoppingBag size={48} strokeWidth={1} style={{ color: 'var(--color-titanium)', marginBottom: 'var(--space-md)' }} />
              <p className="headline-md" style={{ marginBottom: 'var(--space-xs)' }}>Your Cart is Empty</p>
              <p className="body-md" style={{ color: 'var(--color-titanium)', marginBottom: 'var(--space-lg)' }}>
                You haven't added any Juwade timepieces to your cart yet.
              </p>
              <button type="button" className="btn-primary" onClick={() => setIsCartOpen(false)}>
                EXPLORE TIMEPIECES
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Slide-out Wishlist Drawer */}
      {isWishlistOpen && (
        <div className="drawer-backdrop" onClick={() => setIsWishlistOpen(false)}>
          <div className="drawer-panel" onClick={(e) => e.stopPropagation()}>
            <div
              style={{
                padding: 'var(--space-lg)',
                borderBottom: '1px solid var(--surface-container-highest)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <p className="label-uppercase" style={{ color: 'var(--color-titanium)' }}>
                  SAVED TIMEPIECES
                </p>
                <h3 className="headline-md">Wishlist ({wishlistCount})</h3>
              </div>
              <button type="button" className="utility-icon-btn" onClick={() => setIsWishlistOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div style={{ flex: 1, padding: 'var(--space-xl)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <Heart size={48} strokeWidth={1} style={{ color: 'var(--color-titanium)', marginBottom: 'var(--space-md)' }} />
              <p className="headline-md" style={{ marginBottom: 'var(--space-xs)' }}>No Saved Timepieces</p>
              <p className="body-md" style={{ color: 'var(--color-titanium)', marginBottom: 'var(--space-lg)' }}>
                Save your favorite Juwade timepieces while exploring our collections.
              </p>
              <button type="button" className="btn-secondary" onClick={() => setIsWishlistOpen(false)}>
                VIEW COLLECTIONS
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Slide-out Mobile Navigation Drawer — Full Premium Panel */}
      {isMobileMenuOpen && (
        <div
          className="drawer-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ justifyContent: 'flex-start' }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '340px',
              height: '100%',
              backgroundColor: 'var(--surface)',
              display: 'flex',
              flexDirection: 'column',
              borderRight: '1px solid var(--surface-container-highest)',
              boxShadow: '12px 0 40px rgba(0,0,0,0.06)',
            }}
          >
            {/* Panel Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '1.25rem 1.5rem',
              borderBottom: '1px solid var(--surface-container-highest)',
            }}>
              <Link
                to="/"
                className="brand-logo-text"
                style={{ fontSize: '1.125rem', letterSpacing: '0.3em' }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                JUWADE
              </Link>
              <button
                type="button"
                className="utility-icon-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Label */}
            <div style={{ padding: '1.5rem 1.5rem 0.75rem' }}>
              <p className="technical-data" style={{ color: 'var(--color-titanium)', letterSpacing: '0.2em' }}>
                NAVIGATE
              </p>
            </div>

            {/* Primary Nav Links */}
            <nav style={{ flex: 1, padding: '0 0.75rem', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path || (item.path === '/' && location.pathname === '/');
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '1rem 0.75rem',
                      borderRadius: '0',
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.375rem',
                      fontWeight: 400,
                      letterSpacing: '0.06em',
                      color: isActive ? 'var(--primary)' : 'var(--on-surface)',
                      textDecoration: 'none',
                      borderBottom: '1px solid var(--surface-container-low)',
                      transition: 'color 0.2s ease, background-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'var(--surface-container-low)';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                    }}
                  >
                    <span>{item.label}</span>
                    <span
                      className="material-symbols-outlined"
                      style={{ fontSize: '1rem', opacity: isActive ? 1 : 0.3 }}
                    >
                      arrow_forward
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Quick Utility Icons Row */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: '1.25rem 1.5rem',
              borderTop: '1px solid var(--surface-container-highest)',
              borderBottom: '1px solid var(--surface-container-highest)',
            }}>
              <button
                type="button"
                className="utility-icon-btn"
                onClick={() => { setIsMobileMenuOpen(false); setIsSearchOpen(true); }}
                aria-label="Search"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem', padding: '0.5rem 1rem' }}
              >
                <Search size={20} strokeWidth={1.5} />
                <span className="technical-data" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--color-titanium)' }}>SEARCH</span>
              </button>
              <div style={{ width: '1px', height: '2.5rem', backgroundColor: 'var(--surface-container-highest)' }} />
              <button
                type="button"
                className="utility-icon-btn"
                onClick={() => { setIsMobileMenuOpen(false); setIsWishlistOpen(true); }}
                aria-label="Wishlist"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem', padding: '0.5rem 1rem' }}
              >
                <Heart size={20} strokeWidth={1.5} />
                <span className="technical-data" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--color-titanium)' }}>WISHLIST</span>
              </button>
              <div style={{ width: '1px', height: '2.5rem', backgroundColor: 'var(--surface-container-highest)' }} />
              <button
                type="button"
                className="utility-icon-btn"
                onClick={() => { setIsMobileMenuOpen(false); setIsCartOpen(true); }}
                aria-label="Cart"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem', padding: '0.5rem 1rem' }}
              >
                <ShoppingBag size={20} strokeWidth={1.5} />
                <span className="technical-data" style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: 'var(--color-titanium)' }}>CART</span>
              </button>
            </div>

            {/* Atelier & Region & Language Footer Strip */}
            <div style={{ padding: '1.25rem 1.5rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <p className="technical-data" style={{ color: 'var(--color-titanium)', letterSpacing: '0.18em', margin: 0 }}>
                CURRENCY & LANGUAGE
              </p>

              {/* Currency Selector */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="technical-data" style={{ fontSize: '0.65rem', color: 'var(--color-titanium)' }}>CURRENCY</span>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  {currencies.map((curr) => (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => setCurrency(curr)}
                      className="label-uppercase"
                      style={{
                        padding: '4px 10px',
                        border: currency === curr ? '1px solid var(--primary)' : '1px solid var(--surface-container-highest)',
                        backgroundColor: currency === curr ? 'var(--surface-container-low)' : 'transparent',
                        color: currency === curr ? 'var(--primary)' : 'var(--on-surface)',
                        fontSize: '0.7rem',
                        fontWeight: currency === curr ? 600 : 400,
                        cursor: 'pointer',
                      }}
                    >
                      {curr} (₦)
                    </button>
                  ))}
                </div>
              </div>

              {/* Language Selector */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="technical-data" style={{ fontSize: '0.65rem', color: 'var(--color-titanium)' }}>LANGUAGE</span>
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      type="button"
                      onClick={() => setLanguage(lang)}
                      className="label-uppercase"
                      style={{
                        padding: '4px 8px',
                        border: language === lang ? '1px solid var(--primary)' : '1px solid var(--surface-container-highest)',
                        backgroundColor: language === lang ? 'var(--surface-container-low)' : 'transparent',
                        color: language === lang ? 'var(--primary)' : 'var(--on-surface)',
                        fontSize: '0.7rem',
                        fontWeight: language === lang ? 600 : 400,
                        cursor: 'pointer',
                      }}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              <p className="body-sm" style={{ color: 'var(--color-titanium)', marginTop: '0.25rem', fontSize: '0.75rem' }}>
                Lagos Atelier · Victoria Island
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
