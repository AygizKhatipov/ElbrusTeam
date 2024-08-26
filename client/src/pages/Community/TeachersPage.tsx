import React from 'react';
import { IconHeart } from '@tabler/icons-react';
import { Card, Image, Text, Group, Badge, Button, ActionIcon } from '@mantine/core';
import classes from './BadgeCard.module.css';
import TeacherList from '../../entities/community/ui/TeacherList';

const TeachersPage = () : JSX.Element=> {
    return (
        <>
        <title>Преподаватели</title>
     
       <TeacherList/>
      
        
        
        
        </>
    );
}

export default TeachersPage;
