import { Container, TextInput, Textarea, Button, Grid, Text } from '@mantine/core';
import classes from '../style/UserCardImage.module.css';
import { useAppSelector } from '../../../app/providers/store/store';
import { useForm } from 'react-hook-form';
import { IMaskInput } from 'react-imask';


function PersonalAccoutInfo(): JSX.Element {

    const account = useAppSelector(state => state.account.account)
    const {Account} = account
    console.log(account)
    console.log(Account)

    const {register, handleSubmit} = useForm();



    return (
        <Container className={classes.InfoContainer} size="md" my="lg">
            <Text ta="center" fz="xl" fw={500} mt="sm">Личная информация</Text>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
            <Grid> 
                <Grid.Col span={6}>
                    <TextInput label="Имя" placeholder="Имя" {...register("firstName")} />
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
                    <TextInput label="Номер телефона" component={IMaskInput} mask="+7 (000) 000-00-00" placeholder="+7 (999) 999-99-99" {...register("phone")} />
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