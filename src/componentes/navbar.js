import React from 'react';
import { NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './contenido';
import About from './tabla';
//importart bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {

  /* const miBoton = document.getElementById('miBoton');
  miBoton.addEventListener('click', handleClick); */

  const handleClick = () => {
    const centro = document.getElementById('centro');
    centro.render(<About />);
  }

  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" onClick={()=>handleClick()}>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink id="miBoton" className="nav-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
    </div>
    
  );
}

