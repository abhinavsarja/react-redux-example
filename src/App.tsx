import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Chatbot from './components/Chatbot'
import LandingPage from './pages/LandingPage'
import ReactBlogsPage from './pages/blogs/ReactBlogs'
import ZustandVsReduxBlog from './pages/blogs/ZustandVsRedux'
import ReactLearningPage from './pages/learning/ReactLearning'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blogs/react" element={<ReactBlogsPage />} />
          <Route path="/blog/zustand-vs-redux" element={<ZustandVsReduxBlog />} />
          <Route path="/learning/react" element={<ReactLearningPage />} />
        </Routes>
        <Chatbot />
      </Router>
    </ThemeProvider>
  )
}

export default App
