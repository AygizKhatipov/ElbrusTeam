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
import { SubmitHandler, useForm } from "react-hook-form"



function RegistrationForm(): JSX.Element {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, watch } = useForm<{telephone: string, name: string, password: string, email: string}>({
        mode: 'onChange',
    });

    function onSubmit(): void {
        navigate('/login');
    }


    return (
<Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Регистрация!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        У вас есть аккаунт?
        <Anchor onClick={onSubmit} size="sm" component="button">
          Войти в аккаунт
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput type="tel" label="Номер телефона" placeholder="Телефон" required {...register("telephone")} />

        <TextInput label="Имя" placeholder="Имя" required {...register("name", {
            pattern: {
                value: /.{2,}/,
                message: "Введите имя",
            }
        })} />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        <TextInput label="Email" placeholder="you@elbrus.bootcamp" required {...register("email", {
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Введите корректный email",
            }
        })} />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <PasswordInput label="Password" placeholder="Пароль" required mt="md" {...register("password", {
            pattern: {
                value: /.{8,}/,
                message: "Пароль должен содержать не менее 8 символов",
              }
        })} />
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        <Button  color="violet" fullWidth mt="xl">
          Войти
        </Button>
      </Paper>
    </Container>
    );
}

export default RegistrationForm;