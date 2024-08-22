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

type Inputs = {
    telephone: string,
    name: string,
    password: string,
    email: string,
    confirmPassword: string
  };


function RegistrationForm(): JSX.Element {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, watch } = useForm<Inputs>({
        mode: 'onChange',
    });

    function onSubmit(): void {
        navigate('/login');
    }


    return (
<Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Регистрация
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        У вас есть аккаунт?
        <Anchor onClick={onSubmit} style={{ color: "#833cdb" }} size="sm" component="button">
          Войти в аккаунт
        </Anchor>
      </Text>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput  label="Имя" placeholder="Имя" required {...register("name", {
            pattern: {
                value: /.{2,}/,
                message: "Введите имя",
            }
        })} />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        <TextInput style={{ marginTop: "10px" }}  label="Email" placeholder="you@elbrus.bootcamp" required {...register("email", {
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Введите корректный email",
            }
        })} />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <PasswordInput label="Пароль" placeholder="Пароль" required mt="md" {...register("password", {
            pattern: {
                value: /.{8,}/,
                message: "Пароль должен содержать не менее 8 символов",
            }
        })} />
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        <PasswordInput label="Подтвердите пароль" placeholder="Подтвердите пароль" required mt="md" {...register("confirmPassword", 
            { 
                validate: value => value === watch("password") || "Пароли не совпадают"
            }
        )}/>
        {errors.confirmPassword && <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>}
        <Button  color="violet" fullWidth mt="xl">
        Войти
        </Button>
    </Paper>
    </Container>
    );
}

export default RegistrationForm;