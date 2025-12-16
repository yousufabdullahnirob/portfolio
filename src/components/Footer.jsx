import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-logo">
                    Yousuf Abdullah<span>.</span>
                </div>
                <p className="footer-copyright">
                    &copy; {new Date().getFullYear()} Yousuf Abdullah. All rights reserved.
                </p>
                <div className="footer-socials">
                    <a href="https://github.com/yousufabdullahnirob" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
                    <a href="https://www.linkedin.com/in/yousuf-abdullah-nirob-454792326/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LI</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
