//html elements
var word1 = document.getElementById('word1');   //answer
var word2 = document.getElementById('word2');   //button
var check = document.getElementById('check');   // word1 === word2?
var progress = document.getElementById('progress');  //progress check
var time = document.getElementById('time');


//gmae objects
var game = {
    'btns': [],
    'maxPlay': 3,
    'current': 0
};

game.startTime = Date.now();

game.words = 'apple,book,condition,monitor,workplace,button,shoes,baby,damagucci,legend,girlfriend'.split(',');

game.choose = function() {
    var idx = Math.floor(Math.random() * this.words.length);
    this.answer = this.words[idx];
    this.letters = this.answer.split('');
    word1.innerHTML = this.answer;
};
game.addButtons = function() {
    for (var i = 0; i < this.letters.length; i++) {
        var btn = document.createElement('button');
        btn.innerHTML = this.answer[i];
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

game.updateDisplay = function() {
    var gameStr = this.letters.join('');
    if (this.checkGood()) {
        check.innerHTML = '일치합니다.';
    } else {
        check.innerHTML = '일치하지 않습니다.';
    }
};

game.init = function() {
    this.choose();
    this.addButtons();
    this.updateDisplay();
};
game.init();

game.copyBtnText = function () {
    for (var i = 0; i < this.letters.length; i++){
        this.btns[i].innerHTML = this.letters[i];
    }
};

//event handler for swap button
game.swap = function () {
    var temp = [];
    //copy and swap
    while (this.letters.length != 0){
        let x = this.letters.pop();
        temp.push(x);
    }
    this.letters = temp;
    this.copyBtnText();
    this.updateDisplay();
};
game.rshift = function () {
    const s = this.letters.pop();
    this.letters.unshift(s);
    this.copyBtnText();
    this.updateDisplay();
};
game.lshift = function () {
    const s = this.letters.shift();
    this.letters.push(s);
    this.copyBtnText();
    this.updateDisplay();
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

    if (game.current == game.maxPlay) {
        var sec = (Date.now() - game.startTime) /1000;
        alert("Good! Your Record: " + sec + " sec");
        clearInterval(x);
        check.innerHTML = "Thanks for playing";
    }
};

//event handler for swap button
var swap = function () {
    game.swap();
    game.progress();
};

var lshift = function () {
    game.lshift();
    game.progress();
};

var rshift = function () {
    game.rshift();
    game.progress();
};

//shuffle
game.shuffle = function() {
    var toggle = Math.floor(Math.random() * 2) === 0;

    if(toggle) {
        this.swap();
    }

    var rmax = Math.max(game.answer.length - 2, 1);
    var n = Math.floor(Math.random() * rmax) + 1;
    for (var i = 0; i < n; i++) {
        this.rshift();
    }
};
game.shuffle();

var updateTime = function() {
    var now = Date.now() - game.startTime;
    time.innerHTML = (now / 1000) + " s";
}

var x = setInterval(updateTime, 50);