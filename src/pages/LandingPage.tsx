import React from 'react'
import '../styles/LandingPage.scss'

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <div className="container">
          <h1 className="logo">React Redux</h1>
          <nav className="nav">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <h2>Welcome to React Redux Example</h2>
          <p>A modern approach to state management in React applications</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <h2>Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Predictable State Management</h3>
              <p>Redux provides a predictable and centralized way to manage application state.</p>
            </div>
            <div className="feature-card">
              <h3>Easy Debugging</h3>
              <p>Redux DevTools makes it easy to debug and time-travel through your application state.</p>
            </div>
            <div className="feature-card">
              <h3>Scalable Architecture</h3>
              <p>Build scalable applications with clear separation of concerns and reusable components.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 React Redux Example. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
