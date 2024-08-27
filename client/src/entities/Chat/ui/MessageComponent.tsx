import {
  Text,
  Avatar,
  Group,
  TypographyStylesProvider,
  Paper,
} from '@mantine/core';
import classes from '../style/CommentHtml.module.css'
import { useAppSelector } from '../../../app/providers/store/store';

function MessageComponent({userMessage}: any): JSX.Element {
    const photo = useAppSelector(state => state.account.account.Account?.photo)
    const {lastName, username,message, toId} = userMessage
  return (
    <div>
      <Paper withBorder radius="md" className={classes.comment}>
        <Group>
          <Avatar
            src={photo}
            alt="Jacob Warnhalter"
            radius="xl"
          />
          <div>
            <Text fz="sm">{toId}{' '}{lastName}</Text>
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
