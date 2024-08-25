import { useAppSelector } from "../../../app/providers/store/store";
import { Card, Avatar, Text, Group, Button } from '@mantine/core';
import classes from '../style/UserCardImage.module.css';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import PersonalAccoutInfo from "./PersonalAccoutModal";
import UpdateAvatar from "./UpdateAvatar";



function PersonalAccount(): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);
    const account = useAppSelector(state => state.account.account) //Получаем аккаунт
    const {Account} = account // В нашем аккаунте есть Account с персональными данными нашего пользователя и так же там находятся его points


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
          src={account.Account?.photo}
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
        <Text ta="center" fz="lg" fw={500} mt="sm">
          {account.email}
        </Text >
        <UpdateAvatar/>
        <Modal opened={opened} size="75%" onClose={close}  centered>
        <PersonalAccoutInfo/>
      </Modal>
        <Button onClick={open} fullWidth color="violet" radius="md" mt="xl" size="md" variant="outline">
          Редактировать
        </Button>
      </Card>
    </div>
    );
}

export default PersonalAccount;