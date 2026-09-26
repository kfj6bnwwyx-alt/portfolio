import { ProjectList, ProjectRow } from '@brentbrooks/ds';

export const WithClient = () => (
  <ProjectList>
    <ProjectRow title="Private Client Group" discipline="UI / UX" client="AIG" href="recent-work/private-client-group-l4j5z.html" />
  </ProjectList>
);

export const DisciplineOnly = () => (
  <ProjectList>
    <ProjectRow title="Bank of America Enterprise App" discipline="Product Design" href="recent-work/project-x-cczma.html" />
  </ProjectList>
);
