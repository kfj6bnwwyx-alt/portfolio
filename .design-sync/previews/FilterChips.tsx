import { FilterChips } from '@brentbrooks/ds';

const options = [
  { label: 'All', count: 15 },
  { label: 'Product Design', count: 3 },
  { label: 'UI / UX', count: 4 },
  { label: 'Design Systems', count: 1 },
  { label: 'Campaign', count: 4 },
  { label: 'eCommerce', count: 1 },
  { label: 'Mixed', count: 2 },
];

export const AllSelected = () => <FilterChips options={options} />;
export const CampaignSelected = () => <FilterChips options={options} defaultValue="Campaign" />;
export const WithoutCounts = () => <FilterChips options={options.map(({ label }) => ({ label }))} defaultValue="UI / UX" />;
