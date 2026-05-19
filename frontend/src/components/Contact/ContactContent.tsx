import { useState } from 'react';

export function ContactContent() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="section-content contact-content">
      <h2 className="section-title">me contacter</h2>
      {status === 'success' ? (
        <div className="contact-success">
          <span>✉️</span>
          <p>Message envoyé ! Je te réponds bientôt 🌿</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">nom</label>
            <input
              className="form-input"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="ton prénom..."
            />
          </div>
          <div className="form-group">
            <label className="form-label">email</label>
            <input
              className="form-input"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="ton@email.com"
            />
          </div>
          <div className="form-group">
            <label className="form-label">message</label>
            <textarea
              className="form-input form-textarea"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="dis-moi tout..."
              rows={4}
            />
          </div>
          {status === 'error' && (
            <p className="form-error">Oups, une erreur. Réessaie ! 🍄</p>
          )}
          <button className="btn-primary" type="submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'envoi...' : 'envoyer ✉️'}
          </button>
        </form>
      )}
    </div>
  );
}
