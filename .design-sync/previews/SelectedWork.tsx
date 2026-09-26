import { SelectedWork, WorkCard } from '@brentbrooks/ds';

export const Homepage = () => (
  <SelectedWork allLabel="All 15 projects">
    <WorkCard lead title="Client Portal" discipline="Product Design" client="Clear Street" image="https://brentbrooks.com/images/Macbook+Air+(2022)@2x.png" href="recent-work/client-portal-f2epd.html" />
    <WorkCard title="Bank of America Enterprise App" discipline="Product Design" image="https://brentbrooks.com/images/MacBook+Pro+14_+-+1@2x.png" href="recent-work/project-x-cczma.html" />
    <WorkCard title="Simplified" discipline="Product Design" client="AIG" image="https://brentbrooks.com/images/Simplified+header.png" href="recent-work/simplified-bdzat.html" />
  </SelectedWork>
);

export const NoLead = () => (
  <SelectedWork title="More from AIG">
    <WorkCard title="Service Genie" discipline="UI / UX" client="AIG" image="https://brentbrooks.com/images/ServiceGenie_white-kitchen-counter.png" href="recent-work/service-genie-2rrgt.html" />
    <WorkCard title="HINGE, Design Language" discipline="Design Systems" client="AIG" image="https://brentbrooks.com/images/HINGE+Banner.png" href="recent-work/hinge-design-language-1-57g6y.html" />
  </SelectedWork>
);
