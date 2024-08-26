import { Container, Title, Text, Button } from '@mantine/core';
import classes from './HeroImageRight.module.css';
import { useAppSelector } from '../../app/providers/store/store';

const HomePage = () => {
    const userId = useAppSelector(state => state.user.user?.id)
    return (
        <>
        <title>Главная</title>
        
        <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              Поздравляем!{' '}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                ТЫ ЧАСТЬ ЛУЧШЕГО
              </Text>{' '}
              сообщества IT!
            </Title>

            <Text className={classes.description} mt={30}>
              И мы безумно рады, что ты с нами, теперь ты с легкостью можешь найти любого Эльбрусовца буквально по одному клику мышки!
              <p>А еще быть в курсе всех событий, добавлять свои материалы и пользоваться нашей базой знаний, кропотливо собранной такими же ребятами, как ты.</p>
              <p>P.S. Для доступа ко всем возможностям пройди авторизацию или зарегистрируйся.</p>
            </Text>
                {userId? <Button
              variant="gradient"
              gradient={{ from: 'pink', to: 'yellow' }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Найти своих
            </Button>: '' }
            
          </div>
        </div>
      </Container>
    </div>
        </>
    );
}

export default HomePage;
