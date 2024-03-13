import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home/Home'
import { Header } from './components/Header/Header'
import { Projects } from './pages/Projects/Projects'
import { darkModeContext } from './context/Context'
import { useState } from 'react'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <darkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </darkModeContext.Provider>
  )
}

export default App
