import React from 'react';
import { Mail, Phone, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            padding: '64px 20px', textAlign: 'center', borderTop: '1px solid var(--glass-border)',
            marginTop: '80px', backgroundColor: 'rgba(2, 6, 23, 0.5)'
        }}>
            <div style={{ display: 'flex', gap: '32px', justifyContent: 'center', marginBottom: '32px' }}>
                <a href="mailto:gahlotkritika59@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Mail size={18} /> gahlotkritika59@gmail.com
                </a>
                <a href="tel:+919352139489" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={18} /> +91 9352139489
                </a>
            </div>
            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginBottom: '32px' }}>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn"><Linkedin size={24} /></a>
                <a href="https://github.com/kritikagahlot5" target="_blank" rel="noreferrer" title="GitHub"><Github size={24} /></a>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                © 2024 Kritika Gahlot. Built with <Heart size={14} style={{ fill: 'var(--primary)', color: 'var(--primary)' }} /> in React.
            </p>
        </footer>
    );
};

export default Footer;
