
import { SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';
import classes from './ArticlesCardsGrid.module.css';

const BaseCard = ({el}) => {



    const cards = ({el}) => (
      <Card key={el.title} p="md" radius="md" component="a" href="#" className={classes.card}>
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
    );
  
    return (
      <Container py="xl">
        <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
      <section>{cards({el})}</section>
      </Container>
    );
  }

export default BaseCard;
