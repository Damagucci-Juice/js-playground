//html elements
var word1 = document.getElementById('word1');   //answer
var word2 = document.getElementById('word2');   //buttons
var check = document.getElementById('check');   // word1 === word2?
var progress = document.getElementById('progress'); //progress check
var time = document.getElementById('time'); //time
//game objects
var game = {
    'btns': [],
    'maxPlay': 3,
    'current': 0
};
game.startTime = Date.now();

game.words = 'apple,linux,javascript,tutorial,damagucci,baby,girlfriend,legend'.split(',');
// choose 1 word from words
game.choose = function () {
    var idx = Math.floor(Math.random() * this.words.length);
    this.answer = this.words[idx];
    this.letters = this.answer.split('');
    word1.innerHTML = this.answer;
};

game.addButtons = function () {
    this.btns = [];
    for (var i = 0; i < this.letters.length; i++) {
        var btn = document.createElement('button');
        btn.innerHTML = this.answer[i];         // string 이여도 배열의 원소를 읽어 오는 것처럼 각 글자를 읽어 올 수 있음.
        word2.appendChild(btn);
        this.btns.push(btn);
    }
};

game.removeButtons = function() {
    for (var i = 0; i < this.btns.length; i++) {
        word2.removeChild(this.btns[i]);
    }
    this.btns = [];
};
game.checkGood = function() {
        return this.answer === this.letters.join('');
};

game.updateDisplay = function () {
    if (this.checkGood()) {
        check.innerHTML = '일치합니다.';
    } else {
        check.innerHTML = '일치하지 않습니다.';
    }
};

game.init = function () {
    this.choose();
    this.addButtons();
    this.updateDisplay();
}
game.init();

game.copyBtnText = function () {
    for (var i = 0; i < this.letters.length; i++) {
        this.btns[i].innerHTML = this.letters[i];
    }
};
game.swap = function () {
    var temp = [];
    //copy and swap
    while (game.letters.length != 0) {
        var s = game.letters.pop();
        temp.push(s);
    }
    game.letters = temp;
    game.copyBtnText();
    game.updateDisplay();
};

game.rshift = function() {
    const s = game.letters.pop();
    game.letters.unshift(s);
    game.copyBtnText();
    game.updateDisplay();
};

game.lshift = function() {
        const s = game.letters.shift();
        game.letters.push(s);
        game.copyBtnText();
        game.updateDisplay();
};

game.progress = function() {
    if (game.checkGood()) {
        game.current++;
        game.removeButtons();
        game.init();
        game.shuffle();
        var str = "";
        for (var i = 0; i < game.current; i++) {
            str += "O";
        }
        progress.innerHTML = str;
    }

    if (game.current == game.maxPlay){
        var sec = (Date.now() - game.startTime) /1000;
        alert("Good! your record: " + sec + " sec");
        clearInterval(x);
    }
};
//event handler for swap button
var swap = function () {
    game.swap();
    game.progress();
};

var rshift = function () {
    game.rshift();
    game.progress();
};

var lshift = function () {
    game.lshift();
    game.progress();
};


//shuffle
game.shuffle = function () {
    var toggle = Math.floor(Math.random() * 2) === 0;
    if (toggle) {
        game.swap();
    }

    var n = Math.floor(Math.random() * (game.answer.length - 1));
    for (var i = 0; i < n; i++) {
        game.rshift();
    }
};
game.shuffle();

var updateTime = function() {
    var now = Date.now() - game.startTime;
    time.innerHTML = (now / 1000) + " s"; 
}

var x = setInterval(updateTime, 50);