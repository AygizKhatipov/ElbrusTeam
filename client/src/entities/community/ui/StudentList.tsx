import React from 'react';
import { useAppSelector } from "../../../app/providers/store/store";
import CommunityCard from "./CommunityCard";
import { Grid } from '@mantine/core';
const StudentList = () => {

  const studentAll = useAppSelector((state) => state.community.students);
    return (
        <div> <Grid justify="center" align="stretch">
           {studentAll.map((el) => (
        <div key={el.id}>
          <CommunityCard el={el} />
        </div>
      ))} </Grid>
        </div>
    );
}

export default StudentList;
