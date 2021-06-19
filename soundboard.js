var but1 = document.getElementById("b1");
var but2 = document.getElementById("b2");
var but3 = document.getElementById("b3");

var sound1 = new Audio('bicycle_bell.mp3');
var sound2 = new Audio('baseball_hit_orbitz.mp3');
var sound3 = new Audio('arrow_x.mp3');

but1.onmouseenter = function() {
    sound1.play();
}

but1.onclick = function() {
    sound1.play();
}

but2.onmouseenter = function() {
    sound2.play();
}

but2.onclick = function() {
    sound2.play();
}

but3.onmouseenter = function() {
    sound3.play();
}

but3.onclick = function() {
    sound3.play();
}