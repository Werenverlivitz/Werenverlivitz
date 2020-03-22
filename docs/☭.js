f=(politics,operation,operand1)=>{
  if(politics=="☭"){
    //The script executor must accept communism!!! >:|
    if(operation=="get"){
      return document.getElementById(operand1)
    }
    if(operation=="calc"){
      return eval(operand1)
    }
    if(operation=="rend"){
      r=()=>{requestAnimationFrame(this);eval(operand1)};r()
    }
  }else{
    //If the script executor doesnt accept communism must get outta banned here!!!! >:'U
    console.error("Capitalist idiots banned here.")
  }
}
