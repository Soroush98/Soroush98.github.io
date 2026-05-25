type Skill = { name: string };
type Group = { title: string; subtitle: string; icon: React.ReactNode; items: Skill[] };

const Icon = {
  brain: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3a3 3 0 0 0-3 3v1a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3v1a3 3 0 0 0 3 3" />
      <path d="M15 3a3 3 0 0 1 3 3v1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3v1a3 3 0 0 1-3 3" />
      <path d="M12 7v10" />
    </svg>
  ),
  server: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 7h.01M7 17h.01" />
    </svg>
  ),
  code: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  ),
  net: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
};

const groups: Group[] = [
  {
    title: 'AI & Machine Learning',
    subtitle: 'LLMs, RAG, deep learning',
    icon: Icon.brain,
    items: [
      { name: 'LLMs' },
      { name: 'RAG' },
      { name: 'Claude API' },
      { name: 'OpenAI API' },
      { name: 'Gemma' },
      { name: 'Prompt Engineering' },
      { name: 'Tool-use Agents' },
      { name: 'Anomaly Detection' },
      { name: 'Multi-task Learning' },
      { name: 'PyTorch' },
      { name: 'TensorFlow' },
      { name: 'Keras' },
      { name: 'XGBoost' },
      { name: 'Embeddings' },
    ],
  },
  {
    title: 'Backend & Infrastructure',
    subtitle: 'APIs, databases, cloud',
    icon: Icon.server,
    items: [
      { name: 'Python' },
      { name: 'FastAPI' },
      { name: 'Flask' },
      { name: 'PostgreSQL' },
      { name: 'pgvector' },
      { name: 'Docker' },
      { name: 'Kubernetes' },
      { name: 'AWS' },
      { name: 'Lambda' },
      { name: 'EC2' },
      { name: 'S3' },
      { name: 'Neo4j' },
      { name: 'PostGIS' },
      { name: 'Nginx' },
      { name: 'CI/CD' },
    ],
  },
  {
    title: 'Frontend & Languages',
    subtitle: 'Full-stack delivery',
    icon: Icon.code,
    items: [
      { name: 'Next.js' },
      { name: 'React' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Java' },
      { name: 'C++' },
      { name: 'Go' },
      { name: 'Bash' },
    ],
  },
  {
    title: 'Networking & Systems',
    subtitle: 'Research foundations',
    icon: Icon.net,
    items: [
      { name: 'SDN' },
      { name: 'BGP' },
      { name: 'OSPF' },
      { name: 'Wireshark' },
      { name: 'ns-3' },
    ],
  },
];

export default function SkillCloud() {
  return (
    <div className="skill-grid">
      {groups.map((g) => (
        <div key={g.title} className="skill-card">
          <div className="skill-head">
            <div className="skill-icon" aria-hidden>{g.icon}</div>
            <div>
              <div className="skill-title">{g.title}</div>
              <div className="skill-sub">{g.subtitle}</div>
            </div>
          </div>
          <div className="skill-pills">
            {g.items.map((s) => (
              <span key={s.name} className="skill-pill">{s.name}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
