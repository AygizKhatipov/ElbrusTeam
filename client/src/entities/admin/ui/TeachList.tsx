import { Avatar, Badge, Table, Group, Text } from "@mantine/core";
import { useAppDispatch, useAppSelector } from "../../../app/providers/store/store";
import { useForm } from "react-hook-form";

 
import { yupResolver } from '@hookform/resolvers/yup';  
import * as yup from 'yup';  
import { PesonalPageTypeOnly } from "../../accout/types/accountType";
import { updateAccount } from "../../accout/model/accoutSlice";
import { useState } from "react";

const schemaNewPeople = yup  
    .object()  
    .shape({  
      id: yup.number().required() ,
    firstName: yup.string().required() ,
    lastName: yup.string().required() ,
    email: yup.string().required() ,
    isMember: yup.boolean().required(),  
        roleId: yup.number().required()

      
    })  
    .required();  





    const Mockdata=[{id:1,
      role: "Разработчик",
    },
    {id:2,
      role: "Администратор",
    },
    {id:3,
      role: "Директор",
    },
    {id:4,
      role: "Преподаватель",
    },
    {id:5,
      role: "Выпускник",
    },
    {id:6,
       role: "Карьерный коуч",
    },
    {id:7,
        role: "Студент",
    },
    
    ]


const TeachList = ({ el }: any) => {

    const roles = useAppSelector(state=> state.role.roles)


    const allRoles=roles.map((role)=>role.role)
    console.log(222, allRoles);
    
  //   const yourRole= roles.filter((role)=> el.roleId===role.id)
  //  const [yourRoleaa] =yourRole.map((role)=>role.role)



    
    
   const {  
    register,  
    handleSubmit,  
  } = useForm({  
    defaultValues: {  
      id:0,
      firstName:'',
      lastName:'',
      email:'',

        isMember:false,  
        roleId: 0 
    },  
    resolver: yupResolver(schemaNewPeople),  
  });


  const dispatch = useAppDispatch();  

    const updatePeople = (accountId: number, data: PesonalPageTypeOnly) => {  
        dispatch(updateAccount({ data,  accountId }))  
            .catch(console.log);  
    }  



  return (
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
      <form onSubmit={handleSubmit((data) => updatePeople(el.id, data))}>
<select {...register("roleId")}>
        {Mockdata.map((race)=> <option value={race.id}>{race.role}</option>)}
       
      </select>


      </form>
      
            
          </Table.Td>
          <Table.Td>
            {el.isMember ? (
              <Badge fullWidth variant="light">
                
                Подтвержден
              </Badge>
            ) : (
              <Badge color="gray" fullWidth variant="light">
               <select {...register("isMember")}>
        <option value={'true'}>Подтвердить</option>
       
      </select>
              </Badge>
            )}
          </Table.Td>
    </Table.Tr>
  );
};

export default TeachList;
