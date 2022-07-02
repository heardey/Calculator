   function getKeyPressed (x) {
    var existingValue = document.getElementById("answer").innerHTML 
    document.getElementById("answer").innerHTML = existingValue + x
    validation ();
    dot()
    if ((x == '+') ||(x == '-') || (x == '*')  || (x == '/')) {
        document.getElementById('dotsign').disabled = false;
    }  

    if (document.getElementById('answer').innerHTML == '.') {
        return document.getElementById('answer').innerHTML = '0.';
    }

}

function getHistory ()  {
   document.getElementById("history").innerHTML =  "the calculated value is " + document.getElementById("answer").innerHTML

}

function calculation() {
    var valueToCalculate = document.getElementById("answer").innerHTML
    var solution = eval(valueToCalculate)
    getHistory();
    document.getElementById("answer").innerHTML = solution
}

function clearScreen() {
    var deleteLastNumber = document.getElementById("answer").innerHTML;
   // document.getElementById("answer").innerHTML =  deleteLastNumber.substr(0, deleteLastNumber.length - 1)

   document.getElementById("answer").innerHTML =  deleteLastNumber.slice(0, -1)
   validation()
    
} 

function clearEntireScreen() {
    document.getElementById('answer').innerHTML = "";
    document.getElementById('history').innerHTML = "";
}

function squareRoot() {
    var calculateSquare = document.getElementById("answer").innerHTML;
    getHistory();
    document.getElementById("answer").innerHTML =  Math.sqrt(calculateSquare);

}

function percentageCalculation() {
   var percent = document.getElementById('answer').innerHTML;
   percent = eval(percent *0.01);
   getHistory()
   document.getElementById('answer').innerHTML = percent;

}

function validation() {
    var existingValue = document.getElementById('answer').innerHTML
    var lastCharacter = existingValue.charAt(existingValue.length-1)
    if ((lastCharacter == '+') ||(lastCharacter == '-') || (lastCharacter == '*')  || (lastCharacter == '/')){
        document.getElementById('multiply').disabled = true
        document.getElementById('add').disabled = true
        document.getElementById('subtract').disabled = true
        document.getElementById('divide').disabled = true
    }
    else{ 
        document.getElementById('multiply').disabled = false
        document.getElementById('add').disabled = false 
        document.getElementById('subtract').disabled = false 
        document.getElementById('divide').disabled = false
    }
}

function dot() {
    var existingValue = document.getElementById('answer').innerHTML
    var lastCharacter = existingValue.charAt(existingValue.length-1)
    if (lastCharacter == '.') {
        document.getElementById('dotsign').disabled = true
    }
    else if  ((lastCharacter == '+') ||(lastCharacter == '-') || (lastCharacter == '*')  || (lastCharacter == '/')) {
    document.getElementById('dotsign').disabled = false;
    }


} 