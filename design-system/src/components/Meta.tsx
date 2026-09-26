import { Fragment } from 'react';

/** Renders meta parts separated by a gray middle dot, e.g. "Product Design · AIG". */
export function MetaParts({ parts }: { parts: string[] }) {
  return (
    <>
      {parts.filter(Boolean).map((p, i) => (
        <Fragment key={i}>
          {i > 0 && <span className="dot">·</span>}
          <span>{p}</span>
        </Fragment>
      ))}
    </>
  );
}
