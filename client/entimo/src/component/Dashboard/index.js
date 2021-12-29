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
      
      <NavLink to="/Homepage" style={{textDecoration : 'none'}} >
          <Navlink >
         Home
        </Navlink>
        </NavLink>
     
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
        <NavLink to="/myupdates" style={{textDecoration : 'none'}}>
        <Navlink>
          My Updates
        </Navlink>
        </NavLink>

      </NavMenu>

    </Nav>
  </>
);

export default Navbar;
