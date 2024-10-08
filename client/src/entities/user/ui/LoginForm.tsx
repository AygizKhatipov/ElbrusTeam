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
import { useAppDispatch } from '../../../app/providers/store/store';
import { userLogin } from '../model/userSlice';
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginFormType, UserWithoutId } from '../types/userType';
import { notifications } from '@mantine/notifications';

function LoginForm(): JSX.Element {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();



    const { register, handleSubmit, } = useForm<UserWithoutId>({
        mode: 'onChange',
    });

    const login: SubmitHandler<LoginFormType> = (data:LoginFormType) => {
        dispatch(userLogin(data)).then((data)=> {
          if(data.payload) {
            navigate('/');
          }
          else{
            return (
              notifications.show({
                title: 'Ошибка',
                message: 'Пользователь не найден',
                color: 'red',
                classNames: classes,
                position: 'top-center'
              })
            )
          }
        })
        .catch(console.log)
    }

    function toRegistration(): void {
        navigate('/registration');
    }


    return (
<Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Вход
      </Title>
      <Text c="dimmed" onClick={toRegistration}  size="sm" ta="center" mt={5}>
        У вас нет аккаунта?
        <Anchor size="sm" component="button" style={{ color: "#833cdb" }}>
          Создать аккаунт
        </Anchor>
      </Text>
      <form  onSubmit={handleSubmit(login)} >
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@elbrus.bootcamp" required  {...register("email")}/>
        <PasswordInput label="Пароль" placeholder="Пароль" required mt="md" {...register("password")} />
        <Button  type="submit" color="violet" fullWidth mt="xl">
          Войти
        </Button >
      </Paper>
      </form>
    </Container>
    );
}

export default LoginForm;