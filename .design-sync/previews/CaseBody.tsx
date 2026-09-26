import { CaseBody, TextBlock, Principles, ImageBlock, NextProject } from '@brentbrooks/ds';

export const CaseStudy = () => (
  <CaseBody>
    <TextBlock>
      <p>Version 1 of the client-facing site focused on delivering portfolio management functionality for institutional and active investors.</p>
      <p>We approached the design with a few design principles:</p>
      <Principles
        items={[
          { title: 'Do the math', text: 'Find opportunities to infer the intent of our users and deliver the information before they ask for it.' },
          { title: "Don't try to out-excel excel", text: 'Many of our clients just need to pull raw reports to put into other tools.' },
        ]}
      />
    </TextBlock>
    <ImageBlock src="https://brentbrooks.com/images/Macbook+Air+(2022)@2x.png" alt="Client portal dashboard on a laptop" />
    <NextProject title="Bank of America Enterprise App" href="project-x-cczma.html" />
  </CaseBody>
);
