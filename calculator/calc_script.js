//CALCULATOR SCRIPT

//STEP 1

window.addEventListener('load', init);

//STEPS 2-8

function init() {
    var buttonOne = document.getElementById("one");
    this.addEventListener("click", enter);
    var buttonTwo = document.getElementById("two");
    this.addEventListener("click", enter);
    var buttonThree = document.getElementById("three");
    this.addEventListener("click", enter);
    var buttonFour = document.getElementById("four");
    this.addEventListener("click", enter);
    var buttonFive = document.getElementById("five");
    this.addEventListener("click", enter);
    var buttonSix = document.getElementById("six");
    this.addEventListener("click", enter);
    var buttonSeven = document.getElementById("seven");
    this.addEventListener("click", enter);
    var buttonEight = document.getElementById("eight");
    this.addEventListener("click", enter);
    var buttonNine = document.getElementById("nine");
    this.addEventListener("click", enter);
    var buttonZero = document.getElementById("zero");
    this.addEventListener("click", enter);
    var buttonPlus = document.getElementById("add");
    this.addEventListener("click", enter);
    var buttonMinus = document.getElementById("subtract");
    this.addEventListener("click", enter);
    var buttonMultiply = document.getElementById("multiply");
    this.addEventListener("click", enter);
    var buttonDevide = document.getElementById("devide");
    this.addEventListener("click", enter);
    var buttonPeriod = document.getElementById("period");
    this.addEventListener("click", enter);
    var buttonEqual = document.getElementById("equal");
    this.addEventListener("click", calculate);

}

var calculate = function () {
    var calculateTotal = window.eval(document.getElementById("result").value);
    document.getElementById("result").value = calculateTotal;
};


function enter(val) {
    var getRes = document.getElementById("result");
    var getVal = val.target.value;
    getRes.value += getVal;
};

//SIMPLIFY
//????????
