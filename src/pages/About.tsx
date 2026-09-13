import { useDocumentTitle } from '@/hooks';

export function About() {
  useDocumentTitle('Our Story | JUWADE Luxury Horology');

  return (
    <div className="arch-container" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)' }}>
      <div style={{ maxWidth: '800px' }}>
        <p className="label-uppercase" style={{ color: 'var(--color-champagne-gold)', marginBottom: 'var(--space-xs)' }}>
          OUR HERITAGE & STORY
        </p>
        <h1 className="display-hero" style={{ marginBottom: 'var(--space-lg)' }}>
          Crafting World-Class Timepieces in Nigeria
        </h1>
        <p className="body-lg" style={{ color: 'var(--color-titanium)', marginBottom: 'var(--space-md)' }}>
          JUWADE was born from a vision to redefine luxury watchmaking in Africa. Combining bold design, premium materials, and precision engineering, we craft limited-edition timepieces designed to celebrate achievement, confidence, and culture.
        </p>
        <p className="body-md" style={{ color: 'var(--color-titanium)', marginBottom: 'var(--space-lg)' }}>
          Every Juwade watch is assembled with meticulous attention to detail, using cold-forged 316L stainless steel, scratch-resistant sapphire glass, and high-precision movements.
        </p>
        <div style={{ paddingTop: 'var(--space-lg)', borderTop: '1px solid var(--color-hairline)', marginTop: 'var(--space-xl)' }}>
          <p className="technical-data" style={{ color: 'var(--color-obsidian)' }}>
            LAGOS / ABUJA / PORT HARCOURT • MADE IN NIGERIA
          </p>
        </div>
      </div>
    </div>
  );
}
