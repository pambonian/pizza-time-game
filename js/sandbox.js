function draw() {
    let canvas = document.getElementById('game');
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');

        //red cube
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        //purple cube
        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.fillRect(40, 70, 50, 50);

        //circle
        let circle = new Path2D();
        circle.arc(100, 35, 25, 0, 2 * Math.PI);
        ctx.stroke(circle);
        ctx.fill(circle);

        //path
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.moveTo(0, 320);
        ctx.lineTo(700, 320);
        ctx.stroke();

        //path 2
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.moveTo(0, 250);
        ctx.lineTo(700, 250);
        ctx.stroke();

        //constructor class
        class Taxi {
            constructor(x, y, img, width, height) {
                this.x = x;
                this.y = y;
                this.img = './assets/taxi.png';
                this.width = width;
                this.height = height;
                this.render = function() {
                    ctx.drawImage(taxi, 50, 50);
                }
            }
        };
        //initial screen position for taxi
        window.addEventListener('DOMContentLoaded', function(e) {
            taxiOne = new Taxi(40, 40, taxi.src, 20, 20);

            const runGame = setInterval(gameLoop, 120);
        });
        console.log(Taxi);
    }
}