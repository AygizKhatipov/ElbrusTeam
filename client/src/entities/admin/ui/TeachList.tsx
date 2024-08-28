import { Avatar, Badge, Table, Group, Text, Select } from "@mantine/core";
import { useAppSelector } from "../../../app/providers/store/store";
const TeachList = ({ el }: any) => {
    const roles = useAppSelector(state=> state.role.roles)


    const allRoles=roles.map((role)=>role.role)
    const yourRole= roles.filter((role)=> el.roleId===role.id)
   const [yourRoleaa] =yourRole.map((role)=>role.role)



    
    
    



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
            <Select
             data={allRoles}
              defaultValue={yourRoleaa}
              variant="unstyled"
              allowDeselect={false}
            />
          </Table.Td>
      {/* <Table.Td>{item.lastActive}</Table.Td> */}
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
    </Table.Tr>
  );
};

export default TeachList;
