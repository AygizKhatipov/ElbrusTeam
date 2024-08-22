import {
    TextInput,
    PasswordInput,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Button,
  } from '@mantine/core';
  import classes from '../css/AuthenticationImage.module.css';
import { useNavigate } from 'react-router-dom';

function LoginForm(): JSX.Element {

    const navigate = useNavigate();

    function handleSubmit(): void {
        navigate('/registration');
    }


    return (
<Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Вход
      </Title>
      <Text c="dimmed" onClick={handleSubmit} size="sm" ta="center" mt={5}>
        У вас нет аккаунта?
        <Anchor size="sm" component="button" style={{ color: "#833cdb" }}>
          Создать аккаунт
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@elbrus.bootcamp" required />
        <PasswordInput label="Password" placeholder="Пароль" required mt="md" />
        <Button  color="violet" fullWidth mt="xl">
          Войти
        </Button>
      </Paper>
    </Container>
    );
}

export default LoginForm;