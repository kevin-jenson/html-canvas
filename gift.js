var canvas = document.querySelector('#canvas1');
canvas.width = 500;
canvas.height = 500;

var c = canvas.getContext('2d');

c.lineWidth = 3;
c.strokeStyle = '#0272A2';

// top rectangle
c.beginPath();
c.moveTo(57, 100);
c.lineTo(193, 100);
c.arc(193, 107, 7, Math.PI + Math.PI / 2, false);
c.lineTo(200, 123);
c.arc(193, 123, 7, 0, 1.5708, false);
c.lineTo(57, 130);
c.arc(57, 123, 7, 1.5708, 3.14159, false);
c.lineTo(50, 107);
c.arc(57, 107, 7, 3.14159, 4.71239, false);
c.stroke();

// bottom rectangle
c.beginPath();
c.moveTo(60, 130);
c.lineTo(60, 188);
c.arc(67, 188, 7, 3.14159, 1.5708, true);
c.lineTo(183, 195);
c.arc(183, 188, 7, 1.5708, 0, true);
c.lineTo(190, 130);
c.stroke();

// left line down
c.beginPath();
c.moveTo(110, 100);
c.lineTo(110, 195);
c.stroke();

// right line down
c.beginPath();
c.moveTo(140, 100);
c.lineTo(140, 195);
c.stroke();

// mini line in top square
c.beginPath();
c.moveTo(133, 110);
c.lineTo(133, 125);
c.lineCap = 'round';
c.stroke();

// longer line in bottom rectangle
c.beginPath();
c.moveTo(133, 135);
c.lineCap = 'round';
c.lineTo(133, 185);
c.stroke();

// top half circle
c.beginPath();
c.moveTo(113, 100);
c.bezierCurveTo(113, 100, 125, 78, 137, 100);
c.stroke();

// left ribbon
c.beginPath();
c.moveTo(112, 100);
c.quadraticCurveTo(118, 90, 100, 75);
c.bezierCurveTo(100, 75, 90, 65, 80, 75);
c.bezierCurveTo(80, 75, 70, 85, 85, 94);
c.quadraticCurveTo(85, 94, 104, 100);
c.stroke();

// left inner ribbon
c.beginPath();
c.moveTo(112, 100);
c.bezierCurveTo(112, 105, 95, 68, 77, 85);
c.stroke();

// right ribbon
c.beginPath();
c.moveTo(138, 100);
c.quadraticCurveTo(132, 90, 150, 75);
c.bezierCurveTo(150, 75, 160, 65, 170, 75);
c.bezierCurveTo(170, 75, 180, 85, 165, 94);
c.quadraticCurveTo(165, 94, 146, 100);
c.stroke();

// right inner ribbon
c.beginPath();
c.moveTo(138, 100);
c.bezierCurveTo(138, 105, 155, 68, 173, 85);
c.stroke();
