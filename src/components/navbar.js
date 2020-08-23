import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <div className="left">
            <NavLink to="/" exact>Sathvika Korandla</NavLink>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          </div>
        </li>
        <div className="right">
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/experience">Experience</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
