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
     
        <Navlink>
          Trending Task
        </Navlink>
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
