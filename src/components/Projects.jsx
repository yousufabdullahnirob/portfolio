import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/yousufabdullahnirob/repos?sort=updated&per_page=6')
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    setRepos(data);
                }
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching repos:", err);
                setLoading(false);
            });
    }, []);

    return (
        <section className="section projects reveal" id="projects">
            <div className="container">
                <h2 className="section-title">Open Source Projects</h2>
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
                                        {repo.stargazers_count > 0 && <span className="tech-tag">⭐ {repo.stargazers_count}</span>}
                                    </div>
                                    <div className="project-links">
                                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="project-link">GitHub Profile &rarr;</a>
                                        {repo.homepage && (
                                            <a href={repo.homepage} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo &rarr;</a>
                                        )}
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
