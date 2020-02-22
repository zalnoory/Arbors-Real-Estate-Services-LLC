import React from 'react'
import './css/Content.css'

const Content = () => {
  return (
    <div className="nav-container">
      <ul className="main-nav">
        <li>
          <a href="index.js" class="home">
            Home
          </a>
        </li>
        <li>
          <a href="#home" class="resources">
            Resources
          </a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a class="active" href="#about">
            About
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Content
