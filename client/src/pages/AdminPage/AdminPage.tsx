import { Container, Table } from '@mantine/core';  
import { useAppSelector } from '../../app/providers/store/store';  
import StudentsCard from '../../entities/admin/ui/StudentsCard';  
  

const AdminPage = () => {  
    const students = useAppSelector(state => state.community.students);  
    



    return (  
        <>  
            <title>Админка</title>  <Container>
            <Table.ScrollContainer color="#5430b0" minWidth={800}>  
                <Table verticalSpacing="sm" className="mx-auto border border-gray-300">  
                    <Table.Thead>  
                        <Table.Tr>  
                            <Table.Th className="text-center"  style={{ color: '#5430b0' }}>Студенты</Table.Th>  
                            <Table.Th className="text-center" style={{ color: '#5430b0' }}>Роли</Table.Th>  
                            <Table.Th className="text-center" style={{ color: '#5430b0' }}>Баллы</Table.Th>  
                            <Table.Th className="text-center">  
                                {/* <button type="submit">Редактировать</button> */}  
                            </Table.Th>  
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