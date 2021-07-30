import React, {useState} from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from  'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
function Navbar() {
 const element = <FontAwesomeIcon icon={faBars} />
 const element2 = <FontAwesomeIcon icon={faTimes} />
 const [sidebar, setSidebar] = useState(false);
 const showSidebar = ()=> setSidebar(!sidebar);

  return (
    <>
      <div className="navbar">
        <Link to="#" className='menu-btn'>
         <i className="fas fa-bars" onClick={showSidebar}>{element}</i>
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className="navbar-toggle">
          <Link to="#" className='menu-bars'>
            <i>{element2}</i>
          </Link></li>
        { SidebarData.map((item, index) =>{
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          );
        }) }
        </ul>
      </nav>
    </>
  )
}

export default Navbar;
