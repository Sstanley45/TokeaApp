import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { Data } from "../components/data";
import Prices from "../components/Prices";

const MoreInfo = () => {
  const { id } = useParams();
  const [selectedEvent, setSelectedEvent] = useState("");

  useEffect(() => {
    const singleEvent = Data.find((event) => event.id === parseInt(id));
    setSelectedEvent(singleEvent);
  }, [id]);

  return (
    <>
      <Navbar />
      <section className="moreInfoSection">
        <div>
          <img className="moreInfoImg" src={selectedEvent.img} alt="img" />
          <div className="cardDetails">
            <div>
              <p className="card-date">{selectedEvent.date}</p>
              <p className="card-date">{selectedEvent.month}</p>
            </div>
            <div>
              <h1>{selectedEvent.eventName}</h1>
              <p>{selectedEvent.venue}</p> 
              <p>{selectedEvent.description}</p>
            </div>
          </div>
              </div>
              <div>
                  <Prices />
              </div>
      </section>
      <Footer />
    </>
  );
};

export default MoreInfo;
