const PROJECTS = [
  {
    id: 1,
    title: 'My Portfolio v1',
    description: 'Premier portfolio responsive avec HTML/CSS/JS.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    emoji: '🌐',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Coming soon...',
    techs: ['React', 'Node.js'],
    emoji: '🚀',
  },
];

export function ProjectsContent() {
  return (
    <div className="section-content projects-content">
      <h2 className="section-title">mes projets</h2>
      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <div key={p.id} className="project-card">
            <span className="project-card__emoji">{p.emoji}</span>
            <h3 className="project-card__title">{p.title}</h3>
            <p className="project-card__desc">{p.description}</p>
            <div className="project-card__techs">
              {p.techs.map((t) => (
                <span key={t} className="tag tag--small">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
