import { Container, TextInput, Textarea, Button, Grid, Text } from '@mantine/core';
import classes from '../style/UserCardImage.module.css';
import { useAppSelector } from '../../../app/providers/store/store';



function PersonalAccountInformation(): JSX.Element {
    const account = useAppSelector(state => state.account.account)
    const {Account} = account
    console.log(account)
    console.log(Account)


    return (
        <Container className={classes.InfoContainer} style={{border: "1px solid black"}} size="md" my="lg">
        <Text ta="center" fz="xl" fw={500} mt="sm">Личная информация</Text> 

    </Container>
    );
}

export default PersonalAccountInformation;