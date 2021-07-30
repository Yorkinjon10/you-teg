import React from 'react';
import ReactDOM from 'react-dom';

// export const SideBar =() => {
//   return (
//     <React.Fragment>
//        <nav id="sidebar">
//             <div id="dismiss">
//                 <i className="fas fa-arrow-left"></i>
//             </div>

//             <div className="sidebar-header">
//                 <h3>Bootstrap Sidebar</h3>
//             </div>

//             <ul className="list-unstyled components">
//                 <p>Dummy Heading</p>
//                 <li className="active">
//                     <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">Home</a>
//                     <ul className="collapse list-unstyled" id="homeSubmenu">
//                         <li>
//                             <a href="#">Home 1</a>
//                         </li>
//                         <li>
//                             <a href="#">Home 2</a>
//                         </li>
//                         <li>
//                             <a href="#">Home 3</a>
//                         </li>
//                     </ul>
//                 </li>
//                 <li>
//                     <a href="#">About</a>
//                     <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false">Pages</a>
//                     <ul className="collapse list-unstyled" id="pageSubmenu">
//                         <li>
//                             <a href="#">Page 1</a>
//                         </li>
//                         <li>
//                             <a href="#">Page 2</a>
//                         </li>
//                         <li>
//                             <a href="#">Page 3</a>
//                         </li>
//                     </ul>
//                 </li>
//                 <li>
//                     <a href="#">Portfolio</a>
//                 </li>
//                 <li>
//                     <a href="#">Contact</a>
//                 </li>
//             </ul>

//             <ul className="list-unstyled CTAs">
//                 <li>
//                     <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a>
//                 </li>
//                 <li>
//                     <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a>
//                 </li>
//             </ul>
//         </nav>

     
//         <div id="content">

//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">

//                     <button type="button" id="sidebarCollapse" className="btn btn-info">
//                         <i className="fas fa-align-left"></i>
//                         <span>Toggle Sidebar</span>
//                     </button>
//                     <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <i className="fas fa-align-justify"></i>
//                     </button>
//                     </div>
//               </nav>
//             </div>
//            <div className="overlay"></div>
           
//     </React.Fragment>
//   );
// }