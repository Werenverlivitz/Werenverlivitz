var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendfile('index.html')
});

io.on('connection', function(socket) {
   console.log("socket connection")
})

io.listen(process.env.PORT || 2000)
console.log("Server started.")
