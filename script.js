function operate(operation, num1, num2)
{
    n1 = parseFloat(num1);
    n2 = parseFloat(num2);
    switch(operation)
    {
        case "\+": return n1 + n2;
        case "-": return n1 - n2;
        case "\*": return n1 * n2;
        case "\/": return n1 / n2;
    }
}



var displayBox = document.querySelector(".displayBox");

var displayContent = "0";
function updateDisplayBox(s)
{
    if(displayContent.length < 9)
    {
        if(displayContent == "0"){displayContent = "";}
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
var miniBox = document.querySelector('.miniBox')

var numButtons = document.querySelectorAll('.numbutton');

numButtons.forEach((button) =>
{
    button.addEventListener('click', function(e){updateDisplayBox(button.textContent)})
})

var num1 = "null"; 
var num2 = "null";
var operator = "null";


clearBtn.addEventListener('click', function(e)
{
    clearcalc();
})

function clearcalc()
{
    num1 = "null";
    num2 = "null";
    operator = "null";
    displayBox.textContent = "0";
    displayContent = "";
}


var opButtons = document.querySelectorAll('.opbutton');

opButtons.forEach((button) =>
{
    button.addEventListener('click', function(e)
    {
        if(button.textContent != "=")
        {
            if(num1 == "null")
            {
                operator = button.textContent;
                num1 = displayContent;
                displayContent = "0";
                
                console.log(num1+" "+operator+" "+num2)
            }
            else if(num2 == "null")
            {
  
                num2 = displayContent;
                console.log("(1)" + num1+" "+operator+" "+num2);
                miniBox.textContent = num1+" "+operator+" "+num2;
                num1 = operate(operator, num1, num2);
                displayBox.textContent = num1;
                displayContent= "0";
                num2 = "null";
                operator = button.textContent;
                console.log("(1)" + num1+" "+operator+" "+num2)
            }
        }
        else
        {
            if((operator != "null"))
            {
                num2 = displayContent;
                console.log("(2)" + num1+" "+operator+" "+num2);
                miniBox.textContent = num1+" "+operator+" "+num2;
                num1 = operate(operator, num1, num2);
                displayBox.textContent = num1;
                displayContent = num1;
                num1 = "null";
                num2 = "null";
                console.log("(2)" + num1+" "+operator+" "+num2);
            }
        }

    })
})