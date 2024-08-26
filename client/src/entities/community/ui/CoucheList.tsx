import React from 'react';
import { useAppSelector } from "../../../app/providers/store/store";
import CommunityCard from "./CommunityCard";
const CoucheList = () => {

  const teacherAll = useAppSelector((state) => state.community);
    return (
        <div>
            {teacherAll.teachers.map((el) => (
        <div key={el.id}>
          <CommunityCard el={el} />
        </div>
      ))}
        </div>
    );
}

export default CoucheList;
