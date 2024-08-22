// import React from 'react';
import { Link } from 'react-router-dom';


import "@mantine/core/styles.css";


import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
} from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBrandReactNative,
  IconCurrencyDollar,
  IconBook,
  IconSchool,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react';
import classes from './HeaderMegaMenu.module.css';

const mockdata = [
  {
    icon: IconBrandReactNative,
    title: 'Преподаватели',
    description: '/teachers',
  },
  {
    icon: IconSchool,
    title: 'Выпускники',
    description: '/graduates',
  },
  {
    icon: IconBook,
    title: 'Студенты',
    description: '/students',
  },
  {
    icon: IconCurrencyDollar,
    title: 'Карьерные коучи',
    description: '/couches',
  },
  
];


function Navbar(): JSX.Element {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
  
    const links = mockdata.map((item) => (
      <UnstyledButton className={classes.subLink} key={item.title}>
        <Link to={item.description} className={classes.link}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
          
            <item.icon style={{ width: rem(22), height: rem(22) }} color={theme.colors.blue[6]} />
          </ThemeIcon>
          <div>
          
            <Text size="sm" fw={500}>
              {item.title}
            </Text>
            
            
          </div>
        </Group>
        </Link>
      </UnstyledButton>
    ));

  return (
    

<Box pb={120}>
<header className={classes.header}>
  <Group justify="space-between" h="100%">
    
  <img src='https://habrastorage.org/getpro/moikrug/uploads/company/100/007/092/7/logo/medium_a88920f785a30e86c6e4a0cebbc66644.png' style={{width:40}} alt="logo" />
    <Group h="100%" gap={0} visibleFrom="sm">
    <Link to="/" className={classes.link}>Главная</Link>
      
      <Link to="/events" className={classes.link}>События</Link>
      <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
        <HoverCard.Target>
        <Link to="/" className={classes.link}>
            <Center inline>
              <Box component="span" mr={5}>
                Коммьюнити
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </Link>
        </HoverCard.Target>

        <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
          <Group justify="space-between" px="md">
            <Text fw={500}>Коммьюнити</Text>
            
          </Group>

          <Divider my="sm" />

          <SimpleGrid cols={2} spacing={0}>
            {links}
          </SimpleGrid>

          {/* <div className={classes.dropdownFooter}>
            <Group justify="space-between">
              <div>
                <Text fw={500} fz="sm">
                  Get started
                </Text>
                <Text size="xs" c="dimmed">
                  Their food sources have decreased, and their numbers
                </Text>
              </div>
             
            </Group>
          </div> */}
        </HoverCard.Dropdown>
      </HoverCard>
      {/* <a href="#" className={classes.link}>
        Learn
      </a> */}
      <Link to="/base" className={classes.link}>База знаний</Link>
        
     
    </Group>

    <Group visibleFrom="sm">
    <Button variant="default"><Link to="/personal" className={classes.link}>Личный кабинет</Link></Button>
      {/* <Button>Sign up</Button> */}
    </Group>

    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
  </Group>
</header>

<Drawer
  opened={drawerOpened}
  onClose={closeDrawer}
  size="100%"
  padding="md"
  title="Navigation"
  hiddenFrom="sm"
  zIndex={1000000}
>
  <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
    <Divider my="sm" />

    <a href="#" className={classes.link}>
      Home
    </a>
    <UnstyledButton className={classes.link} onClick={toggleLinks}>
      <Center inline>
        <Box component="span" mr={5}>
          Features
        </Box>
        <IconChevronDown
          style={{ width: rem(16), height: rem(16) }}
          color={theme.colors.blue[6]}
        />
      </Center>
    </UnstyledButton>
    <Collapse in={linksOpened}>{links}</Collapse>
    <a href="#" className={classes.link}>
      База знаний
    </a>
    <a href="#" className={classes.link}>
      Academy
    </a>

    <Divider my="sm" />

    <Group justify="center" grow pb="xl" px="md">
      <Button variant="default">Личный кабинет</Button>
      {/* <Button>Sign up</Button> */}
    </Group>
  </ScrollArea>
</Drawer>
</Box>
  );
}

export default Navbar;
