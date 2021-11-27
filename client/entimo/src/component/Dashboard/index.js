import React from 'react';
import {
  Nav,
  Navlink,
  Bars,
  NavMenu,
} from './Navele';
import {NavLink,} from "react-router-dom";
const Navbar = () => (
  <>
    <Nav>
      <Bars />

      <NavMenu>
      
        <Navlink >
          Home
        </Navlink>
     
        <NavLink to="/trendingTask" style={{textDecoration : 'none'}} >
          <Navlink>
          Trending Task
        </Navlink>
        </NavLink>
        <NavLink to="/mytasks" style={{textDecoration : 'none'}}>
        <Navlink>
          My Tasks
        </Navlink>
        </NavLink>
        <Navlink>
          My Updates
        </Navlink>

      </NavMenu>

    </Nav>
  </>
);

export default Navbar;
