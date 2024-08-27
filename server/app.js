const express = require('express')
const config = require('./config/configServer')
const app = express()
const apiRouter = require('./routes/api.routes')
const http = require("http");
const WebSocket = require( "ws");
const {Chat} = require('./db/models')


const PORT = process.env.PORT ?? 3000
const server = http.createServer(app);
const webSocketServer = new WebSocket.Server({ server }, () => {
    console.log(`Сервер запущен ${server}`)
});
console.log(http)


config(app)

app.use('/api', apiRouter)


app.listen(PORT, ()=> {
    console.log(`PORT:${3000} `)
})


webSocketServer.on('connection', onConnect)

function onConnect(wsClient) {
    wsClient.on('message', function(message) {
        message = JSON.parse(message)
        switch (message.event) {
            case 'message':
                broadcastMessage(message)
                saveMessageToDB(message)
                break;
            case 'connection':
                    
                break;
            default:
                console.log('Неизвестное событие')
                break;
        }
    })
    wsClient.on('close', function() {
        console.log('close')
    })
}

function broadcastMessage(message) {
    webSocketServer.clients.forEach( client=> {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(message))
        }
    })
}


console.log(111)
async function saveMessageToDB(message) {
    try {
      const newMessage = await Chat.create({
        message: message.message, 
        fromId: message.fromId,
        toId: message.toId   
      });
      console.log('Message saved:', newMessage);
    } catch (error) {
      console.error('Error saving message:', error);
    }
  }