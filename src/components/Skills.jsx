import React from 'react';

const Skills = () => {
    const skillGroups = [
        { name: 'Languages', skills: ['Python', 'JavaScript (ES6+)', 'PHP', 'Java', 'HTML5', 'CSS3'] },
        { name: 'Data Science & ML', skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'XGBoost', 'Streamlit'] },
        { name: 'Mobile & Frontend', skills: ['React Native', 'React.js'] },
        { name: 'Backend & APIs', skills: ['RESTful APIs', 'RESTlets', 'Suitelets', 'SuiteScript 2.0/2.1', 'NetSuite Customization'] },
        { name: 'Databases', skills: ['MySQL', 'PostgreSQL'] },
        { name: 'Tools', skills: ['Git', 'Postman', 'VS Code'] }
    ];

    return (
        <section id="skills">
            <h2 style={{ fontSize: '2.5rem', marginBottom: '48px', textAlign: 'center' }}>Technical <span className="gradient-text">Skills</span></h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                {skillGroups.map((group, index) => (
                    <div key={index} className="glass-card" style={{ padding: '32px' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '24px', borderBottom: '1px solid var(--glass-border)', paddingBottom: '12px' }}>{group.name}</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {group.skills.map((skill, i) => (
                                <span key={i} style={{ 
                                    backgroundColor: 'rgba(59, 130, 246, 0.05)', 
                                    color: 'var(--text-main)', 
                                    padding: '6px 12px', 
                                    borderRadius: '8px', 
                                    fontSize: '0.85rem',
                                    border: '1px solid var(--glass-border)'
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
