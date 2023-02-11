import React from 'react';
import Nav from "../Nav";
import "../Screens/schedule.css"
export default function schedule() {
      return(<>
      <Nav />

      <div className='events-cards'>
        <div className='event-card'>
        <div className='image-card'>
          <img
            src='https://i.im.ge/2023/02/11/a3WyeD.DSC-0017-JPG.jpg'
            alt="event-pic"
            className="event-card-img"
          /></div>
           <div className='event-card-info'>
            <span className='card-category'> Sports </span>
            <h3 className='Event-card-title'> Events</h3>
          </div>
        </div>
    
      </div>
     
      
      </>
     )
    }





      
      
     
