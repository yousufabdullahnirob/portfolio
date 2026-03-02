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
            homepage: "#"
        },
        {
            id: 2,
            name: "Krishi Sheba Portal",
            description: "A comprehensive agricultural service platform designed to empower farmers with digital resources and expert consultation tools.",
            language: "Full Stack",
            html_url: "https://github.com/yousufabdullahnirob/Krishishebaportal",
            homepage: "#"
        },
        {
            id: 3,
            name: "Real Estate Property Platform",
            description: "Full-stack React platform for real estate listings. Implemented advanced search, filtering, and responsive design components.",
            language: "React",
            html_url: "https://github.com/yousufabdullahnirob/realestate",
            homepage: "http://localhost:5173" // Placeholder for live demo
        }
    ];

    useEffect(() => {
        // Simulating data load for structure preserving
        setTimeout(() => {
            setRepos(featuredProjects);
            setLoading(false);
        }, 500);
    }, [featuredProjects]);

    return (
        <section className="section projects reveal" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Engineering Projects</h2>
                {loading ? (
                    <div className="loading-spinner">Loading projects...</div>
                ) : (
                    <div className="projects-grid">
                        {repos.map((repo) => (
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
                )}
            </div>
        </section>
    );
};

export default Projects;
