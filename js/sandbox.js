//GLOBAL DOM & VARIABLES
let game = document.querySelector('#game');
let movementDisplay = document.querySelector('#movement');
let enemy;
let player;
let ctx = game.getContext('2d');
ctx.fillStyle = "white";
ctx.strokeStyle = "red";
ctx.lineWidth = 5;

//SETUP FOR CANVAS RENDERING
game.setAttribute("height", getComputedStyle(game)["height"]);
game.setAttribute("width", getComputedStyle(game)["width"]);

//ENTITIES
class Crawler {
    constructor(x, y, imgFile) {
        this.x = x;
        this.y = y;
        this.imgFile = './assets/taxi.png';
        this.alive = true;

        this.render = function() {
            ctx.fillStyle = this.imgFile;
            ctx.fillRect(this.x, this.y, this.with, this.height);
        };
    }
}

// let rambo = new Crawler(100, 100, './assets/taxi.png');
// console.log(rambo);
// rambo.render();

//INITIAL SCREEN
// window.addEventListener('DOMContentLoaded', function(e) {
//     taxi = new Crawler(20, 20, './assets/taxi.png');
//     player = new Crawler(60, 60, './assets/spidey-SpeechRecognitionResult.png');

//     const runGame = setInterval(gameloop, 120);
// })

// document.addEventListener('keydown', movementHandler);


//GAME HELPER FUNCTIONS
//GUI
let taxi = new Crawler(20, 40, './assets/taxi.png');
taxi.render();


//GAME PROCESSES
function gameLoop() {
    ctx.clearRect(0, 0, game.width, game.height);
    movementDisplay.textContent = 'X:${player.x}\nY:${player.y}';
}