// const orange: "hsl(25, 97%, 53%)";
// const grey: "hsl(216, 12%, 54%)";

let rate = 0
document.getElementById("button1").addEventListener('click', function() {
    document.getElementById("button1").style.backgroundColor = "hsl(25, 97%, 53%)"
    document.getElementById("button2").style.backgroundColor = "hsl(216, 12%, 54%)"
    document.getElementById("button3").style.backgroundColor = "hsl(216, 12%, 54%)"
    document.getElementById("button4").style.backgroundColor = "hsl(216, 12%, 54%)"
    document.getElementById("button5").style.backgroundColor = "hsl(216, 12%, 54%)"
    rate = 1
    localStorage.setItem("rate", rate)
})
document.getElementById("button2").addEventListener('click', function() {
    document.getElementById("button2").style.backgroundColor = "hsl(25, 97%, 53%)"
    document.getElementById("button1").style.backgroundColor = "hsl(216, 12%, 54%)"
    document.getElementById("button3").style.backgroundColor = "hsl(216, 12%, 54%)"
    document.getElementById("button4").style.backgroundColor = "hsl(216, 12%, 54%)"
    document.getElementById("button5").style.backgroundColor = "hsl(216, 12%, 54%)"
    rate = 2
    localStorage.setItem("rate", rate)
})
document.getElementById("button3").addEventListener('click', function() {
    document.getElementById("button3").style.backgroundColor = "hsl(25, 97%, 53%)"
    document.getElementById("button1").style.backgroundColor = "hsl(216, 12%, 54%)"
    document.getElementById("button2").style.backgroundColor = "hsl(216, 12%, 54%)"
    document.getElementById("button4").style.backgroundColor = "hsl(216, 12%, 54%)"
    document.getElementById("button5").style.backgroundColor = "hsl(216, 12%, 54%)"
    rate = 3
    localStorage.setItem("rate", rate)
})
document.getElementById("button4").addEventListener('click', function() {
    document.getElementById("button4").style.backgroundColor = "hsl(25, 97%, 53%)"
    document.getElementById("button1").style.backgroundColor = "hsl(216, 12%, 54%)"
    document.getElementById("button2").style.backgroundColor = "hsl(216, 12%, 54%)"
    document.getElementById("button3").style.backgroundColor = "hsl(216, 12%, 54%)"
    document.getElementById("button5").style.backgroundColor = "hsl(216, 12%, 54%)"
    rate = 4
    localStorage.setItem("rate", rate)
})
document.getElementById("button5").addEventListener('click', function() {
    document.getElementById("button5").style.backgroundColor = "hsl(25, 97%, 53%)"
    document.getElementById("button1").style.backgroundColor = "hsl(216, 12%, 54%)"
    document.getElementById("button2").style.backgroundColor = "hsl(216, 12%, 54%)"
    document.getElementById("button3").style.backgroundColor = "hsl(216, 12%, 54%)"
    document.getElementById("button4").style.backgroundColor = "hsl(216, 12%, 54%)"
    rate = 5
    localStorage.setItem("rate", rate)
})

document.getElementById("submit_button").addEventListener('click', function() {
    window.location.href = "results.html"
})