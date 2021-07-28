import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import './bootstrap.css';
import { ChatList } from './col-3-list';
import { Fa } from './fw';

const YouTeg = ()=> {
  return (
    <React.Fragment>
    <section className="container-fluid">
      {/* <img src="/images/uber.png" alt="" /> */}
    <div className="tg-top">
		  <div className="tg-icons">
			  <i className="tg-icon" >{Fa.faBox}</i>
				<i className="tg-icon">{Fa.faCopy}</i>
				<i className="tg-icon">{Fa.faTimes}</i>
		</div>
		</div>
    {/* Col-sm-3 Part */}

    <div className="row">
		<div className="col-sm-3 col-three border-right">
				<div className="row align-items-sm-center py-2">
					<div className="col-sm-2">
						<a href="google.com" className="menu-btn"> 	
							<img src="images/menu-icon.png" className="img-fluid" alt="menu" /> 				
						</a>
					</div> 
          {/* col-sm-2 */}

					<div className="col-sm-8 input-pad">
						<input type="text" className="form-control" name="search-text" id="search-text-id" placeholder="Search" maxLength="2000" />
					</div> 
          {/* col-sm-8 */}

					<div className="col-sm-2">
						<i>{Fa.faLock}</i>
					</div> 
          {/* col-sm-2 */}
				</div> 
        {/* row py-2 */}
			<ChatList />
			</div>  
      {/* col-three */}
      </div> 
      {/* row */}
    
      </section>
    </React.Fragment>
  );
}

ReactDOM.render(<YouTeg />, document.getElementById('root'));

 