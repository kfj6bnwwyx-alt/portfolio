import { CaseBody, TextBlock, Principles } from '@brentbrooks/ds';

export const DesignPrinciples = () => (
  <CaseBody>
    <TextBlock>
      <p>We approached the design with a few design principles:</p>
      <Principles
        items={[
          { title: 'Do the math', text: 'Find opportunities to infer the intent of our users and deliver the information before they ask for it.' },
          { title: "Don't try to out-excel excel", text: 'Many of our clients just need to pull raw reports to put into other tools.' },
          { title: "Less isn't always more", text: 'Deliver a clear information hierarchy and reduce noise, but know why a Bloomberg terminal looks the way it does.' },
          { title: 'Something now beats right later', text: 'Get signal early. Never skip research, but launch what you can and iterate.' },
        ]}
      />
    </TextBlock>
  </CaseBody>
);
