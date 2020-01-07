express = require('express');
app = express()
io = require('http').Server(app)

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})
app.use('/client',express.static(__dirname + '/client'))

serv.listen(process.env.PORT || 2000)
console.log("Server started.")

require('socket.io')(io,{}).sockets.on('connection', (socket) => {
	//socket.emit("msg",{data:"Hello world!"})
	socket.on("msg",(e)=>{
		io.emit("msg",{data:e.data})
	})
})
