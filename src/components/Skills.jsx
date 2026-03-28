import React from 'react';
import { Database, Layout, Server, Brain, Terminal, Smartphone, Globe, Shield, Code2, Workflow, BarChart3, Binary } from 'lucide-react';

const Skills = () => {
    const skillGroups = [
        { 
            name: 'Machine Learning & Data Science', 
            skills: [
                'Python (Advanced)', 'Scikit-learn', 'XGBoost', 'Logistic Regression', 
                'Random Forest', 'Statistical Analysis', 'Exploratory Data Analysis (EDA)', 
                'Feature Engineering', 'SMOTE & Class Balancing', 'Model Evaluation Metrics'
            ],
            icon: <Brain size={24} color="#10b981" />,
        },
        { 
            name: 'Data Engineering & MLOps', 
            skills: [
                'Production ML Pipelines', 'Streamlit (Deployment)', 'Pandas & NumPy', 
                'Matplotlib & Seaborn', 'Data Cleaning & Preprocessing', 
                'SQL (MySQL, PostgreSQL)', 'RESTful API Engineering', 'Model Serving'
            ],
            icon: <Database size={24} color="#0ea5e9" />,
        },
        { 
            name: 'Enterprise Backend & Logic', 
            skills: [
                'SuiteScript 2.0/2.1 (SuiteFlow)', 'RESTlets & Suitelets', 'NetSuite Data Customization', 
                'Business Process Automation', 'SDLC Best Practices', 'Technical Documentation'
            ],
            icon: <Server size={24} color="#f43f5e" />,
        },
        { 
            name: 'Full-Stack Interfaces', 
            skills: [
                'React.js', 'React Native', 'JavaScript (ES6+)', 'Chart.js (Viz)', 
                'JWT Auth', 'Responsive UI Design'
            ],
            icon: <Layout size={24} color="#8b5cf6" />,
        }
    ];

    return (
        <section id="skills" className="reveal">
            <h2 style={{ fontSize: '3.5rem', marginBottom: '80px', textAlign: 'center' }}>Professional <span className="text-gradient">ML Ecosystem</span></h2>
            
            <div className="stagger-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
                {skillGroups.map((group, index) => (
                    <div key={index} className="card-elite" style={{ padding: '40px', borderLeft: '3px solid var(--primary)', borderRadius: '20px', background: 'rgba(30, 41, 59, 0.4)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                            <div style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid var(--border)' }}>
                                {group.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{group.name}</h3>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {group.skills.map((skill, i) => (
                                <span key={i} style={{ 
                                    padding: '8px 14px', borderRadius: '10px', 
                                    background: 'rgba(255, 255, 255, 0.05)', 
                                    fontSize: '0.85rem', fontWeight: 700,
                                    border: '1px solid var(--border)',
                                    color: 'var(--text-main)',
                                    transition: 'all 0.3s ease'
                                }} onMouseEnter={(e) => {
                                    e.target.style.borderColor = 'var(--primary)';
                                    e.target.style.color = 'var(--primary)';
                                }} onMouseLeave={(e) => {
                                    e.target.style.borderColor = 'var(--border)';
                                    e.target.style.color = 'var(--text-main)';
                                }}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
