import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            icon: "🎨",
            skills: ["React", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Framer Motion"]
        },
        {
            title: "Backend",
            icon: "⚙️",
            skills: ["Django", "FastAPI", "Node.js", "Python", "MySQL", "REST APIs"]
        },
        {
            title: "AI / Machine Learning",
            icon: "🤖",
            skills: ["PyTorch", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"]
        },
        {
            title: "DevOps & Tools",
            icon: "🛠️",
            skills: ["Docker", "Git & GitHub", "Postman", "Vercel / Render", "VS Code"]
        }
    ];

    return (
        <section className="section skills reveal" id="skills">
            <div className="container">
                <h2 className="section-title">Technical Expertise</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div className="skill-card hover-glow" key={index}>
                            <h3 className="skill-category-title">
                                <span className="category-icon">{category.icon}</span>
                                {category.title}
                            </h3>
                            <ul className="skill-list">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="skill-item">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
