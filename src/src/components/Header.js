
import React from 'react';
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/">金田 貴和子 / Kiwako Kaneda</Link>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/music">Music</Link></li>
          <li><Link to="/posts">Posts</Link></li>
        </ul>
      </div>
    </nav>
  )
}