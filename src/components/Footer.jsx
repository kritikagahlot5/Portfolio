import React from 'react';
import { Mail, Linkedin, Github, Heart, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            padding: '120px 20px 64px 20px', 
            background: 'linear-gradient(to bottom, transparent, rgba(251, 191, 36, 0.02))',
            borderTop: '1px solid var(--glass-border)'
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px' }}>
                <div>
                    <h2 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '24px' }}>Kritika Gahlot</h2>
                    <p style={{ color: 'var(--text-muted)', maxWidth: '350px', marginBottom: '32px' }}>
                        Designing and building scalable digital products with a focus on business 
                        automation and modern web experiences.
                    </p>
                </div>

                <div style={{ display: 'grid', gap: '20px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Contact Info</h3>
                    <a href="mailto:gahlotkritika59@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
                        <Mail size={18} style={{ color: 'var(--primary)' }} /> gahlotkritika59@gmail.com
                    </a>
                    <a href="tel:+919352139489" style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
                        <Phone size={18} style={{ color: 'var(--primary)' }} /> +91 9352139489
                    </a>
                </div>

                <div style={{ display: 'grid', gap: '20px' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Socials</h3>
                    <div style={{ display: 'flex', gap: '24px' }}>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn"><Linkedin size={24} /></a>
                        <a href="https://github.com/kritikagahlot5" target="_blank" rel="noreferrer" title="GitHub"><Github size={24} /></a>
                    </div>
                </div>
            </div>

            <div style={{ 
                maxWidth: '1200px', margin: '64px auto 0 auto', 
                paddingTop: '32px', borderTop: '1px solid var(--glass-border)',
                textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem'
            }}>
                <p>
                    © 2024 Kritika Gahlot. Hand-crafted with <Heart size={14} style={{ fill: 'var(--primary)', color: 'var(--primary)' }} /> and React.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
