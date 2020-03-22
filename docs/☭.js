f=(operation,operand1,operand2)=>{
  if(operation){
    if(operand1){
      switch(operation){
        case "get":
          return document.getElementById(operand1)
          break
        case "calc":
          return eval(operand1)
          break
        case "rend":
          r=()=>{
            requestAnimationFrame(this)
            eval(operand1)
          }
          r()
          break
        case "log":
          console.log(operand1)
          break;
        case "pow":
          if(operand2){
            return Math.pow(operand1,operand2)
          }else{
            console.warn("You need 2 operands for pow() function...")
            showHelp()
          }
          break
        default:
          console.warn("Incorrect command.")
          showHelp()
          break
      }
    }else{
      console.warn("You need at least 1 operand to execute a command...")
      showHelp()
    }
  }else{
    console.warn("You need at least 1 operation to execute a command...")
    showHelp()
  }
}
showHelp=()=>{
  f("log","Showing available commands here ;) :")
  f("log","get: gets the element of a part of your document")
  f("log","calc: executes a line of javascript code")
  f("log","rend: creates a render function executing a line of javascript code")
  f("log","log: log a text string in the console")
  f("log","pow: calculates a pow between 2 numbers")
}
