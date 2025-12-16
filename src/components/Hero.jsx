import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-bg-glow"></div>
            <div className="container hero-container">
                <div className="hero-content">
                    <p className="hero-greeting">Hi, I'm</p>
                    <h1 className="hero-name">Yousuf Abdullah<span>.</span></h1>
                    <h2 className="hero-title">
                        Full Stack & <br /> <span className="highlight">AI Automation Enthusiast</span>
                    </h2>
                    <p className="hero-description">
                        Passionate about building modern web apps and automating workflows to make work smarter.
                    </p>

                    <div className="hero-btns">
                        <a href="#projects" className="btn">View Portfolio</a>
                        <a href="#contact" className="btn btn-outline">Contact Me</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
