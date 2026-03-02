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
                        <h3>Engineering Production-Ready AI & Web Architectures.</h3>
                        <p>
                            I build and deploy machine learning systems designed for real-world performance and scalability. My work focuses on model development, inference APIs, and integrating AI solutions into modern web infrastructures.
                        </p>
                        <p>
                            With a strong backend foundation, I develop scalable APIs and deployment pipelines that allow machine learning models to operate efficiently in production environments.
                        </p>
                        <p className="learning-text">
                            <strong>Currently Learning:</strong> Currently exploring containerized ML deployments, model optimization, and scalable AI infrastructure design.
                        </p>
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
