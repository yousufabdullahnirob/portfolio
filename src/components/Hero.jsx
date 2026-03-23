import React from "react";
import "./Hero.css";

const Hero = () => {
  const [subtitle, setSubtitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  
  const subtitleFull = "Still learning. Always building.";
  const descriptionFull = "Web · AI · Whatever's next.";

  React.useEffect(() => {
    let subIndex = 0;
    let descInterval = null;
    
    const subInterval = setInterval(() => {
      if (subIndex <= subtitleFull.length) {
        setSubtitle(subtitleFull.slice(0, subIndex));
        subIndex++;
      } else {
        clearInterval(subInterval);
        
        let descIndex = 0;
        descInterval = setInterval(() => {
          if (descIndex <= descriptionFull.length) {
            setDescription(descriptionFull.slice(0, descIndex));
            descIndex++;
          } else {
            clearInterval(descInterval);
          }
        }, 50);
      }
    }, 70);

    return () => {
      clearInterval(subInterval);
      if (descInterval) clearInterval(descInterval);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hi, I'm</p>
          <h1 className="hero-name text-gradient">
            YousufAbdullah<span>.</span>
          </h1>
          <h2 className="hero-title" style={{color: 'var(--text-primary)', textShadow: '0 2px 4px rgba(0,0,0,0.6)', minHeight: '1.2em'}}>
            {subtitle}<span className="cursor">|</span>
          </h2>
          <p className="hero-description" style={{color: 'var(--text-primary)', opacity: 0.9, fontStyle: 'italic', fontWeight: '600', minHeight: '1.5em'}}>
            {description}
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
