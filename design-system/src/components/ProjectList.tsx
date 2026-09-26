import type { ReactNode } from 'react';
import { cx } from './cx';
import { MetaParts } from './Meta';

export interface ProjectRowProps {
  title: string;
  discipline?: string;
  client?: string;
  href: string;
  /** Hides the row (e.g. when filtered out). */
  hidden?: boolean;
  className?: string;
}

/** One text row in a `ProjectList`: large title left, discipline · client right, arrow on hover. */
export function ProjectRow({ title, discipline, client, href, hidden, className }: ProjectRowProps) {
  return (
    <li className={cx('proj-row', hidden && 'is-hidden', className)} data-discipline={discipline}>
      <a href={href}>
        <div className="proj-row-mo">
          <div className="proj-row-mo-top">
            <span className="col-title-mo">{title}</span>
            <span className="col-year-mo proj-row-arrow">→</span>
          </div>
          <div className="proj-row-mo-meta">
            <MetaParts parts={[discipline ?? '', client ?? '']} />
          </div>
        </div>
      </a>
    </li>
  );
}

export interface ProjectListProps {
  /** `ProjectRow` elements. */
  children?: ReactNode;
  className?: string;
}

/** Full project index: hairline-separated `ProjectRow`s. */
export function ProjectList({ children, className }: ProjectListProps) {
  return <ul className={cx('proj-list proj-list-full', className)}>{children}</ul>;
}
