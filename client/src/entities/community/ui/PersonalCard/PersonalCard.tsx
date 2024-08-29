
import { Card, Avatar, Text, Group, Button } from '@mantine/core';
import classes from '../../../accout/style/UserCardImage.module.css';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { useAppSelector } from '../../../../app/providers/store/store';
import { useParams } from 'react-router-dom';


function PersonalCard(): JSX.Element {
  const accountAll = useAppSelector(state => state.account.allAccounts);
  
  const {id}=useParams()
  const [account] = accountAll.filter((el)=> Number(id)==el.id)
  console.log(account, 111);
  

  return (<Group justify="center">
    <div className={classes.container}>
      <Card withBorder padding="xl" radius="md" className={classes.card}>
        <Card.Section
          h={150}
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)',
          }}
        />
        <Avatar
          src={account.Account?.photo}
          size={80}
          radius={80}
          mx="auto"
          mt={-30}
          className={classes.avatar}
        />
        <Text ta="center" fz="lg" fw={500} mt="sm">
          {account?.firstName}{" "}{account?.lastName}
        </Text>
        <Text ta="center" fz="lg" fw={500} mt="sm">
          Email: {account.email}
        </Text >
        <Text ta="center" fz="lg" fw={500} mt="sm">
        Страна: {account.Account?.country}
        </Text >
        <Text ta="center" fz="lg" fw={500} mt="sm">
       Город:{account.Account?.city}
        </Text >
        <Text ta="center" fz="lg" fw={500} mt="sm">
          Телефон: {account.Account?.phone}
        </Text >
        <Text ta="center" fz="lg" fw={500} mt="sm">
          {account.Account?.about}
        </Text >
       
        
        
       
        
      </Card>
    </div></Group>
  );
}

export default PersonalCard;
