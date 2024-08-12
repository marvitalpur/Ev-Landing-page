import React from 'react';
import "./navbar.css";

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="nav-olution">
        EV-olution
      </div>
      <div className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Explore</li>
        <li className='nav-contact'> Contact</li>
      </div>
    </div>
  )
}

export default Navbar