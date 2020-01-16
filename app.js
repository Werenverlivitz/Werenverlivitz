var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/',function(req, res) {
	res.sendFile(__dirname + '/client/index.html');
});
app.use('/client',express.static(__dirname + '/client'));

serv.listen(process.env.PORT || 2000);
console.log("Server started.");

i1=0
obj={}
var io = require('socket.io')(serv,{});
io.sockets.on('connection', function(socket){
   i1++
   obj[i1]={msg:""}
   socket.on("msg",(e)=>{
      obj[i1].msg=e.data
   })
   setInterval(()=>{
      for(i in obj){
         socket.emit("msg",{user:i,data:obj[i]})
      }
   },1)
})
