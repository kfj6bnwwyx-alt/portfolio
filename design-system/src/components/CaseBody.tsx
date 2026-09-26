import type { ReactNode } from 'react';
import { cx } from './cx';

export interface CaseBodyProps {
  /** Case-study blocks in reading order: `TextBlock`, `ImageBlock`, `Gallery`. */
  children?: ReactNode;
  className?: string;
}

/** Container for case-study blocks; applies the 720px reading column and image spacing. */
export function CaseBody({ children, className }: CaseBodyProps) {
  return <div className={cx('case-body', className)}>{children}</div>;
}

export interface TextBlockProps {
  heading?: ReactNode;
  /** 1 = 32px, 2 = 24px, 3 = 20px. Default 3. */
  level?: 1 | 2 | 3;
  /** `<p>`, `<ul>`, `<strong>`, `<a>`, or a `Principles` list. */
  children?: ReactNode;
  className?: string;
}

/** Text section of a case study. Must be inside `CaseBody`. */
export function TextBlock({ heading, level = 3, children, className }: TextBlockProps) {
  const H = `h${level}` as 'h1' | 'h2' | 'h3';
  return (
    <div className={cx('block block-text', className)}>
      {heading && <H>{heading}</H>}
      {children}
    </div>
  );
}

export interface Principle {
  /** Bold lead-in, e.g. "Do the math". */
  title: string;
  text: string;
}

export interface PrinciplesProps {
  items: Principle[];
  className?: string;
}

/** Design-principles list with a gray left rule: bold title, colon, explanation. Place inside `TextBlock`. */
export function Principles({ items, className }: PrinciplesProps) {
  return (
    <blockquote className={className}>
      {items.map((p) => (
        <p key={p.title}>
          <strong>{p.title}</strong>: {p.text}
        </p>
      ))}
    </blockquote>
  );
}

export interface ImageBlockProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

/** Full-width case-study image, rounded, with an optional gray caption. Must be inside `CaseBody`. */
export function ImageBlock({ src, alt, caption, className }: ImageBlockProps) {
  return (
    <figure className={cx('block block-image', className)}>
      <img src={src} alt={alt} loading="lazy" />
      {caption && (
        <figcaption className="block-caption">
          <p>{caption}</p>
        </figcaption>
      )}
    </figure>
  );
}

export interface GalleryImage {
  src: string;
  alt: string;
  /** Optional title under the image. */
  title?: string;
  /** Optional description under the title. */
  description?: string;
}

export interface GalleryProps {
  images: GalleryImage[];
  className?: string;
}

/** Stacked sequence of screens with optional title/description under each. Must be inside `CaseBody`. */
export function Gallery({ images, className }: GalleryProps) {
  return (
    <div className={cx('block block-gallery', className)}>
      <div className="fx-slider fx-slider-static">
        {images.map((img, i) => (
          <div key={img.src + i} className="fx-slide is-active">
            <img src={img.src} alt={img.alt} loading="lazy" />
            {(img.title || img.description) && (
              <div className="fx-slide-meta">
                {img.title && <div className="fx-slide-title">{img.title}</div>}
                {img.description && <div className="fx-slide-desc">{img.description}</div>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export interface NextProjectProps {
  title: string;
  href: string;
  /** Default "Next project". */
  kicker?: string;
  className?: string;
}

/** Link to the next case study at the end of a case page. */
export function NextProject({ title, href, kicker = 'Next project', className }: NextProjectProps) {
  return (
    <nav className={cx('case-next', className)}>
      <a href={href}>
        <span className="case-next-kicker">{kicker}</span>
        <span className="case-next-title">{title} →</span>
      </a>
    </nav>
  );
}
