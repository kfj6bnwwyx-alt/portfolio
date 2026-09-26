import { cx } from './cx';

export interface TopbarLink {
  label: string;
  href: string;
  /** Marks the current section; its label turns full black. */
  active?: boolean;
}

export interface TopbarProps {
  /** Wordmark, sentence case. Default "Brent Brooks". */
  brand?: string;
  brandHref?: string;
  /** Usually Work and Contact. */
  links?: TopbarLink[];
  className?: string;
}

/** Sticky 64px header: wordmark left, small gray nav links right (active link in black). */
export function Topbar({ brand = 'Brent Brooks', brandHref = 'index.html', links = [], className }: TopbarProps) {
  return (
    <header className={cx('topbar', className)}>
      <div className="topbar-inner">
        <a href={brandHref} className="brand">
          <span className="brand-name-large">{brand}</span>
        </a>
        <nav className="nav">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cx('nav-link', l.active && 'is-active')}
              aria-current={l.active ? 'page' : undefined}
            >
              <span className="nav-label">{l.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
