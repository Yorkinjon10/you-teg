import React from 'react'
import { Chat } from '../Columns/col-3-list';
import { Frontend } from '../Data/src';
function FrontEnd() {
  return (
    <div className="Frontend">
      <section className="chatlist"> {
        Frontend.map((chat) => {
          const { id, name, image, uploadedDate, typeOfVideos, chanelTitle } = chat;
          return (
            <Chat key={id} chat={chat}></Chat>
          );
        })
      }
      </section>
    </div>
  );
}
export default FrontEnd;
