import { Link } from 'react-router-dom';
import { useDocumentTitle } from '@/hooks';

export function NotFound() {
  useDocumentTitle('404 Page Not Found | Haute Horlogerie Atelier');

  return (
    <div className="arch-container" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-2xl)' }}>
      <div style={{ maxWidth: '600px' }}>
        <p className="label-uppercase" style={{ color: 'var(--color-champagne-gold)', marginBottom: 'var(--space-xs)' }}>
          ERR // 404
        </p>
        <h1 className="headline-xl" style={{ marginBottom: 'var(--space-md)' }}>
          Coordinates Out of Calibration
        </h1>
        <p className="body-md" style={{ color: 'var(--color-titanium)', marginBottom: 'var(--space-lg)' }}>
          The requested exhibition vault or manufacture page does not exist in our current archives.
        </p>
        <Link to="/" className="btn-primary">
          RETURN TO EXHIBITION VAULT
        </Link>
      </div>
    </div>
  );
}
