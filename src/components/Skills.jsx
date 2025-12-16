import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend",
            skills: ["React", "JavaScript (ES6+)", "HTML5 & CSS3", "Tailwind CSS", "Framer Motion"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Django", "Python", "MySQL", "REST APIs"]
        },
        {
            title: "Automation & AI",
            skills: ["n8n", "LangChain", "OpenAI API", "Chatbot Development", "Workflow Automation"]
        },
        {
            title: "Tools & DevOps",
            skills: ["Git & GitHub", "Docker", "Postman", "Vercel", "VS Code"]
        },
        {
            title: "Soft Skills",
            skills: ["Communication", "Teamwork", "Version Control", "Command Line", "Advanced Prompting"]
        }
    ];

    return (
        <section className="section skills reveal" id="skills">
            <div className="container">
                <h2 className="section-title">Technical Expertise</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div className="skill-card" key={index}>
                            <h3 className="skill-category-title">{category.title}</h3>
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
