// DOM & GLOBAL VARIABLES GRABBER
let welcomeModal = document.getElementById('start-modal');
let startButton = document.getElementById('start');
let movementDisplay = document.querySelector('#movement');
let audio = new Audio('assets/spidertheme.mp3');
let runGame;
let parker;
let score = 0;

function randomSpeed () {
    return Math.floor(Math.random() * 4)
}



// RENDER CANVAS
let canvas = document.getElementById('game');
let ctx = canvas.getContext('2d');

// SETUP CANVAS RENDERING

canvas.setAttribute('height', getComputedStyle(canvas)['height']);
canvas.setAttribute('width', getComputedStyle(canvas)['width']);

// SETUP INITIAL SCREEN
// DEFINE CAB AND PARKER
// let cab = new Taxi(taxi);
// let parker = new Player(peter);

window.addEventListener('DOMContentLoaded', function(e) {
    
    // cabOne = new Taxi(taxi, 700, 215, 80, 67, 700, 215, 80, 67);
    // cabTwo = new Taxi(taxi, 420, 245, 80, 67, 420, 245, 80, 67);
    // cabThree = new Taxi(taxi, 200, 280, 80, 67, 200, 280, 80, 67);
    parker = new Player(peter, 60, 240, 40, 40);
    customer = new Pedestrian(moneyguy, 700, 245, 33, 67, 700, 245, 33, 67);

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

        moneyguy = new Image();
        moneyguy.src = 'assets/littlemoneyman.png';
        class Pedestrian {
            constructor(img, x, y, width, height) {
                this.img = img;
                this.x = x;
                this.y = y;
                this.width = width;
                this.height = height;
                this.render = function() {
                    ctx.drawImage(img, x, y);
                    if (x <= 700 && x > -200) {
                        x = x - 1;
                    } else {
                        x = 700;
                    } 
                }
            }
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

        let car = new Image(); car.src = "assets/spritesheet.png";
        let carX1 = 100;
        let carSX1 = 0;
        function drawCars() {
            ctx.drawImage(car, carSX1, 0, 71, 56, carX1, 278, 71, 36);
            if (carX1 <= 700 && carX1 > -200) {
                carX1 = carX1 - 2;
                } else {
                    carX1 = 700;
                    carSX1 = (Math.floor(Math.random() * 4) * 71);
                    } 
        }

// MOVEMENT HANDLER

function movementHandler (e) {
    console.log('movement', e.key);

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
    console.log('startfunction started');
    // Hide modal and start button
    welcomeModal.className = 'modal hidden';
    startButton.className = 'button hidden';
    document.getElementById('GO-modal').className = 'modal hidden';
    audio.play();
    audio.loop = true;

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
    customer.render();
    // cabOne.render();
    // cabTwo.render();
    // cabThree.render();
    parker.render();
    drawCars();
    
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
    // hit detectors
    // detectHit(cabOne, parker);
    // let hit2 = detectHit(cabTwo, parker);
    // let hit3 = detectHit(cabThree, parker);

    // deliver detectors
    // let delivery = detectHit(customer, parker);
    

    // movementDisplay.textContent = 'X:${parker.x}nY:${parker.y}';

    

    //parker.render();
    // gameOver();


}

// HIT DETECTION
// function detectHit (p1, p2) {
//     if (p1.x < p2.x + p2.width &&
//         p1.x + p1.width > p2.x &&
//         p1.y < p2.y + p2.height &&
//         p1.y + p1.height > p2.y
//     ){
//         // collision detected
//         console.log('Hit!');
//         gameOver();
//     } else {
//         // no collision detected
//         console.log('No hit detected');
//     }
//   }
    
// };

function gameOver() {
    let GOModal = document.getElementById('GO-modal');
    GOModal.classList.remove('hidden');
    document.getElementById('start').textContent = 'Restart';
    document.getElementById('start').classList.remove('hidden');
}


// taxi = new Image();
        // taxi.src = 'assets/taxi.png';
        // class Taxi {
        //     constructor(img, x, y, width, height) {
        //         this.img = img;
        //         this.x = x;
        //         this.y = y;
        //         this.width = width;
        //         this.height = height;
                
                
        //         //this.height = canvas.height;
        //         //this.width = canvas.width;
        //         this.render = function () {
        //                 ctx.drawImage(img, x, y, this.width, this.height);
        //                 if (x <= 700 && x > -200) {
        //                     x = x - 2;
        //                 } else {
        //                     x = 700;
        //                 } 
        //                 // ctx.fillRect(this.x, this.y, this.width, this.height);
        //                 // ctx.fillStyle = this.img;
        //                 // ctx.fillRect(this.x, this.y, this.width, this.height);
        //                 // ctx.drawImage(img, 460, 205);
        //                 // ctx.fillRect(this.x, this.y, this.width, this.height);
        //         }
        //     }
        // }


// function detectHit (p1, p2) {
    //     // console.log(p1.y + p1.height > (p2.y + 65));
    //     // console.log(p1.y < (p2.y - 65) + p2.height);
    //     // console.log(p1.x + p1.width > (p2.x + 28));
    //     console.log(p1.x < p2.x + p2.width);
    
    //     let hitTest = 
    //         p1.y + p1.height > (p2.y + 65) && 
    //         p1.y < (p2.y - 65) + p2.height &&
    //         p1.x + p1.width > (p2.x + 28) &&
    //         p1.x < p2.x + p2.width;
    //      // {boolean} : if all are true === hit
    
    //     if (hitTest) {
    //         return true
    //     } else {
    //         return false
    //     }
        
    // };

// function taxiAttack() {
//     let ctx = canvas.getContext('2d');
//     let minX=0;
//     let maxX=280;
//     let x=maxX;
//     let speedX=1;
//     let direction=1;
//     let y=20;

//     function animate(time) {
//         ctx.clearRect(0,0,canvas.width,canvas.height);
//         ctx.drawImage(cabOne, x, y);
//         x += speedX * direction;
//         if(x<minX){ x=minX; direction*=-1; }
//         if(x>maxX){ x=maxX; direction*=-1; }

//         requestAnimationFrame(animate);
//     }
// }
//RENDERING

// let street = new Background(city);
// street.render();


// cab.render();


// parker.render();
// }

//create player class (peter), look at shrek for example - needs render function

// class Player {
//     constructor(img){
//         this.img = img,
//         this.render = function() {
//             ctx.drawImage(img, 90, 260)
//         }
//         console.log(img);
//     }
// }

// let parker = new Player(peter);

//create a new peter

// Need gameplay function (gameloop)
//call render functions inside gameloop

//scroll function
//need a "taxi lane" function - sends taxis down the road
//taxi collision detector
//call scroll function only while game is being played



        // //red cube
        // ctx.fillStyle = 'rgb(200, 0, 0)';
        // ctx.fillRect(10, 10, 50, 50);

        // //purple cube
        // ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        // ctx.fillRect(40, 70, 50, 50);

        // //circle
        // let circle = new Path2D();
        // circle.arc(100, 35, 25, 0, 2 * Math.PI);
        // ctx.stroke(circle);
        // ctx.fill(circle);

        // //path
        // ctx.beginPath();
        // ctx.strokeStyle = 'black';
        // ctx.moveTo(0, 320);
        // ctx.lineTo(700, 320);
        // ctx.stroke();

        // //path 2
        // ctx.beginPath();
        // ctx.strokeStyle = 'black';
        // ctx.moveTo(0, 250);
        // ctx.lineTo(700, 250);
        // ctx.stroke();

        //initial screen position for taxi
        // window.addEventListener('DOMContentLoaded', function(e) {
        //     taxii = new Crawler(40, 40, img, 20, 20);

        //     const runGame = setInterval(gameLoop, 120);
        // });

        // ====================== SETUP FOR CANVAS RENDERING ======================= //
        // canvas.setAttribute('height', getComputedStyle(canvas)['height']);
        // canvas.setAttribute('width', getComputedStyle(canvas)['width']);

        // const img = new Image(243, 143);
        // img.src = 'assets/taxi.png';
        // document.body.appendChild(img);

        // city = new Image();
        // city.src = 'assets/city.png';
        // ctx.drawImage(city, 0, 0);

        // taxi = new Image();
        // taxi.src = 'assets/taxi.png';
        // ctx.drawImage(taxi, 350, 250);

        // peter = new Image();
        // peter.src = 'assets/spidey-sprite.png';
        // ctx.drawImage(peter, 90, 260);



        // //constructor class
        // class Crawler {
        //     constructor(x, y, img, width, height) {
        //         this.x = x;
        //         this.y = y;
        //         this.img = img;
        //         this.width = width;
        //         this.height = height;
        //         this.alive = true;
        //         this.render = function () {
        //             ctx.drawImage(img, 50, 50);
        //         }
        //     }
        // };

        //taxii

        // let taxii = new Crawler (100, 100, img, 243, 143);
        // console.log(taxii);
        // taxii.render();

        // //gameloop
        // //function gameLoop() {
        //     //ctx.clearRect(0, 0, canvas.width, canvas.height);
        //     if (taxii.alive) {
        //         taxii.render();
        //         console.log(taxii);
        //     }
        // }
        // console.log(taxii);
        // taxii.render();
//     }
//