input = {};
input.num1 = function(){
    let num1 = Number(prompt("처음 숫자를 입력하세요."));
    return num1;
};
input.op = function(){
    let op = prompt("연산자를 입력하세요.")
    return op;
};
input.num2 = function(){
    let num2 = Number(prompt("두번째 숫자를 입력하세요."));
    return num2;
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
    const num1 = input.num1();
    const op = input.op();
    const num2 = input.num2();
    const results = calculate(num1, op, num2);
    print(num1, op, num2, results);
};

main();


