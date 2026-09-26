import { cx } from './cx';

export interface Fact {
  /** Small gray label, e.g. "Based". */
  label: string;
  /** Value text, e.g. "New York, NY". */
  value: string;
  /** Makes the value a link (mailto:, tel:, or URL). External URLs open in a new tab. */
  href?: string;
}

export interface FactsProps {
  items: Fact[];
  className?: string;
}

/** One line of label/value pairs between two hairlines — location, practice, email, LinkedIn. */
export function Facts({ items, className }: FactsProps) {
  return (
    <section className={cx('facts', className)}>
      {items.map((f) => {
        const external = f.href?.startsWith('http');
        return (
          <span key={f.label} className="fact">
            <span className="fact-k">{f.label}</span>{' '}
            {f.href ? (
              <a href={f.href} target={external ? '_blank' : undefined} rel={external ? 'noopener' : undefined}>
                {f.value}
              </a>
            ) : (
              f.value
            )}
          </span>
        );
      })}
    </section>
  );
}
