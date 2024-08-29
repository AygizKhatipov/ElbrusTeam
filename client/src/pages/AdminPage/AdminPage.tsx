import { Container, Table } from '@mantine/core';  
import { useAppSelector } from '../../app/providers/store/store';  
import StudentsCard from '../../entities/admin/ui/StudentsCard';  
import TeachList from '../../entities/admin/ui/TeachList';  
import { useState } from 'react';  
import classes from '../../entities/admin/ui/admin.module.css'

const AdminPage = () => {  
    const allPeople = useAppSelector(state => state.account.allAccounts);  
    const students = useAppSelector(state => state.community.students);  
     
    const [updateAll, setUpdateAll] = useState(true);  
    

    const newPeople = allPeople.filter((one) => one.isMember === false);  

    return (  
        <>  
            <title>Админка</title>  <Container>
            <Table.ScrollContainer color="#5430b0" minWidth={800}>  
                <Table verticalSpacing="sm" className="mx-auto border border-gray-300">  
                    <Table.Thead>  
                        <Table.Tr>  
                            <Table.Th className={classes.user}>Студенты</Table.Th>  
                            <Table.Th className={classes.user}>Роли</Table.Th>  
                            <Table.Th className={classes.user}>Баллы</Table.Th>  
                            
                        </Table.Tr>  
                    </Table.Thead>  
                    <Table.Tbody>  
                        {students.map((el) => (  
                            <StudentsCard key={el.id} el={el} />  
                        ))}  
                    </Table.Tbody>  
                </Table>  
            </Table.ScrollContainer>  </Container>
           
        </>  
    );  
}  

export default AdminPage;