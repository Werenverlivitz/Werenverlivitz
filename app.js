var express = require('express')
var app = express()
var serv = require('http').Server(app)

/*
app.get('/',function(req, res) {
	res.sendFile(__dirname + '/client/index.html')
});
*/
app.use('/client',express.static(__dirname + '/client'))

serv.listen(process.env.PORT || 2000)
console.log("Server started.")

var io = require('socket.io')(serv,{})
io.sockets.on('connection', (socket)=>{
  socket.on("msg",(e)=>{
    if(contiene_insultos(e.data)){
      //Ha insultado.
    }else{
      //No ha insultado.
      socket.broadcast.emit("msg",{data:e.data})
    }
  })
})
contiene_insultos=(msg1)=>{
	insultos=[
		"put",
		"cabron",
		"maric",
		"jod",
		"poll",
		"retrasad",
		"gut",
		"noob",
		"whore",
		"bitch",
		"suck",
		"retard",
		"dumb",
		"idiot",
		"gay",
		"lamb",
		"borrego",
		"huev",
		"perolo",
		"chot",
		"tranc",
		"pij",
		"verg",
		"pendej"
	]
	msg1=msg1.toLowerCase()
	contiene_insultos_var=false
	for(i in insultos){
		if(msg1.includes(insultos[i])){
			contiene_insultos_var=true
		}
	}
	return contiene_insultos_var
}
