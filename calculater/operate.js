input = {count:2};
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
calculator = {};
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
output = {};
output.out = document.getElementById('output'); 
output.print = function(value) {
    this.out.innerHTML = "Anwser is " + value + ".";
};
function main() {
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

main();


