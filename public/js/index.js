var socket = io();
socket.on("connect", function() {
  console.log("emitting join");
  socket.emit("join", {
    roomId: "testRoom",
    username: "vynnie"
  });
});

socket.on('joined', function(data) {
  console.log(data.message);
  socket.emit('makeChatter');
});

socket.on("chat", function(data) {
  console.log(data.message);
});

document.getElementById('sendMessage').addEventListener('click', function(e) {
  socket.emit('chat', {message: "Yo"});
});
