import { Card, Image, Text, Container, AspectRatio, Button } from '@mantine/core';
import classes from './ArticlesCardsGrid.module.css';

const BaseCard = ({ el, isDetailView, onBackClick }) => {
  return (
    <Container py="xl">
      {isDetailView ? (
        <Card p="md" radius="md" className={classes.card}>
          <AspectRatio ratio={1920 / 1080}>
            <Image src={el.pic} />
          </AspectRatio>
          <Text size="lg" weight={700} mt="md">
            {el.title}
          </Text>
          <Text mt="sm">{el.description}</Text>
          <Text mt="sm">{el.article}</Text>
          <Button mt="md" variant="outline" onClick={onBackClick}>
            Назад
          </Button>
        </Card>
      ) : (
        <Card p="md" radius="md" className={classes.card}>
          <AspectRatio ratio={1920 / 1080}>
            <Image src={el.pic} />
          </AspectRatio>
          <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
            {el.title}
          </Text>
          <Text className={classes.title} mt={5}>
            {el.description}
          </Text>
        </Card>
      )}
    </Container>
  );
};

export default BaseCard;
