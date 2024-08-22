import { Container, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandTelegram} from '@tabler/icons-react';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './FooterCentered.module.css';

export function FooterSocial() {
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
      <img src='https://habrastorage.org/getpro/moikrug/uploads/company/100/007/092/7/logo/medium_a88920f785a30e86c6e4a0cebbc66644.png' style={{width:35}} alt="logo" />
        <Group gap={0} className={classes.links} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <a href='https://vk.com/elbrusbootcamp'>
            <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} /></a>
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
          <a href='https://www.youtube.com/@ElbrusBootcamp'>
            <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </a>
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <a href="https://t.me/+cZcgk5hXRZtmYWMy">
            <IconBrandTelegram style={{ width: rem(18), height: rem(18) }} stroke={1.5} /></a>
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}