import Hero from '../components/Hero';
import InteractiveBackground from '../components/InteractiveBackground';
import ProjectCard from '../components/ProjectCard';
import SkillCloud from '../components/SkillCloud';
import ThemeToggle from '../components/ThemeToggle';
import Timeline from '../components/Timeline';

const projects = [
  {
    title: 'FindConnections.net',
    description:
      'An intelligent networking platform that helps professionals discover meaningful connections, share expertise, and grow communities online.',
    link: 'https://findconnections.net',
    tags: ['llm', 'next.js', 'pgvector', 'community'],
    path: '~/work/findconnections.net',
  },
  {
    title: 'EZRelocate.org',
    description:
      'A relocation advisory platform that simplifies global moves with resource guides, workflow automation, and destination intelligence.',
    link: 'https://ezrelocate.org',
    tags: ['rag', 'fastapi', 'postgres', 'logistics'],
    path: '~/work/ezrelocate.org',
  },
];

const experience = [
  {
    title: 'msc research — adaptive flow sampling in sdns',
    org: 'university of calgary',
    period: '2021.09 → 2024.12',
    details:
      'designed a network-wide sampling system for sdns that adapts to dynamic flow rates. packet-level simulations in ns-3.',
    highlights: [
      'formulation incorporating mean and variance of flow rates',
      'up to 10% improvement over state-of-the-art sampling',
      'applicable in datacenters and isp networks',
    ],
  },
  {
    title: 'teaching assistant — data structures & algorithms',
    org: 'amirkabir university of technology',
    period: '2020.09 → 2021.02',
    details: 'led tutorials and graded assignments for the core ds&a course.',
  },
  {
    title: 'teaching assistant — microprocessors & assembly',
    org: 'amirkabir university of technology',
    period: '2019.10 → 2020.02',
    details: 'supported students through arm assembly programming and microprocessor labs.',
  },
  {
    title: 'teaching assistant — principles of computer & programming',
    org: 'amirkabir university of technology',
    period: '2019.09 → 2020.02',
    details: 'mentored first-year cs students in foundational programming.',
  },
];

const education = [
  {
    title: "master's degree, computer science",
    org: 'university of calgary',
    period: '2021 → 2024',
    details: 'research focus: adaptive packet sampling in sdns using ns-3 simulations.',
  },
  {
    title: "bachelor's degree, computer science",
    org: 'amirkabir university of technology (tehran polytechnic)',
    period: '2016 → 2020',
  },
  {
    title: 'high school diploma — mathematics & physics',
    org: 'national organization for development of exceptional talents (sampad)',
    period: '2011 → 2016',
  },
];

export default function Home() {
  return (
    <>
      <InteractiveBackground />
      <main className="page-shell">
        <nav className="topbar">
          <div className="brand">
            <span className="brand-prompt">soroosh@calgary</span>
            <span className="brand-sep">:</span>
            <span className="brand-path">~</span>
            <span className="brand-sigil">$</span>
          </div>
          <div className="topbar-links">
            <a href="#about">:about</a>
            <a href="#work">:work</a>
            <a href="#skills">:skills</a>
            <a href="#experience">:exp</a>
            <a href="#contact">:contact</a>
            <ThemeToggle />
          </div>
        </nav>

        <Hero />

        <section id="about" className="about">
          <div className="section-prompt">
            <span className="prompt-sigil">$</span>
            <span className="prompt-cmd">cat about.md</span>
          </div>
          <div className="about-block">
            <p>
              <span className="comment">{'>'} </span>
              machine learning engineer with an msc in computer science from the university of calgary.
              i&apos;ve designed and deployed an lstm-based anomaly detection model running on iot gateway
              devices for enterprise clients, as part of a three-person team.
            </p>
            <p>
              <span className="comment">{'>'} </span>
              currently focused on building production software with <span className="hl">llms and rag systems</span>
              — claude and openai apis, pgvector embeddings, prompt engineering, and tool-use agents — while
              staying current with the fast-moving ai stack.
            </p>
            <p>
              <span className="comment">{'>'} </span>
              comfortable across the ml toolkit (keras, tensorflow, xgboost) and full-stack development
              (next.js, fastapi, postgresql).
            </p>
          </div>
        </section>

        <section id="work">
          <div className="section-header">
            <span className="section-tag">// 01</span>
            <h2>featured work</h2>
            <span className="section-meta">$ ls -la ~/work/</span>
          </div>
          <div className="grid">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>

        <section id="skills">
          <div className="section-header">
            <span className="section-tag">// 02</span>
            <h2>toolkit</h2>
            <span className="section-meta">$ cat ~/.skillsrc</span>
          </div>
          <SkillCloud />
        </section>

        <section id="experience">
          <div className="section-header">
            <span className="section-tag">// 03</span>
            <h2>experience</h2>
            <span className="section-meta">$ git log --oneline experience/</span>
          </div>
          <Timeline items={experience} />
        </section>

        <section id="education">
          <div className="section-header">
            <span className="section-tag">// 04</span>
            <h2>education</h2>
            <span className="section-meta">$ git log --oneline education/</span>
          </div>
          <Timeline items={education} />
        </section>

        <section id="contact" className="contact">
          <div className="section-header">
            <span className="section-tag">// 05</span>
            <h2>contact</h2>
            <span className="section-meta">$ ./reach-out.sh</span>
          </div>
          <div className="contact-block">
            <p className="contact-lede">
              <span className="comment">{'>'} </span>
              open to ml engineering, llm/rag, and full-stack product roles. happy to chat about
              networking, anomaly detection, or ai agents.
            </p>
            <div className="contact-rows">
              <a className="contact-row" href="mailto:esmailian98@gmail.com">
                <span className="contact-key">email</span>
                <span className="contact-arrow">→</span>
                <span className="contact-val">esmailian98@gmail.com</span>
              </a>
              <a
                className="contact-row"
                href="https://www.linkedin.com/in/sorooshes98"
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-key">linkedin</span>
                <span className="contact-arrow">→</span>
                <span className="contact-val">linkedin.com/in/sorooshes98</span>
              </a>
              <a className="contact-row" href="https://github.com/Soroush98" target="_blank" rel="noreferrer">
                <span className="contact-key">github</span>
                <span className="contact-arrow">→</span>
                <span className="contact-val">github.com/Soroush98</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>
            <span className="comment">// </span>
            built {new Date().getFullYear()} · calgary, canada
          </span>
          <span>
            <span className="comment">// </span>
            uptime: ∞
          </span>
        </footer>
      </main>
    </>
  );
}
