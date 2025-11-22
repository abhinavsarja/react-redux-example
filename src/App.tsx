import './App.scss'
import LandingPage from './pages/LandingPage'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <main>
        <LandingPage />
      </main>
    </ThemeProvider>
  )
}

export default App
