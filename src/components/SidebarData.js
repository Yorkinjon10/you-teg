import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


 const element = <FontAwesomeIcon icon={faBars} />;
 const element2 = <FontAwesomeIcon icon={faTimes} />;
 const element3 = <FontAwesomeIcon icon={faHome} />;
 export const SidebarData = [
   {
     title: 'Home',
     path: '/',
     icon: element3,
     cName: 'nav-text'
   },
   {
     title: 'Reports',
     path: '/reports',
     icon: element3,
     cName: 'nav-text'
   },
   {
     title: 'Products',
     path: '/products',
     icon: element3,
     cName: 'nav-text'
   },
   {
     title: 'Team',
     path: '/team',
     icon: element3,
     cName: 'nav-text'
   },
   {
     title: 'Messages',
     path: '/messages',
     icon: element3,
     cName: 'nav-text'
   },
   {
     title: 'Support',
     path: '/support',
     icon: element3,
     cName: 'nav-text'
   }
 ]