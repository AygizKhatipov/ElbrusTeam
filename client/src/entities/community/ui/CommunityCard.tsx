import React from 'react';
import { IconHeart } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import classes from './BadgeCard.module.css';
import { PesonalCommunityType } from '../types/communityType';
const TeacherCard = ({el}) => {

   console.log(el);
   





    return (
        <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src='https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80'
    height={180} />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <Group justify="apart">
          <Text fz="lg" fw={500}>
            {el.firstName}
          </Text>
          <Badge size="sm" variant="light">
            {el.country}
          </Badge>
        </Group>
        <Text fz="sm" mt="xs">
          {el.description}
        </Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        {/* <Text mt="md" className={classes.label} c="dimmed">
          Perfect for you, if you enjoy
        </Text> */}
        <Group gap={7} mt={5}>
          {el.features}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Подробнее
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group>
    </Card>
    );
}

export default TeacherCard;
