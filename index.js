const express = require('express');
const app = express();
const Salas = require('salas')
const winston = require('winston');

app.use(express.static('public'));

const server = app.listen(3000, function() {
  console.log("Server started on port 3000");
});

const game = new Salas();

game.on("chat", ({player, room, data}) => {
  room.emitToRole('chatter', 'chat', {message: data.message});
});

game.on("makeChatter", ({player, room, data}) => {
  player.role = "chatter";
});

game.start(server);
