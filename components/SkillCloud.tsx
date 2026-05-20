'use client';

type Skill = { name: string; weight?: number };

const groups: { title: string; items: Skill[] }[] = [
  {
    title: 'ml + ai',
    items: [
      { name: 'llms', weight: 3 },
      { name: 'rag', weight: 3 },
      { name: 'anomaly-detection', weight: 3 },
      { name: 'machine-learning', weight: 3 },
      { name: 'deep-learning', weight: 2 },
      { name: 'tensorflow' },
      { name: 'keras' },
      { name: 'xgboost' },
      { name: 'word-embeddings' },
      { name: 'neural-networks' },
    ],
  },
  {
    title: 'backend + infra',
    items: [
      { name: 'python', weight: 3 },
      { name: 'fastapi', weight: 2 },
      { name: 'postgres', weight: 2 },
      { name: 'pgvector', weight: 2 },
      { name: 'docker', weight: 2 },
      { name: 'kubernetes' },
      { name: 'aws' },
      { name: 'lambda' },
      { name: 'ec2' },
      { name: 's3' },
      { name: 'nginx' },
      { name: 'neo4j' },
      { name: 'postgis' },
      { name: 'ci/cd' },
    ],
  },
  {
    title: 'frontend + lang',
    items: [
      { name: 'next.js', weight: 2 },
      { name: 'react' },
      { name: 'javascript' },
      { name: 'java' },
      { name: 'c++' },
      { name: 'go' },
      { name: 'bash' },
    ],
  },
  {
    title: 'networking + low-level',
    items: [
      { name: 'bgp' },
      { name: 'ospf' },
      { name: 'wireshark' },
      { name: 'ns-3' },
    ],
  },
];

export default function SkillCloud() {
  return (
    <div className="skill-stack">
      {groups.map((g) => (
        <div key={g.title} className="skill-group">
          <div className="skill-group-head">
            <span className="prompt-sigil">$</span>
            <span className="prompt-cmd">ls skills/{g.title.replace(/\s\+\s/g, '_')}/</span>
          </div>
          <div className="skill-chips">
            {g.items.map((s) => (
              <span key={s.name} className={`bracket-tag bracket-w${s.weight ?? 1}`}>
                <span className="bracket">[</span>
                {s.name}
                <span className="bracket">]</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
