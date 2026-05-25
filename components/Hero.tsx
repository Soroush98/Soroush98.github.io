import Image from 'next/image';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <div className="hero-eyebrow">
          <span className="dot" aria-hidden />
          Open to ML / LLM engineering roles
        </div>
        <h1>
          ML Engineer <span className="grad">investigating LLMs &amp; RAG</span>.
        </h1>
        <p className="hero-sub">
          I’m <span className="hl">Soroosh Esmaeilian</span>, a Machine Learning Engineer with an
          MSc from the University of Calgary. Currently exploring{' '}
          <span className="hl">LLMs, RAG systems, and tool-use agents</span> while drawing on
          industrial experience shipping multi-task learning anomaly detection on enterprise IoT gateways.
        </p>
        <div className="hero-ctas">
          <a href="#work" className="btn btn-primary">
            See my work
            <svg className="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-ghost">
            Get in touch
          </a>
        </div>
        <div className="hero-meta">
          <span className="hero-meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C8 6 6 9 6 13a6 6 0 0 0 12 0c0-4-2-7-6-11z" />
            </svg>
            Edmonton, Canada
          </span>
          <span className="hero-meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h10" />
            </svg>
            MSc, Computer Science
          </span>
          <span className="hero-meta-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 3" />
            </svg>
            Available now
          </span>
        </div>
      </div>

      <aside className="profile-card" aria-label="Profile">
        <div className="profile-header">
          <div className="profile-avatar">
            <Image
              src="/Soroosh.jpg"
              alt="Portrait of Soroosh Esmaeilian"
              width={120}
              height={120}
              priority
            />
          </div>
          <div className="profile-id">
            <div className="pname">Soroosh Esmaeilian</div>
            <div className="pmeta">ML Engineer · LLMs · RAG</div>
          </div>
        </div>
        <div className="profile-row">
          <span className="k">Location</span>
          <span className="v">Edmonton, CA</span>
        </div>
        <div className="profile-row">
          <span className="k">Education</span>
          <span className="v">MSc, U. of Calgary</span>
        </div>
        <div className="profile-row">
          <span className="k">Focus</span>
          <span className="v accent">LLMs · RAG · Agents</span>
        </div>
        <div className="profile-row">
          <span className="k">Stack</span>
          <span className="v">Python · TS · Postgres</span>
        </div>
        <div className="profile-row">
          <span className="k">Status</span>
          <span className="v accent">Open to roles</span>
        </div>
        <div className="profile-tags">
          <span className="profile-tag">claude-api</span>
          <span className="profile-tag">openai</span>
          <span className="profile-tag">pgvector</span>
          <span className="profile-tag">fastapi</span>
          <span className="profile-tag">next.js</span>
          <span className="profile-tag">tensorflow</span>
        </div>
      </aside>
    </section>
  );
}
