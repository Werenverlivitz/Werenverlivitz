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
   obj[i1]={name:"",iron:0,uranium:0,drillers:0,trucks:0,nukes:0,teslatowers:0}
   socket.on("name",(e)=>{
      obj[i1].name=e.data
   })
   setInterval(()=>{
      for(i in obj){
         socket.emit("msg",{
	     user:i,
	     name:obj[i].name,
	     iron:obj[i].iron,
	     uranium:obj[i].uranium,
	     drillers:obj[i].drillers,
	     trucks:obj[i].trucks,
	     nukes:obj[i].nukes,
	     teslatowers:obj[i].teslatowers
	 })
      }
   },1000)
})

setInterval(()=>{
 for(i in obj){
  capacity=obj[i].trucks*1000
  if(obj[i].iron<capacity){
   obj[i].iron+=obj[i].drillers
  }else{
   obj[i].iron=capacity
  }
 }
},1000)
