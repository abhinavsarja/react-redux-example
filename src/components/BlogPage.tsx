import React from 'react'
import '../styles/BlogPage.scss'

interface BlogPageProps {
  title: string
  slug: string
}

const BlogPage: React.FC<BlogPageProps> = ({ title }) => {
  return (
    <div className="blog-page">
      <header className="blog-header">
        <div className="container">
          <button className="back-button" onClick={() => window.history.back()}>
            ← Back
          </button>
          <h1>{title}</h1>
          <div className="blog-meta">
            <span className="author">By Abhinav Sarja</span>
            <span className="date">{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
        </div>
      </header>

      <article className="blog-content">
        <div className="container">
          <div className="content-area">
            {/* Blog content will go here */}
            <p className="placeholder-text">
              Start writing your blog content here...
            </p>
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

export default BlogPage
