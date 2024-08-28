import { useAppSelector } from "../../../app/providers/store/store";
import {  Grid, MultiSelect } from '@mantine/core';
import PeopleCard from './PeopleCard';

const PeoplePage = () => {

    const peopleAll = useAppSelector((state) => state.community);
    const {graduates, students, couches, teachers} = peopleAll
    const allPeople = [...graduates, ...students, ...couches, ...teachers]
    const peopleData= allPeople.map(({lastName, firstName})=> firstName + ' ' +lastName)


    return (<>
    <div style={{ display: 'flex', justifyContent: 'center' }}>  
      <MultiSelect  
        style={{ width: '50%', marginTop:10}}  
        
        placeholder="Поиск"  
        data={peopleData}  
        searchable  
        nothingFoundMessage="Ничего не найденно..."  
      />  
    </div> 


    
     
    <div>
      <Grid justify="center" align="stretch">
        {
          allPeople.map((el) => (
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
