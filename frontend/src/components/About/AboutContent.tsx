export function AboutContent() {
  return (
    <div className="section-content about-content">
      <div className="about-content__avatar">🐱</div>
      <div className="about-content__info">
        <h2 className="section-title">Candide</h2>
        <p className="section-subtitle">Web Developer in training @ Kadea Academy</p>
        <div className="about-content__tags">
          <span className="tag">HTML/CSS</span>
          <span className="tag">JavaScript</span>
          <span className="tag">React</span>
          <span className="tag">Node.js</span>
          <span className="tag">PostgreSQL</span>
        </div>
        <p className="about-content__bio">
          Passionnée par le code et la créativité, je construis des interfaces web
          interactives et jolies. Chaque projet est une aventure ! 🌿
        </p>
      </div>
    </div>
  );
}
