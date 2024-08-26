import React from "react";
import { useAppSelector } from "../../../app/providers/store/store";
import CommunityCard from "./CommunityCard";
import { PesonalCommunityType } from "../types/communityType";

const TeacherList = () => {
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
};

export default TeacherList;
