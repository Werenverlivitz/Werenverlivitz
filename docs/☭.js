f=(operation,operand1,operand2)=>{
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
          console.log("You need 2 operands for pow() function :)")
        }
        break
      default:
        console.warn("Incorrect command.")
        console.log("Showing available commands here ;) : ")
        console.log("get: gets the element of a part of your document")
        console.log("calc: executes a line of javascript code")
        console.log("rend: creates a render function executing a line of javascript code")
        console.log("log: log a text string in the console")
        console.log("pow: calculates a pow between 2 numbers")
        break
    }
  }else{
    console.log("You need at least 1 operand to execute a command :)")
  }
}
