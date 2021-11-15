// DOM & GLOBAL VARIABLES GRABBER
let welcomeModal = document.getElementById('start-modal');
let startButton = document.getElementById('start');
let movementDisplay = document.querySelector('#movement');
let deliveryScore = document.getElementById('high-scores');
let taxikills = document.getElementById('taxi-hits');
let audio = new Audio('assets/spidertheme.mp3');
let runGame;
let parker;
let score = 0;
let crashes = 0;




// RENDER CANVAS
let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');

// SETUP CANVAS RENDERING

canvas.setAttribute('height', getComputedStyle(canvas)['height']);
canvas.setAttribute('width', getComputedStyle(canvas)['width']);

window.addEventListener('DOMContentLoaded', function(e) {

    parker = new Player(peter, 60, 240, 40, 40);

    runGame = setInterval(gameLoop, 1000/60);

});


// EVENT LISTENERS
document.addEventListener('keydown', movementHandler);

// IMAGE ASSET PULLER
        city = new Image();
        city.src = 'assets/background.png';
        class Background {
            constructor(img) {
                this.img = img,
                    this.render = function () {
                        ctx.drawImage(img, 0, 0);
                    }
            }
        }

        

        let customer = new Image(); customer.src = 'assets/moneymen.png';
        custWidth = 20;
        custHeight = 35;
        custX1 = 100;
        custSX1 = 0;
        custY1 = 250;
        custX2 = 300;
        custSX2 = 15;
        custY2 = 280;
        custX3 = 550;
        custSX3 = 30;
        custY3 = 325;

        function drawCustomers() {
            ctx.drawImage(customer, custSX1, 0, 15, 30, custX1, custY1, custWidth, custHeight);
            if (custX1 <= 700 && custX1 > -200 ) {
                custX1 = custX1 - 2;
            } else {
                custX1 = 700;
                custSX1 = (Math.floor(Math.random() * 4)) * 15;
            }

            ctx.drawImage(customer, custSX2, 0, 15, 30, custX2, custY2, custWidth, custHeight);
            if (custX2 <= 700 && custX2 > -200 ) {
                custX2 = custX2 - 2;
            } else {
                custX2 = 700;
                custSX2 = (Math.floor(Math.random() * 4)) * 15;
            }

            ctx.drawImage(customer, custSX3, 0, 15, 30, custX3, custY3, custWidth, custHeight);
            if (custX3 <= 700 && custX3 > -200 ) {
                custX3 = custX3 - 2;
            } else {
                custX3 = 700;
                custSX3 = (Math.floor(Math.random() * 4)) * 15;
            }
        }

        function deliverPizza() {
            if (custX1 <= parker.width &&
                custX1 + custWidth >= parker.x &&
                custY1 + parker.height >= parker.y &&
                custY1 <= parker.y + parker.height) {
                    score++;
                } else if (custX2 <= parker.width &&
                    custX2 + custWidth >= parker.x &&
                    custY2 + parker.height >= parker.y &&
                    custY2 <= parker.y + parker.height) {
                        score++;
                    } else if (custX3 <= parker.width &&
                        custX3 + custWidth >= parker.x &&
                        custY3 + parker.height >= parker.y &&
                        custY3 <= parker.y + parker.height) {
                            score++;
                        }
        }

        function drawScore() {
            deliveryScore.textContent = ("Tips Collected: $" + score);
            if (score >= 100) {
                gameWon();
            }
        }

        function drawCrashes() {
            crashes ++;
            taxikills.textContent = ("Taxis Hit: " + crashes);
            if (crashes >= 300) {
                gameOver();
            }
        }

        function resetTips() {
            score = 0;
        }

        function resetCrashes() {
            crashes = 0;
        }


        peter = new Image();
        peter.src = 'assets/spidey-sprite.png';
        class Player {
            constructor(img, x, y, width, height) {
                this.img = img,
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                this.render = function () {
                        ctx.drawImage(img, this.x, this.y, this.width, this.height);
                    }
            }
        }

        function resetParker () {
            parker.x = 50;
            parker.y = 277;
        }

        let car = new Image(); car.src = "assets/spritesheet.png";
        let carWidth = 60;
        let carHeight = 30;
        let carX1 = 100;
        let carSX1 = 0;
        let carY1 = 320;
        let carX2 = 430;
        let carSX2 = 71;
        let carY2 = 320;
        let carX3 = 650;
        let carSX3 = 142;
        let carY3 = 282;
        let carX4 = 230;
        let carSX4 = 213;
        let carY4 = 282;
        let carX5 = 0;
        let carSX5 = 0;
        let carY5 = 245;
        let carX6 = 430;
        let carSX6 = 71;
        let carY6 = 245;

        function drawCars() {

            let carsSX = [carSX1, carSX2, carSX3, carSX4, carSX5, carSX6];
            let carsX = [carX1, carX2, carX3, carX4, carX5, carX6];
            let carsY = [carY1, carY2, carY3, carY4, carY5, carY6];

            for (i=0; i < carsX.length; i++) {
                ctx.drawImage(car, carsSX[i], 0, 71, 56, carsX[i], carsY[i], carWidth, carHeight);
            }
        }

        function moveCars() {
            
            if (carX1 <= 700 && carX1 > -200) {
                carX1 = carX1 - 2;
                } else {
                    carX1 = 700;
                    carSX1 = (Math.floor(Math.random() * 4) * 71);
                    }
                    
            
            if (carX2 <= 700 && carX2 > -200) {
                carX2 = carX2 - 4;
                } else {
                    carX2 = 700;
                    carSX2 = (Math.floor(Math.random() * 4) * 71);
                    }

            if (carX3 <= 700 && carX3 > -200) {
                carX3 = carX3 - 4;
                } else {
                    carX3 = 700;
                    carSX3 = (Math.floor(Math.random() * 4) * 71);
                    }
            
            if (carX4 <= 700 && carX4 > -200) {
                carX4 = carX4 - 3;
                } else {
                    carX4 = 700;
                    carSX4 = (Math.floor(Math.random() * 4) * 71);
                    }

            if (carX5 <= 700 && carX5 > -200) {
                carX5 = carX5 - 5;
                } else {
                    carX5 = 700;
                    carSX5 = (Math.floor(Math.random() * 4) * 71);
                    }

            if (carX6 <= 700 && carX6 > -200) {
                carX6 = carX6 - 6;
                } else {
                    carX6 = 700;
                    carSX6 = (Math.floor(Math.random() * 4) * 71);
                    }
        }

        function runOver () {
            let carsX = [carX1, carX2, carX3, carX4, carX5, carX6];
            let carsY = [carY1, carY2, carY3, carY4, carY5, carY6];

            for (i = 0; i < carsX.length; i++) {
            if (carsX[i] <= parker.x + parker.width &&
                carsX[i] + carWidth >= parker.x &&
                carsY[i] + carHeight >= parker.y &&
                carsY[i] <= parker.y + parker.height) {
                    parker.x = 50;
                    drawCrashes();
                }
            }
        }

// MOVEMENT HANDLER

function movementHandler (e) {

    switch(e.key) {
        case 'w':
        case 'W':
            parker.y - 10 > 230 ? parker.y -=37 : null;
            console.log(parker.y);
            break;
        case 'a':
        case 'A':
            parker.x - 10 >= 0 ? parker.x -=70 : null;
            break;
        case 'd':
        case 'D':
            parker.x + 10 <= 570 ? parker.x +=70 : null;
            break;
        case 's':
        case 'S':
            parker.y + 10 < 300 ? parker.y +=37 : null;
            break;
        case 'ArrowUp':
            parker.y - 10 > 230 ? parker.y -=37 : null;
            console.log(parker.y);
            break;
        case 'ArrowLeft':
            parker.x - 10 >= 0 ? parker.x -=70 : null;
            break;
        case 'ArrowRight':
            parker.x + 10 <= 570 ? parker.x +=70 : null;
            break;
        case 'ArrowDown':
            parker.y + 10 < 300 ? parker.y +=37 : null;
            break;
    }
};

// PREVENT ARROWS AND SPACE FROM SCROLLING AROUND
window.addEventListener("keydown", function(e) {
    if(['Space', 'ArrowUp', 'ArrowDown', 'ArrowRight', 'ArrowLeft'].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false); 


// ONLOAD FUNCTION

function pageload() {
    
}


// START BUTTON ONCLICK FUNCTION
function start() {
    // Hide modal and start button
    welcomeModal.className = 'modal hidden';
    startButton.className = 'button hidden';
    document.getElementById('GO-modal').className = 'modal hidden';
    document.getElementById('WIN-modal').className = 'modal hidden';
    audio.play();
    audio.loop = true;
    resetParker();
    resetTips();
    resetCrashes();

    // Call gameloop function
    gameLoop();

};

// SIDE SCROLL CODE
let x = 0;
let width = city.width;
let min = 0-width;
let step = 1;

function loop() {
    let ctx = canvas.getContext('2d');
    ctx.drawImage(city, x, 0);
    ctx.drawImage(city, x + width, 0);
    // customer.render();
    // cabOne.render();
    // cabTwo.render();
    // cabThree.render();
    parker.render();
    moveCars();
    
    
    runOver();
    deliverPizza();
    
    x -= step;
    if (x < min) {
        x = 0;
        }
};

// GAMELOOP FUNCTION
function gameLoop () {

    
    ctx.clearRect(0, 0, game.width, game.height);
    loop();
    drawCars();
    drawCustomers();
    drawScore();
    

}

function gameOver() {
    let GOModal = document.getElementById('GO-modal');
    GOModal.classList.remove('hidden');
    document.getElementById('start').textContent = 'Restart';
    document.getElementById('start').classList.remove('hidden');
}

function gameWon() {
    let WINModal = document.getElementById('WIN-modal');
    WINModal.classList.remove('hidden');
    document.getElementById('start').textContent = 'Restart';
    document.getElementById('start').classList.remove('hidden');
}
