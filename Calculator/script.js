let currentSpace = document.querySelector(".current");
let operationsSpace = document.querySelector('.operations');
//method that take a math expression(string) and returns the value of the operation
const evaluate = (expr) =>{
    console.log(expr);
    const x = expr.split(/(?<=[-+x/])|(?=[-+x/])/);
    console.log(x);
    let result = 0;
    if(x[1] == undefined){
        result = currentSpace.textContent;
    }
    else if(x[0] == '-'){
        switch (x[2]) {
            case "+":
                result = sum(-Number(x[1]),Number(x[3]));
                break;
            case "-":
                result = sub(-Number(x[1]),Number(x[3]));
                break;
            case "x":
                result = mul(-Number(x[1]),Number(x[3]));
                break;
            case "/":
                result = div(-Number(x[1]),Number(x[3]));
                break;
            default:
                break;
        }
    }else{
        switch (x[1]) {
            case "+":
                result = sum(Number(x[0]),Number(x[2]));
                break;
        
            case "-":
                result = sub(Number(x[0]),Number(x[2]));
                break;
        
            case "x":
                result = mul(Number(x[0]),Number(x[2]));
                break;
        
            case "/":
                result = div(Number(x[0]),Number(x[2]));
                break;
        
            default:
                break;
        }
    }
    currentSpace.textContent = result;
    operationsSpace.classList.add("erase");
    currentSpace.classList.add("erase");
}
//method that operate the expression
const operate = (e) => {
    if(!currentSpace.classList.contains("erase")){
        operationsSpace.textContent += currentSpace.textContent;
        let operation = operationsSpace.textContent;
        operation = operation.replaceAll(/[^\w0-9x/_+-.]/g, '');
        operationsSpace.textContent += " =";
        evaluate(operation);
    }else{
        alert("invalid operation");
    }
}
// method that inputs the numbers into the calculator
const inputValue = (e) => {
    if(currentSpace.textContent == "MATH ERROR"){
        return;
    }
    let value = e.target.textContent;
    operationsSpace.classList.remove('change');
    if(operationsSpace.classList.contains("erase")){
        operationsSpace.textContent = '';
        operationsSpace.classList.remove("erase");
    }
    if(currentSpace.classList.contains("erase")){
        currentSpace.textContent = value;
        currentSpace.classList.remove("erase");
    }
    else if(currentSpace.textContent == "0") currentSpace.textContent = value;
    else currentSpace.textContent += value;
}
// method that inputs the operators into the calculator
const inputOperator = (e) => {
    if(currentSpace.textContent == "MATH ERROR"){
        return;
    }
    let lastLetter = operationsSpace.textContent.charAt(operationsSpace.textContent.length-2);
    console.log(operationsSpace.textContent);
    console.log(lastLetter);
    if("-+/x".includes(lastLetter) && lastLetter != '' && operationsSpace.classList.contains("change")){
        operationsSpace.textContent = operationsSpace.textContent.slice(0,operationsSpace.textContent.length -2);
        operationsSpace.textContent += e.target.textContent + " ";
        return;
    }
    let operation = String(operationsSpace.textContent);
    if((operation.includes("+") || operation.includes("-")
        || operation.includes("x") || operation.includes("/")) && !operation.includes('=')){
            operate(operation);
    }
    if(operationsSpace.classList.contains("erase")){
        operationsSpace.textContent = '';
        operationsSpace.classList.remove("erase");
    }
    let operator = e.target.textContent;
    operationsSpace.textContent += currentSpace.textContent + " " + operator + " ";
    operationsSpace.classList.add('change');
    currentSpace.classList.add('erase');
}
//method that deletes numbers of the calculator
const deleteChar = (e) => {
    if(currentSpace.textContent == "MATH ERROR"){
        return;
    }
    let currentText = currentSpace.textContent;
    currentSpace.textContent = currentText.slice(0,currentText.length-1);
    if(currentSpace.textContent == '') currentSpace.textContent = '0';
}
//method that clears the screen of the calculator
const clearScreen = (e) => {
    currentSpace.textContent = '0';
    operationsSpace.textContent = '';
    operationsSpace.classList.remove("erase");
    currentSpace.classList.remove("erase");
    operationsSpace.classList.remove('change');
}

const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    if(button.classList.contains("number")){
        button.addEventListener("click",inputValue);
    }
    if(button.classList.contains("operator")){
        button.addEventListener("click",inputOperator);
    }
    if(button.classList.contains("clear")){
        button.addEventListener("click",clearScreen);
    }
    if(button.classList.contains("delete")){
        button.addEventListener("click",deleteChar);
    }
    if(button.classList.contains("equal")){
        button.addEventListener("click", operate);
    }
});

const sum = (a, b) =>{
    return a + b;
}
const sub = (a, b) =>{
    return a - b;
}
const mul = (a, b) =>{
    return a * b;
}
const div = (a, b) =>{
    if(b == 0) return "MATH ERROR";
    return a / b;
}