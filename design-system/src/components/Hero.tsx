import { Fragment } from 'react';
import type { ReactNode } from 'react';
import { cx } from './cx';

export interface HeroProps {
  /** Headline lines in black, one string per line, e.g. `["Between making", "and leading."]`. */
  title: string[];
  /** Optional second clause in gray, one string per line, e.g. `["Design that", "gets it right."]`. */
  dimTitle?: string[];
  /** Intro paragraphs. The first renders in black, the rest in secondary gray. */
  paragraphs?: string[];
  /** Custom content under the paragraphs. */
  children?: ReactNode;
  className?: string;
}

function lines(ls: string[]) {
  return ls.map((l, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {l}
    </Fragment>
  ));
}

/**
 * Page opener: a very large two-tone headline (black lines, then gray lines) over a 640px intro column.
 * Used at the top of Home, Work, and Contact.
 */
export function Hero({ title, dimTitle, paragraphs, children, className }: HeroProps) {
  return (
    <section className={cx('hero-mo', className)}>
      <h1 className="hero-mo-h">
        {lines(title)}
        {dimTitle && dimTitle.length > 0 && (
          <>
            <br />
            <span className="hero-mo-h-dim">{lines(dimTitle)}</span>
          </>
        )}
      </h1>
      {(paragraphs?.length || children) && (
        <div className="hero-mo-meta">
          {paragraphs?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          {children}
        </div>
      )}
    </section>
  );
}
