import { useState } from "react";
import {
  
  useAppSelector,
} from "../../../app/providers/store/store";
import EventCard from "./eventCard";
import classes from "./EventList.module.css";
// import { useDisclosure } from "@mantine/hooks";
// import { Button, Input, Modal } from "@mantine/core";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useForm } from "react-hook-form";
// import { createEvent } from "../model/eventSlice";
// import { EventsTypeWithoutId } from "../types/eventsType";

// const schemaCharacter = yup
//   .object()
//   .shape({
//     date: yup.string().required(),
//     pic: yup.string().required(),
//     title: yup.string().required(),
//     description: yup.string().required(),
//     userId: yup.number(),
//   })
//   .required();
const EventList = () => {
  // const user = useAppSelector((state) => state.user.user);
  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors },
  // } = useForm({
  //   defaultValues: {
  //     date: "",
  //     pic: "",
  //     title: "",
  //     description: "",
  //     userId: user?.id,
  //   },
  //   resolver: yupResolver(schemaCharacter),
  // });
  const eventAll = useAppSelector((state) => state.event);
  // const dispatch = useAppDispatch();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const scrollLeft = () => {
    const div = document.getElementById("carousel");
    if (div) {
      div.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    const div2 = document.getElementById("carousel");
    if (div2) {
      div2.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClick = (event: any) => {
    setSelectedEvent(event);
  };

  const handleBackClick = () => {
    setSelectedEvent(null);
  };

  // const [opened, { open, close }] = useDisclosure(false);

  // const createEventS = (data: EventsTypeWithoutId): void => {
  //   if (user?.id) {
  //     data.userId = user.id;
  //     dispatch(createEvent(data))
  //       .then(() => reset())
  //       .catch(console.log);
  //   }
  // };



  return (
    <>
      <div className={classes.wrapper}>
        {selectedEvent ? (
          <div className={classes.detailView}>
            <EventCard
              el={selectedEvent}
              isDetailView={true}
              onBackClick={handleBackClick}
            />
          </div>
        ) : (
          <>
            <button
              className={`${classes.arrow} ${classes.leftArrow}`}
              onClick={scrollLeft}
            >
              &#8249;
            </button>
            <div id="carousel" className={classes.carouselContainer}>
              {eventAll.map((el) => (
                <div
                  key={el.id}
                  className={classes.carouselItem}
                  onClick={() => handleCardClick(el)}
                >
                  <EventCard el={el} />
                </div>
              ))}
            </div>
            <button
              className={`${classes.arrow} ${classes.rightArrow}`}
              onClick={scrollRight}
            >
              &#8250;
            </button>
          </>
        )}
      </div>
      {/* {user?.roleId === 2 ||
      user?.roleId === 1 ||
      user?.roleId === 3 ||
      user?.roleId === 4 ? (
        <>
          {" "}
          <>
            <Modal opened={opened} onClose={close} title="Событие">
              <form onSubmit={handleSubmit(createEventS)}>
                <Input placeholder="Дата" {...register("date")} />
                <Input
                  style={{ marginTop: "10px" }}
                  placeholder="Фото"
                  {...register("pic")}
                />
                <Input
                  style={{ marginTop: "10px" }}
                  placeholder="Название"
                  {...register("title")}
                />
                <Input
                  style={{ marginTop: "10px" }}
                  placeholder="Описание"
                  {...register("description")}
                />
                <Button
                  type="submit"
                  variant="light"
                  color="#5430b0"
                  fullWidth
                  mt="xl"
                >
                  Создать
                </Button>
              </form>
            </Modal>

            <Button color="#5430b0" variant="light" className={classes.user} onClick={open}>
              Добавить событие
            </Button>
          </>
        </>
      ) : (
        <></>
      )} */}
    </>
  );
};

export default EventList;
