import {
    TextInput,
    PasswordInput,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Button,
  } from "@mantine/core";
  import classes from "../css/AuthenticationImage.module.css";
  import { useNavigate } from "react-router-dom";
  import { SubmitHandler, useForm } from "react-hook-form";
  import { UserWithoutId } from "../types/userType";
  import { useAppDispatch } from "../../../app/providers/store/store";
  import { userRegistration } from "../model/userSlice";
  
  function RegistrationForm(): JSX.Element {
    const dispatch = useAppDispatch();
  
    const navigate = useNavigate();
  
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
          navigate("/");
        })
        .catch(console.log);
    };
  
    function toLogin(): void {
      navigate("/login");
    }
  
    return (
      <Container size={420} my={40}>
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
            <TextInput
              label="Имя"
              placeholder="Имя"
              required
             
              error={errors.firstName?.message}
              {...register("firstName", {
                pattern: {
                  value: /.{2,}/,
                  message: "Введите корректное имя",
                },
              })}
            />
            <TextInput
              style={{ marginTop: "10px" }}
              label="Фамилия"
              placeholder="Фамилия"
              required
              
              error={errors.lastName?.message}
              {...register("lastName", {
                pattern: {
                  value: /.{2,}/,
                  message: "Введите корректную фамилию",
                },
              })}
            />
            <TextInput
              style={{ marginTop: "10px" }}
              label="Email"
              placeholder="you@elbrus.bootcamp"
              required
              error={errors.email?.message}
              {...register("email", {
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Введите корректный email",
                },
              })}
            />
            <PasswordInput
              label="Пароль"
              placeholder="Пароль"
              required
              mt="md"
              error={errors.password?.message}
              {...register("password", {
                pattern: {
                  value: /.{8,}/,
                  message: "Пароль должен содержать не менее 8 символов",
                },
              })}
            />
            <PasswordInput
              label="Подтвердите пароль"
              placeholder="Подтвердите пароль"
              required
              mt="md"
              error={errors.confirmPassword?.message}
              {...register("confirmPassword", {
                validate: (value) =>
                  value === watch("password") || "Пароли не совпадают",
              })}
            />
            <Button type="submit" color="violet" fullWidth mt="xl">
              Войти
            </Button>
          </Paper>
        </form>
      </Container>
    );
  }
  
  export default RegistrationForm;
  