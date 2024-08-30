import { Image, Container, Title, Text } from '@mantine/core';
import classes from './NotFoundImage.module.css';

export function ErrorPage() {
  return (
    <Container className={classes.root}>
      <div className={classes.imageContainer}>
        <Image 
          src={"https://cdn.dribbble.com/users/1197927/screenshots/8062981/404.gif"} 
          className={classes.image} 
        />
      </div>
      <div className={classes.textContainer}>
        <Title className={classes.title}>Что-то пошло не так...</Title>
        <Text c="dimmed" size="lg">
          Страницы, на которую вы хотели попасть, не существует... Только, если в вашем воображении.
        </Text>
      </div>
    </Container>
  );
}
