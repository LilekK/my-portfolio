// Skills / Toolbox with "Examples" (expandable) + "I've also worked on" (list)
window.Skills = function Skills({ data = {} }) {
  // Examples are rich objects with optional video/poster/summary
  const examples = (data.examples || []).map(item =>
    typeof item === 'string' ? ({ title: item }) : item
  );

  // WorkedOn is a flat list of strings (no demos)
  const workedOn = data.workedOn || [];

  const [openIdx, setOpenIdx] = React.useState(-1);
  const toggle = (i) => setOpenIdx(openIdx === i ? -1 : i);

  const SectionBox = ({ title, children }) => (
    <div className="skills-group">
      <h3 className="skills-title">{title}</h3>
      <div>{children}</div>
    </div>
  );

  const TagRow = ({ items }) => (
    <div className="skills-tags">
      {(items || []).map((t, i) => <span key={i} className="tag">{t}</span>)}
    </div>
  );

  return (
    <div className="skills-wrap">
      {/* TOP: Examples (replaces "Systems I Can Build") */}
      <SectionBox title="Examples">
        <div className="systems-list">
          {examples.length === 0 && <p className="muted">Add example items in <code>data/skills.js</code>.</p>}
          {examples.map((ex, i) => {
            const active = i === openIdx;
            return (
              <article key={i} className={`sys-item ${active ? 'open' : ''}`}>
                <button
                  className="sys-header"
                  onClick={() => toggle(i)}
                  aria-expanded={active ? 'true' : 'false'}
                  aria-controls={`ex-panel-${i}`}
                >
                  <span className="sys-title">{ex.title}</span>
                  {ex.pill && (
                    <span className={`sys-pill ${ex.pill === 'Built from scratch' ? 'pill-built' : 'pill-contrib'}`}>
                      {ex.pill}
                    </span>
                  )}
                  <span className="sys-chevron" aria-hidden>{active ? '▾' : '▸'}</span>
                </button>

                {/* ⬇️ Replace this panel block */}
                <div
                  id={`ex-panel-${i}`}
                  className="sys-panel"
                  style={{ maxHeight: active ? '800px' : '0px' }}
                >
                  {ex.summary && <p className="muted sys-summary">{ex.summary}</p>}

                  {(() => {
                    const mediaPref = ex.media || (ex.image ? 'image' : (ex.video ? 'video' : null));
                    if (mediaPref === 'image' && ex.image) {
                      return (
                        <div className="sys-image">
                          <img src={ex.image} alt={ex.title + ' example'} loading="lazy" />
                        </div>
                      );
                    }
                    if (mediaPref === 'video' && ex.video) {
                      return (
                        <div className="sys-video">
                          <video
                            src={ex.video}
                            poster={ex.poster || ''}
                            preload={active ? 'metadata' : 'none'}
                            controls
                            playsInline
                            muted
                          />
                        </div>
                      );
                    }
                    return null;
                  })()}
                </div>
              </article>
            );
          })}
        </div>
      </SectionBox>

      {/* "I've also worked on" — simple list, no expanders */}
      {workedOn.length > 0 && (
        <SectionBox title="I’ve also worked on">
          <ul className="skills-list">
            {workedOn.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </SectionBox>
      )}

      {/* Bottom two columns */}
      <div className="skills-columns">
        <SectionBox title="Frameworks & Workflow">
          <TagRow items={data.frameworks} />
        </SectionBox>

        <SectionBox title="Other Supporting Skills">
          <TagRow items={data.other} />
        </SectionBox>
      </div>
    </div>
  );
};
