import { Card, Image, Text, AspectRatio } from '@mantine/core';
import classes from './EventCard.module.css';

const EventCard = ({ el }: { el: any }) => {
  return (
    <Card p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={el.pic} />
      </AspectRatio>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {el.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {el.title}
      </Text>
    </Card>
  );
};

export default EventCard;
