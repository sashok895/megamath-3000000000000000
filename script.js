let ok = document.getElementById("ok");
let addition = document.getElementById("addition");
let subtraction = document.getElementById("subtraction")
let multiplying = document.getElementById("multiplying")
let dividing = document.getElementById("dividing")
let taskTitle = document.getElementById("taskTitle")
let timer, time, sign, score;
let highScore = 0
let timeTitle = document.getElementsByTagName("h3")[0]
let input = document.getElementById("input")
let correctAnswer;
let scoreboard = document.getElementById("scoreboard")
let hs = document.getElementById("hs")

function getExample() {
    let first = Math.floor(Math.random() * 10)
    let second = Math.floor(Math.random() * 10)
    if (sign == "-") {
        while (second > first) {
            first = Math.floor(Math.random() * 10)
            second = Math.floor(Math.random() * 10)

        }
    }
    if(sign=="/"){
        while(first%second!=0){
            first = Math.floor(Math.random() * 100)
            second = Math.floor(Math.random() * 100)
        }
    }
    
    let example = first + sign + second;
    taskTitle.innerHTML = "exercise: " + example
    // eval считает пример
    correctAnswer = eval(example)
    input.value = ""
    input.focus()
    // console.log(correctAnswer)
}

ok.onclick = function (event) {
    // чтобы те обновлялась страница
    event.preventDefault();
    // console.log(input.value);
    if (input.value != "") {
        if (input.value == correctAnswer) {
            console.log("right");
            score = score + 1

            scoreboard.innerHTML = "score: " + score
            if(score>highScore) {
                highScore=score
                hs.innerHTML="high score: " + highScore
                
            }
        } else {
            console.log("incorrect");
        }
        getExample();
    }

}
addition.onclick = function () {
   
    clearInterval(timer)
    time = 60;
    score = 0
    sign = "+"
    // taskTitle.innerHTML = "exercise: 5+5"
    getExample()
    startTimer()

}
subtraction.onclick = function () {
    clearInterval(timer)
    time = 60
    score = 0
    sign = "-"
    getExample()
    startTimer()
    

}
multiplying.onclick = function () {
    clearInterval(timer)
    time = 60
    score = 0
    sign = "*"
    getExample()
    startTimer()
}
dividing.onclick = function () {
    time = 60
    sign = '/'
    score = 0
    clearInterval(timer)
    getExample()
    startTimer()
}
function startTimer() {
    ok.disabled = false
    scoreboard.innerHTML = 'score: 0'
    timer = setInterval(function () {
        // console.log(9)
        time = time - 1
        timeTitle.innerHTML = time;
        if (time == 0) {
            clearInterval(timer)
            ok.disabled = true
        }
    }, 1000)
}