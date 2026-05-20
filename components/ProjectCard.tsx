type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  tags: string[];
  path?: string;
};

export default function ProjectCard({ title, description, link, tags, path }: ProjectCardProps) {
  const filePath = path ?? `~/work/${title.toLowerCase().replace(/\s+/g, '-')}/README.md`;
  return (
    <article className="terminal-window project-window">
      <div className="tw-titlebar">
        <span className="tw-dot tw-dot-r" />
        <span className="tw-dot tw-dot-y" />
        <span className="tw-dot tw-dot-g" />
        <span className="tw-title">{filePath}</span>
        <span className="tw-status">live</span>
      </div>
      <div className="tw-body project-body">
        <div className="project-name">
          <span className="comment"># </span>
          {title}
        </div>
        <p className="project-desc">{description}</p>
        <div className="project-tags">
          <span className="comment">tags: </span>
          {tags.map((t, i) => (
            <span key={t} className="bracket-tag">
              <span className="bracket">[</span>
              {t}
              <span className="bracket">]</span>
              {i < tags.length - 1 && <span className="comment-soft"> </span>}
            </span>
          ))}
        </div>
        <a className="project-link" href={link} target="_blank" rel="noreferrer">
          <span className="prompt-sigil">$</span> open {link.replace(/^https?:\/\//, '')}
        </a>
      </div>
    </article>
  );
}
