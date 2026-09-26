import { cx } from './cx';

export interface ClosingProps {
  /** One confident sentence, ~10–20 words. */
  line: string;
  /** CTA label. Default "Get in touch". */
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

/** End-of-page invitation: a gray rounded panel with a large line and a black pill CTA. */
export function Closing({ line, ctaLabel = 'Get in touch', ctaHref = 'contact.html', className }: ClosingProps) {
  return (
    <section className={cx('closing', className)}>
      <p className="closing-line">{line}</p>
      <a className="closing-cta" href={ctaHref}>
        {ctaLabel} <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}
