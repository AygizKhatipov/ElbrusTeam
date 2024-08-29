import { Card, Image, Text, AspectRatio } from '@mantine/core';
import classes from './EventCard.module.css';
import { Button } from '@mantine/core';


const EventCard = ({ el, isDetailView, onBackClick }: any) => {

  return (
    <Card p="md" radius="md" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={el.pic} />
      </AspectRatio>
      {isDetailView ? (
        <>
          <Text className={classes.title}  size="lg" w={700} mt="md">
            {el.title}
          </Text>
          <Text mt="sm" >{el.description}</Text>
          <Text mt="sm">{el.article}</Text>
          <Button mt="md" variant="outline" className={classes.card} style={{alignItems:'center'}} color='5430b0' onClick={onBackClick}>
            Назад
          </Button>
          
        </>
      ) : (
        <>
          <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
            {el.date.slice(0, 10)}
          </Text>
          <Text className={classes.title} mt={5}>
            {el.title}
          </Text>
        </>
      )}
    </Card>
  );
};

export default EventCard;
