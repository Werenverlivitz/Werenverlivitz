f=(politics,operation,operand1)=>{
  if(politics=="☭"){
    //The script executor must accept communism!!! >:|
    if(operation=="calc"){
      return eval(operand1)
    }
    if(operation=="get"){
      return document.getElementById(operand1)
    }
    if(operation=="rend"){
      return (()=>{requestAnimationFrame(this);eval(operand1)})
    }
  }else{
    //If the script executor doesnt accept communism must get outta banned here!!!! >:'U
    console.error("Capitalist idiots banned here.")
  }
}
