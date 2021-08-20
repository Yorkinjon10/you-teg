import React, {useState} from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link, Router } from  'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { NavbarToggler } from '../../App';
function Navbar() { 
 const element = <FontAwesomeIcon icon={faBars} />
 const element2 = <FontAwesomeIcon icon={faTimes} />
 const [sidebar, setSidebar] = useState(false);
 const showSidebar = ()=> setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
            <a>
              <i className="fas fa-bars menu-btn" onClick={showSidebar}>{element}</i>
            </a>
      </div> 
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className="navbar-toggle">
                <i className='menu-bars text-white'>{element2}</i>
          </li>
        { SidebarData.map((item, index) =>{
          return (
            <li key={index} className={item.cName}>
                {/* <Link to={item.path}> */}
                <a href={item.path}>{item.icon}
                  <span>{item.title}</span>
                </a>
                {/* </Link> */}
            </li>
          );
        }) }
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
