import { CaseBody, TextBlock } from '@brentbrooks/ds';

export const Paragraphs = () => (
  <CaseBody>
    <TextBlock>
      <p>Version 1 of the client-facing site focused on delivering portfolio management functionality for institutional and active investors.</p>
      <p>Knowing that there are established best practices for daily reports, we decided to deliver the functionality quickly rather than lead with robust foundational research.</p>
    </TextBlock>
  </CaseBody>
);

export const WithHeading = () => (
  <CaseBody>
    <TextBlock heading="Opportunities to leapfrog other portfolio portals">
      <p>
        One example is <strong>trade-away breaks</strong>: when a trade is made off platform and the information we receive differs from what the user gave us.
      </p>
    </TextBlock>
  </CaseBody>
);

export const SectionTitle = () => (
  <CaseBody>
    <TextBlock heading="Mostly from OgilvyOne and WeberShandwick" level={2}>
      <p>Group Creative Director, OgilvyOne</p>
    </TextBlock>
  </CaseBody>
);
