import {io} from 'socket.io-client';

const socket = io('ws://localhost:5000/', {});

socket.on('connect', () => {
  console.log(`connect ${socket.id}`);
});

socket.on('disconnect', () => {
  console.log('disconnect');
});

socket.on('alarm', (data: any) => {
  console.log('alarm');
  console.log(data);
});

/*setInterval(() => {
  const start = Date.now();
  socket.emit("ping", () => {
    console.log(`pong (latency: ${Date.now() - start} ms)`);
  });
}, 1000);*/

/*
setInterval(() => {
  const date:Date = new Date();
  socket.emit("message", {
    author: "Message test", message: `Sent at ${date.toUTCString()}`
  });
}, 5000);
*/
