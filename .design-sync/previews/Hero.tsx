import { Hero } from '@brentbrooks/ds';

export const Home = () => (
  <Hero
    title={['Between making', 'and leading.']}
    dimTitle={['Design that', 'gets it right.']}
    paragraphs={[
      'My career has lived in that gap. I build teams that are engaged and creatively ambitious, and I stay close enough to the work to push it further.',
      "Right now I'm leading four platforms at BNY and helping rethink what AI-first means for product designers. Not the hype, the real operational shift from idea to execution.",
    ]}
  />
);

export const Work = () => (
  <Hero
    title={['Recent', 'work.']}
    dimTitle={['15 projects.']}
    paragraphs={['Product design, UI/UX, design systems, and earlier campaign work, across financial services, retirement, and consumer brands.']}
  />
);

export const Contact = () => (
  <Hero
    title={["Let's", 'talk.']}
    paragraphs={['Open to design leadership, advisory, and the right full-time conversations. Best reached by email.']}
  />
);
