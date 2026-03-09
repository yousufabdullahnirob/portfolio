import React from 'react';
import { Monitor, BrainCircuit, Bot } from 'lucide-react';
import './Services.css';

const Services = () => {
    const services = [
        {
            title: "Web Application Development",
            description: "Custom web applications built with Django and React. Focused on scalability, REST APIs, and clean user experience.",
            icon: <Monitor size={40} strokeWidth={1.5} />
        },
        {
            title: "Machine Learning & Computer Vision",
            description: "Building ML models using PyTorch and scikit-learn. Working with image processing and computer vision using OpenCV.",
            icon: <BrainCircuit size={40} strokeWidth={1.5} />
        },
        {
            title: "AI & Chatbot Development",
            description: "Building smart chatbots using OpenAI API and LangChain, integrated with ElevenLabs for voice capabilities.",
            icon: <Bot size={40} strokeWidth={1.5} />
        }
    ];

    return (
        <section className="section services reveal" id="services">
            <div className="container">
                <h2 className="section-title">Engineering Focus Areas</h2>
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
