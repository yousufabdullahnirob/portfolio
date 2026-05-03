import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    const featuredProjects = [
        {
            id: 1,
            name: "Spam Detection System",
            description: "Built with PyTorch & Scikit-learn. Achieved 91% accuracy analyzing natural language. REST API built using FastAPI and deployed on Render.",
            language: "Python",
            html_url: "https://github.com/yousufabdullahnirob/Spam-Detection-Model",
            category: "AI & Machine Learning"
        },
        {
            id: 2,
            name: "Smart Email Reply Automation",
            description: "AI-powered email auto-responder using OpenAI and Gmail API for intelligent communication management.",
            language: "Python",
            html_url: "https://github.com/yousufabdullahnirob/smart_email_reply_automation",
            category: "AI & Machine Learning"
        },
        {
            id: 3,
            name: "Krishi Sheba Portal (AI Edition)",
            description: "AI-driven agricultural platform with crop recommendation and disease detection systems to empower farmers.",
            language: "Python / AI",
            html_url: "https://github.com/yousufabdullahnirob/krishiShebaPortal1st",
            category: "AI & Machine Learning"
        },
        {
            id: 4,
            name: "Student Success Analysis",
            description: "Machine learning project focused on predicting student performance and pass/fail outcomes using academic data.",
            language: "Python",
            html_url: "https://github.com/yousufabdullahnirob/Student-Success-Analysis",
            category: "AI & Machine Learning"
        },
        {
            id: 5,
            name: "Real Estate Hub",
            description: "Modern real estate platform with advanced property management, search filters, and responsive UI.",
            language: "React / Django",
            html_url: "https://github.com/yousufabdullahnirob/RealEstateHub",
            category: "Web & Full Stack Development"
        },
        {
            id: 6,
            name: "University Advising System",
            description: "Automated course advising system with intelligent conflict detection and academic planning tools.",
            language: "Full Stack",
            html_url: "https://github.com/yousufabdullahnirob/University-Advising-System",
            category: "Web & Full Stack Development"
        },
        {
            id: 7,
            name: "Expense Tracker",
            description: "A modern, full-stack Expense Tracker built with Django REST Framework and React. Features JWT authentication and interactive charts.",
            language: "React / Django",
            html_url: "https://github.com/yousufabdullahnirob/expense-tracker",
            category: "Web & Full Stack Development"
        },
        {
            id: 8,
            name: "Krishi Sheba Portal",
            description: "A comprehensive agricultural service platform designed to empower farmers with digital resources and expert consultation tools.",
            language: "Full Stack",
            html_url: "https://github.com/yousufabdullahnirob/Krishishebaportal",
            category: "Web & Full Stack Development"
        }
    ];

    useEffect(() => {
        setRepos(featuredProjects);
        setLoading(false);
    }, []);

    const categories = ["AI & Machine Learning", "Web & Full Stack Development"];

    return (
        <section className="section projects reveal" id="projects">
            <div className="container">
                <h2 className="section-title">Engineering Projects</h2>
                {loading ? (
                    <div className="loading-spinner">Loading projects...</div>
                ) : (
                    <div className="categories-container">
                        {categories.map(category => (
                            <div key={category} className="category-section">
                                <h3 className="category-title">{category}</h3>
                                <div className="projects-grid">
                                    {repos.filter(repo => repo.category === category).map((repo) => (
                                        <div className="project-card" key={repo.id}>
                                            <div className="project-content">
                                                <div className="project-header">
                                                    <span className="repo-icon">📂</span>
                                                    <h3 className="project-title">{repo.name.replace(/-/g, ' ')}</h3>
                                                </div>
                                                <p className="project-description">
                                                    {repo.description || "A professional project built with clean architecture and modern web technologies."}
                                                </p>
                                                <div className="project-tech">
                                                    {repo.language && <span className="tech-tag">{repo.language}</span>}
                                                </div>
                                                <div className="project-links">
                                                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-link">
                                                        <span>View Source</span> &nbsp; &rarr;
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
