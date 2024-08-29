import { Container, Table } from '@mantine/core';  
import { useAppSelector } from '../../app/providers/store/store';  
import StudentsCard from '../../entities/admin/ui/StudentsCard';  
import classes from '../../entities/admin/ui/admin.module.css'
  


const AdminPage = () => {  
    const students = useAppSelector(state => state.community.students);  
    



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