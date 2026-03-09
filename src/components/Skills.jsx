import React from "react";
import { Code, Database, BrainCircuit, Zap, Settings } from "lucide-react";
import "./Skills.css";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code size={24} />,
      skills: [
        "React",
        "JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      title: "Backend",
      icon: <Database size={24} />,
      skills: ["Django", "Python", "MySQL", "REST APIs"],
    },
    {
      title: "Machine Learning",
      icon: <BrainCircuit size={24} />,
      skills: [
        "NumPy",
        "Pandas",
        "Matplotlib",
        "scikit-learn",
        "PyTorch",
        "OpenCV",
      ],
    },
    {
      title: "Automation & AI",
      icon: <Zap size={24} />,
      skills: [
        "OpenAI API",
        "LangChain",
        "ElevenLabs",
        "Chatbot Development",
        "Workflow Automation",
      ],
    },
    {
      title: "Tools & DevOps",
      icon: <Settings size={24} />,
      skills: ["Git & GitHub", "Postman", "Vercel", "VS Code"],
    },
  ];

  return (
    <section className="section skills reveal" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div className="skill-card hover-glow" key={index}>
              <div className="skill-card-header">
                <span className="skill-icon">{category.icon}</span>
                <h3 className="skill-category-title">{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
