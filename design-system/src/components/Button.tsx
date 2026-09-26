import type { ReactNode } from 'react';
import { cx } from './cx';

export interface ButtonProps {
  /** Renders an `<a>` when set, otherwise a `<button>`. */
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  /** Adds a trailing → that nudges right on hover. */
  arrow?: boolean;
  className?: string;
  /** Sentence-case label, e.g. "Get in touch". */
  children?: ReactNode;
}

/** Filled black pill (44px). The one primary action style on the site. */
export function Button({ href, onClick, type = 'button', arrow, className, children }: ButtonProps) {
  const body = (
    <>
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </>
  );
  return href ? (
    <a className={cx('closing-cta', className)} href={href} onClick={onClick}>
      {body}
    </a>
  ) : (
    <button className={cx('closing-cta', className)} type={type} onClick={onClick}>
      {body}
    </button>
  );
}
