import {
  Avatar,
  Group,
  Text,
  Select,
  Table,
  ActionIcon,
} from '@mantine/core';
import { useAppDispatch } from '../../../app/providers/store/store';

import { useState } from 'react';
import {

  updatePretendent,
} from '../../accout/model/accoutSlice';
import { IconCheck } from '@tabler/icons-react';

const Mockdata = [
  { id: 1, role: 'Разработчик' },
  { id: 2, role: 'Администратор' },
  { id: 3, role: 'Директор' },
  { id: 4, role: 'Преподаватель' },
  { id: 5, role: 'Выпускник' },
  { id: 6, role: 'Карьерный коуч' },
  { id: 7, role: 'Студент' },
];

const TeachList = ({ el }: { el: any}) => {
  // const { handleSubmit } = useForm({});
  const dispatch = useAppDispatch();


  const [selectedRole, setSelectedRole] = useState<string | null>(null);
console.log(selectedRole)
  const updatePeople = (): any => {
    dispatch(updatePretendent({ data: selectedRole, accountId: el.id })).catch(
      console.log
    );
  };

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
        <form onSubmit={(updatePeople())}>
          <Group>
            <Select
              value={selectedRole}
              onChange={(value) => setSelectedRole(value)}
              placeholder="Выберите роль"
              data={Mockdata.map((role) => ({
                value: role.id.toString(),
                label: role.role,
              }))}
              style={{ minWidth: 150 }}
            />
            <ActionIcon
              type="submit"
              variant="outline"
              size="lg"
              aria-label="Gradient action icon"
              color="violet"
            >
              <IconCheck />
            </ActionIcon>
          </Group>
        </form>
      </Table.Td>
    </Table.Tr>
  );
};

export default TeachList;
{
  /* <ActionIcon
                type="submit"
                variant="outline"
                size="lg"
                aria-label="Gradient action icon"
                color="violet">
      <IconCheck />
    </ActionIcon> */
}
