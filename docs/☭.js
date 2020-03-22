f=(politics,operation,operand1)=>{
  if(politics=="☭"){
    //The script executor must accept communism & rich's money obligatory distribution!!! >:|
    switch(operation){
      case "get":
        return document.getElementById(operand1);
        break;
      case "calc":
        return eval(operand1);
        break;
      case "rend":
        r=()=>{requestAnimationFrame(this);eval(operand1)};r();
        break;
      default:
        console.warn("Incorrect command.")
        console.log("Showing available commands here ;) : ")
        console.log("get: gets the element of a part of your document")
        console.log("calc: executes a line of javascript code")
        console.log("rend: creates a render function executing a line of javascript code")
        break;
    }
  }else{
    //If the script executor doesnt accept communism or rich's money obligatory distribution must get outta banned here!!!! >:'U
    console.error("Capitalist idiots banned here.")
  }
}
