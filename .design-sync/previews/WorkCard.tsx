import { SelectedWork, WorkCard } from '@brentbrooks/ds';

export const Standard = () => (
  <SelectedWork title="Selected work">
    <WorkCard title="Service Genie" discipline="UI / UX" client="AIG" image="https://brentbrooks.com/images/ServiceGenie_white-kitchen-counter.png" href="recent-work/service-genie-2rrgt.html" />
    <WorkCard title="HINGE, Design Language" discipline="Design Systems" client="AIG" image="https://brentbrooks.com/images/HINGE+Banner.png" href="recent-work/hinge-design-language-1-57g6y.html" />
  </SelectedWork>
);

export const Lead = () => (
  <SelectedWork title="Selected work">
    <WorkCard lead title="Client Portal" discipline="Product Design" client="Clear Street" image="https://brentbrooks.com/images/Macbook+Air+(2022)@2x.png" href="recent-work/client-portal-f2epd.html" />
  </SelectedWork>
);
