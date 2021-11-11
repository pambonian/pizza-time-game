// Render the Canvas
let canvas = document.getElementById('game');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');
    }

// Element Grabber
let welcomeModal = document.getElementById('start-modal');

// Create Classes, Objects & Definitions
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

        taxi = new Image();
        taxi.src = 'assets/taxi.png';
        class Taxi {
            constructor(img) {
                this.img = img,
                this.render = function () {
                        ctx.drawImage(img, 350, 250);
                    }
            }
        }

        peter = new Image();
        peter.src = 'assets/spidey-sprite.png';
        class Player {
            constructor(img) {
                this.img = img,
                this.render = function () {
                        ctx.drawImage(img, 90, 260);
                    }
            }
        }

// Onload Function (when page loads)

function pageload() {
    
}


// Onclick Start Button 
function start() {

    //HIDE MODAL
    welcomeModal.className = 'modal hidden';

    // Side Scrolling Animation Starts
    
    let x = 0;
    let width = city.width;
    let min = 0-width;
    let step = 1;

    function loop() {
    let ctx = canvas.getContext('2d');
    ctx.drawImage(city, x, 0);
    ctx.drawImage(city, x + width, 0);
    x -= step;
    if (x < min) {
        x = 0;
        }
    };
    setInterval(loop, 1000/60);
};

// Gameloop Function - (?) should be the onclick?
function gameLoop () {

    ctx.clearRect(0, 0, game.width, game.height);

}

//RENDERING

// let street = new Background(city);
// street.render();

// let cab = new Taxi(taxi);
// cab.render();

// let parker = new Player(peter);
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