
import { Grid, rem } from '@mantine/core';
import {  
  Card,  
  Image,  
  Text,  
  Badge,
  Group,  
  Center,  
  Avatar
} from '@mantine/core';  
import classes from './ArticleCard.module.css';  
import { useAppSelector } from '../../../app/providers/store/store';

const PeopleCard = ({ el }) => {  
  const linkProps = { href: 'https://mantine.dev', target: '_blank', rel: 'noopener noreferrer' };  
  // const theme = useMantineTheme();  
  console.log(333, el);
  const roles = useAppSelector(state=> state.role.roles) 
    
    const yourRole= roles.filter((role)=> el.roleId===role.id)
   const [yourRoleaa] =yourRole.map((role)=>role.role)
  

  return (  
      <>
    <Grid.Col span={3} style={{ minHeight: rem(80) }}>
    <Card withBorder radius="md" className={classes.card}>  
      <Card.Section>   
          <Image src={el.Account.photo} height={180} />  
        
      </Card.Section>  

      <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>  
        {yourRoleaa} 
      </Badge>  

      <Text className={classes.title} fw={500} component="a" >  
        {el.firstName} {el.lastName} 
      </Text>  

      <Text fz="sm" c="dimmed" lineClamp={4}>  
        {el.Account.about}
      </Text>  

      

     
      
    </Card>  </Grid.Col>
    </>
  );  
}  

export default PeopleCard;