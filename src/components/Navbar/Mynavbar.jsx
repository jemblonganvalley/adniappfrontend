import React from "react";
import './Mynavbar.css'
import {Link} from 'react-router-dom'

const Mynavbar = () => {
  return (
    <>
    <nav className="Navbar">
        <div className="container-navbar">
          <h1 className="brand">Andi
          
          <span style={{color:"orange"}}>Apps</span></h1>

         {/* link menu */}
          <ul className="menu">
            <li className="menu-components">
              <Link to="/dashboard" className="sub-menu">
                  <span class="material-icons">home</span>
                  Dashboard

              </Link>
            
            </li>

            <li className="menu-components">
              <Link to="/brand-events" className="sub-menu">
                <span class="material-icons">insert_invitation</span>
                brand events
              </Link>
            </li>

            <li className="menu-components">
              <Link to="/brand" className="sub-menu">
                <span class="material-icons">local_mall</span>
                brand
              </Link>
            </li>
            
            <li className="menu-components">
              <Link to="/fixtures" className="sub-menu">
                <span class="material-icons">storefront</span>
                fixtures
              </Link>
            </li>
            
            <li className="menu-components">
              <Link to="/statistic" className="sub-menu">
                <span class="material-icons">trending_up</span>
                statistic
              </Link>
            </li>
          
          </ul>
        {/* link menu */}

        <button className="logout">logout</button>
        </div>

     

    </nav>

    </>
  );
};

export default Mynavbar;
