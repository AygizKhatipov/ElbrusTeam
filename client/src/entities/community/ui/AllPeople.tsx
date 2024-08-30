import { useAppSelector } from "../../../app/providers/store/store";
import {  Grid, MultiSelect } from '@mantine/core';
import PeopleCard from './PeopleCard';
import { useState } from "react";

const PeoplePage = () => {
  const [value, setValue] = useState<string[]>([])
    const peopleAll = useAppSelector((state) => state.community);
    const {graduates, students, couches, teachers} = peopleAll
    const allPeople = [...graduates, ...students, ...couches, ...teachers]
    const filtered = value.length > 0? allPeople.filter(({ lastName, firstName }) => value.some(val => (firstName + ' ' + lastName).toLowerCase().includes(val.toLowerCase()))) : allPeople;
    const peopleData = allPeople.map(({ lastName, firstName }) => firstName + ' ' + lastName);


    return (<>
    <div style={{ display: 'flex', justifyContent: 'center' }}>  
      <MultiSelect  
        style={{ width: '50%', marginTop:10}}  
        placeholder="Поиск"
        onChange={e=> setValue(e)}  
        data={peopleData}  
        searchable  
        nothingFoundMessage="Ничего не найденно..."  
      />  
    </div> 
    <div>
      <Grid justify="center" align="stretch">
        {
          filtered.map((el) => (
            <div key={el.id}>
               <PeopleCard el={el} /> 
            </div>
          ))
        }
      </Grid>
    </div>
        </>
    );
}

export default PeoplePage;
