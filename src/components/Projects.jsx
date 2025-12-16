import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Krishi Sheba",
            description: "A comprehensive agricultural platform connecting farmers with agricultural experts and potential buyers. Features include real-time crop advice, market price updates, and a direct marketplace.",
            tech: ["React", "Node.js", "MongoDB", "Leaflet Maps"],
            link: "https://github.com/yousufabdullahnirob/Krishishebaportal"
        },
        {
            title: "University Advising System",
            description: "An academic management system facilitating course advising, student progress tracking, and faculty-student communication to streamline university operations.",
            tech: ["React", "Django", "PostgreSQL", "Bootstrap"],
            link: "https://github.com/yousufabdullahnirob/University-Advising-System"
        },
        {
            title: "Digital Wallet",
            description: "A secure digital payment solution allowing users to store funds, make transactions, and track payment history with ease and security.",
            tech: ["React", "Node.js", "MongoDB", "Stripe"],
            link: "https://github.com/yousufabdullahnirob/digital-wallet"
        },
        {
            title: "Expense Tracker",
            description: "Personal finance application for tracking daily expenses and income. Visualizes spending habits through intuitive charts and reports.",
            tech: ["React", "Chart.js", "Context API", "CSS"],
            link: "https://github.com/yousufabdullahnirob/expense-tracker"
        },
        {
            title: "Password Generator",
            description: "Security tool that generates strong, random passwords based on user-defined criteria like length and character types to enhance online security.",
            tech: ["JavaScript", "React", "Clipboard API"],
            link: "https://github.com/yousufabdullahnirob/password-generator_reactjs"
        }
    ];

    return (
        <section className="section projects reveal" id="projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                {/* Tech stack removed as per user request */}
                                <div className="project-links">
                                    <a href={project.link} className="project-link">View Project &rarr;</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
