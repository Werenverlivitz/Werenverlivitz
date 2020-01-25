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
   obj[i1]={name:"",iron:100,uranium:0,drillers:0,trucks:1,nukes:0,teslatowers:0}
   socket.on("name",(e)=>{
      obj[i1].name=e.data
   })
   socket.on("build",(e)=>{
      if(e.data=="drillers"&&100<=iron){
        obj[i1].drillers++
      }
      if(e.data=="trucks"&&20<=iron){
        obj[i1].trucks++
      }
      if(e.data=="teslatowers"&&20<=iron){
        obj[i1].teslatowers++
      }
      if(e.data=="nukes"&&20<=iron&&5<=uranium){
        obj[i1].nukes++
      }
   })
   socket.on("attack",(e)=>{
      if(obj[e.data].teslatowers<obj[i1].nukes){
        delete obj[i1]
      }
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
   if(Math.random()<0.5){obj[i].iron+=obj[i].drillers}
   if(Math.random()<0.05){obj[i].uranium+=obj[i].drillers}
  }else{
   obj[i].iron=capacity
  }
 }
},1000)
