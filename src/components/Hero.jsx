import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name text-gradient">
            Yousuf Abdullah<span>.</span>
          </h1>
          <h2 className="hero-title" style={{color: 'var(--text-primary)', textShadow: '0 2px 4px rgba(0,0,0,0.6)'}}>
            Full Stack Engineer <br />{" "}
            <span className="highlight">(AI & ML Focus)</span>
          </h2>
          <p className="hero-description" style={{color: 'var(--text-primary)', opacity: 0.9, fontStyle: 'italic', fontWeight: '600'}}>
            Django • React • PyTorch • Docker
          </p>

          <div className="hero-btns">
            <a href="#projects" className="btn">
              View Projects
            </a>
            <a href="/resume.pdf" download className="btn btn-outline">
              Download Resume
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
