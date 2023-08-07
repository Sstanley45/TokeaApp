import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import { Data } from '../components/data'
import EventCard from '../components/EventCard'
import Footer from '../components/Footer'

const Landing = () => { 
  return (
    <>
      <div className="container">
        <Navbar />
        <Hero />
                  <h1 style={{textAlign : 'center'}}>Upcoming Events</h1>
              <section className="eventCardDiv">
          {Data.map((event) => {
            return (
              <EventCard 
                key={event.id}
                id={event.id}
                img={event.img}
                eventName={event.eventName}
                venue={event.venue}
                date={event.date}
                month={event.month}
              />
            );
          })}
              </section>
              <Footer />
      </div>
    </>
  );
}

export default Landing
