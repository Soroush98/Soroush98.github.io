import Hero from '../components/Hero';
import InteractiveBackground from '../components/InteractiveBackground';
import Nav from '../components/Nav';
import ProjectCard from '../components/ProjectCard';
import SkillCloud from '../components/SkillCloud';
import Timeline from '../components/Timeline';

const projects = [
  {
    title: 'EZRelocate.org',
    description:
      'Canada-wide rental search. You describe what you’re looking for in plain English; the system returns real rental listings on a map, with reasoning that cites each pick by id.',
    link: 'https://ezrelocate.org',
    tags: ['LLM', 'RAG', 'Map Search', 'Rentals'],
    image: '/EZrelocate.png',
  },
  {
    title: 'FindConnections.net',
    description:
      'A Next.js app that lets anyone discover connections between notable individuals by finding instances where they appear together in a photo, either directly or through a short chain of mutual photos. Inspired by six degrees of separation.',
    link: 'https://findconnections.net',
    tags: ['Next.js', 'Graph', 'Photos', 'Six Degrees'],
    image: '/Findconnections.png',
  },
];

const experience = [
  {
    title: 'ML Engineering Intern',
    org: 'Wedge Networks · Calgary, CA',
    period: 'Sep 2023 to Jul 2024',
    details:
      'Collaboratively designed and developed EdgeInsight with a team of three, a multi-task learning anomaly detection model built in PyTorch for deployment on Litmus Edge, an IoT gateway trusted by enterprise companies.',
    highlights: [
      'Engineered a data augmentation pipeline to inject artificial anomalies such as sensor spikes and drifts to train the model.',
      'Built a scalable Java service to process concurrent IoT sensor inference requests in real time, integrating RabbitMQ for reliable live data streaming.',
    ],
  },
  {
    title: 'MSc Research, Adaptive Flow Sampling in SDNs',
    org: 'University of Calgary',
    period: 'Sep 2021 to Dec 2024',
    details:
      'Designed a network-wide sampling system for SDNs that adapts to dynamic flow rates. Packet-level simulations in ns-3.',
    highlights: [
      'Formulation incorporating mean and variance of flow rates.',
      'Applicable in datacenters and ISP networks.',
    ],
  },
  {
    title: 'Machine Learning Research Assistant',
    org: 'Institute For Research In Fundamental Sciences (IPM) · Tehran, IR',
    period: 'Sep 2018 to Jul 2021',
    details:
      'Applied ML and signal processing to neuroimaging data (FNIRS, EEG) for cognitive workload and BCI classification.',
    highlights: [
      'Classified cognitive workload levels from FNIRS neuroimaging data using Linear Discriminant Analysis with cross-subject validation.',
      'Built an SVM + xDAWN spatial filtering pipeline for EEG SSVEP classification using cross-validation.',
      'First place in the First National FNIRS Data Analysis Competition (Working Memory), organized by the National Brain Mapping Laboratory.',
      'Third place in the 4th Iranian BCI Competition, organized by the National Brain Mapping Laboratory.',
    ],
  },
];

const education = [
  {
    title: "Master's Degree, Computer Science",
    org: 'University of Calgary',
    period: '2021 to 2024',
    details: 'Research focus: adaptive packet sampling in SDNs using ns-3 simulations.',
  },
  {
    title: "Bachelor's Degree, Computer Science",
    org: 'Amirkabir University of Technology (Tehran Polytechnic)',
    period: '2016 to 2020',
  },
  {
    title: 'High School Diploma, Mathematics & Physics',
    org: 'National Organization for Development of Exceptional Talents (SAMPAD)',
    period: '2011 to 2016',
  },
];

const MailIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);
const LinkedInIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.03-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21h-4V9z" />
  </svg>
);
const GitHubIcon = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.34.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.78 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.67.41.36.78 1.07.78 2.15v3.19c0 .31.21.68.8.56C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" />
  </svg>
);

export default function Home() {
  return (
    <>
      <InteractiveBackground />
      <Nav />
      <main>
        <div className="container">
          <Hero />

          <section id="about" className="section">
            <div className="section-head">
              <div className="section-head-left">
                <div className="section-tag">01 · About</div>
                <h2>Hands-on ML, end-to-end shipping.</h2>
                <p>From research to production. I’ve trained models that ran on enterprise edge devices and now build software that puts language models to work.</p>
              </div>
              <span className="section-meta">/who-am-i</span>
            </div>
            <div className="about-grid">
              <div className="about-body">
                <p>
                  <span className="hl">Machine Learning Engineer</span> with an MSc in Computer Science from the
                  University of Calgary. As part of a three-person team, I designed and deployed an
                  <span className="hl"> multi-task learning anomaly detection model</span> running on IoT gateway devices
                  for enterprise clients.
                </p>
                <p>
                  These days I’m investigating{' '}
                  <span className="accent">LLMs and RAG systems</span>: Claude and OpenAI APIs,
                  pgvector embeddings, prompt engineering, and tool-use agents, while keeping current
                  with the fast-moving AI and software engineering stack.
                </p>
                <p>
                  Comfortable across the ML toolkit (<span className="hl">Keras, TensorFlow</span>) and full-stack
                  development (<span className="hl">Next.js, FastAPI, PostgreSQL</span>).
                </p>
              </div>
              <div className="stat-grid">
                <div className="stat">
                  <div className="stat-num">3+</div>
                  <div className="stat-label">Years in ML &amp; AI</div>
                </div>
                <div className="stat">
                  <div className="stat-num">3</div>
                  <div className="stat-label">Production apps shipped</div>
                </div>
                <div className="stat">
                  <div className="stat-num">IoT</div>
                  <div className="stat-label">Edge ML in production</div>
                </div>
                <div className="stat">
                  <div className="stat-num">MSc</div>
                  <div className="stat-label">U. of Calgary</div>
                </div>
              </div>
            </div>
          </section>

          <section id="work" className="section">
            <div className="section-head">
              <div className="section-head-left">
                <div className="section-tag">02 · Work</div>
                <h2>Featured projects.</h2>
                <p>LLM-powered products I’ve designed, built, and shipped.</p>
              </div>
              <span className="section-meta">/projects</span>
            </div>
            <div className="proj-grid">
              {projects.map((p) => (
                <ProjectCard key={p.title} {...p} />
              ))}
            </div>
          </section>

          <section id="skills" className="section">
            <div className="section-head">
              <div className="section-head-left">
                <div className="section-tag">03 · Skills</div>
                <h2>Tools I reach for.</h2>
                <p>From training neural nets to wiring up agents and APIs in production.</p>
              </div>
              <span className="section-meta">/toolkit</span>
            </div>
            <SkillCloud />
          </section>

          <section id="experience" className="section">
            <div className="section-head">
              <div className="section-head-left">
                <div className="section-tag">04 · Experience</div>
                <h2>Where I’ve worked &amp; researched.</h2>
                <p>Research and applied ML, from packet-level simulators to enterprise IoT.</p>
              </div>
              <span className="section-meta">/timeline</span>
            </div>
            <Timeline items={experience} />
          </section>

          <section id="education" className="section">
            <div className="section-head">
              <div className="section-head-left">
                <div className="section-tag">05 · Education</div>
                <h2>Academic background.</h2>
              </div>
              <span className="section-meta">/edu</span>
            </div>
            <Timeline items={education} />
          </section>

          <section id="publications" className="section">
            <div className="section-head">
              <div className="section-head-left">
                <div className="section-tag">06 · Publications</div>
                <h2>Research published.</h2>
                <p>Peer-reviewed work from my MSc research at the University of Calgary.</p>
              </div>
              <span className="section-meta">/papers</span>
            </div>
            <div className="pub-list">
              <article className="pub-card">
                <span className="pub-venue">IEEE · CNSM 2024</span>
                <h3 className="pub-title">Coordinated Sampling in SDNs with Dynamic Flow Rates</h3>
                <p className="pub-authors">
                  <span className="me">Esmaeilian, S.</span>, Dolati, M., Sadrhaghighi, S., Ghaderi, M.
                </p>
                <div className="pub-meta">
                  2024 20th International Conference on Network and Service Management (CNSM), pp. 1–7. IEEE.
                </div>
              </article>
            </div>
          </section>

          <section id="contact" className="section">
            <div className="section-head">
              <div className="section-head-left">
                <div className="section-tag">07 · Contact</div>
                <h2>Let’s build something.</h2>
                <p>Open to ML engineering, LLM/RAG, and full-stack product roles.</p>
              </div>
              <span className="section-meta">/reach-out</span>
            </div>
            <div className="contact-card">
              <div className="contact-left">
                <h3>Have a project in mind?</h3>
                <p>
                  I’m happy to chat about LLM architecture, RAG systems, anomaly detection, or
                  full-stack engineering. Reach out and let’s talk.
                </p>
                <a className="btn btn-primary" href="mailto:soroosh.esmaeilian@gmail.com">
                  Email me
                  <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <div className="contact-right">
                <a className="contact-link" href="mailto:soroosh.esmaeilian@gmail.com">
                  <span className="contact-icon" aria-hidden>{MailIcon}</span>
                  <span className="contact-info">
                    <span className="label">Email</span>
                    <span className="value">soroosh.esmaeilian@gmail.com</span>
                  </span>
                </a>
                <a className="contact-link" href="https://www.linkedin.com/in/sorooshes98" target="_blank" rel="noreferrer">
                  <span className="contact-icon" aria-hidden>{LinkedInIcon}</span>
                  <span className="contact-info">
                    <span className="label">LinkedIn</span>
                    <span className="value">linkedin.com/in/sorooshes98</span>
                  </span>
                </a>
                <a className="contact-link" href="https://github.com/Soroush98" target="_blank" rel="noreferrer">
                  <span className="contact-icon" aria-hidden>{GitHubIcon}</span>
                  <span className="contact-info">
                    <span className="label">GitHub</span>
                    <span className="value">github.com/Soroush98</span>
                  </span>
                </a>
              </div>
            </div>
          </section>

          <footer className="footer">
            <div className="footer-brand">
              <span className="nav-dot" aria-hidden />
              <span>Soroosh Esmaeilian · Edmonton, Canada</span>
            </div>
            <div className="footer-links">
              <a href="#top">Back to top</a>
              <a href="mailto:soroosh.esmaeilian@gmail.com">Email</a>
              <a href="https://github.com/Soroush98" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
