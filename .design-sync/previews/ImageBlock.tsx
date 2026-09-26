import { CaseBody, ImageBlock } from '@brentbrooks/ds';

export const Plain = () => (
  <CaseBody>
    <ImageBlock src="https://brentbrooks.com/images/Timeline@2x.png" alt="High-level timeline of the client portal" />
  </CaseBody>
);

export const WithCaption = () => (
  <CaseBody>
    <ImageBlock src="https://brentbrooks.com/images/wire1.png" alt="Early wireframe explorations" caption="Even with very little time, we still explored multiple approaches to the initial designs." />
  </CaseBody>
);
