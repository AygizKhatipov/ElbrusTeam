import { useState } from 'react';
import { useAppSelector } from "../../../app/providers/store/store";
import EventCard from "./eventCard";
import classes from './EventList.module.css';

const EventList = () => {
  const eventAll = useAppSelector((state) => state.event);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const scrollLeft = () => {
    const div =  document.getElementById('carousel')
    if(div){
      div.scrollBy({ left: -300, behavior: 'smooth' })
    }
       

  };

  const scrollRight = () => {
    const div2 = document.getElementById('carousel')
    if(div2){
      div2.scrollBy({ left: 300, behavior: 'smooth' })
    }
  };

  const handleCardClick = (event: any) => {
    setSelectedEvent(event);
  };

  const handleBackClick = () => {
    setSelectedEvent(null);
  };

  return (
    <div className={classes.wrapper}>
      {selectedEvent ? (
        <div className={classes.detailView}>
          <EventCard el={selectedEvent} isDetailView={true} onBackClick={handleBackClick} />
        </div>
      ) : (
        <>
          <button className={`${classes.arrow} ${classes.leftArrow}`} onClick={scrollLeft}>
            &#8249;
          </button>
          <div id="carousel" className={classes.carouselContainer}>
            {eventAll.map((el) => (
              <div key={el.id} className={classes.carouselItem} onClick={() => handleCardClick(el)}>
                <EventCard el={el} />
              </div>
            ))}
          </div>
          <button className={`${classes.arrow} ${classes.rightArrow}`} onClick={scrollRight}>
            &#8250;
          </button>
        </>
      )}
    </div>
  );
};

export default EventList;
