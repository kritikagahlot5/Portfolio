import React from 'react';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '48px', textAlign: 'center' }}>Professional <span className="gradient-text">Experience</span></h2>
            <div className="glass-card" style={{ display: 'flex', gap: '48px', padding: '40px', position: 'relative' }}>
                <div style={{ flex: '0 0 100px', textAlign: 'center' }}>
                    <div style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary)', padding: '16px', borderRadius: '16px', border: '1px solid var(--primary-glow)' }}>
                        <Briefcase size={32} style={{ marginInline: 'auto' }} />
                    </div>
                </div>
                <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                        NetSuite Technical Consultant
                        <span style={{ fontSize: '0.85rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8, color: 'var(--accent)' }}>
                            <Calendar size={14} /> Oct 2024 - Present
                        </span>
                    </h3>
                    <h4 style={{ color: 'var(--primary)', fontStyle: 'italic', marginBottom: '20px' }}>AGSuite Technologies</h4>
                    <ul style={{ display: 'grid', gap: '12px' }}>
                        {[
                            'Engineered SuiteScript 2.0/2.1 solutions including User Event, Client, Map/Reduce, Scheduled, and Suitelet scripts to automate end-to-end business workflows, reducing manual processing time by ~40%.',
                            'Developed RESTlets to integrate NetSuite with external platforms including CRM, ERP, and e-commerce systems, enabling seamless real-time data exchange.',
                            'Customized records, forms, and workflows based on client business logic; provided ongoing technical support and performance optimization for production environments.',
                            'Collaborated with cross-functional teams and stakeholders to gather requirements and deliver tailored NetSuite solutions within project timelines.'
                        ].map((item, index) => (
                            <li key={index} style={{ display: 'flex', gap: '12px', color: 'var(--text-muted)' }}>
                                <ChevronRight size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '4px' }} />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <style>{`
                @media (max-width: 768px) {
                    .glass-card { flex-direction: column !important; gap: 24px !important; text-align: left !important; }
                    .glass-card h3 { flex-direction: column !important; align-items: flex-start !important; gap: 12px !important; }
                }
            `}</style>
        </section>
    );
};

export default Experience;
