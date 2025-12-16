import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Web Application Development",
            description: "Custom, high-performance web applications built with modern technologies like React, Next.js, and Node.js. Focused on scalability and user experience.",
            icon: "💻"
        },
        {
            title: "AI Automation & Workflows",
            description: "Streamline your business processes with intelligent automation. Save time by automating repetitive tasks using tools like n8n and Zapier connected to AI.",
            icon: "🤖"
        },
        {
            title: "Chatbot Integration",
            description: "Deploy smart AI chatbots that understand context and provide instant support to your customers, 24/7. Integrated seamlessly into your website.",
            icon: "💬"
        }
    ];

    return (
        <section className="section services" id="services">
            <div className="container">
                <h2 className="section-title">What I Do</h2>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div className="service-card" key={index}>
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
