var str = document.getElementById('word1').innerHTML;
var word2 = document.getElementById('word2');

var game = {};
game.word = str.split('');
game.btns = [];

for (var i = 0; i < str.length; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = str[i];         // string 이여도 배열의 원소 읽어 오는 것처럼 각 글자를 읽어 올 수 있음.
    word2.appendChild(btn);
    game.btns.push(btn);
}

game.copyBtnText = function () {
    for (var i = 0; i < this.word.length; i++) {
        this.btns[i].innerHTML = this.word[i];
    }
};

var swap = function (event) {

};
var rshift = function (event) {
    const s = game.word.pop();
    game.word.unshift(s);
    game.copyBtnText();
};
var lshift = function (event) {
    const s = game.word.shift();
    game.word.push(s);
    game.copyBtnText();
};
