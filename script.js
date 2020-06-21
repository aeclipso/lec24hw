let red = document.getElementById("red");
let green = document.getElementById("green");
let blue = document.getElementById("blue");
let bg = document.getElementById("bg");
let redval;
let greenval;
let blueval;

red.addEventListener("change", function (){
    redval = this.value;
    bg.style.backgroundColor = "rgb(" + redval + "," + greenval + "," + blueval + ")";
});
green.addEventListener("change", function (){
    greenval = this.value;
    bg.style.backgroundColor = "rgb(" + redval + "," + greenval + "," + blueval + ")";
});
blue.addEventListener("change", function (){
    blueval = this.value;
    bg.style.backgroundColor = "rgb(" + redval + "," + greenval + "," + blueval + ")";
});

bg.onclick = function () {
    bg.style.backgroundColor = "rgb(" + redval + "," + greenval + "," + blueval + ")";
}

