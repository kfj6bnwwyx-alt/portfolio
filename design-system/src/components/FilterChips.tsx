import { useState } from 'react';
import { cx } from './cx';

export interface FilterOption {
  label: string;
  /** Optional count shown in small gray after the label. */
  count?: number;
}

export interface FilterChipsProps {
  options: FilterOption[];
  /** Selected label (controlled). Omit to let the component manage selection. */
  value?: string;
  /** Initially selected label when uncontrolled. Defaults to the first option. */
  defaultValue?: string;
  onChange?: (label: string) => void;
  className?: string;
}

/** Row of pill filters; the selected pill is filled black. Pair with `ProjectList` to filter rows. */
export function FilterChips({ options, value, defaultValue, onChange, className }: FilterChipsProps) {
  const [inner, setInner] = useState(defaultValue ?? options[0]?.label);
  const selected = value ?? inner;
  return (
    <div className={cx('filter-row', className)} role="group" aria-label="Filter projects">
      {options.map((o) => (
        <button
          key={o.label}
          type="button"
          className={cx('filter-chip', o.label === selected && 'is-active')}
          aria-pressed={o.label === selected}
          onClick={() => {
            setInner(o.label);
            onChange?.(o.label);
          }}
        >
          {o.label}
          {o.count !== undefined && <span className="filter-count">{o.count}</span>}
        </button>
      ))}
    </div>
  );
}
