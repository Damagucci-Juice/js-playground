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
};
function calculate(num1, op, num2) {
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
        alert("올바른 연산자를 입력하세요.");
    }
    return results;
};
function print(num1, op, num2, results) {
    let str = "";
    str += num1;
    str += " ";
    str += op;
    str += " ";
    str += num2;
    str += " = ";
    str += results;
    str += "<br>";

    const out = document.getElementById('output');
    out.innerHTML = str;
};
function main() {
    const eqation = input();
    const [num1, op, num2] = isNumber(eqation);
    console.log(num1, op, num2);
    const results = calculate(num1, op, num2);
    print(num1, op, num2, results);
};



