type Item = {
  title: string;
  org: string;
  period: string;
  details?: string;
  highlights?: string[];
};

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="timeline">
      {items.map((it) => (
        <li key={`${it.title}-${it.org}-${it.period}`} className="tl-item">
          <div className="tl-period">{it.period}</div>
          <h3 className="tl-title">{it.title}</h3>
          <div className="tl-org">{it.org}</div>
          {it.details && <p className="tl-details">{it.details}</p>}
          {it.highlights && it.highlights.length > 0 && (
            <ul className="tl-highlights">
              {it.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
