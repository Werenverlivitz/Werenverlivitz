express = require('express');
app = express()
serv = require('http').Server(app)

app.get('/', (req, res)=>{
	res.sendFile(__dirname + '/index.html')
})
app.use('/client',express.static(__dirname + '/client'))

serv.listen(process.env.PORT || 2000);
console.log("Server started.")

require('socket.io')(serv,{}).sockets.on('connection', (socket)=>{
	console.log("Socket Connection")
})
