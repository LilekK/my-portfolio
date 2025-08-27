window.Section = function Section({ id, title, eyebrow, children }) {
return (
<section id={id} className="section">
<div className="container">
{eyebrow && <p className="eyebrow">{eyebrow}</p>}
<h2 className="section-title">{title}</h2>
<div className="section-body">{children}</div>
</div>
</section>
);
}