var operator = prompt("Which Operator do you want to perform + or - or * or /")
var num1 = parseInt(prompt("Input First Number"))
var num2 = parseInt(prompt("Input Second Number"))

if (operator == "+")
{
    alert("The sum of the two numbers is " +(num1 + num2))
}

else if(operator == "-")
{
    alert("The Difference of the two numbers is " +(num1 - num2))
}


else if(operator == "*")
{
    alert("The Product of the two numbers is " +(num1 * num2))
}


else if(operator == "/")
{
    alert("The Quotient of the two numbers is " +(num1 / num2))
}

