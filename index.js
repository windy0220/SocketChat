var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){ //连结
  socket.on('chat message', function(msg){ //收到消息
    io.emit('chat message', msg); //广播消息
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});