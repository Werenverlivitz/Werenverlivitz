var express = require('express');
var app = express();
var serv = require('http').Server(app);

/*
app.get('/',function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});
*/
app.use('/client',express.static(__dirname + '/client'));

serv.listen(process.env.PORT || 2000);
console.log("Server started.");

i1=0
obj={}
var io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket){
   i1++
   obj[i1]={name:"",iron:0,uranium:0,drillers:0,trucks:0,nukes:0}
   socket.on("name",(e)=>{
      obj[i1].name=e.data
   })
   setInterval(()=>{
      for(i in obj){
         socket.emit("msg",{
	     name:obj[i].name,
	     user:i,iron:obj[i].iron,
	     uranium:obj[i].uranium,
	     drillers:obj[i].drillers,
	     trucks:obj[i].trucks,
	     nukes:obj[i].nukes
	 })
      }
   },1)
})
