var hour = document.getElementById('hour')
var min = document.getElementById('min')
var sec = document.getElementById('sec')

var startBtn = document.getElementById('start-btn')
var resetBtn = document.getElementById('reset-btn')

var timer = null
var h = 0;
var m = 0;
var s = 0;

function updateTime() {
    if (s < 10){
        sec.innerText = "0" + s;
    } 
    else {
        sec.innerText = s;
    }

    if (m < 10){
        min.innerText = "0" + m; } 
    else {
        min.innerText = m;
    }

    if (h < 10){
        hour.innerText = "0" + h;
    } 
    else {
        hour.innerText = h;
    }
}


function setTimer (){
    startBtn.innerText = "Pause";
    startBtn.onclick = pauseTime;

    timer = setInterval(function () {
        if (s >= 59){
            s = -1;
            if (m >= 59){
                m = -1;
                h++
            }
            m++
        }
        s++
        updateTime();
    }, 1000)
}

function pauseTime(){
    startBtn.innerText = "Start";
    startBtn.onclick = setTimer;
    clearInterval(timer);
}

function resetTimer (){
    clearInterval(timer);
    startBtn.innerHTML = "Start";
     h = 0;
     m = 0;
     s = 0;
     updateTime ()

}







// =============

// var body = document.querySelector('body')
// var parentDiv = document.createElement('div')
// var para1 = document.createElement('p')
// var para2 = document.createElement('p')
// var textNode = document.createTextNode("This para 1")
// var textNode2 = document.createTextNode("This para 2")

// para1.appendChild(textNode)
// para2.appendChild(textNode2)
// parentDiv.appendChild(para1, para2)

