import React from 'react';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

const Header = () => {
  return (
    <header className="header glass-card" style={{
      position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)',
      width: '90%', maxWidth: '1000px', zIndex: 1000,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '12px 32px'
    }}>
      <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>
        Kritika Gahlot
      </div>
      <nav style={{ display: 'flex', gap: '32px', fontSize: '0.9rem', fontWeight: 500 }}>
        <a href="#about" className="nav-link">About</a>
        <a href="#experience" className="nav-link">Experience</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#education" className="nav-link">Education</a>
      </nav>
      <div style={{ display: 'flex', gap: '16px' }}>
        <a href="mailto:gahlotkritika59@gmail.com" title="Email"><Mail size={20} /></a>
        <a href="https://www.linkedin.com/in/kritikagahlot980/" target="_blank" rel="noreferrer" title="LinkedIn"><Linkedin size={20} /></a>
        <a href="https://github.com/kritikagahlot5" target="_blank" rel="noreferrer" title="GitHub"><Github size={20} /></a>
      </div>
      <style>{`
        .nav-link:hover { color: var(--primary); }
        @media (max-width: 768px) {
          nav { display: none !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
