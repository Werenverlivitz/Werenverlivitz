express = require('express')
app = express()
server = require('http').createServer(app)

app.get('/',(req,res){
  res.sendFile(__dirname + 'index.html')
})

server.listen(3000)

require('socket.io').listen(server).sockets.on('connection',(socket)=>{
  console.log('socket connection')
})
