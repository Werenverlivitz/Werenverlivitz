render=()=>{
  totalWidth=0
  for(i=1;i<=4;i++){
    totalWidth+=document.getElementById("nav"+i).clientHeight
  }
  iframe1.width=innerWidth
  iframe1.height=innerHeight-totalWidth
  quantity.innerHTML="Showing faucet: "+eval(focus+1)+" of "+eval(faucets.length+1)+"."
  requestAnimationFrame(render)
}
onload=()=>{
  focus=0
  render()
  iframe1.src=faucets[0]
  if((!LS_BANNER_1276)&&(!LS_BANNER_1277)){
    location.replace('https://www.google.es/')
  }
  prev.onclick=()=>{
    if(0<focus){
      focus--
      iframe1.src=faucets[focus]
    }
  }
  reload.onclick=()=>{
    iframe1.src=faucets[focus]
  }
  next.onclick=()=>{
    if(focus<faucets.length-1){
      focus++
      iframe1.src=faucets[focus]
    }
  }
  bgoto.onclick=()=>{
    prefocus=eval(tgoto.value-1)
    if(0<prefocus&&prefocus<faucets.length-1){
      focus=prefocus
      iframe1.src=faucets[focus]
    }else{
      focus=0
    }
  }
  bopen.onclick=()=>{
    window.open(faucets[focus])
  }
}
