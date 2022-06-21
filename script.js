function operate(operation, num1, num2)
{
    switch(operation)
    {
        case "\+": return num1+num2;
        case "-": return num1 - num2;
        case "\*": return num1 * num2;
        case "\/": return num1/num2;
    }
}

var displayBox = document.querySelector(".displayBox");

var displayContent = "0";
function updateDisplayBox(s)
{
    if(displayContent.length < 9)
    {
        displayContent+=s;
        displayBox.textContent = displayContent; 
    }
}

const zeroBtn = document.querySelector("#b0");
const oneBtn = document.querySelector("#b1");
const twoBtn = document.querySelector("#b2");
const threeBtn = document.querySelector("#b3");
const fourBtn = document.querySelector("#b4");
const fiveBtn = document.querySelector("#b5");
const sixBtn = document.querySelector("#b6");
const sevenBtn = document.querySelector("#b7");
const eightBtn = document.querySelector("#b8");
const nineBtn = document.querySelector("#b9");

const clearBtn = document.querySelector("#bC");
const equalsBtn = document.querySelector("#bEQ");

const addBtn = document.querySelector("#addButton");
const subBtn = document.querySelector("#subtractButton");
const multBtn = document.querySelector("#multiplyButton");
const divBtn = document.querySelector("#divideButton");


var numButtons = document.querySelectorAll('.numbutton');

numButtons.forEach((button) =>
{
    button.addEventListener('click', function(e){updateDisplayBox(button.textContent)})
})

var num1 = 0; 
var num2 = 0;
var operator = "unassigned";

function clearcalc(x)
{
    switch(x)
    {
        case "num1": num1 = "unassigned"; 
        case "num2": num2 = "unassigned";
        case "num3": operator = "unassigned";
    }
}


var opButtons = document.querySelectorAll('.opbutton');

opButtons.forEach((button) =>
{
    button.addEventListener('click', function(e)
    {
        if(num1 == 0)
        {
            num1 = parseInt(displayContent);
            displayContent = "";
            updateDisplayBox(displayContent);
            operator = button.textContent;
            console.log(num1 + " " + num2 + " " + operator)
        }
        else if(num2 == 0)
        {
            num2 = parseInt(displayContent);
            console.log(num1 + " " + num2 + " " + operator)
            console.log(operate(operator, num1, num2))
        }
    })
})