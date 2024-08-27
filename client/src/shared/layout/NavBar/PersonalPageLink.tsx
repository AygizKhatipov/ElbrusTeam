import { UnstyledButton, Group, Avatar, Text, rem } from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';
import classes from './UserButton.module.css';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../app/providers/store/store';

function PersonalPageLink() {
  const user = useAppSelector(state=> state.account.account)
    return (
        <Link to="/personal">
        <UnstyledButton className={classes.user}>
      <Group>
        <Avatar
          src={user.Account?.photo}
          radius="xl"
        />

        <div style={{ flex: 1 }}>
          <Text size="sm" fw={500}>
            {user.firstName} {user.lastName}
          </Text>

          {/* <Text c="dimmed" size="xs">
            hspoonlicker@outlook.com
          </Text> */}
        </div>

        {/* <IconChevronRight style={{ width: rem(14), height: rem(14) }} stroke={1.5} /> */}
      </Group>
    </UnstyledButton>
    </Link>
    );
}

export default PersonalPageLink;