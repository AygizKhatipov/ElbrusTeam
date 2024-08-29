import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
  Tooltip,
  Alert,
} from "@mantine/core";
import classes from "../css/AuthenticationImage.module.css";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { UserWithoutId } from "../types/userType";
import { useAppDispatch } from "../../../app/providers/store/store";
import { userRegistration } from "../model/userSlice";
import { useState } from "react";
import { IconHeart } from "@tabler/icons-react";





function RegistrationForm(): JSX.Element {
  const icon = <IconHeart />;
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const [close, setClose]= useState(true)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<UserWithoutId>({
    mode: "onChange",
  });

  const onSubmitHandler: SubmitHandler<UserWithoutId> = (data) => {
    if (data.password !== data.confirmPassword) {
      return alert("Пароли не совпадают");
    }
    const { confirmPassword, ...userDataWithoutPassword } = data;
    dispatch(userRegistration(userDataWithoutPassword))
      .then(() => {
        setClose(false)
      })
      .catch(console.log);
  };

  function toLogin(): void {
    navigate("/login");
  }

  return (
    <Container size={420} my={40}>{close?(<>
      <Title ta="center" className={classes.title}>
        Регистрация
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        У вас есть аккаунт?
        <Anchor
          onClick={toLogin}
          style={{ color: "#833cdb" }}
          size="sm"
          component="button"
        >
          Войти в аккаунт
        </Anchor>
      </Text>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Tooltip
            label={errors.firstName?.message}
            withArrow
            opened={!!errors.firstName}
            position="top"
            color="red"
          >
            <TextInput
              label="Имя"
              placeholder="Имя"
              error={!!errors.firstName}
              required
              {...register("firstName", {
                pattern: {
                  value: /.{2,}/,
                  message: "Введите корректное имя",
                },
              })}
            />
          </Tooltip>

          <Tooltip
            label={errors.lastName?.message}
            withArrow
            opened={!!errors.lastName}
            position="top"
            color="red"
          >
            <TextInput
              style={{ marginTop: "10px" }}
              label="Фамилия"
              placeholder="Фамилия"
              error={!!errors.lastName}
              required
              {...register("lastName", {
                pattern: {
                  value: /.{2,}/,
                  message: "Введите корректную фамилию",
                },
              })}
            />
          </Tooltip>

          <Tooltip
            label={errors.email?.message}
            withArrow
            opened={!!errors.email}
            position="top"
            color="red"
          >
            <TextInput
              style={{ marginTop: "10px" }}
              label="Email"
              placeholder="you@elbrus.bootcamp"
              error={!!errors.email}
              required
              {...register("email", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Введите корректный email",
                },
              })}
            />
          </Tooltip>

          <Tooltip
            label={errors.password?.message}
            withArrow
            opened={!!errors.password}
            position="top"
            color="red"
          >
            <PasswordInput
              label="Пароль"
              placeholder="Пароль"
              required
              mt="md"
              error={!!errors.password}
              {...register("password", {
                pattern: {
                  value: /.{8,}/,
                  message: "Пароль должен содержать не менее 8 символов",
                },
              })}
            />
          </Tooltip>

          <Tooltip
            label={errors.confirmPassword?.message}
            withArrow
            opened={!!errors.confirmPassword}
            position="top"
            color="red"
          >
            <PasswordInput
              label="Подтвердите пароль"
              placeholder="Подтвердите пароль"
              required
              mt="md"
              error={!!errors.confirmPassword}
              {...register("confirmPassword", {
                validate: (value) =>
                  value === watch("password") || "Пароли не совпадают",
              })}
            />
          </Tooltip>

          <Button type="submit" color="violet" fullWidth mt="xl">
            Зарегистрироваться
          </Button>
          
          
        </Paper>
      </form></>):(<><div className={classes.user} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>  
      <Alert className={classes.user} color="#5430b0" title="Поздравляем, Вы зарегистрированы!" icon={icon} >  
        Пожалуйста, подождите когда администратор даст вам доступ и авторизуйтесь  
      </Alert>  
    </div>  </>)}
    </Container>
  );
}

export default RegistrationForm;
