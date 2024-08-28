import { Table } from '@mantine/core';  
import { useAppSelector } from '../../app/providers/store/store';  
import StudentsCard from '../../entities/admin/ui/StudentsCard';  
import TeachList from '../../entities/admin/ui/TeachList';  
import { useState } from 'react';  

const AdminPage = () => {  
    const allPeople = useAppSelector(state => state.account.allAccounts);  
    const students = useAppSelector(state => state.community.students);  
    const [update, setUpdate] = useState(true);  
    const [updateAll, setUpdateAll] = useState(true);  

    const newPeople = allPeople.filter((one) => one.isMember === false);  

    return (  
        <>  
            <title>Админка</title>  
            <Table.ScrollContainer minWidth={800}>  
                <Table verticalSpacing="sm" className="mx-auto border border-gray-300">  
                    <Table.Thead>  
                        <Table.Tr>  
                            <Table.Th className="text-center">Студенты</Table.Th>  
                            <Table.Th className="text-center">Роли</Table.Th>  
                            <Table.Th className="text-center">Баллы</Table.Th>  
                            <Table.Th className="text-center">  
                                {update ? (  
                                    <button type="submit" onClick={() => setUpdate(false)}>Редактировать</button>  
                                ) : (  
                                    <button type="submit" onClick={() => setUpdate(true)}>Обновить</button>  
                                )}  
                            </Table.Th>  
                        </Table.Tr>  
                    </Table.Thead>  
                    <Table.Tbody>  
                        {students.map((el) => (  
                            <StudentsCard key={el.id} update={update} el={el} />  
                        ))}  
                    </Table.Tbody>  
                </Table>  
            </Table.ScrollContainer>  

            <Table.ScrollContainer minWidth={800}>  
                <Table verticalSpacing="sm" className="mx-auto border border-gray-300">  
                    <Table.Thead>  
                        <Table.Tr>  
                            <Table.Th className="text-center">Не подтвержденные</Table.Th>  
                            <Table.Th className="text-center">Роли</Table.Th>  
                            <Table.Th className="text-center">Статус</Table.Th>  
                            <Table.Th className="text-center">  
                                {updateAll ? (  
                                    <button type="submit" onClick={() => setUpdateAll(false)}>Редактировать</button>  
                                ) : (  
                                    <button type="submit" onClick={() => setUpdateAll(true)}>Обновить</button>  
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
            </Table.ScrollContainer>  
        </>  
    );  
}  

export default AdminPage;  