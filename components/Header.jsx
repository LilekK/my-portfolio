// Define Header on window
window.Header = function Header() {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills & Toolbox' },
    { id: 'contact', label: 'Contact' },
  ];

  React.useEffect(() => {
    const sections = links.map(l => document.getElementById(l.id)).filter(Boolean);
    const navItems = Array.from(document.querySelectorAll('.nav a'));
    const byId = (id) => navItems.find(a => a.getAttribute('href') === `#${id}`);

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const link = byId(entry.target.id);
        if (!link) return;
        if (entry.isIntersecting) {
          navItems.forEach(a => a.classList.remove('active'));
          link.classList.add('active');
          link.setAttribute('aria-current', 'page');
        }
      });
    }, { threshold: 0.25, rootMargin: '-80px 0px -55% 0px' });

    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header id="site-header" className="site-header">
      <div className="container">
        <nav className="nav nav-center">
          {links.map(l => <window.NavLink key={l.id} id={l.id} label={l.label} />)}
        </nav>
      </div>
    </header>
  );
}