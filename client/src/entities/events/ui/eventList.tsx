import { useAppSelector } from "../../../app/providers/store/store";
import EventCard from "./EventCard";
import classes from './EventList.module.css'; // Импорт нового CSS-файла

const EventList = () => {
  const eventAll = useAppSelector((state) => state.event);

  const scrollLeft = () => {
    document.getElementById('carousel').scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    document.getElementById('carousel').scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className={classes.wrapper}>
      <button className={`${classes.arrow} ${classes.leftArrow}`} onClick={scrollLeft}>
        &#8249;
      </button>
      <div id="carousel" className={classes.carouselContainer}>
        {eventAll.map((el) => (
          <div key={el.id} className={classes.carouselItem}>
            <EventCard el={el} />
          </div>
        ))}
      </div>
      <button className={`${classes.arrow} ${classes.rightArrow}`} onClick={scrollRight}>
        &#8250;
      </button>
    </div>
  );
};

export default EventList;
