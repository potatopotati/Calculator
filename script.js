let number1=""
let operation=""
let number2=""
let oldoperator=""
const display = document.querySelector('.display p');


document.querySelectorAll('.btn').forEach((button)=>{
    button.addEventListener('click',()=>{
        if(button.textContent=="AC"){
            updateDisplay(0);
            number1="";
            operation="";
            number2="";
        }
        else if(button.textContent=="%"){
            if(operation == "")
            {
                number1=percent(number1);
                updateDisplay(number1)
            }
            else
            {
                number2=percent(number2);
                updateDisplay(number2)
            }
        }
        else{
            if(operation == "")
            {
                number1=negate(number1);
                updateDisplay(number1)
            }
            else
            {
                number2=negate(number2);
                updateDisplay(number2)
            }
        }
    })
})

document.querySelectorAll('.num').forEach((number)=>{
    number.addEventListener('click',()=>{
        if(operation == "")
        {
            number1=number1+number.textContent
            updateDisplay(number1);
            console.log("number1="+number1)
        }
        else
        {
            number2=number2+number.textContent
            updateDisplay(number2)
            console.log("number2="+number2)
        }
    })
})

document.querySelectorAll('.operator').forEach((operator)=>{
    operator.addEventListener('click',()=>{
        operation=operator.textContent
        console.log(operation)
        if(operation == "="){
            cal(number1,number2,oldoperator);
        }
        oldoperator=operation;
    })
})

function cal(num1,num2,op){
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    console.log("cal")
    switch(op){
        case "+": 
            console.log("addition")
            number1=add(num1,num2);
            number2="";
            operation="";
            updateDisplay(number1);
            break;
        case "-":
            console.log("subtract")
            number1=subtract(num1,num2);
            number2="";
            operation="";
            updateDisplay(number1);
            break;
        case "*":
            console.log("multiply")
            number1=multiply(num1,num2);
            number2="";
            operation="";
            updateDisplay(number1);
            break;
        case "/":
            console.log("divide")
            number1=divide(num1,num2);
            number2="";
            operation="";
            updateDisplay(number1);
            break; 
        default:
            updateDisplay(number1);
    }
}

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(a==0) return 0;
    if(b==0) return NaN;
    return a/b;
}

function negate(a){
    return -(a);
}

function percent(a){
    return a/100;
}

function updateDisplay(num){
    display.textContent=num;
}