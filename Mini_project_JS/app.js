let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector('h2');
let btns = ["one","two","three","four"];

let started = false;
let level = 0;

document.addEventListener('keypress', function () {
    if (started == false) {
        started = true;
        levelUp();
    }
});

//? High Score Logic

let highScoreDisplay = document.querySelector(".highScore");
let highScore = 0;

highScoreDisplay.innerText = `High Score: ${highScore}`;

function gameflash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 350);
}

function userFlash(btn) {
    btn.classList.add('userflash');
    setTimeout(function () {
        btn.classList.remove('userflash');
    }, 350);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);

    gameflash(randBtn);
}

function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp(), 1000);
        }
    }
    else {

        // Update High Score
        if (level > highScore) {
            highScore = level;
            highScoreDisplay.innerText = `High Score: ${highScore}`;
        }

        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press Any Key to Start.`;

        document.querySelector('body').style.backgroundColor = "red";

        setTimeout(function () {
            document.querySelector('body').style.backgroundColor = "white";
        }, 250);

        reset();
    }
}

function btnPress() {
    console.log(this);

    let btn = this;

    userFlash(btn);

    userColor = btn.getAttribute("id");

    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");

for (btn of allBtns) {
    btn.addEventListener('click', btnPress);
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}