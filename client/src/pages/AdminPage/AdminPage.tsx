import { Avatar, Badge, Table, Group, Text, Select } from '@mantine/core';
import React from 'react';
import { useAppSelector } from '../../app/providers/store/store';
import StudentsCard from '../../entities/admin/ui/StudentsCard';
import TeachList from '../../entities/admin/ui/TeachList';

const AdminPage = () => {

    const teachers =useAppSelector(state=>state.community.teachers)
    const students =useAppSelector(state=>state.community.students)
    
    console.log( teachers);
    


   
    
      return (
      <><Table.ScrollContainer minWidth={800}>
      <Table verticalSpacing="sm">
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Преподаватели</Table.Th>
            <Table.Th>Роли</Table.Th>
            {/* <Table.Th>Баллы</Table.Th> */}
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
       
    <div>
      {students.map((el) => (
        
        <div key={el.id}>
          <StudentsCard el={el} />
        </div>
      ))} 
    </div>
    
    
    </>
      );
}

export default AdminPage;