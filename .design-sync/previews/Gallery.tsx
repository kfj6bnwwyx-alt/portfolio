import { CaseBody, Gallery } from '@brentbrooks/ds';

export const WithMeta = () => (
  <CaseBody>
    <Gallery
      images={[
        { src: 'https://brentbrooks.com/images/Persona+2+page+2.png', alt: 'Persona: Vicky Weitz, 52', title: 'Vicky Weitz, 52', description: 'Example persona for Individual Retirement' },
        { src: 'https://brentbrooks.com/images/Screen+Shot+2019-03-19+at+2.37.12+PM.png', alt: 'Example quotes from interviews', title: 'Example quotes from interviews' },
      ]}
    />
  </CaseBody>
);

export const ScreensOnly = () => (
  <CaseBody>
    <Gallery
      images={[
        { src: 'https://brentbrooks.com/images/Frame+1146@2x.png', alt: 'Portfolio overview screen' },
        { src: 'https://brentbrooks.com/images/Frame+1148@2x.png', alt: 'Positions screen' },
      ]}
    />
  </CaseBody>
);
