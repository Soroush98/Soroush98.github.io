type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  tags: string[];
};

export default function ProjectCard({ title, description, link, tags }: ProjectCardProps) {
  return (
    <article className="card">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <span>{tags.join(' · ')}</span>
        <a href={link} target="_blank" rel="noreferrer">
          Visit
        </a>
      </div>
    </article>
  );
}
