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

        //image
        let peter = new Image();
        let taxi = new Image();
        function init() {
            peter.src = 'assets/spidey-sprite.png';
            taxi.src = 'assets/taxi.png';
            window.requestAnimationFrame(draw);
        }
    }
}