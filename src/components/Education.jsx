import React from 'react';
import { Target, Award, GraduationCap, MapPin, BarChart } from 'lucide-react';

const Education = () => {
    return (
        <section id="education" className="reveal">
            <h2 style={{ fontSize: '3.5rem', marginBottom: '80px', textAlign: 'center' }}>Academic <span className="text-gradient">Records</span></h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px' }}>
                <div style={{ padding: '60px', background: 'var(--bg-card)', borderRadius: '32px', border: '1px solid var(--border)', position: 'relative' }}>
                    <div style={{ 
                        position: 'absolute', top: '30px', right: '30px', 
                        padding: '8px 16px', borderRadius: '100px', 
                        background: 'rgba(251, 191, 36, 0.1)', border: '1px solid #fbbf24',
                        color: '#fbbf24', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px'
                    }}>
                        GOLD MEDALIST
                    </div>
                    <GraduationCap size={40} style={{ color: 'var(--primary)', marginBottom: '32px' }} />
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '8px' }}>Master of Computer Applications</h3>
                    <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '16px' }}>Specialization in Computational Analytics</p>
                    <div style={{ display: 'grid', gap: '8px', opacity: 0.6 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} /> Mohanlal Sukhadia University</div>
                        <div>Academic Excellence Award (Batch Rank 1) | Class of 2024</div>
                    </div>
                </div>

                <div style={{ padding: '60px', background: 'var(--bg-card)', borderRadius: '32px', border: '1px solid var(--border)' }}>
                    <BarChart size={40} style={{ color: 'var(--primary)', marginBottom: '32px' }} />
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '8px' }}>Bachelor of Science</h3>
                    <p style={{ color: 'var(--text-main)', opacity: 0.8, fontSize: '1.1rem', marginBottom: '16px' }}>Computer Science & Data Fundamentals</p>
                    <div style={{ display: 'grid', gap: '8px', opacity: 0.6 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><MapPin size={16} /> Guru Nanak Girls PG College</div>
                        <div>Score: 79.8% | Class of 2021</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
