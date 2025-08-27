window.NavLink = function NavLink({ id, label }) {
  const onClick = (e) => {
    e.preventDefault();

    // set active immediately
    const navItems = Array.from(document.querySelectorAll('.nav a'));
    navItems.forEach(a => a.classList.remove('active'));
    e.currentTarget.classList.add('active');
    e.currentTarget.setAttribute('aria-current', 'page');

    // smooth scroll with sticky header offset
    const el = document.getElementById(id);
    const header = document.getElementById('site-header');
    const offset = header ? header.offsetHeight + 12 : 0;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <a href={`#${id}`} onClick={onClick} className="nav-link">{label}</a>
  );
};