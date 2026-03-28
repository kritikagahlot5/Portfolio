import React from 'react';
import { MousePointer2, ExternalLink } from 'lucide-react';

const Hero = () => {
    return (
        <section id="about" style={{
            minHeight: '100vh', display: 'flex', flexDirection: 'column', 
            justifyContent: 'center', alignItems: 'center', textAlign: 'center'
        }}>
            <div className="glass-card" style={{ padding: '64px', borderRadius: '32px', maxWidth: '800px' }}>
                <h3 style={{ color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '16px' }}>
                    Welcome to my portfolio
                </h3>
                <h1 style={{ fontSize: '4.5rem', lineHeight: 1.1, marginBottom: '24px' }}>
                    Hi, I'm <span className="gradient-text">Kritika Gahlot</span>
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '32px', maxWidth: '600px', marginInline: 'auto' }}>
                    A dedicated <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>NetSuite Technical Consultant</span> and Modern Web Developer 
                    with a passion for creating scalable business solutions and high-performance applications.
                </p>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <a href="#projects" className="btn-primary">
                        View Projects <MousePointer2 size={18} />
                    </a>
                    <a href="https://github.com/kritikagahlot5" target="_blank" rel="noreferrer" 
                       style={{ 
                         padding: '12px 24px', borderRadius: '8px', border: '1px solid var(--glass-border)',
                         display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600
                       }}>
                        GitHub Repo <ExternalLink size={18} />
                    </a>
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    h1 { font-size: 2.5rem !important; }
                    .glass-card { padding: 32px !important; }
                }
            `}</style>
        </section>
    );
};

export default Hero;
