import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './index.css';
import './bootstrap.css';
import { Fa } from './components/FontAwesomeIcons/fw';
import { ColNine } from './components/Columns/col-9-list';
import { App } from './App';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ReRenderedNavbar } from './components/Navbar/Navbar';
import { NavbarToggler } from './App';
const YouTeg = ()=> { 
  return (
    <React.Fragment>
      {/* <img src="/images/uber.png" alt="" /> */}
    <div className="tg-top">
		  <div className="tg-icons">
			  <i className="tg-icon" >{Fa.faBox}</i>
				<i className="tg-icon">{Fa.faCopy}</i>
				<i className="tg-icon">{Fa.faTimes}</i>
		</div>
		</div>
    {/* Col-sm-3 Part */}

  <div className="row rower">			
		<div className="col-sm-3 col-three border-right">
			<div className="col-one-top">
					<div className="search-top align-items-sm-center d-flex bg-light">
						<Navbar />
					<input type="search" className="form-control p-1 m-2" name="search-text" id="user-search-id" placeholder="Search" maxLength="2000" />
					<a href="google.com" className="locker unlocker">
						<i className="fas fa-lock">{Fa.faLock}</i>
					</a>
				</div>
			</div> 
				<App />
			</div>  
			<ColNine />
      {/* col-three */}
    </div> 
    {/* row */}
    </React.Fragment>
  );
}

ReactDOM.render(<YouTeg />, document.getElementById('root'));

 