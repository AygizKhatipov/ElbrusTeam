import { useAppSelector } from "../../../app/providers/store/store";
import EventCard from "./eventCard";




const EventList = () => {
  const eventAll = useAppSelector((state) => state.event);
 
  console.log(eventAll)
  return (
    <div>
      {eventAll.map((el) => (
        <div key={el.id}>
          <EventCard el={el} />
        </div>
      ))}
    </div>
  );
};

export default EventList;