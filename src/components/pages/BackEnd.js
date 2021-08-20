import React from 'react'
import { Chat } from '../Columns/col-3-list';
import { Backend } from '../Data/src';
function BackEnd() {
  return (
    <div className="backend">
       {
        <section className="chatlist"> {
            Backend.map((chat)=>{
                const {id, name, image, uploadedDate, typeOfVideos, chanelTitle} = chat;
                return (
                  <Chat key={id} chat={chat}></Chat>
                );
            })
        }
        </section>
}
    </div>
  )
}
 
export default BackEnd;
