var buttonBegin = document.querySelector('#begin');//grabs hold for buttonBegin
var Audio;
var music = new Audio("../assets/cut.wav");

var startPlay = function() {
    music.play();
};

buttonBegin.addEventListener('click', startPlay);