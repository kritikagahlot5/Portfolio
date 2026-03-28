import React from 'react';
import { GraduationCap, Trophy, MapPin } from 'lucide-react';

const Education = () => {
    return (
        <section id="education">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '48px', textAlign: 'center' }}>Academic <span className="gradient-text">Background</span></h2>
            <div style={{ display: 'grid', gap: '32px', maxWidth: '800px', marginInline: 'auto' }}>
                <div className="glass-card" style={{ display: 'flex', gap: '32px', padding: '40px', position: 'relative' }}>
                    <div style={{ color: 'gold' }}>
                        <Trophy size={40} />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Master of Computer Applications (MCA)</h3>
                        <p style={{ color: 'var(--primary)', fontWeight: 600, marginBottom: '8px', fontSize: '1.1rem' }}>
                            Gold Medalist – Top Rank in Batch
                        </p>
                        <p style={{ color: 'var(--text-main)', marginBottom: '8px' }}>Mohanlal Sukhadia University, Udaipur</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Class of 2024</p>
                    </div>
                </div>
                <div className="glass-card" style={{ display: 'flex', gap: '32px', padding: '40px' }}>
                    <div style={{ color: 'var(--primary)' }}>
                        <GraduationCap size={40} />
                    </div>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Bachelor of Science (Computer Science)</h3>
                        <p style={{ color: 'var(--accent)', fontWeight: 600, marginBottom: '8px', fontSize: '1.1rem' }}>
                            Graduated with 79.8%
                        </p>
                        <p style={{ color: 'var(--text-main)', marginBottom: '8px' }}>Guru Nanak Girls PG College, Udaipur</p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Class of 2021</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
