const express = require('express');
const shortid = require('shortid');
const WebSocket = require('ws');


const app = express();
const PORT = process.env.PORT || 4000;
const wss = new WebSocket.Server({ port: 4001 });
const CLIENTS = [];
let id; 

app.listen(PORT, () => console.log(`listening to requests on port ${PORT}`));

wss.on('connection', function connection(ws) {
  id = shortid.generate();
  console.log('connection is established : ' + id);
  // ws.send(`your connection ID = ${id}`)
  debugger
  CLIENTS[id] = ws;
  CLIENTS.push(ws);


  ws.on('message', function incoming(message) {
    console.log('received: %s', JSON.parse(message));
    sendAll(message);
    // wss.send(message);
  });

  // ws.on('close', function closing(message) {
  //   console.log('closing: %s', JSON.parse(message));
  // });
});

const sendAll = message => {
  // console.log(`[CLIENTS]: ${JSON.stringify(CLIENTS)}`)
  debugger
  CLIENTS.forEach(client => client.send(message));
}


app.use(express.static('App.js'));


