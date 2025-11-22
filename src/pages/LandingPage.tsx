import React from 'react'
import '../styles/LandingPage.scss'
import ThemeToggle from '../components/ThemeToggle'

const LandingPage: React.FC = () => {
  const githubUrl = 'https://github.com/abhinavsarja'

  return (
    <div className="landing-page">
      <header className="header">
        <div className="container">
          <h1 className="logo">Abhinav Sarja</h1>
          <nav className="nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#blogs">Blogs</a></li>
              <li><a href="#react">React</a></li>
              <li><a href="#ai">AI</a></li>
              <li><a href="#java">Java</a></li>
              <li>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
                  GitHub
                </a>
              </li>
              <li>
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Abhinav Sarja</h2>
          <p>Full Stack Developer | Tech Blogging Enthusiast</p>
          <p className="subtitle">Exploring Java, React, AI, and AWS through code and stories</p>
          <a href="#blogs" className="cta-button">Read My Blogs</a>
        </div>
      </section>

      <section id="blogs" className="blogs">
        <div className="container">
          <h2>Blog Categories</h2>
          <div className="blog-grid">
            <div id="react" className="blog-card">
              <div className="blog-icon">⚛️</div>
              <h3>React</h3>
              <p>Deep dive into React, hooks, state management, and modern web development patterns.</p>
              <button className="blog-btn">Coming Soon</button>
            </div>
            <div id="ai" className="blog-card">
              <div className="blog-icon">🤖</div>
              <h3>Artificial Intelligence</h3>
              <p>Exploring machine learning, neural networks, and AI applications in real-world scenarios.</p>
              <button className="blog-btn">Coming Soon</button>
            </div>
            <div id="java" className="blog-card">
              <div className="blog-icon">☕</div>
              <h3>Java</h3>
              <p>Enterprise Java, Spring Framework, design patterns, and backend development best practices.</p>
              <button className="blog-btn">Coming Soon</button>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Let's Connect</h2>
          <p>Follow my work on GitHub and stay updated with new blog posts</p>
          <a 
            href={githubUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="github-cta-button"
          >
            Visit My GitHub
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Abhinav Sarja. All rights reserved.</p>
          <p className="footer-links">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
