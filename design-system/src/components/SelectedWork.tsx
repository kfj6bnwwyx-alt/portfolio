import type { ReactNode } from 'react';
import { cx } from './cx';
import { MetaParts } from './Meta';

export interface WorkCardProps {
  title: string;
  /** Discipline, e.g. "Product Design". */
  discipline?: string;
  /** Client, e.g. "Clear Street". Shown after the discipline with a dot. */
  client?: string;
  /** Image URL — cropped to cover, anchored top. */
  image: string;
  alt?: string;
  href: string;
  /** Lead item: spans the full grid width with a 21:9 image and a larger title. Use for the first item only. */
  lead?: boolean;
  className?: string;
}

/** Image-led project tile for the `SelectedWork` grid. Must be a child of `SelectedWork`. */
export function WorkCard({ title, discipline, client, image, alt, href, lead, className }: WorkCardProps) {
  return (
    <li className={cx('work', lead && 'work-lead', className)}>
      <a href={href}>
        <figure className="work-fig">
          <img src={image} alt={alt ?? title} loading="lazy" />
        </figure>
        <div className="work-body">
          <h3 className="work-title">{title}</h3>
          <p className="work-meta">
            <MetaParts parts={[discipline ?? '', client ?? '']} />
          </p>
          <span className="work-go" aria-hidden="true">→</span>
        </div>
      </a>
    </li>
  );
}

export interface SelectedWorkProps {
  /** Section heading. Default "Selected work". */
  title?: string;
  /** Right-aligned link text, e.g. "All 15 projects". Omit to hide. */
  allLabel?: string;
  allHref?: string;
  /** `WorkCard` elements; the first usually has `lead`. */
  children?: ReactNode;
  className?: string;
}

/** Homepage showcase: heading + "all projects" link over a 2-column grid of `WorkCard`s. */
export function SelectedWork({ title = 'Selected work', allLabel, allHref = 'recent-work.html', children, className }: SelectedWorkProps) {
  return (
    <section className={cx('selected', className)}>
      <div className="selected-head">
        <h2 className="selected-title">{title}</h2>
        {allLabel && (
          <a className="selected-all" href={allHref}>
            {allLabel} <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
      <ul className="worklist">{children}</ul>
    </section>
  );
}
