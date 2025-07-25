import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Style from './NavBar.module.css';

export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg ${Style.navbarCustom}`}>
      <div className="container">
        <Link className={`navbar-brand ${Style.brand} fs-2 fw-bold`} to="/">START FRAMEWORK</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 py-3 fw-bold">
  <li className="nav-item">
    <NavLink
      className={({ isActive }) =>
        `nav-link ${Style.navLink} ${isActive ? Style.active : ""}`
      }
      to="/about"
    >
      ABOUT
    </NavLink>
  </li>

  <li className="nav-item">
    <NavLink
      className={({ isActive }) =>
        `nav-link ${Style.navLink} ${isActive ? Style.active : ""}`
      }
      to="/portfolio"
    >
      PORTFOLIO
    </NavLink>
  </li>

  <li className="nav-item">
    <NavLink
      className={({ isActive }) =>
        `nav-link ${Style.navLink} ${isActive ? Style.active : ""}`
      }
      to="/contacts"
    >
      CONTACT
    </NavLink>
  </li>
</ul>

        </div>
      </div>
    </nav>
  );
}
