import { Avatar, Table, Group, Text, Button, Input } from "@mantine/core";  
import { useAppDispatch, useAppSelector } from "../../../app/providers/store/store";  
import { updatePoints } from '../../point/model/pointSlice';  
import { PointsWithoutId } from '../../point/type/pointType';  
import { yupResolver } from '@hookform/resolvers/yup';  
import * as yup from 'yup';  
import { useForm } from "react-hook-form";   
import { useState } from "react";  

const schemaStudents = yup  
    .object()  
    .shape({  
        point: yup.number().required(),  
        userId: yup.number().required()  
    })  
    .required();  

const StudentsCard = ({ el }: any) => {  
    const roles = useAppSelector(state => state.role.roles);  
    // const allRoles = roles.map((role) => role.role);  
    const yourRole = roles.filter((role) => el.roleId === role.id);  
    const [yourRoleaa] = yourRole.map((role) => role.role);  
    const [update, setUpdate] = useState(true);   
    const points = useAppSelector(state => state.point);  
    const yourPoint = points.filter((point) => el.id === point.userId);  
    const [yourPointEnd] = yourPoint.map((point) => point.point);  

    const {  
        register,  
        handleSubmit,  
    } = useForm({  
        defaultValues: {  
            point: yourPointEnd,  
            userId: 0  
        },  
        resolver: yupResolver(schemaStudents),  
    });  

    const dispatch = useAppDispatch();  

    const updatePoint = (id: number, data: PointsWithoutId) => {  
     
      setUpdate(true);
        dispatch(updatePoints({ id, form: data }))  
            .catch(console.log);  
    }  

    return (  
        <Table.Tr key={el.id}>  
            <Table.Td>  
                <Group gap="sm">  
                    <Avatar size={40} src={el.Account?.photo} radius={40} />  
                    <div>  
                        <Text color="#5430b0" fz="sm" className="text-center" fw={500}>  
                            {el.firstName} {el.lastName}  
                        </Text>  
                        <Text color="#5430b0" fz="xs" className="text-center" c="dimmed">  
                            {el.email}  
                        </Text>  
                    </div>  
                </Group>  
            </Table.Td>  
            <Table.Td className="text-center" style={{ color: '#5430b0' }}>{yourRoleaa}</Table.Td>  
            {update ? (  
                <>  
                    <Table.Td className="text-center" style={{ color: '#5430b0' }}>{yourPointEnd}</Table.Td>   
                    <Table.Td className="text-center">  
                        <Button onClick={() => setUpdate(false)} variant="subtle" color="#5430b0" radius="md">  
                            Редактировать  
                        </Button>  
                    </Table.Td>  
                </>  
            ) : (  
                <Table.Td className="text-center">  
                    <form onSubmit={handleSubmit((data) => updatePoint(el.id, data))}>   
                        <Group gap="sm">   
                            <Input color="#5430b0"type="text" placeholder={`${yourPointEnd}`} {...register('point')} variant="unstyled" style={{ color: '#5430b0' }} />  
                            <Button type="submit"  variant="subtle" color="#5430b0" radius="md">  
                                Обновить  
                            </Button>  
                        </Group>  
                    </form>  
                </Table.Td>  
            )}  
        </Table.Tr>  
    );  
};  

export default StudentsCard; 