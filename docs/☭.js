f=(operation,operand1,operand2)=>{
  switch(operation){
    case "get":
      return document.getElementById(operand)
      break
    case "calc":
      return eval(operand)
      break
    case "rend":
      r=()=>{requestAnimationFrame(this);eval(operand)};r()
      break
    case "log":
      console.log(operand)
      break;
    case "pow":
      console.log(operand2)
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
}
