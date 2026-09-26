import type { ReactNode } from 'react';
import { cx } from './cx';

export interface SiteProps {
  /** Page content, in order: `Topbar`, a `<main className="page">` with sections, then `Footer`. */
  children?: ReactNode;
  className?: string;
}

/**
 * Root frame for every page: centers content at 1140px with the white background and system type.
 * Wrap every screen in exactly one `Site`.
 */
export function Site({ children, className }: SiteProps) {
  return <div className={cx('site', className)}>{children}</div>;
}
