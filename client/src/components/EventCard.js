import React from "react";
import { Link } from "react-router-dom";

const EventCard = (props) => {
  return (
    <div className="eventCard">
      <img className="eventCardImg" src={props.img} alt="" /> 
          <div className="cardDetails">
              <div>
                  <p  className="card-date">{props.date}</p>
                  <p className="card-date">{ props.month}</p>
              </div>
              <div>
                  <h1>{props.eventName}</h1>
                  <p>{ props.venue}</p>
              </div> 
         </div>
      <Link to={`/${props.id}`}> 
          <button className="btn-buyTicket">
              BUY TICKETS  
          </button>
      </Link>
    </div>
  );
};

export default EventCard;
