//generation numbers

var firstNumber = randomInteger(6, 9);
var answer = randomInteger(11, 14);
var secondNumber = answer - firstNumber;

//get and generation inputs

var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");

var ansInput = document.createElement('input');
ansInput.id = "ans";

//display example

var firstNum = document.getElementById('firstNum');
var secondNum = document.getElementById("secondNum");
var answerInput = document.getElementById("answer");

firstNum.textContent = firstNumber;
secondNum.textContent = secondNumber;

//paint arrows

var arrow1 = document.getElementById("arrow1");
arrow1.style.width = (firstNumber * 39) + "px";
arrow1.style.height = (firstNumber * 12.3) + "px";

var arrow2 = document.getElementById("arrow2");
arrow2.style.width = ((secondNumber * 39)) + "px";
arrow2.style.height = (secondNumber * 12.3) + "px";

//handler function for first number

input1.oninput = function() {
  if (this.value != firstNumber){
    this.style.color = "red";
    firstNum.setAttribute("class", "yellow");
  } else {
    this.style.color = "black";
    firstNum.removeAttribute("class");
    num1.removeAttribute("class");
    num1.setAttribute("class", "hidden");

    var conteiner = document.getElementById("ans1");
    conteiner.setAttribute("class", "firstnum");
    conteiner.textContent = firstNumber;

    var cont = document.getElementById("conteiner2");
    cont.removeAttribute("class");
    cont.setAttribute("class", "conteiner");
  }
}

//handler function for second number

input2.oninput = function() {
  if (this.value != secondNumber){
    this.style.color = "red";
    secondNum.setAttribute("class", "yellow");
  } else {
    this.style.color = "black";
    secondNum.removeAttribute("class");
    num2.setAttribute("class", "hidden");

    var conteiner = document.getElementById("ans2");
    conteiner.removeAttribute("class");
    conteiner.textContent = secondNumber;

    answerInput.appendChild(ansInput);
  }
}

//handler function for answer

ansInput.oninput = function() {
  if (this.value != answer){
    this.style.color = "red";
  } else {
    this.style.color = "black";
    answerInput.textContent = answer;
  }  
}

function randomInteger(min, max) {
  var rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}