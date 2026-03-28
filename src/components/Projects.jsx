import React from 'react';
import { ExternalLink, Github, Database, Brain, BarChart3, Binary, Activity, PieChart, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Customer Churn Prediction - ML Pipeline',
            tech: ['Python', 'Scikit-learn', 'XGBoost', 'SMOTE'],
            desc: 'Architected a robust ML pipeline focusing on feature engineering and class balancing. Improved F1-score from 0.71 to 0.87, delivering a 22.5% increase in predictive accuracy.',
            metric: 'F1-Score: 0.87',
            icon: <BarChart3 size={32} />,
            color: '#a855f7' // Electric Violet
        },
        {
            title: 'Intelligent Fitness Ecosystem (Data Viz)',
            tech: ['React Native', 'Health APIs', 'Chart.js'],
            desc: 'Analytical dashboard that visualizes physiological metrics by monitoring real-time activity data. Optimized data ingestion latency and interactive charting for deep-dive trends.',
            metric: 'Real-time Analytics',
            icon: <Activity size={32} />,
            color: '#c084fc' // Light Violet
        },
        {
            title: 'Production News Aggregator (API/NLP)',
            tech: ['React Native', 'Third-Party APIs', 'Enterprise Caching'],
            desc: 'High-concurrency news data surface optimized with intelligent caching, reducing redundant network requests by ~50% for high-performance mobile fetches.',
            metric: '50% Cache Logic',
            icon: <Binary size={32} />,
            color: '#e879f9' // Fuchsia
        },
        {
            title: 'E-Commerce Analytical Engine',
            tech: ['React Native', 'REST APIs', 'JWT Architecture'],
            desc: 'Engineering a platform that prioritizes data-driven synchronization and secure user-session modeling with scalable state management and RESTful patterns.',
            metric: 'Scalable Architecture',
            icon: <PieChart size={32} />,
            color: '#a5b4fc' // Indigo
        }
    ];

    return (
        <section id="projects" className="reveal">
            <h2 style={{ fontSize: '3.5rem', marginBottom: '80px', textAlign: 'center' }}>Enterprise <span className="text-gradient">AI/ML Portfolio</span></h2>
            
            <div className="waterfall-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                {projects.map((project, index) => (
                    <div key={index} className="card-elite waterfall-item" style={{ 
                        display: 'flex', flexDirection: 'column', height: '100%',
                        position: 'relative'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                            <div className="icon-focus" style={{ 
                                padding: '16px', borderRadius: '18px', 
                                background: 'rgba(168, 85, 247, 0.05)', 
                                border: '1px solid var(--border)',
                                color: project.color
                            }}>
                                {project.icon}
                            </div>
                            <div className="shimmer" style={{ 
                                padding: '8px 16px', borderRadius: '100px', 
                                background: 'rgba(168, 85, 247, 0.08)', 
                                border: '1px solid var(--border)',
                                color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '1px'
                            }}>
                                {project.metric}
                            </div>
                        </div>

                        <h3 style={{ fontSize: '1.6rem', fontWeight: 700, marginBottom: '16px' }}>{project.title}</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '32px', flexGrow: 1, fontSize: '1.05rem', lineHeight: 1.75 }}>{project.desc}</p>
                        
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                            {project.tech.map((t, i) => (
                                <span key={i} style={{ 
                                    padding: '7px 14px', borderRadius: '10px', 
                                    background: 'rgba(168, 85, 247, 0.03)', 
                                    fontSize: '0.75rem', fontWeight: 700,
                                    border: '1px solid var(--border)',
                                    color: 'var(--text-muted)'
                                }}>
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div style={{ display: 'flex', gap: '24px', paddingTop: '24px', borderTop: '1px solid var(--border)', pointerEvents: 'auto' }}>
                            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, opacity: 0.6, fontSize: '0.9rem' }}>
                                <Github size={20} /> Research
                            </a>
                            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, color: 'var(--primary)', fontSize: '0.9rem' }}>
                                Details <ArrowUpRight size={20} />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
