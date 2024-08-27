const express = require('express');
const config = require('./config/configServer');
const app = express();
const apiRouter = require('./routes/api.routes');
const http = require('http');
const WebSocket = require('ws');
const { Chat } = require('./db/models');

const PORT = process.env.PORT ?? 3000;
const server = http.createServer(app);


const webSocketServer = new WebSocket.Server({ server });

config(app);

app.use('/api', apiRouter);


server.listen(PORT, () => {
  console.log(`Сервер запущен на порту: ${PORT}`);
});


webSocketServer.on('connection', onConnect);

function onConnect(wsClient) {

//   wsClient.send('Hello!');

  wsClient.on('message', function (message) {
    message = JSON.parse(message);
    switch (message.event) {
      case 'message':
        broadcastMessage(message);
        saveMessageToDB(message);
        break;
      case 'connection':
        console.log('Пользователь подключился');
        break;
      default:
        console.log('Неизвестное событие');
        break;
    }
  });


  wsClient.on('close', function () {
    console.log('Соединение закрыто');
  });
}

function broadcastMessage(message) {
  webSocketServer.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
}

async function saveMessageToDB(message) {
  try {
    const newMessage = await Chat.create({
      message: message.message,
      fromId: message.fromId,
      toId: message.toId,
    });
    console.log('Сообщение сохранено:', newMessage);
  } catch (error) {
    console.error('Ошибка при сохранении сообщения:', error);
  }
}
