import { Site, Topbar, Hero, Facts, Closing, Footer } from '@brentbrooks/ds';

export const HomePage = () => (
  <Site>
    <Topbar links={[{ label: 'Work', href: 'recent-work.html' }, { label: 'Contact', href: 'contact.html' }]} />
    <main className="page" id="main">
      <Hero
        title={['Between making', 'and leading.']}
        dimTitle={['Design that', 'gets it right.']}
        paragraphs={['My career has lived in that gap. I build teams that are engaged and creatively ambitious, and I stay close enough to the work to push it further.']}
      />
      <Facts items={[{ label: 'Based', value: 'New York, NY' }, { label: 'Email', value: 'me@brentbrooks.com', href: 'mailto:me@brentbrooks.com' }]} />
      <Closing line="Building a design team, or rebuilding how one works with AI? That is the work I want." />
    </main>
    <Footer />
  </Site>
);
