app = require('express')()
http = require('http').Server(app)
io = require('socket.io')(http)

app.get('/', (req, res)=>{
   res.sendfile('index.html')
})

io.listen(process.env.PORT || 2000)
console.log("Server started.")

io.on('connection', (socket)=>{
   socket.on("msg",(e)=>{
      socket.emit("msg",{data:e.data})
   })
})
