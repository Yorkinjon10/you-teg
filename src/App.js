import './index.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Frontend from './components/pages/FrontEnd';
import Backend from './components/pages/BackEnd';
import Fullstack from './components/pages/FullStack';
import { SidebarData } from './components/Navbar/SidebarData';
import { Link } from 'react-router-dom';
export const App =() => {
  return (
    <>
      <Router>
      <Switch>
        <Route path='/' exact component={Frontend} />
        <Route path='/frontend' exact component={Frontend} />
        <Route path='/fullstack' component={Fullstack} />
        <Route path='/backend' component={Backend} />
      </Switch>
    </Router>
    </>
  );
}
// export const NavbarToggler = () => {
//   return (
//     <>
//       <Router>
//         <Switch>
//         <Navbar />
//         </Switch>
//       </Router>
//     </>
//   );
// }
// export class NavbarToggler extends React.Component {
//   handleClick = () => {
//     this.forceUpdate();
//   }
//   render() {
//     console.log("render method re-rendered");
//     return (
//     <>
//       <Router>
//         { SidebarData.map((item, index) =>{
//           return (
//             <li key={index} className={item.cName}>
//                 <Link to={item.path}>
//                 <a>{item.icon}
//                   <span>{item.title}</span>
//                 </a>
//                 </Link>
//             </li>
//           );
//         }) }
//       </Router>
//     </>
//   );
//   }
// }