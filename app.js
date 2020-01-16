app = require('express')()
http = require('http').Server(app)
io = require('socket.io')(http)

app.get('/',(req,res)=>{
   res.sendFile(__dirname+'/index.html')
})

app.use('/client',express.static(__dirname+'/')

io.listen(process.env.PORT||2000)

i1=0
obj={}
io.on('connection', (socket)=>{
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
