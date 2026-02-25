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
                        <h3>Building Scalable Solutions with a Career-Focused Mindset.</h3>
                        <p>
                            I am a Computer Science student specializing in full-stack development using Django and modern frontend frameworks. 
                            I focus on building scalable APIs, clean UI systems, and solving real-world problems through structured architecture.
                        </p>
                        <p>
                            My expertise bridges the gap between traditional web development and machine learning, 
                            allowing me to create intelligent applications that provide real value.
                        </p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">7th</span>
                                <span className="stat-label">Semester CSE</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Academic Projects</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">ML+</span>
                                <span className="stat-label">Web Dev Focus</span>
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
