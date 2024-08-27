import React from 'react';
import { useAppSelector } from "../../../app/providers/store/store";
import CommunityCard from "./CommunityCard";
import { Grid } from '@mantine/core';
import PeopleCard from './PeopleCard';
const PeoplePage = () => {

    const peopleAll = useAppSelector((state) => state.community);
    return (
        <div> 
            
            <Grid justify="center" align="stretch">
            {peopleAll.couches.map((el) => (
        <div key={el.id}>
          <PeopleCard el={el} />
        </div>
      ))}</Grid>
      <Grid justify="center" align="stretch">
            {peopleAll.graduates.map((el) => (
        <div key={el.id}>
          <PeopleCard el={el} />
        </div>
      ))}</Grid>
      <Grid justify="center" align="stretch">
            {peopleAll.students.map((el) => (
        <div key={el.id}>
          <PeopleCard el={el} />
        </div>
      ))}</Grid>
      <Grid justify="center" align="stretch">
            {peopleAll.teachers.map((el) => (
        <div key={el.id}>
          <PeopleCard el={el} />
        </div>
      ))}</Grid>
        </div>
    );
}

export default PeoplePage;
