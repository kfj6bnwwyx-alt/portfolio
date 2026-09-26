import { Facts } from '@brentbrooks/ds';

export const Home = () => (
  <Facts
    items={[
      { label: 'Based', value: 'New York, NY' },
      { label: 'Practice', value: 'Product, UX, Design Systems, Campaign' },
      { label: 'Email', value: 'me@brentbrooks.com', href: 'mailto:me@brentbrooks.com' },
      { label: 'LinkedIn', value: 'in/brentbillbrooks', href: 'https://www.linkedin.com/in/brentbillbrooks' },
    ]}
  />
);

export const Contact = () => (
  <Facts
    items={[
      { label: 'Email', value: 'me@brentbrooks.com', href: 'mailto:me@brentbrooks.com' },
      { label: 'Cell', value: '+1 (917) 691-4735', href: 'tel:+19176914735' },
      { label: 'Located', value: 'New York, NY' },
    ]}
  />
);
