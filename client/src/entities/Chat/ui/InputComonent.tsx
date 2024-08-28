import { Button, Container, Textarea, ScrollArea } from '@mantine/core';
import classes from '../style/CommentHtml.module.css';
import { Grid } from '@mantine/core';
import MessageComponent from './MessageComponent';
import { useEffect, useRef, useState } from 'react';
// import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../../app/providers/store/store';
import { setMessage } from '../model/chatSlice';


function InputComonent(): JSX.Element {
    const [value, setValue] = useState('');
    const [connected, setConnected] = useState(false);
    const socket = useRef<WebSocket>()
    const messages = useAppSelector(state => state.chat.messages);
    const dispatch = useAppDispatch();
    const userId = useAppSelector(state => state.user.user?.id);
    const userName = useAppSelector(state => state.user.user?.firstName);
    const scrollAreaRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {   
        socket.current = new WebSocket('ws://localhost:3000')
        socket.current.onopen = () => {
            setConnected(true)
            const connectMessage = JSON.stringify({ event: 'connection', username: userName });
            socket.current?.send(connectMessage);
        }
        socket.current.onmessage = (event) => {
            const message = JSON.parse(event.data)
            dispatch(setMessage(message));
        }
        socket.current.onerror = (error)=> {
            console.log(error)
        }

        return () => {
            if (socket.current) {
              socket.current.close();
            }
          };
    },  [dispatch, userName])


    const sendMessage = async()=> {
        if(socket.current && connected){
            const message = {
                event: 'message',
                fromId: userId,
                toId: userName,
                message: value,
                username: userName,

            };
            socket.current.send(JSON.stringify(message))
            setValue('')
        } else {
            console.log('Соединение не установлено')
        }
    }

    useEffect(() => {
      if (scrollAreaRef.current) { 
        scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
      }
    }, [messages]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        sendMessage()
    }


  return (
    <>
      <Container className={classes.containermessage} p="xl">
      <ScrollArea key={messages.length}  viewportRef={scrollAreaRef}  h={600}>
        {messages.map((message) => (
          <div key={message.id}>
          <MessageComponent message={message.id}  userMessage={message}/>
          </div>
        ))}
      </ScrollArea>
      </Container>
      <Container className={classes.container} p="xl">
        <form onSubmit={handleSubmit}>
          <Grid >
            <Grid.Col span={10}>
              <Textarea
              required
                value={value}
                onChange={(event) => setValue(event.target.value)}
                radius="md"
                placeholder="Ваше сообщение"
                autosize
                minRows={1}
                maxRows={5}
              />
            </Grid.Col>
            <Grid.Col span={2} style={{padding: '8px 0px 8px 25px'}}>
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
