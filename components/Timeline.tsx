type Item = {
  title: string;
  org: string;
  period: string;
  details?: string;
  highlights?: string[];
};

export default function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="tree">
      {items.map((it, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <li key={`${it.title}-${it.org}-${it.period}`} className="tree-item">
            <div className="tree-row tree-row-head">
              <span className="tree-glyph">{isLast ? '└──' : '├──'}</span>
              <span className="tree-period">[{it.period}]</span>
              <span className="tree-title">{it.title}</span>
            </div>
            <div className="tree-row tree-row-sub">
              <span className="tree-glyph">{isLast ? '   ' : '│  '}</span>
              <span className="tree-org">@ {it.org}</span>
            </div>
            {it.details && (
              <div className="tree-row tree-row-sub tree-row-detail">
                <span className="tree-glyph">{isLast ? '   ' : '│  '}</span>
                <span className="tree-detail">// {it.details}</span>
              </div>
            )}
            {it.highlights?.map((h) => (
              <div key={h} className="tree-row tree-row-sub tree-row-highlight">
                <span className="tree-glyph">{isLast ? '   ' : '│  '}</span>
                <span className="tree-detail">+ {h}</span>
              </div>
            ))}
            {!isLast && (
              <div className="tree-row tree-row-spacer">
                <span className="tree-glyph">│</span>
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
