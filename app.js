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
   obj[i1]={name:"",iron:100,uranium:0,drillers:1000,trucks:1,nukes:0,teslatowers:0}
   socket.on("name",(e)=>{
      obj[i1].name=e.data
   })
   socket.on("build",(e)=>{
      for(i=0;i<e.quantity;i++){
        if(e.data=="drillers"&&100<=obj[i1].iron){
          obj[i1].iron-=100
          obj[i1].drillers++
        }
        if(e.data=="trucks"&&20<=obj[i1].iron){
          obj[i1].iron-=20
          obj[i1].trucks++
        }
        if(e.data=="teslatowers"&&20<=obj[i1].iron){
          obj[i1].iron-=20
          obj[i1].teslatowers++
        }
        if(e.data=="nukes"&&20<=obj[i1].iron&&5<=obj[i1].uranium){
          obj[i1].iron-=20
          obj[i1].uranium-=5
          obj[i1].nukes++
        }
      }
   })
   socket.on("attack",(e)=>{
      DefensePower=obj[e.data].teslatowers/1000
      if(DefensePower<obj[i1].nukes){
        delete obj[i1]
      }
      obj[i1].nukes=0
   })
   setInterval(()=>{
     socket.emit("you",{
       name:obj[i1].name,
       iron:obj[i1].iron,
       uranium:obj[i1].uranium,
       drillers:obj[i1].drillers,
       trucks:obj[i1].trucks,
       nukes:obj[i1].nukes,
       teslatowers:obj[i1].teslatowers
     })
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
   socket.on('disconnect',(e)=>{
      delete obj[i1]
   })
})

setInterval(()=>{
 for(i in obj){
  capacity=obj[i].trucks*1000
  for(j=0;j<obj[i].drillers;j++){
   if(obj[i].iron<capacity&&obj[i].uranium<capacity){
    if(Math.random()<0.5){
     obj[i].iron++
    }else if(Math.random()<0.01){
     obj[i].uranium++
    }
   }else{
    obj[i].iron--
    obj[i].uranium--
   }
  }
 }
},1000)
