import React from 'react';
import './About.css';
import profileImg from '../assets/profile.jpg';

const About = () => {
    return (
        <section className="section about reveal" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <h3>Turning complex problems into simple, beautiful solutions.</h3>
                        <p>
                            I specialize in building clean, scalable web solutions and AI-powered automation systems.
                            My work focuses on efficiency, performance, and real-world usability.
                        </p>
                        <p>
                            With a strong background in both full-stack development and emerging AI technologies,
                            I help businesses bridge the gap between traditional software and intelligent automation.
                        </p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">1+</span>
                                <span className="stat-label">Year Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">15+</span>
                                <span className="stat-label">Technologies Used</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <img src={profileImg} alt="Yousuf" className="profile-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
