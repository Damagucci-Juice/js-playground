function input() {
    const eqation = document.getElementById('eqation');
    const str = eqation.value;
    const arr = str.split(" ");
    return arr;
};
function isNumber(input) {
    const num1 = Number(input[0]); 
    const op = input[1]; 
    const num2 = Number(input[2]);
    return [num1, op, num2];

var input = {count:2};
input.getFirstValue = function() {
    let firstValue = Number(prompt("input first number"));
    return firstValue;
};
input.getSecondValue = function() {
    let secondValue = Number(prompt("input " + this.count + " number"));
    this.count++;
    return secondValue;
};
input.getOperation = function() {
    while(true) {
        var op = prompt("input operation");
        if (op === "+" || op === "-" || op === "*" || op === "/" 
            || op === 'q') {
            break;
        } else {
            alert("input right operation.");
        }
    }
    return op;
};
var calculator = {};
calculator.calculate = function(num1, op, num2) {
    let results = num1;
    switch (op) {
        case "+":
        results += num2;
        break;
        case "-":
        results -= num2;
        break;
        case "*":
        results *= num2;
        break;
        case "/":
        results /= num2;
        break;
        default:
    }
    return results;
};
var output = {};
output.out = document.getElementById('output'); 
output.print = function(value) {
    this.out.innerHTML = "Anwser is " + value + ".";
};
function main() {
    const eqation = input();
    const [num1, op, num2] = isNumber(eqation);
    console.log(num1, op, num2);
    const results = calculate(num1, op, num2);
    print(num1, op, num2, results);

    let result = input.getFirstValue();
    while(true) {
        let op = input.getOperation();
        if (op === 'q') {
            alert("Exit program.");
            break;
        }
        let num = input.getSecondValue();
        result = calculator.calculate(result, op, num);
    }
    output.print(result);
};



