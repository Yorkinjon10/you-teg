import React from 'react';
import reactDom from 'react-dom';
  <div className="col-sm-9 col-nine gx-0 chat-window">
	    <header className="col-one-top  header-top d-flex align-items-center justify-content-between bg-light">
		    <div>
			    <h2 className="h5 author-name">{}</h2>
			    <small>Lorem, ipsum dolor sit.</small>
	  	  </div>
		    <div>
		    	<a href="#user-search-id" className="btn btn-link text-secondary">
				    <i className="fas fa-search">{Fa.faSearch}</i>
			    </a>

			<a href="#" onclick="getTheUrl()" className="copier btn btn-link text-secondary">
				<i className="fas fa-window-restore"></i>
			</a>

			<button className="btn btn-link text-secondary not-available-btn" onclick="notAvailableBtn()">
				<i className="fas fa-ellipsis-v"></i>
			</button>
		</div>
	</header>
  </div>