const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Bot ready!`)
})

client.on('message', msg => {
  if(msg.author.bot === false){
  	author=msg.author
    date = new Date()
    msg1 = msg.content
    msg2 = msg1.toLowerCase()
    msg2 = msg2.replace(new RegExp(/[àáâãäå]/g),"a")
    msg2 = msg2.replace(new RegExp(/[èéêë]/g),"e")
    msg2 = msg2.replace(new RegExp(/[ìíîï]/g),"i")
    msg2 = msg2.replace(new RegExp(/[òóôõö]/g),"o")
    msg2 = msg2.replace(new RegExp(/[ùúûü]/g),"u")
    msg2 = msg2.replace(new RegExp(/[ýÿ]/g),"y")
    msg2 = msg2.replace(new RegExp(/ç/g),"c")
    msg2 = msg2.replace("año",date.getFullYear())
    msg2 = msg2.replace(new RegExp(/ñ/g),"n")
    msg2 = msg2.replace(new RegExp(/[¿?¡!;:,]/g),"")
    msg2 = msg2.replace("y","+")
    msg2 = msg2.replace("mas","+")
    msg2 = msg2.replace("menos","-")
    msg2 = msg2.replace("por","*")
    msg2 = msg2.replace("entre","/")
    msg2 = msg2.replace("mes",date.getMonth())
    msg2 = msg2.replace("dia",date.getDate())
    msg2 = msg2.replace("hora",date.getHours())
    msg2 = msg2.replace("minutos",date.getMinutes())
    msg2 = msg2.replace("segundos",date.getSeconds())
    msg2 = msg2.replace(new RegExp(/[abcdefghijklmnopqrstuvwxyz]/g),"")

    msg.reply('usted dice "'+msg1+'"')

    if(
      msg2.includes("1")||
      msg2.includes("2")||
      msg1.includes("3")||
      msg1.includes("4")||
      msg1.includes("5")||
      msg1.includes("6")||
      msg1.includes("7")||
      msg1.includes("8")||
      msg1.includes("9")||
      msg1.includes("0")
    ){
	  try{
        msg2 = eval(msg2)
        msg.reply("el resultado del cálculo es "+msg2)
      }catch(e){}
	}
  }
})

client.login('NzA5MzI0MTc2NjU3NDgxODA4.XxTTWQ.ywPt4K7NuuEQeC05WvKM4qgC0Gs')
