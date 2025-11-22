import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../../styles/BlogListPage.scss'

interface Blog {
  id: string
  title: string
  category: string
  description: string
  date: string
  slug: string
}

const ReactBlogsPage: React.FC = () => {
  const navigate = useNavigate()

  const blogs: Blog[] = [
    {
      id: '1',
      title: 'Exploring Zustand vs Redux',
      category: 'State Management',
      description: 'A comprehensive comparison between Zustand and Redux for state management in React applications.',
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      slug: 'zustand-vs-redux',
    },
    {
      id: '2',
      title: 'Coming Soon',
      category: 'React',
      description: 'More React blogs coming soon...',
      date: 'TBD',
      slug: '',
    },
  ]

  return (
    <div className="blog-list-page">
      <header className="blog-list-header">
        <div className="container">
          <button className="back-button" onClick={() => navigate('/')}>
            ← Back
          </button>
          <h1>React Blogs</h1>
          <p className="subtitle">Dive deep into React development, state management, and best practices</p>
        </div>
      </header>

      <section className="blog-list-content">
        <div className="container">
          <div className="blogs-grid">
            {blogs.map((blog) => (
              <article 
                key={blog.id} 
                className="blog-card"
                onClick={() => blog.slug && navigate(`/blog/${blog.slug}`)}
              >
                <div className="blog-card-header">
                  <span className="category-badge">{blog.category}</span>
                  <span className="date">{blog.date}</span>
                </div>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
                {blog.slug && (
                  <button className="read-more-btn">
                    Read More →
                  </button>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReactBlogsPage
