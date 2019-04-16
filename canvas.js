var canvas = document.querySelector('#canvas1');
canvas.width = 500;
canvas.height = 500;

var c = canvas.getContext('2d');

c.fillRect(x, y, width, height);
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(400, 100, 100, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(300, 300, 100, 100);

// Line

c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.stroke();
c.lineTo(400, 300);
c.strokeStyle = '#fa34a3';
c.stroke();

arc;
c.beginPath();
c.arc(300, 300, 30, 0, Math.PI * 2, false);
c.strokeStyle = 'blue';
c.stroke();

const returnColor = () => Math.random() * 255;

for (let i = 0; i < 300; i++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = `rgb(${returnColor()}, ${returnColor()}, ${returnColor()})`;
    c.stroke();
}
