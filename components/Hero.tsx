'use client';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="prompt-line">
          <span className="prompt-sigil">$</span>
          <span className="prompt-cmd">whoami</span>
        </div>
        <h1>
          <span className="prompt-out">{'>'}</span> <span className="name">soroosh.esmaeilian</span>
          <span className="caret" aria-hidden>▮</span>
        </h1>
        <div className="prompt-line">
          <span className="prompt-sigil">$</span>
          <span className="prompt-cmd">cat role.txt</span>
        </div>
        <p className="role-line">
          <span className="prompt-out">{'>'}</span> ML ENGINEER · CALGARY · MSc University of Calgary
        </p>
        <div className="prompt-line">
          <span className="prompt-sigil">$</span>
          <span className="prompt-cmd">cat focus.txt</span>
        </div>
        <p className="role-line">
          <span className="prompt-out">{'>'}</span> llms · rag · anomaly_detection · production_systems
        </p>

        <div className="prompt-line spacer-line">
          <span className="prompt-sigil">$</span>
          <span className="prompt-cmd">contact --options</span>
        </div>
        <div className="quick-actions">
          <a className="qa qa-primary" href="mailto:esmailian98@gmail.com">
            <span className="qa-key">--email</span>
            esmailian98@gmail.com
          </a>
          <a className="qa" href="https://www.linkedin.com/in/sorooshes98" target="_blank" rel="noreferrer">
            <span className="qa-key">--linkedin</span>
            /in/sorooshes98
          </a>
          <a className="qa" href="https://github.com/Soroush98" target="_blank" rel="noreferrer">
            <span className="qa-key">--github</span>
            /Soroush98
          </a>
        </div>
      </div>

      <div className="terminal-window">
        <div className="tw-titlebar">
          <span className="tw-dot tw-dot-r" />
          <span className="tw-dot tw-dot-y" />
          <span className="tw-dot tw-dot-g" />
          <span className="tw-title">~/profile.json</span>
        </div>
        <pre className="tw-body">
{`{
  "name": "soroosh esmaeilian",
  "role": "ml engineer",
  "location": "calgary, canada",
  "education": {
    "msc": "u. of calgary, 2024",
    "bsc": "amirkabir u. of tech, 2020"
  },
  "stack": [
    "python", "tensorflow", "keras",
    "fastapi", "next.js", "postgres",
    "pgvector", "aws", "docker"
  ],
  "focus": [
    "llms", "rag",
    "anomaly_detection",
    "tool_use_agents"
  ],
  "open_to": "ml + llm engineering roles",
  "connections": 1195,
  "shipped": ["findconnections.net",
              "ezrelocate.org"]
}`}
        </pre>
      </div>
    </section>
  );
}
