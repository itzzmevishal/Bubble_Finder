let timer = 60;
let score = 0;
let ranHit = 0;  //ranHit = random hits
function makeBubble() {
    let bubble = "";
    for (let i = 1; i <= 161; i++) {
        let num = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${num}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = bubble;
}
function runTime() {
    let timeerintervel = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timevalue").textContent = timer;
        }
        else {
            clearInterval(timeerintervel);
            document.querySelector("#pbtm").innerHTML = ` <h1>GAME OVER ❤️</h1>`;
        }

    }, 1000);
}

function getNewHit() {
    ranHit = Math.floor(Math.random() * 10);
    document.querySelector("#hitvalue").textContent = ranHit;
}

function increaseScore() {
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click", function (bubbleNum) {

    let clickedNum = Number(bubbleNum.target.textContent)
    if (clickedNum === ranHit) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
});

// document.querySelector("#reset").addEventListener("click", function () {
//      timer = 60;
//      score = 0;
//      ranHit = 0;
//     });
    
document.querySelector("#reset").addEventListener("click", function () {
        location.reload();
    });



makeBubble();
runTime();
getNewHit();
