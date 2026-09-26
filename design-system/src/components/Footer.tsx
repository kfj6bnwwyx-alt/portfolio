import { cx } from './cx';

export interface FooterProps {
  /** Default "© 2026 Brent Brooks". */
  copyright?: string;
  /** Default the LinkedIn profile. */
  linkedinHref?: string;
  /** Default "me@brentbrooks.com". */
  email?: string;
  className?: string;
}

/** Site footer: hairline, then copyright left and LinkedIn + email right (stacked on mobile). */
export function Footer({
  copyright = '© 2026 Brent Brooks',
  linkedinHref = 'https://www.linkedin.com/in/brentbillbrooks',
  email = 'me@brentbrooks.com',
  className,
}: FooterProps) {
  return (
    <footer className={cx('foot', className)}>
      <div className="foot-row">
        <span>{copyright}</span>
        <span>
          <a href={linkedinHref} target="_blank" rel="noopener">
            LinkedIn ↗
          </a>
        </span>
        <span>
          <a href={`mailto:${email}`}>{email}</a>
        </span>
      </div>
    </footer>
  );
}
