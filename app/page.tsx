import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'FindConnections.net',
    description:
      'An intelligent networking platform designed to help professionals discover meaningful connections, share expertise, and build better communities online.',
    link: 'https://findconnections.net',
    tags: ['Networking', 'AI-assisted', 'Community'],
  },
  {
    title: 'EZRelocate.org',
    description:
      'A relocation advisory platform that simplifies global moves with resource guides, workflow automation, and destination intelligence.',
    link: 'https://ezrelocate.org',
    tags: ['Relocation', 'Logistics', 'User Experience'],
  },
];

const certificates = [
  'Coursera: Machine Learning by Stanford University',
  'Coursera: Full-Stack Web Development with React',
  'Udemy: Advanced Next.js and React Patterns',
  'Udemy: Modern JavaScript Bootcamp',
  'Coursera: Data Science Specialization',
];

const publications = [
  {
    title: 'Optimizing Talent Networks with AI',
    venue: 'Tech Innovation Journal, 2025',
  },
  {
    title: 'Automating Global Relocation Workflows',
    venue: 'International Mobility Review, 2024',
  },
  {
    title: 'Designing Data-Driven Community Platforms',
    venue: 'Developer Research Quarterly, 2023',
  },
];

export default function Home() {
  return (
    <main className="page-shell">
      <section className="hero">
        <div>
          <p className="eyebrow">Software Engineer • Product Builder • Startup Founder</p>
          <h1>Hi, I&apos;m Soroush.</h1>
          <p>
            I build elegant, high-impact web products and digital experiences. This portfolio highlights my work on
            real-world platforms, professional certifications, and research-driven publications.
          </p>
        </div>
        <div className="hero-card">
          <p>Based in the intersection of product, technology, and growth.</p>
        </div>
      </section>

      <section>
        <div className="section-header">
          <span className="section-number">01</span>
          <h2>Featured Projects</h2>
        </div>
        <div className="grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      <section>
        <div className="section-header">
          <span className="section-number">02</span>
          <h2>Certifications</h2>
        </div>
        <ul className="list-card">
          {certificates.map((certificate) => (
            <li key={certificate}>{certificate}</li>
          ))}
        </ul>
      </section>

      <section>
        <div className="section-header">
          <span className="section-number">03</span>
          <h2>Publications</h2>
        </div>
        <div className="list-card">
          {publications.map((publication) => (
            <article key={publication.title} className="publication-item">
              <h3>{publication.title}</h3>
              <p>{publication.venue}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="footer-card">
        <h2>Let&apos;s build something meaningful.</h2>
        <p>Reach out to collaborate on product launches, networking communities, and relocation technology.</p>
      </section>
    </main>
  );
}
