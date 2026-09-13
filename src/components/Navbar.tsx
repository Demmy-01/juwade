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
          <div style={{ position: 'relative' }}>
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

      {/* Slide-out Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="drawer-backdrop" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="drawer-panel" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '320px' }}>
            <div
              style={{
                padding: 'var(--space-lg)',
                borderBottom: '1px solid var(--surface-container-highest)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span className="brand-logo-text" style={{ fontSize: '1.25rem' }}>
                JUWADE
              </span>
              <button type="button" className="utility-icon-btn" onClick={() => setIsMobileMenuOpen(false)}>
                <X size={20} />
              </button>
            </div>

            <div style={{ flex: 1, padding: 'var(--space-lg)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {navLinks.map((item) => {
                  const isActive = location.pathname === item.path || (item.path === '/' && location.pathname === '/');
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      className={`nav-link-item ${isActive ? 'nav-link-active' : ''}`}
                      style={{ fontSize: '0.9375rem', paddingBottom: '8px' }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <div style={{ marginTop: 'auto', paddingTop: 'var(--space-lg)', borderTop: '1px solid var(--surface-container-highest)' }}>
                <p className="technical-data" style={{ color: 'var(--color-titanium)', marginBottom: '0.5rem' }}>
                  CURRENCY & REGION
                </p>
                <div className="label-uppercase" style={{ color: 'var(--primary)', fontWeight: 600 }}>
                  NGN (₦) — NIGERIA
                </div>
                <p className="body-sm" style={{ color: 'var(--color-titanium)', marginTop: '0.75rem' }}>
                  Lagos Atelier • Victoria Island
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
