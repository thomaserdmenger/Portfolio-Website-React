import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home/Home"
import { Header } from "./components/Header/Header"
import { ProjectDetails } from "./pages/ProjectDetails/ProjectDetails"
import { Projects } from "./pages/Projects/Projects"
import { darkModeContext } from "./context/Context"
import { useState } from "react"

const App = () => {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "wrapper dark" : "wrapper"}>
      <darkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:id' element={<ProjectDetails />} />
          </Routes>
        </BrowserRouter>
      </darkModeContext.Provider>
    </div>
  )
}

export default App
