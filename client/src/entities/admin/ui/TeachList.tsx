import { Avatar, Group, Text, Button, Select, Table, ActionIcon } from "@mantine/core";
import { useAppDispatch } from "../../../app/providers/store/store";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { updateAccount } from "../../accout/model/accoutSlice";
import { IconCheck } from "@tabler/icons-react";
import classes from './admin.module.css'

const Mockdata = [
  { id: 1, role: "Разработчик" },
  { id: 2, role: "Администратор" },
  { id: 3, role: "Директор" },
  { id: 4, role: "Преподаватель" },
  { id: 5, role: "Выпускник" },
  { id: 6, role: "Карьерный коуч" },
  { id: 7, role: "Студент" },
];

const TeachList = ({ el, updateAll }: { el: any; updateAll: boolean }) => {
  const { handleSubmit } = useForm({});
  const dispatch = useAppDispatch();

  // Используем состояние для отслеживания выбранного значения роли
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const updatePeople = (data: any) => {
    // Присоединяем выбранную роль к данным формы
    const formData = {
      ...data,
      roleId: selectedRole,
    };

    console.log(formData);
    dispatch(updateAccount({ data: formData, accountId: el.id })).catch(
      console.log
    );
  };

  return (
    <Table.Tr key={el.id}>
      <Table.Td>
        <Group gap="sm">
          <Avatar size={40} src={el.Account?.photo} radius={40} />
          <div>
            <Text className={classes.user} fz="sm" fw={500}>
              {el.firstName} {el.lastName}
            </Text>
            <Text fz="xs" c="dimmed">
              {el.email}
            </Text>
          </div>
        </Group>
      </Table.Td>

      <Table.Td>
        <form onSubmit={handleSubmit(updatePeople)}>
          <Group  spacing="xs">
            <Select
            color="#5430b0"
            className={classes.user}
              value={selectedRole}
              onChange={(value) => setSelectedRole(value)}
              placeholder="Выберите роль"
              data={Mockdata.map((role) => ({
                value: role.id.toString(),
                label: role.role,
              }))}
              disabled={!updateAll} 
              style={{ minWidth: 150, color:"#5430b0" }}
            />
<ActionIcon
                type="submit"
                variant="outline"
                size="lg"
                aria-label="Gradient action icon"
                color="#5430b0"
                className={classes.user}>
      <IconCheck />
    </ActionIcon>

          </Group>
        </form>
      </Table.Td>
    </Table.Tr>
  );
};

export default TeachList;






{/* <ActionIcon
                type="submit"
                variant="outline"
                size="lg"
                aria-label="Gradient action icon"
                color="violet">
      <IconCheck />
    </ActionIcon> */}
