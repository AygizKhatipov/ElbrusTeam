import React from "react";
import { useAppSelector } from "../../../app/providers/store/store";
import TeacherCard from "./TeacherCard";
import { PesonalCommunityType } from "../types/communityType";

const TeacherList = () => {
  const teacherAll = useAppSelector((state) => state.community);
  return (
    <div>
      {teacherAll.map((el) => (
        <div key={el.id}>
          <TeacherCard el={el} />
        </div>
      ))}
    </div>
  );
};

export default TeacherList;
