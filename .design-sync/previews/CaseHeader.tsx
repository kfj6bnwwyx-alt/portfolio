import { CaseHeader } from '@brentbrooks/ds';

export const TitleOnly = () => <CaseHeader title="Clear Street Client Portal" />;

export const WithLedeAndSpecs = () => (
  <CaseHeader
    title="Clear Street Client Portal"
    lede="Version 1 of the client-facing site, delivering on-demand portfolio reporting for institutional and active investors."
    specs={[
      { label: 'Role', value: 'Head of Product Design' },
      { label: 'Client', value: 'Clear Street' },
      { label: 'Platform', value: 'Web' },
      { label: 'Year', value: '2021' },
    ]}
  />
);
