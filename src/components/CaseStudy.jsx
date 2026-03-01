import React from 'react';
import './CaseStudy.css';

const CaseStudy = () => {
    return (
        <section className="section case-study reveal" id="case-study">
            <div className="container">
                <h2 className="section-title">Architecture & Case Study</h2>
                <div className="cs-layout">
                    {/* Main Content Area */}
                    <div className="cs-main">
                        <div className="cs-header">
                            <span className="cs-badge">Deep Learning</span>
                            <h3 className="cs-project-title">Spam Detection Pipeline</h3>
                        </div>
                        
                        <div className="cs-content-block">
                            <h4>1. Problem Statement</h4>
                            <p>
                                Identifying spam in natural language text accurately without overfitting on specific datasets, 
                                while maintaining low latency suitable for real-time validation endpoints.
                            </p>
                        </div>

                        <div className="cs-content-block">
                            <h4>2. Technical Approach</h4>
                            <p>
                                I bypassed generic rule-based engines in favor of an ML-driven pipeline. 
                                The pipeline tokenizes input using TF-IDF and uses Naive Bayes or PyTorch classifiers (interchangeable via config) 
                                to output standard probabilities.
                            </p>
                        </div>
                        
                        <div className="cs-content-block cs-result-block">
                            <h4>3. Outcome & Results</h4>
                            <ul>
                                <li>✨ <strong>91% Accuracy</strong> on test datasets using hyperparameter optimization.</li>
                                <li>⚡ <strong>&lt;50ms Latency</strong> for inference using optimized model payload.</li>
                                <li>🚀 <strong>Deployed</strong> as an independent microservice using Render and FastAPI.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar / Architecture Visuals */}
                    <div className="cs-sidebar">
                        <div className="cs-tech-stack">
                            <h4>Tech Stack Used</h4>
                            <div className="cs-tags">
                                <span>PyTorch</span>
                                <span>Scikit-Learn</span>
                                <span>FastAPI</span>
                                <span>Numpy/Pandas</span>
                            </div>
                        </div>

                        <div className="cs-architecture-visual">
                            {/* Conceptual Architecture Representation */}
                            <div className="arch-box arch-client">Client Request</div>
                            <div className="arch-arrow">↓</div>
                            <div className="arch-box arch-api">FastAPI Endpoint</div>
                            <div className="arch-arrow">↓</div>
                            <div className="arch-box arch-ml">Scikit/PyTorch Model Inference</div>
                            <div className="arch-arrow">↓</div>
                            <div className="arch-box arch-db">Prediction Response (JSON)</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudy;
