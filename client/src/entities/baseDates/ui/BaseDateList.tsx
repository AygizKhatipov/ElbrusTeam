
import { useAppSelector } from "../../../app/providers/store/store";
import BaseCard from "./BaseDateCard"



const BaseDateList = () => {
  const baseDateAll = useAppSelector((state) => state.baseDate);

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