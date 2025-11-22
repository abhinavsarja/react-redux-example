import React from 'react';
import '../../styles/BlogPage.scss';

const ZustandVsReduxBlog: React.FC = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <div className="blog-page">
      <header className="blog-header">
        <div className="container">
          <button className="back-button" onClick={() => window.history.back()}>
            ← Back
          </button>
          <h1>Exploring Zustand vs Redux</h1>
          <div className="blog-meta">
            <span className="author">By Abhinav Sarja</span>
            <span className="date">{currentDate}</span>
          </div>
        </div>
      </header>

      <article className="blog-content">
        <div className="container">
          <div className="content-area">
            <section id="introduction">
              <h2>Introduction</h2>
              <p className="placeholder-text">
                Start writing your blog content here...
              </p>
            </section>

            <section id="zustand">
              <h2>Zustand Basics</h2>
              <p className="placeholder-text">
                Write about Zustand here...
              </p>
            </section>

            <section id="redux">
              <h2>Redux Basics</h2>
              <p className="placeholder-text">
                Write about Redux here...
              </p>
            </section>

            <section id="comparison">
              <h2>Comparison</h2>
              <p className="placeholder-text">
                Compare Zustand and Redux...
              </p>
            </section>

            <section id="conclusion">
              <h2>Conclusion</h2>
              <p className="placeholder-text">
                Write your conclusion...
              </p>
            </section>
          </div>

          <aside className="blog-sidebar">
            <div className="toc-box">
              <h3>Table of Contents</h3>
              <ul>
                <li><a href="#introduction">Introduction</a></li>
                <li><a href="#zustand">Zustand Basics</a></li>
                <li><a href="#redux">Redux Basics</a></li>
                <li><a href="#comparison">Comparison</a></li>
                <li><a href="#conclusion">Conclusion</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </article>
    </div>
  )
}

export default ZustandVsReduxBlog
