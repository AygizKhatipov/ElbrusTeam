import { Avatar, Table, Group, Text } from "@mantine/core";  
import { useAppDispatch, useAppSelector } from "../../../app/providers/store/store";  
import { updatePoints } from '../../point/model/pointSlice';  
import { PointsWithoutId } from '../../point/type/pointType';  
import { yupResolver } from '@hookform/resolvers/yup';  
import * as yup from 'yup';  
import { useForm } from "react-hook-form";   

const schemaStudents = yup  
    .object()  
    .shape({  
        point: yup.number().required(),  
        userId: yup.number().required()  
    })  
    .required();  

const StudentsCard = ({ el, update }: any) => {  
    const roles = useAppSelector(state => state.role.roles);  
    const allRoles = roles.map((role) => role.role);  
    const yourRole = roles.filter((role) => el.roleId === role.id);  
    const [yourRoleaa] = yourRole.map((role) => role.role);  

    const points = useAppSelector(state => state.point);  
    const yourPoint = points.filter((point) => el.id === point.userId);  
    const [yourPointEnd] = yourPoint.map((point) => point.point);  

    const {  
        register,  
        handleSubmit,  
        reset,  
        formState: { errors },  
    } = useForm({  
        defaultValues: {  
            point: yourPointEnd,  
            userId: 0  
        },  
        resolver: yupResolver(schemaStudents),  
    });  

    const dispatch = useAppDispatch();  

    const updatePoint = (id: number, data: PointsWithoutId) => {  
        dispatch(updatePoints({ id, form: data }))  
            .catch(console.log);  
    }  

    return (  
        <Table.Tr key={el.id}>  
            <Table.Td>  
                <Group gap="sm">  
                    <Avatar size={40} src={el.Account?.photo} radius={40} />  
                    <div>  
                        <Text fz="sm" className="text-center" fw={500}>  
                            {el.firstName} {el.lastName}  
                        </Text>  
                        <Text fz="xs" className="text-center" c="dimmed">  
                            {el.email}  
                        </Text>  
                    </div>  
                </Group>  
            </Table.Td>  
            <Table.Td className="text-center">{yourRoleaa}</Table.Td>  
            {update ? (  
                <Table.Td className="text-center">{yourPointEnd}</Table.Td>  
            ) : (  
                <Table.Td className="text-center">  
                    <form onSubmit={handleSubmit((data) => updatePoint(el.id, data))}>  
                        <input type="text" placeholder={`${yourPointEnd}`} {...register('point')} />  
                    </form>  
                </Table.Td>  
            )}  
        </Table.Tr>  
    );  
};  

export default StudentsCard; 