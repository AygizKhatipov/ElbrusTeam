import React from "react";
import { useAppSelector } from "../../../app/providers/store/store";
import BaseCard from "./BaseDateCard";



const BaseDateList = () => {
  const baseDateAll = useAppSelector((state) => state.baseDate);
  console.log(baseDateAll)
  return (
    <div>
      {baseDateAll.map((el) => (
        <div key={el.id}>
          <BaseCard el={el} />
        </div>
      ))}
    </div>
  );
};

export default BaseDateList;