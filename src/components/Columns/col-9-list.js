import React from 'react';
import '../../index.css';
import '../../bootstrap.css';
import {FrontendDefault} from '../Data/src';
import { Fa } from '../FontAwesomeIcons/fw';
 
export function ColNine () {
	return (
  <div className="col-sm-9 gx-0 chat-window"
	 style={{  
  backgroundImage: "url(" + "../../images/tgbg.png" + ")",
  backgroundPosition: 'center',
	backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}}>
	    <header className="col-one-top  header-top d-flex align-items-center justify-content-between bg-light">
		    <div>
			    <h2 className="h5 author-name">{FrontendDefault[0].name}</h2>
			    <small>{ FrontendDefault[0].chanelTitle }</small>
	  	  </div>
		    <div>
		    	<a href="#user-search-id" className="btn btn-link text-secondary">
				    <i className="fas fa-search">{Fa.faSearch}</i>
			    </a>

			<a href="https:://google.com"  className="copier btn btn-link text-secondary">
				<i className="fas fa-window-restore">{ Fa.faWindowRestore }</i>
			</a>

			<button className="btn btn-link text-secondary not-available-btn">
				<i className="fas fa-ellipsis-v">{ Fa.faEllipsisV }</i>
			</button>
		</div>
	</header>
  </div>
);}