import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import './App.scss';
import { Header } from './components/Header'
import { Home } from './components/Home'
import { About } from './components/About'
import { Music } from './components/Music'
import Posts from './components/Posts'

function App() {
  return (
    <div className="container">
    <BrowserRouter>
      <Header />
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/music' component={Music} />
        <Route path='/posts' component={Posts} />
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
