import React from 'react'
import { Chat } from '../Columns/col-3-list'
import { FullStack } from '../Data/src';
function FUllStack() {
  return (
    <div className="fullstack">
        <section className="chatlist"> {
            FullStack.map((chat)=>{
                const {id, name, image, uploadedDate, typeOfVideos, chanelTitle} = chat;
                return (
                  <Chat key={id} chat={chat}></Chat>
                );
            })
        }
        </section>
    );
    </div>
  )
}

export default FUllStack 
