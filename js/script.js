
var  buttonPaper, buttonRock, buttonScisors,


buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScisors = document.getElementById('button-scisors');


buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScisors.addEventListener('click', function(){ buttonClicked('nożyce'); });
