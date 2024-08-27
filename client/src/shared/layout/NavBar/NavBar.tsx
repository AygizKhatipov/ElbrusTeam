
import React from "react";
import { Link } from "react-router-dom";
import "@mantine/core/styles.css";
import {
  HoverCard,
  Group,
  Avatar,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandReactNative,
  IconCurrencyDollar,
  IconBook,
  IconSchool,
  IconChevronDown,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";
import classes from "./HeaderMegaMenu.module.css";
import { useAppSelector } from "../../../app/providers/store/store";
import "./UserButton.module.css";


const mockdata = [
  {
    icon: IconBrandReactNative,
    title: "Преподаватели",
    description: "/teachers",
  },
  {
    icon: IconSchool,
    title: "Выпускники",
    description: "/graduates",
  },
  {
    icon: IconBook,
    title: "Студенты",
    description: "/students",
  },
  {
    icon: IconCurrencyDollar,
    title: "Карьерные коучи",
    description: "/couches",
  },
];

function Navbar(): JSX.Element {
  const user = useAppSelector((state) => state.user.user);

  const userAcc = useAppSelector((state) => state.account.account);
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme(); // Hook for color scheme


  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Link to={item.description} className={classes.link}>
        <Group wrap="nowrap" align="flex-start">
          <ThemeIcon size={34} variant="default" radius="md">
            <item.icon
              style={{ width: rem(22), height: rem(22) }}
              color={theme.colors.violet[5]}
            />
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
    <Box pb={0}>
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <img
            src="https://habrastorage.org/getpro/moikrug/uploads/company/100/007/092/7/logo/medium_a88920f785a30e86c6e4a0cebbc66644.png"
            style={{ width: 60, margin: 5 }}
            alt="logo"
          />
          {user ? (
            <>
              <Group h="100%" gap={0} visibleFrom="sm">
                <Link to="/" className={classes.link}>
                  Главная
                </Link>
                <Link to="/events" className={classes.link}>
                  События
                </Link>
                <HoverCard
                  width={600}
                  position="bottom"
                  radius="md"
                  shadow="md"
                  withinPortal
                >
                  <HoverCard.Target>
                    <Link to="/community" className={classes.link}>
                      <Center inline>
                        <Box component="span" color="#5430b0" mr={5}>
                          Коммьюнити
                        </Box>
                        <IconChevronDown
                          style={{ width: rem(16), height: rem(16) }}
                          color={theme.colors.violet[6]}
                        />
                      </Center>
                    </Link>
                  </HoverCard.Target>
                  <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                    <Group justify="space-between" px="md">
                      <Text color="#5430b0" fw={500}>Коммьюнити</Text>
                    </Group>
                    <Divider my="sm" />
                    <SimpleGrid cols={2} spacing={0}>
                      {links}
                    </SimpleGrid>
                  </HoverCard.Dropdown>
                </HoverCard>

                <Link to="/base" className={classes.link}>
                  База знаний
                </Link>
                <Link to="/chat" className={classes.link}>Чат</Link>
                {user.roleId === 2 ||
                user.roleId === 1 ||
                user.roleId === 3 ||
                user.roleId === 4 ? (
                  <Link to="/admin" className={classes.link}>
                    Админка
                  </Link>
                ) : (
                  <></>
                )}
              </Group>

              <Group  h="100%" visibleFrom="sm">
                <Link style={{ textDecoration: "none" }} to="/personal">
                  <UnstyledButton className={classes.user}>
                    <Group h="100%" visibleFrom="sm">
                      <Avatar src={userAcc.Account?.photo} radius="xl" />

                      <div style={{ flex: 1 }}>
                        <Text  size="sm" fw={500}>
                          {user.firstName} {user.lastName}
                        </Text>
                      </div>
                    </Group>
                  </UnstyledButton>
                </Link>
                <Link to="/logout" className={classes.link}>
                  Выйти
                </Link>
                <Button
                  h="100%"
                  color="gray"
                  visibleFrom="sm"
                  variant="subtle"
                  onClick={() => toggleColorScheme()}
                  aria-label="Toggle theme"
                >
                  {colorScheme === "dark" ? (
                    <IconSun color="white" size={16} />
                  ) : (
                    <IconMoon color="#5430b0" size={16} />
                  )}
                </Button>
              </Group>
            </>
          ) : (
            <>
              <Group h="100%" gap={0} visibleFrom="sm">
                <Link to="/" className={classes.link}>
                  Главная
                </Link>
              </Group>

              <Group h="100%" visibleFrom="sm">
                <Link to="/login" className={classes.link}>
                  Войти
                </Link>
                <Link to="/registration" className={classes.link}>
                  Зарегистрироваться
                </Link>
                <Button
                h="100%"
                  color="gray"
                  visibleFrom="sm"
                  variant="subtle"
                  onClick={() => toggleColorScheme()}
                  aria-label="Toggle theme"
                >
                  {colorScheme === "dark" ? (
                    <IconSun color="white" size={16} />
                  ) : (
                    <IconMoon color="#5430b0" size={16} />
                  )}
                </Button>
              </Group>
            </>
          )}

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
          />
        </Group>
      </header>

      {/* <Drawer  
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
          </Group>  
        </ScrollArea>  
      </Drawer>   */}
    </Box>
  );
}

export default Navbar;
