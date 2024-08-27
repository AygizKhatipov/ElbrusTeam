import { Container, TextInput, Textarea, Button, Grid, Text } from '@mantine/core';
import classes from '../style/UserCardImage.module.css';
import { useAppDispatch, useAppSelector } from '../../../app/providers/store/store';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';
import { updateAccount } from '../model/accoutSlice';
import { UpdateAccountType } from '../types/accountType';


function PersonalAccoutInfo(): JSX.Element {
    const accountId= useAppSelector(state => state.account.account?.id)
    const dispatch = useAppDispatch()

    const {register, handleSubmit} = useForm<UpdateAccountType>();


    const updateUserInformation: SubmitHandler<UpdateAccountType> = (data) => {
        dispatch(updateAccount({data, accountId}))
    }



    return (
        <Container className={classes.InfoContainer} size="md" my="lg">
            <Text ta="center" fz="xl" fw={500} mt="sm">Личная информация</Text>
            <form onSubmit={handleSubmit(updateUserInformation)}>
            <Grid> 
                <Grid.Col span={6}>
                    <TextInput label="Имя" placeholder="Имя" {...register("firstName", {
                        pattern:{
                            value: /[а-яА-ЯёЁ]+/i,
                            message: 'Ай-ай-ай'
                        }
                    })} />
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput label="Фамилия" placeholder="Фамилия" {...register("lastName")} />
                </Grid.Col>
            </Grid>
            <Grid> 
                <Grid.Col span={6}>
                    <TextInput label="Город" placeholder="Город" {...register("city")} />
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput label="Страна" placeholder="Страна" {...register("country")}  />
                </Grid.Col>
            </Grid>
            <Grid> 
                <Grid.Col span={3}>
                    <TextInput label="Номер телефона"  placeholder="+7 (999) 999-99-99" {...register("phone")} />
                </Grid.Col>
                <Grid.Col span={9}>
                    <TextInput label="Email" placeholder="Email" {...register("email")} />
                </Grid.Col>
            </Grid>
            <Grid >
                    <Grid.Col >
                    <Textarea autosize minRows={3.5} size='md'  label="О себе" placeholder="Напиши о себе" {...register("about")} ></Textarea>
                    </Grid.Col>
                </Grid>
            <Button type="submit" fullWidth radius="md" mt="xl" size="md" color="violet" variant="outline">Сохранить</Button>
            </form>
        </Container>
            
    );
}

export default PersonalAccoutInfo;