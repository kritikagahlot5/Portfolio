import React from 'react';
import { ExternalLink, Github, Database, Smartphone, Newspaper, Activity } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'Customer Churn Prediction - ML Pipeline',
            tech: 'Python, Scikit-learn, Pandas, Matplotlib, Streamlit',
            desc: 'Built an end-to-end machine learning pipeline to predict customer churn using logistic regression, random forest, and XGBoost on a telecom dataset of 7,000+ records.',
            highlights: ['F1-score improvement: 0.71 to 0.87', 'Streamlit dashboard for real-time scoring'],
            icon: <Database style={{ color: 'var(--primary)' }} />
        },
        {
            title: 'E-Commerce Mobile Application',
            tech: 'React Native, REST APIs, JavaScript',
            desc: 'Fully-featured React Native e-commerce app with product listings, cart, checkout flow, and JWT-based user authentication.',
            highlights: ['Integrated RESTful APIs for real-time data exchange', 'Responsive UI components design'],
            icon: <Smartphone style={{ color: 'var(--accent)' }} />
        },
        {
            title: 'News Aggregator Application',
            tech: 'React Native, Third-Party APIs, JavaScript',
            desc: 'A news app consuming third-party APIs to surface real-time articles with category-based filtering, detailed view, and pull-to-refresh.',
            highlights: ['Caching strategies to reduce API calls by ~50%', 'Optimized API call frequency'],
            icon: <Newspaper style={{ color: 'var(--primary)' }} />
        },
        {
            title: 'Fitness Tracker Mobile Application',
            tech: 'React Native, Health APIs, Chart.js',
            desc: 'Fitness tracking app integrating health APIs to monitor steps, calories burned, and workout sessions.',
            highlights: ['Interactive charts for daily/weekly progress visualization', 'User engagement optimization via personalized insights'],
            icon: <Activity style={{ color: 'var(--accent)' }} />
        }
    ];

    return (
        <section id="projects">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '48px', textAlign: 'center' }}>Featured <span className="gradient-text">Projects</span></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                {projects.map((project, index) => (
                    <div key={index} className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <div style={{ padding: '40px', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', marginBottom: '24px' }}>
                            {project.icon}
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', fontWeight: 700 }}>{project.title}</h3>
                        <p style={{ fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 600, marginBottom: '12px', textTransform: 'uppercase' }}>{project.tech}</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '16px', flexGrow: 1 }}>{project.desc}</p>
                        <ul style={{ marginBottom: '24px', fontSize: '0.85rem' }}>
                            {project.highlights.map((h, i) => (
                                <li key={i} style={{ display: 'flex', gap: '8px', marginBottom: '4px', opacity: 0.9 }}>
                                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--primary)', marginTop: '8px' }}></div>
                                    {h}
                                </li>
                            ))}
                        </ul>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <a href="#" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '4px', border: '1px solid var(--glass-border)', padding: '6px 12px', borderRadius: '6px' }}>
                                <Github size={16} /> Code
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
