import React from 'react';
import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import classes from './ArticlesCardsGrid.module.css';
const mockdata = [
    {
      title: 'Топ 10 вопросов на собеседование',
      image:
        'https://i.postimg.cc/Hs87C8Dy/IMG-8790.jpg',
      date: 'Август 18, 2024',
    },
    {
      title: 'Секреты успешных сданных экзаменов',
      image:
        'https://i.postimg.cc/J0f0hKVB/IMG-0082.jpg',
      date: 'Июль 17, 2024',
    },
    {
      title: 'Повтор не приговор? Приемыши и не только',
      image:
        'https://i.postimg.cc/MGxPh8Lh/IMG-8929.jpg',
      date: 'Август 22, 2024',
    },
    {
      title: 'Беня - Тимлид за делом!',
      image:
        'https://i.postimg.cc/50GNPptk/IMG-8794.jpg',
      date: 'Июль 30, 2024',
    },
  ];

const BasePage = () => {
    const cards = mockdata.map((article) => (
      <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
        <AspectRatio ratio={1920 / 1080}>
          <Image src={article.image} />
        </AspectRatio>
        <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
          {article.date}
        </Text>
        <Text className={classes.title} mt={5}>
          {article.title}
        </Text>
      </Card>
    ));
  
    return (
      <Container py="xl">
        <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
      </Container>
    );
  }

export default BasePage;
