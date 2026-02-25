import React from 'react';
import './Blog.css';

const Blog = () => {
    const articles = [
        {
            title: "How I Built a Spam Detection Model",
            date: "Feb 20, 2026",
            category: "Machine Learning",
            description: "A deep dive into natural language processing and binary classification using Naive Bayes.",
            link: "#"
        },
        {
            title: "Understanding REST APIs in Django",
            date: "Jan 15, 2026",
            category: "Backend",
            description: "Best practices for building scalable and maintainable APIs with Django REST Framework.",
            link: "#"
        },
        {
            title: "Hamming Code Explained",
            date: "Dec 10, 2025",
            category: "Computer Science",
            description: "Visualizing error detection and correction algorithms in digital communication.",
            link: "#"
        }
    ];

    return (
        <div className="blog-page reveal active">
            <div className="container">
                <header className="blog-header">
                    <h1 className="section-title">Technical Blog</h1>
                    <p className="blog-subtitle">Sharing my journey through code, architecture, and machine learning.</p>
                </header>

                <div className="blog-grid">
                    {articles.map((article, index) => (
                        <article className="blog-card" key={index}>
                            <div className="blog-card-content">
                                <div className="blog-meta">
                                    <span className="blog-category">{article.category}</span>
                                    <span className="blog-date">{article.date}</span>
                                </div>
                                <h3 className="blog-title">{article.title}</h3>
                                <p className="blog-description">{article.description}</p>
                                <a href={article.link} className="blog-link">Read More &rarr;</a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
