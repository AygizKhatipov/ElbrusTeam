import { Table } from '@mantine/core';

import { useAppSelector } from '../../app/providers/store/store';
import StudentsCard from '../../entities/admin/ui/StudentsCard';
import TeachList from '../../entities/admin/ui/TeachList';

const AdminPage = () => {

    const teachers =useAppSelector(state=>state.community.teachers)
    const students =useAppSelector(state=>state.community.students)
    

    


   
    
      return (
      <>
      <title>Админка</title>
      <Table.ScrollContainer minWidth={800}>
      <Table  verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Студенты</Table.Th>
            <Table.Th>Роли</Table.Th>
            <Table.Th>Баллы</Table.Th>
            <Table.Th>Статус</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody><div>
      {students.map((el) => (
        
        <div key={el.id}>
          <StudentsCard el={el} />
        </div>
      ))} 
    </div></Table.Tbody>
      </Table>
    </Table.ScrollContainer>
       
      
      <Table.ScrollContainer minWidth={800}>
      <Table  verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Преподаватели</Table.Th>
            <Table.Th>Роли</Table.Th>
            
            <Table.Th>Статус</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody><div>
      {teachers.map((el) => (
        <div key={el.id}>
          <TeachList el={el} />
        </div>
      ))}
    </div></Table.Tbody>
      </Table>
    </Table.ScrollContainer>
       
    
    
    
    </>
      );
}

export default AdminPage;
