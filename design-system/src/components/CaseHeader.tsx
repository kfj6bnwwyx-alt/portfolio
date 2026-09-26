import { cx } from './cx';

export interface CaseSpec {
  label: string;
  value: string;
}

export interface CaseHeaderProps {
  /** Project title, e.g. "Clear Street Client Portal". Also used as the last breadcrumb. */
  title: string;
  /** Optional one-paragraph summary under the title. */
  lede?: string;
  /** Optional spec strip (Role, Client, Year, Platform…), up to 4 cells. */
  specs?: CaseSpec[];
  /** Breadcrumb back-link. Default "← Work" → recent-work.html. */
  backLabel?: string;
  backHref?: string;
  className?: string;
}

/** Top of a case study: "← Work / Title" breadcrumbs, large title, optional lede and spec strip. */
export function CaseHeader({ title, lede, specs, backLabel = '← Work', backHref = '../recent-work.html', className }: CaseHeaderProps) {
  return (
    <div className={className}>
      <div className="crumbs">
        <a className="small link" href={backHref}>
          {backLabel}
        </a>
        <span className="small muted">/</span>
        <span className="small">{title}</span>
      </div>
      <section className={cx('case-hero')}>
        <h1 className="case-h">{title}</h1>
        {lede && <p className="case-lede">{lede}</p>}
      </section>
      {specs && specs.length > 0 && (
        <div className="case-spec">
          {specs.map((s) => (
            <div key={s.label} className="case-spec-cell">
              <span className="small muted">{s.label}</span>
              <span className="case-spec-val">{s.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
