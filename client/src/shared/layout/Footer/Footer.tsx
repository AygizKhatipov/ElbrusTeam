import { Container, Group, ActionIcon, rem, Text } from '@mantine/core';  
import { IconBrandVk , IconBrandYoutube, IconBrandTelegram } from '@tabler/icons-react';  
import classes from './FooterCentered.module.css';  

export function FooterSocial() {  
  const currentYear = new Date().getFullYear();  

  return (  
    <div className={classes.footer}>  
      <Container className={classes.inner}>  
      <a target='_blank' href='https://elbrusboot.camp/'>  
        <img  
          src='https://habrastorage.org/getpro/moikrug/uploads/company/100/007/092/7/logo/medium_a88920f785a30e86c6e4a0cebbc66644.png'  
          style={{ width: 50 }}  
          alt="logo"  
        />  
        </a>
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">  
          <ActionIcon size="lg" color="gray" variant="subtle">  
            <a target='_blank' href='https://vk.com/elbrusbootcamp'>  
              <IconBrandVk  style={{ width: rem(18), height: rem(18) }} stroke={1.5} />  
            </a>  
          </ActionIcon>  
          <ActionIcon size="lg" color="gray" variant="subtle">  
            <a target='_blank' href='https://www.youtube.com/@ElbrusBootcamp'>  
              <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />  
            </a>  
          </ActionIcon>  
          <ActionIcon size="lg" color="gray" variant="subtle">  
            <a target='_blank' href="https://t.me/+cZcgk5hXRZtmYWMy">  
              <IconBrandTelegram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />  
            </a>  
          </ActionIcon>  
        </Group>  
        <Text flex-align="center" size="sm" color="dimmed" className={classes.year}>  
          
          <a target='_blank' href="https://github.com/AygizKhatipov/ElbrusTeam">  
          С любовью, Рыси!
          <br />
              {/* <IconBrandTelegram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />   */}
            </a> 
          &copy; {currentYear} 
        </Text>  
      </Container>  
    </div>  
  );  
}