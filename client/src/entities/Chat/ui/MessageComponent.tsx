import {
  Text,
  Avatar,
  Group,
  TypographyStylesProvider,
  Paper,
  Title 

} from '@mantine/core';
import classes from '../style/CommentHtml.module.css'
import { useAppSelector } from '../../../app/providers/store/store';

function MessageComponent({userMessage}: any): JSX.Element {
  const allAccouts = useAppSelector(state => state.account.allAccounts);
    const {lastName,message, toId, fromId} = userMessage
    const accouttPhoto = allAccouts.find((accout) => accout.id === fromId)

  return (
    <div>
      <Paper mb={10}  radius="md" className={classes.comment}>
        <Group>
          <Avatar
            src={accouttPhoto?.Account?.photo}
            alt="Jacob Warnhalter"
            radius="xl"
          />
          <div>
            <Title mb={15} order={6}>{toId}{' '}{lastName}</Title >
          </div>
        </Group>
        <TypographyStylesProvider className={classes.body}>
          <div
            className={classes.content}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        </TypographyStylesProvider>
      </Paper>
    </div>
  );
}

export default MessageComponent;
