import React from 'react'
import Login from './pages/admin/Login'
import Messages from './pages/admin/Message'
import ProjectsEdit from './pages/admin/ProjectsEdit'
import Skills from './pages/admin/Skills'
import { Homepage } from './pages/user/HomePage'
import Projects from './pages/user/Projects'
import { AboutMe } from './pages/user/AboutMe'
import { Navbar } from './components/user/Navbar'
import {Contact} from './pages/user/Contact'

function App() {
  return (
    <div>
      <Navbar/>
      <Contact/>
    </div>
  )
}

export default App
