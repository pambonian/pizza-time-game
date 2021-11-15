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
    // customer = new Pedestrian(moneyguy, 700, 245, 33, 67, 700, 245, 33, 67);

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
        let customerWidth = 15;
        let customerHeight = 30;
        let customerX1 = 100;
        let customerSX1 = 0;
        let customerY1 = 400;
        let customerX2 = 260;
        let customerSX2 = 15;
        let customerY2 = 100;
        let customerX3 = 600;
        let customerSX3 = 30;
        let customerY3 = 245;
        let customerX4 = 180;
        let customerSX4 = 45;
        let customerY4 = 340;

        function drawCustomers() {

            let customersX = [customerX1, customerX2, customerX3, customerX4];
            let customersY = [customerY1, customerY2, customerY3, customerY4];
            let customersSX = [customerSX1, customerSX2, customerSX3, customerSX4];

            for (i = 0; i < customersX.length; i++) {
            ctx.drawImage(customer, customersSX[i], 0, 15, 30, customersX[i], customersY[i], customerWidth, customerHeight);
            }
        }

        function deliverPizza () {
            if (customerX1 <= parker.x + parker.width &&
                customerX1 + parker.width >= parker.x &&
                customerY1 + customerHeight >= parker.y &&
                customerY1 <= parker.y + parker.height) {
                    score += 1;
                    console.log(score);
                }
        }

        function moveCustomers() {
            if (customerX1 <= 700 && customerX1 > -200) {
                customerX1 = customerX1 - 1;
                } else {
                    customerX1 = 700;
                    }

            if (customerX2 <= 700 && customerX2 > -200) {
                customerX2 = customerX1 - 3;
                } else {
                    customerX2 = 700;
                    
                    }

            if (customerX3 <= 700 && customerX3 > -200) {
                customerX3 = customerX1 - 2;
                } else {
                    customerX3 = 700;
                    
                    }
        }

        // moneyguy = new Image();
        // moneyguy.src = 'assets/littlemoneyman.png';
        // class Pedestrian {
        //     constructor(img, x, y, width, height) {
        //         this.img = img;
        //         this.x = x;
        //         this.y = y;
        //         this.width = width;
        //         this.height = height;
        //         this.render = function() {
        //             ctx.drawImage(img, x, y);
        //             if (x <= 700 && x > -200) {
        //                 x = x - 1;
        //             } else {
        //                 x = 700;
        //             } 
        //         }
        //     }
        // }


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
        // let carX7 = 650;
        // let carSX7 = 71;
        // let carY7 = 200;
        // let carX8 = 250;
        // let carSX8 = 142;
        // let carY8 = 200;

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
                carX1 = carX1 - 3;
                } else {
                    carX1 = 700;
                    carSX1 = (Math.floor(Math.random() * 4) * 71);
                    }
                    
            
            if (carX2 <= 700 && carX2 > -200) {
                carX2 = carX2 - 3;
                } else {
                    carX2 = 700;
                    carSX2 = (Math.floor(Math.random() * 4) * 71);
                    }

            if (carX3 <= 700 && carX3 > -200) {
                carX3 = carX3 - 3;
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
                carX5 = carX5 - 3;
                } else {
                    carX5 = 700;
                    carSX5 = (Math.floor(Math.random() * 4) * 71);
                    }

            if (carX6 <= 700 && carX6 > -200) {
                carX6 = carX6 - 3;
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
                    gameOver();
                }
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
    resetParker();

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
    moveCustomers();
    deliverPizza();
    runOver();
    
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