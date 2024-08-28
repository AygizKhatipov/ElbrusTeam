import { Container, Table } from '@mantine/core';  
import { useAppSelector } from '../../app/providers/store/store';  
import StudentsCard from '../../entities/admin/ui/StudentsCard';  
import TeachList from '../../entities/admin/ui/TeachList';  
import { useState } from 'react';  

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
                            <Table.Th className="text-center" style={{ color: '#5430b0' }}>Студенты</Table.Th>  
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
            <Container>
            <Table.ScrollContainer minWidth={800}>  
                <Table verticalSpacing="sm" className="mx-auto border border-gray-300">  
                    <Table.Thead>  
                        <Table.Tr>  
                            <Table.Th className="text-center" style={{ color: '#5430b0' }}>Не подтвержденные</Table.Th>  
                            <Table.Th className="text-center" style={{ color: '#5430b0' }}>Роли</Table.Th>  
                            <Table.Th className="text-center" style={{ color: '#5430b0' }}>Статус</Table.Th>  
                            <Table.Th className="text-center">  
                                {updateAll ? (  
                                    <button type="submit" onClick={() => setUpdateAll(false)} style={{ color: '#5430b0' }}>Редактировать</button>  
                                ) : (  
                                    <button type="submit" onClick={() => setUpdateAll(true)} style={{ color: '#5430b0' }}>Обновить</button>  
                                )}  
                            </Table.Th>  
                        </Table.Tr>  
                    </Table.Thead>  
                    <Table.Tbody>  
                        {newPeople.map((el) => (  
                            <TeachList key={el.id} el={el} updateAll={updateAll} />  
                        ))}  
                    </Table.Tbody>  
                </Table>  
            </Table.ScrollContainer>  </Container>
        </>  
    );  
}  

export default AdminPage;