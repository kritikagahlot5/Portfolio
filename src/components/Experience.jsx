import React from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle2 } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" style={{ maxWidth: '1000px' }}>
            <h2 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '80px', textAlign: 'center' }}>Professional <span style={{ color: '#fff' }}>Impact</span></h2>
            
            <div className="timeline">
                <div className="timeline-item reveal card-elite" style={{ padding: '60px', marginLeft: '20px' }}>
                    <div className="timeline-node" style={{ 
                        position: 'absolute', left: '-58px', top: '10px', 
                        width: '16px', height: '16px', borderRadius: '50%', 
                        background: 'var(--primary)', border: '4px solid var(--bg-dark)'
                    }}></div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
                        <div>
                            <h3 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '8px' }}>NetSuite Technical Consultant</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px', color: 'var(--primary)', fontWeight: 700 }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Briefcase size={18} /> AGSuite Technologies</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}><MapPin size={18} /> Udaipur, India</span>
                            </div>
                        </div>
                        <div style={{ 
                            padding: '12px 24px', borderRadius: '14px', 
                            background: 'rgba(16, 185, 129, 0.05)', 
                            border: '1px solid var(--primary)', 
                            color: 'var(--primary)', fontWeight: 800, fontSize: '0.9rem', letterSpacing: '1px'
                        }}>
                            <Calendar size={18} style={{ marginBottom: '-3px', marginRight: '10px' }} /> OCT 2024 - PRESENT
                        </div>
                    </div>

                    <div className="stagger-container" style={{ display: 'grid', gap: '24px' }}>
                        {[
                            'Architected high-performance SuiteScript 2.0/2.1 solutions (User Events, Clients, Map/Reduce) to automate global ERP workflows, reducing process latency by ~40%.',
                            'Lead integration developer for secure RESTlet services, bridging NetSuite with enterprise CRM/ERP ecosytems to ensure data integrity during real-time synchronization.',
                            'Managed the full Software Development Life Cycle (SDLC), from initial business requirement discovery to production deployment and UAT.',
                            'Optimized NetSuite performance through record customization, SuiteFlow automation, and advanced scripting for financial and operational data accuracy.'
                        ].map((point, i) => (
                            <div key={i} style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)', lineHeight: 1.8, fontSize: '1.1rem' }}>
                                <CheckCircle2 size={22} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '4px' }} />
                                {point}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
