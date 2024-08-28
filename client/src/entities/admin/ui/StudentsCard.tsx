
import { Avatar, Badge, Table, Group, Text, Select } from "@mantine/core";
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
const StudentsCard = ({el}: any) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      
        point: 0,
       
        userId: 0

    },
    resolver: yupResolver(schemaStudents),
  });


    const roles = useAppSelector(state=> state.role.roles) 
    
    const allRoles=roles.map((role)=>role.role)
    const yourRole= roles.filter((role)=> el.roleId===role.id)
   const [yourRoleaa] =yourRole.map((role)=>role.role)

const points = useAppSelector(state=> state.point)
   const yourPoint= points.filter((point)=> el.id===point.userId)
   const [yourPointEnd] =yourPoint.map((point)=>point.point)

   const dispatch = useAppDispatch()
   console.log(allRoles);
   

   const updatePoint =  (id:number, data : PointsWithoutId)=>{
    dispatch(updatePoints({ id, form: data}))
    .catch(console.log);

 }

    return (<>
   
        <Table.Tr key={el.id}>
        <Table.Td>
          <Group gap="sm">
            <Avatar size={40} src={el.Account?.photo} radius={40} />
            <div>
              <Text fz="sm" fw={500}>
                {el.firstName} {el.lastName}
              </Text>
              <Text fz="xs" c="dimmed">
                {el.email}
              </Text>
            </div>
          </Group>
        </Table.Td>
  
        <Table.Td>
        <form onSubmit={handleSubmit((data)=>updatePoint(el.id, data))}>
        <input type="text" placeholder={`{yourPointEnd}`} {...register('point')} />
        <button type="submit">Update</button></form>
            </Table.Td>
        <Table.Td>{yourPointEnd}</Table.Td>
            <Table.Td>
              {el.isMember ? (
                <Badge fullWidth variant="light">
                  Подтвержден
                </Badge>
              ) : (
                <Badge color="gray" fullWidth variant="light">
                  Не подтвержден
                </Badge>
              )}
            </Table.Td>
      </Table.Tr></>
    );
}

export default StudentsCard;
