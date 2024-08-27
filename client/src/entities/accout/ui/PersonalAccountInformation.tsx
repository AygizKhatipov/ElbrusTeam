// import { Container, Text , Divider, Title } from '@mantine/core';
// import classes from '../style/UserCardImage.module.css';
// import { useAppSelector } from '../../../app/providers/store/store';



// function PersonalAccountInformation(): JSX.Element {
//     const account = useAppSelector(state => state.account.account)
//     const {Account} = account



//     return (

//         <Container className={classes.InfoContainer}  size="md" my="lg">
//         <Text ta="center" fz="xl" variant="gradient" gradient={{ from: 'violet', to: 'yellow', deg: 92 }} fw={500} mt="sm">Личная информация</Text> 
//         <Divider my="md" />

//         <Text>{Account?.country}</Text>
//         <Divider my="md" />
//         <Text>{Account?.city}</Text>
//         <Divider my="md" />

//         <Title  order={3} textWrap="wrap">{Account?.phone}</Title >
//         <Divider my="md" />

//         <Title order={3} textWrap="wrap">{Account?.about}</Title>
//     </Container>
//     );
// }

// export default PersonalAccountInformation;