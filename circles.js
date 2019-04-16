var canvas = document.querySelector('#canvas1');
canvas.width = innerWidth;
canvas.height = innerWidth;

var c = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius, stroke) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.stroke = stroke;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = this.stroke;
        c.stroke();
    };

    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    };
}

var circleArray = [];

for (let i = 0; i < 200; i++) {
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 5;
    var dy = (Math.random() - 0.5) * 5;
    var stroke = `rgb(${returnColor()}, ${returnColor()}, ${returnColor()})`;
    var circle = new Circle(x, y, dx, dy, radius, stroke);
    circleArray.push(circle);
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    circleArray.forEach(circle => {
        circle.update();
    });
}
