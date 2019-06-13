import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.scss'
import { Header } from './components/Header'
import { Home } from './components/Home'
import { About } from './components/About'
import { Music } from './components/Music'
import Posts from './components/Posts'
import Post from './components/Post'
import { getCurrentYear } from './utils'

function App() {
  const currentYear = getCurrentYear()
  return (
    <div className="container">
    <BrowserRouter>
      <Header />
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/music' component={Music} />
        <Route exact path='/posts' component={Posts} />
        <Route exact path='/post/:id' component={Post} />
      </div>
    </BrowserRouter>
    <p className="footer-copy">&copy; {currentYear} KiwakoKaneda.</p>
    </div>
  )
}

export default App
