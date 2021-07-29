import React from 'react';
import { ReactDOM } from 'react';
import {Chats} from './src';
import './index.css';
import './bootstrap.css';
  
export const ChatList = ()=> {
    return (
        <section className="chatlist"> {
            Chats.map((chat)=>{
                const {id, name, image, uploadedDate, typeOfVideos, chanelTitle} = chat;
                return (
                  <Chat key={id} chat={chat}></Chat>
                );
            })
        }
        </section>
    );
}
const Chat = (props) => {
const { id, name, image, uploadedDate, typeOfVideos, chanelTitle } = props.chat;
    return (
    <section className="chat">
        <ul className="list-group rounded-0">
 	        <a href="#" className="list-group-item border-0 p-2 list-group-item-action rounded-0 d-flex justify-content-between align-items-center">
                <div className="user-img-box">
    		        <img src={image} className="mr-2 img-fluid img-after rounded-circle user-img" alt="Farhod Dadajonov" /> 
    	        </div>
    	        <div className="user-text pl-2 d-flex flex-column justify-content-between">
    		    <div className="d-flex justify-content-between">
    			    <h3 className="h6 h-6"><i className="fas fa-users users"></i>{name}</h3>
    			    <span className="text-muted sending-time">{uploadedDate}</span>
    		    </div>
        	    <div className="d-flex align-items-end justify-content-between">
    		        <p className="text-nowrap mb-0 text-truncate w-75 messages-amount"><span className="text-primary user-name">{typeOfVideos}</span> {chanelTitle}</p>
    	    	    <span className="badge bg-info text-white badge-pill">51</span>
    		    </div>
    	    </div>
  	        </a> 
        </ul>
    </section>
    );
}