import { useAppSelector } from "../../../app/providers/store/store";
import { Card, Avatar, Text, Group, Button } from '@mantine/core';
import classes from '../style/UserCardImage.module.css';



function PersonalAccount(): JSX.Element {

    const account = useAppSelector(state => state.account.account) //Получаем аккаунт
    const {Account} = account // В нашем аккаунте есть аккаунт с персональными данными нашего пользователя и так же там находятся его points


    return (
    <div className={classes.container}>
        <Card  withBorder padding="xl" radius="md" className={classes.card}>
        <Card.Section
          h={150}
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
          }}
        />
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
          size={80}
          radius={80}
          mx="auto"
          mt={-30}
          className={classes.avatar}
        />
        <Text ta="center" fz="lg" fw={500} mt="sm">
          {account?.firstName}{" "}{account?.lastName}
        </Text>
        <Text ta="center" fz="sm" c="dimmed">
          Fullstack engineer
        </Text>
        <Group mt="md" justify="center" gap={30}>
          {/* {items} */}
        </Group>
        <Button fullWidth radius="md" mt="xl" size="md" variant="default">
          Редактировать
        </Button>
      </Card>
    </div>
    );
}

export default PersonalAccount;