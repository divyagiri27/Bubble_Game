//Bubble generating code
function makeBubble(){

let clutter = "";
for (let i = 1; i <= 140; i++) {
    let rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
    
}

document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();

//Timer Code
let timer = 10;
document.querySelector("#timerval").textContent = timer;
function runTimer(){
    let timerint = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint)
            let pbtm = document.querySelector("#pbtm");
            pbtm.innerHTML = `<h1>Game Over</h1><br><h2>Your Score is ${score}</h2> `;
            pbtm.style.color = `#012641`
            
        }
    },1000);
}
runTimer();

//Hit value Code 35:30
let hitrn = 0;
function getNewHit(){
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}
getNewHit();

//Score increase code
let score = 0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


document.querySelector("#pbtm").addEventListener('click',function(dets){
    let clicknum = Number(dets.target.textContent);
    if(clicknum === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }

})