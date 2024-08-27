
import { Grid, rem } from '@mantine/core';
import {  
  Card,  
  Image,  
  Text,  
   
  Group,  
  Center,  
  Avatar
} from '@mantine/core';  
import classes from './ArticleCard.module.css';  

const TeacherCard = ({ el }) => {  
  const linkProps = { href: 'https://mantine.dev', target: '_blank', rel: 'noopener noreferrer' };  
  // const theme = useMantineTheme();  

  return (  
      <>
    <Grid.Col span={3} style={{ minHeight: rem(80) }}>
    <Card withBorder radius="md" className={classes.card}>  
      <Card.Section>  
        <a {...linkProps}>  
          <Image src={el.photo} height={180} />  
        </a>  
      </Card.Section>  

      {/* <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>  
        outstanding  
      </Badge>   */}

      <Text className={classes.title} fw={500} component="a" {...linkProps}>  
        {el.firstName} {el.lastName} 
      </Text>  

      <Text fz="sm" c="dimmed" lineClamp={4}>  
        {el.description}
      </Text>  

      <Group justify="space-between" className={classes.footer}>  
        <Center>  
          <Avatar  
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"  
            size={24}  
            radius="xl"  
            mr="xs"  
          />  
          <Text fz="sm" inline>  
            Bill Wormeater  
          </Text>  
        </Center>  

     
      </Group>  
    </Card>  </Grid.Col>
    </>
  );  
}  

export default TeacherCard;