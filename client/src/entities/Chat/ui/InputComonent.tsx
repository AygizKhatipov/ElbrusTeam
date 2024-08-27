import { Button, Container, Textarea } from '@mantine/core';
import classes from '../style/CommentHtml.module.css';
import { Grid } from '@mantine/core';
import MessageComponent from './MessageComponent';
import { useEffect, useRef, useState } from 'react';
// import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../app/providers/store/store';

function InputComonent(): JSX.Element {
    const [value, setValue] = useState('');
    const [connected, setConnected] = useState(false);
    const socket = useRef<WebSocket>()
    const dispatch = useAppDispatch();
    const messages = useAppSelector(state=> state.chat.chat)
    console.log(messages)
    const userId = useAppSelector(state => state.user.user?.id);
    const userName = useAppSelector(state => state.user.user?.firstName);

    useEffect(() => {   
        socket.current = new WebSocket('ws://localhost:3000')
        socket.current.onopen = () => {
            setConnected(true)
            const connectMessage = JSON.stringify({ event: 'connection', username: userName });
            socket.current.send(connectMessage);
        }
        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data)
        }
        socket.current.onerror = (error)=> {
            console.log(error)
        }
    }, [])


    const sendMessage = async()=> {
        if(socket.current && connected){
            const message = {
                event: 'message',
                fromId: userId,
                toId: '123',
                message: value
            };
            socket.current.send(JSON.stringify(message))
        } else {
            console.log('Соединение не установлено')
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendMessage()
    }


  return (
    <>
      <Container className={classes.containermessage} p="xl">
        {messages.map((message) => (
          <MessageComponent key={message.id} message={message}/>
        ))}
      </Container>
      <Container className={classes.container} p="xl">
        <form onSubmit={handleSubmit}>
          <Grid>
            <Grid.Col span={10}>
              <Textarea
                value={value}
                onChange={(event) => setValue(event.target.value)}
                radius="md"
                placeholder="Ваше сообщение"
                autosize
                minRows={1}
                maxRows={5}
              />
            </Grid.Col>
            <Grid.Col span={2}>
              <Button
              type='submit'
                radius="md"
                variant="gradient"
                gradient={{ from: 'grape', to: 'yellow', deg: 291 }}
              >
                Отправить
              </Button>
            </Grid.Col>
          </Grid>
        </form>
      </Container>
    </>
  );
}

export default InputComonent;
