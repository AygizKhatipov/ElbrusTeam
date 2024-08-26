import React from 'react';
import { useAppSelector } from "../../../app/providers/store/store";
import CommunityCard from "./CommunityCard";
import { Grid } from '@mantine/core';
const GraduateList = () => {

  const teacherAll = useAppSelector((state) => state.community);
    return (
        <div><Grid justify="space-between" align="flex-start">
            {teacherAll.graduates.map((el) => (
        <div key={el.id}>
          <CommunityCard el={el} />
        </div>
      ))}</Grid>
        </div>
    );
}

export default GraduateList;
