import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState({ message: '', type: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus({ message: 'Sending...', type: 'info' });

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // 1. Sign up at https://www.emailjs.com/
        // 2. Create a new Email Service (e.g., Gmail) -> Get Service ID
        // 3. Create an Email Template -> Get Template ID
        // 4. Go to Account > API Keys -> Get Public Key

        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setStatus({ message: 'Message sent successfully! I will get back to you soon.', type: 'success' });
                form.current.reset();
            }, (error) => {
                console.log(error.text);
                setStatus({ message: 'Failed to send message. Please try again later.', type: 'error' });
            });
    };

    return (
        <section className="section contact reveal" id="contact">
            <div className="container">
                <h2 className="section-title">Let's Connect</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's build something amazing together.</h3>
                        <p>
                            I'm always excited to collaborate on innovative projects and explore new opportunities.
                            Whether you have a specific idea in mind or simply want to discuss the latest in technology, feel free to reach out!
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="icon">✉️</span>
                                <a href="mailto:yousufabdullahn@gmail.com">yousufabdullahn@gmail.com</a>
                            </div>
                            <div className="contact-item">
                                <span className="icon">🔗</span>
                                <a href="https://www.linkedin.com/in/yousuf-abdullah-nirob-454792326/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                            </div>
                            <div className="contact-item">
                                <span className="icon">🐙</span>
                                <a href="https://github.com/yousufabdullahnirob" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" ref={form} onSubmit={sendEmail}>
                        <div className="form-group">
                            <input type="text" name="user_name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" name="user_email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="btn">Send Message</button>
                        {status.message && (
                            <p className={`status-message ${status.type}`} style={{ marginTop: '1rem', color: status.type === 'success' ? '#4ade80' : '#f87171' }}>
                                {status.message}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
