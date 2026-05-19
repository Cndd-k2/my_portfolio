const LINKS = [
  { label: 'GitHub', icon: '🐙', url: 'https://github.com/Cndd-k2' },
  { label: 'LinkedIn', icon: '💼', url: '#' },
  { label: 'Twitter / X', icon: '🐦', url: '#' },
  { label: 'Portfolio v1', icon: '🌐', url: 'https://cndd-k2.github.io/my-portfolio/' },
];

export function LinksContent() {
  return (
    <div className="section-content links-content">
      <h2 className="section-title">mes liens</h2>
      <div className="links-grid">
        {LINKS.map((l) => (
          <a
            key={l.label}
            href={l.url}
            target="_blank"
            rel="noopener noreferrer"
            className="link-card"
          >
            <span className="link-card__icon">{l.icon}</span>
            <span className="link-card__label">{l.label}</span>
          </a>
        ))}
      </div>
      <p className="links-note">cliquer ouvre un nouvel onglet 🔗</p>
    </div>
  );
}
