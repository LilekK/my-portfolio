// public/App.jsx
// IMPORTANT: no imports/exports here. We attach the component to window.
window.App = function App() {
  // Smooth scrolling (supported browsers)
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  // Pull dependencies from window (loaded earlier via script tags)
  const Section = window.Section;
  const Header = window.Header;
  const ProjectCard = window.ProjectCard;
  const projects = Array.isArray(window.projects) ? window.projects : [];
  const Carousel = window.Carousel;
  const Skills = window.Skills;
  const skills = window.skills;


  return (
    <div className="page">
      <Header />

      <main className="container">
        {/* HOME */}
        <Section id="home">
          <div className="two-col">
            <div className="hero-text">
              <p className="eyebrow">WELCOME</p>
              <h1 className="section-title">Hi, I’m Peter aka LilekK</h1>
              <p className="lead">
                Professional scripter with 5+ years of experience in the Roblox ecosystem. Specializing in overall gameplay.
              </p>
              <div className="row gap">
                <a className="btn" href="#projects">See my projects</a>
                <a className="btn btn-outline" href="#contact">Contact</a>
              </div>
            </div>

            <div className="media-frame hero-img">
              <img src="./images/memyself.png" alt="Peter" />
            </div>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Recent Projects" eyebrow="work">
          <div className="carousel-wrap">
            <Carousel>
              {projects.map(p => <ProjectCard key={p.id} project={p} />)}
            </Carousel>
          </div>
        </Section>

        {/* ABOUT */}
        <Section id="about" title="About Me" eyebrow="profile">
          <p>
            I’m a Roblox developer specializing in scripting and gameplay systems. I’m based in 
            <strong> CET timezone</strong> and available for international collaboration.
          </p>

          <p>
            My focus is building reliable, scalable systems using Roblox frameworks like 
            <strong> Knit</strong>, <strong>ProfileService</strong>, and <strong>Fusion </strong>, 
            along with <strong>Rojo + VS Code integration</strong> for clean workflows. 
            I enjoy working on both <strong>backend systems</strong> (such as data saving and core gameplay logic) 
            and <strong>frontend experiences</strong> (like UI and player interaction) to create polished, seamless results.
          </p>

          <p>
            While scripting is my primary role, I also have supporting skills in 
            <strong> 3D modeling</strong>, <strong>rigging</strong>, <strong>basic animation</strong>, 
            and <strong>map design</strong>, which help me prototype and collaborate more effectively with teams.
          </p>

          <p>
            I’m looking for opportunities to contribute as a <strong>scripter</strong> on Roblox projects, 
            where I can apply my technical skills and collaborate with teams to build engaging player experiences.
          </p>
        </Section>

        {/* SKILLS / TOOLBOX */}
        <Section id="skills" title="Skills & Toolbox" eyebrow="capabilities">
          {/* If you already have a Skills component + data, render it here: */}
          {window.Skills && window.skills ? (
            <window.Skills data={window.skills} />
          ) : (
            <p className="muted">Add your tools and systems here (Knit, ProfileService, Rojo+VS Code, Fusion UI, etc.).</p>
          )}
        </Section>

      {/* CONTACT */}
      <Section id="contact" title="Let’s talk" eyebrow="reach out">
        <p className="muted availability">
          Availability: <strong>CET timezone</strong> - Open to Full-time, Part-time, commissions
        </p>

        <div className="row gap">
          <a className="btn" href="https://discord.com/users/626421334859055114">Discord: lilekk</a>
        </div>
      </Section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Your Name</footer>
    </div>
  );
};
