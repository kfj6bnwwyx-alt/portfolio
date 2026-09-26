import { Topbar } from '@brentbrooks/ds';

const links = [
  { label: 'Work', href: 'recent-work.html' },
  { label: 'Contact', href: 'contact.html' },
];

export const Default = () => <Topbar links={links} />;
export const WorkActive = () => <Topbar links={links.map((l) => ({ ...l, active: l.label === 'Work' }))} />;
export const ContactActive = () => <Topbar links={links.map((l) => ({ ...l, active: l.label === 'Contact' }))} />;
