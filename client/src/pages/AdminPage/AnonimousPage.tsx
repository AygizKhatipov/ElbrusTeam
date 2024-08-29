import { Button, Container, Table } from "@mantine/core";
import { useAppSelector } from "../../app/providers/store/store";
import TeachList from "../../entities/admin/ui/TeachList";
import { useState } from "react";
import classes from '../../entities/admin/ui/admin.module.css'

const AnonimPage = () => {
  const allPeople = useAppSelector((state) => state.account.allAccounts);

  const [updateAll, setUpdateAll] = useState(true);

  const newPeople = allPeople.filter((one) => one.isMember === false);

  return (
    <>
      <title>Анонимы</title>
      <Container>
        <Table.ScrollContainer minWidth={800}>
          <Table verticalSpacing="sm" className="mx-auto border border-gray-300">
            <Table.Thead>
              <Table.Tr>
                <Table.Th className={classes.user}>Анонимы</Table.Th>
                <Table.Th className={classes.user}>Роли</Table.Th>
                {/* <Table.Th className="text-center" style={{ color: '#5430b0' }}>Статус</Table.Th> */}
                <Table.Th className="text-center">
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
      </Container>
    </>
  );
};

export default AnonimPage;
