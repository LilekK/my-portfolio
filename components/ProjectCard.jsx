// Project card with top-right badge + years on the right of the title
// and link buttons that work inside the carousel.
window.ProjectCard = function ProjectCard({ project }) {
  const Tag = window.Tag;

  // You can provide either `project.badge` (e.g. "Personal Project")
  // or `project.company` (e.g. "Studio XYZ") — badge picks one.
  const badge = project.badge || project.company || null;

  const styleVars = {
    '--card-accent': project.accent || '#8BD9FF',
    '--card-accent-2': project.accent2 || 'transparent',
  };

  // Prevent carousel from eating clicks on inner buttons/links.
  const stopSlideClick = (e) => e.stopPropagation();

  const goInspect = (e) => {
    e.stopPropagation();
    window.location.href = `./project.html?slug=${encodeURIComponent(project.slug || project.id)}`;
  };

  return (
    <article id={project.id} className="card" style={styleVars}>
      <div className="card-media-wrap">
        <img
          className="card-media"
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
        />
        {badge && <span className="card-badge">{badge}</span>}

        {/* hover overlay */}
        <div className="card-overlay">
          <button className="inspect-btn" onClick={goInspect}>🔍 Inspect</button>
        </div>
      </div>

      <div className="card-body">
        <div className="card-head row between">
          <h3 className="card-title">{project.title}</h3>
          {project.years && <span className="card-years">{project.years}</span>}
        </div>

        <p className="muted">{project.blurb}</p>

        <div className="tags">
          {project.tags?.map(t => <Tag key={t}>{t}</Tag>)}
        </div>

        <div className="row gap">
          {project.links?.map(l => (
            <a
              key={l.href}
              className="btn btn-outline"
              href={l.href}
              target="_blank"
              rel="noopener"
              onClick={stopSlideClick}   // <-- fixes link not working
            >
              {l.label}
            </a>
          ))}
          {/* If you want a second Inspect button here, uncomment:
          <a className="btn" href={`./project.html?slug=${encodeURIComponent(project.slug || project.id)}`} onClick={stopSlideClick}>
            Inspect
          </a> */}
        </div>
      </div>
    </article>
  );
};