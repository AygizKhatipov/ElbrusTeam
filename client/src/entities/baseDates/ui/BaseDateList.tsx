import { useState } from 'react';
import { useAppSelector } from "../../../app/providers/store/store";
import BaseCard from "./BaseDateCard";

const BaseDateList = () => {
  const baseDateAll = useAppSelector((state) => state.baseDate);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (el: any) => {
    setSelectedCard(el);
  };

  const handleBackClick = () => {
    setSelectedCard(null);
  };

  return (
    <div>
      {selectedCard ? (
        <BaseCard el={selectedCard} isDetailView={true} onBackClick={handleBackClick} />
      ) : (
        baseDateAll.map((el) => (
          <div key={el.id} onClick={() => handleCardClick(el)}>
            <BaseCard el={el} />
          </div>
        ))
      )}
    </div>
  );
};

export default BaseDateList;
