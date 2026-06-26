import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  tags: string[];
  image?: string;
  priority?: boolean;
};

export default function ProjectCard({
  title,
  description,
  link,
  tags,
  image,
  priority = false,
}: ProjectCardProps) {
  return (
    <article className="proj-card">
      {image && (
        <a
          className="proj-image"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${title}`}
        >
          <Image
            src={image}
            alt={`${title} screenshot`}
            width={800}
            height={450}
            sizes="(max-width: 720px) 100vw, (max-width: 1180px) 50vw, 560px"
            priority={priority}
          />
        </a>
      )}
      <div className="proj-body">
        <div className="proj-head">
          <h3 className="proj-title">{title}</h3>
          <div className="proj-icon" aria-hidden>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2l2.39 4.84L20 7.5l-4 3.9.94 5.5L12 14.27 7.06 16.9 8 11.4l-4-3.9 5.61-.66L12 2z" />
            </svg>
          </div>
        </div>
        <p className="proj-desc">{description}</p>
        <div className="proj-tags">
          {tags.map((t) => (
            <span key={t} className="proj-tag">
              {t}
            </span>
          ))}
        </div>
        <a className="proj-link" href={link} target="_blank" rel="noopener noreferrer">
          Visit site
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </a>
      </div>
    </article>
  );
}
