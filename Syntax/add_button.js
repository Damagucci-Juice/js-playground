const el = document.getElementById('test');
const menu = document.createElement('ul');
menu.id = 'menupan';

const item1 = document.createElement('li');
item1.id = 'menu1';
item1.innerHTML = "설렁탕";

const item2 = document.createElement('li');
item2.id = 'menu2';
item2.innerHTML = "된장찌개";

menu.appendChild(item1);
menu.appendChild(item2);

el.appendChild(menu);

const read = function() {
    const input = document.getElementById('input1');
    console.log(input.value);
};
function send() {
    const input = document.getElementById('input2');
    alert(input.value);
};
