let display = document.getElementById("display");

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

let firstNumber = "";
let secondNumber = "";
let operation = "";

numbers.forEach(function(button){
    button.addEventListener("click",function(){
        display.value += button.innerText;
    });
});


operators.forEach(function(button){
    button.addEventListener("click", function(){
        firstNumber = Number(display.value);

        operation = button.innerText;
        display.value = "";
    });
});

document.getElementById("equals").addEventListener("click", function(){
    secondNumber = Number(display.value);

    let result;

    if(operation === "+"){
        result = firstNumber+ secondNumber;
    }
    if(operation === "-"){
        result = firstNumber- secondNumber;
    }
    if(operation === "*"){
        result = firstNumber* secondNumber;
    }
    if(operation === "/"){
        result = firstNumber/ secondNumber;
    }
    display.value = result;
});

document.getElementById("clear").addEventListener("click", function(){
    display.value = "";
    firstNumber = "";
    secondNumber = "";
    operation = "";
});