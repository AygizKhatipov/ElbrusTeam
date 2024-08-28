
import { useAppSelector } from "../../../app/providers/store/store";

import {  Grid, MultiSelect } from '@mantine/core';
import PeopleCard from './PeopleCard';
const PeoplePage = () => {

    const peopleAll = useAppSelector((state) => state.community);
    return (<>
    <div style={{ display: 'flex', justifyContent: 'center' }}>  
    <MultiSelect  
        style={{ width: '50%', marginTop:10}}  
        
        placeholder="Поиск"  
        data={['React', 'Angular', 'Vue', 'Svelte']}  
        searchable  
        nothingFoundMessage="Ничего не найденно..."  
    />  
</div>  




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
        </div></>
    );
}

export default PeoplePage;
