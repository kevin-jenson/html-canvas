var canvas2 = document.querySelector('#canvas2');
canvas2.width = 500;
canvas2.height = 500;

var ctx = canvas2.getContext('2d');

ctx.lineWidth = 3;
ctx.strokeStyle = '#0272A2';

let f = 56;
let s = 195;
let cl = 100;
let brl = 130;
let ml = 110;
let lol = 135;
let tc1 = 113;
let tc2 = 100;
let qc1 = 118;
let qc2 = 90;

const firstAnimation = () => {
    if (f < 194) {
        requestAnimationFrame(firstAnimation);
    } else {
        topRightAnime(null, 1.5709, null);
    }
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    animatePathDrawing(ctx, 138, 100, 132, 90, 150, 75, 300);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(112, 100);
    animatePathDrawing(ctx, 112, 100, 118, 90, 100, 75, 300);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(113, 100);
    animatePathDrawing(ctx, 113, 100, 125, 78, 137, 100, 300);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(133, 135);
    ctx.lineCap = 'round';
    ctx.lineTo(133, lol);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(133, 110);
    ctx.lineTo(133, ml);
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(57, 100);
    ctx.lineTo(f, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(194, 130);
    ctx.lineTo(s, 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(110, 100);
    ctx.lineTo(110, cl);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(140, 100);
    ctx.lineTo(140, cl);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(60, 130);
    ctx.lineTo(60, brl);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(190, 130);
    ctx.lineTo(190, brl);
    ctx.stroke();
    cl += 5.4;
    f += 8;
    s -= 8;
    brl += 3.36;
    ml += 0.86;
    lol += 2.9;
    tc1 += 0.69;
    tc2 -= 1.27;
    qc1 -= 1.04;
    qc2 -= 0.87;
};

let t = 0;
let bc1 = 100;
let bc2 = 75;
let bc3 = 100;
const topRightAnime = (first, second, third, fourth) => {
    const topRightArc = (Math.PI * 2 * t) / 100 + Math.PI / -2;
    const bottomLeftArc = (Math.PI * 2 * t) / 100 + Math.PI / 2;
    const bottomRightArc = (Math.PI * t) / 50;
    const reverseBottomLeftArc = Math.PI - (Math.PI / 50) * t;
    if (t < 25) {
        requestAnimationFrame(() =>
            topRightAnime(topRightArc, bottomLeftArc, bottomRightArc, reverseBottomLeftArc),
        );
    } else {
        sideLineRight();
    }
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.moveTo(138, 100);
    ctx.quadraticCurveTo(132, 90, 150, 75);
    animatePathDrawing(ctx, 150, 75, 160, 65, 170, 75, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(112, 100);
    ctx.quadraticCurveTo(118, 90, 100, 75);
    animatePathDrawing(ctx, 100, 75, 90, 65, 80, 75, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(113, 100);
    ctx.bezierCurveTo(113, 100, 125, 78, 137, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(133, 135);
    ctx.lineCap = 'round';
    ctx.lineTo(133, 185);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(133, 110);
    ctx.lineTo(133, 125);
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(60, 130);
    ctx.lineTo(60, 188);
    ctx.arc(67, 188, 7, 3.141593, fourth, true);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(190, 130);
    ctx.lineTo(190, 188);
    ctx.arc(183, 188, 7, 0, third, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(110, 100);
    ctx.lineTo(110, 195);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(140, 100);
    ctx.lineTo(140, 195);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(57, 100);
    ctx.lineTo(193, 100);
    ctx.arc(193, 107, 7, Math.PI / -2, first, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(193, 130);
    ctx.lineTo(57, 130);
    ctx.arc(57, 123, 7, 1.570795, second, false);
    ctx.stroke();
    t += 4;
    bc1 -= 1.6;
    bc2 -= 1.6;
    bc3 -= 3.2;
};

let slr = 107;
let sll = 124;
let bll = 67;
let blr = 183;
let sbc1 = 80;
let sbc2 = 75;
let sbc3 = 80;
const sideLineRight = () => {
    if (slr < 124) {
        requestAnimationFrame(sideLineRight);
    } else {
        bottomRightAnime();
    }
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.moveTo(138, 100);
    ctx.quadraticCurveTo(132, 90, 150, 75);
    ctx.bezierCurveTo(150, 75, 160, 65, 170, 75);
    animatePathDrawing(ctx, 170, 75, 180, 85, 165, 94, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(112, 100);
    ctx.quadraticCurveTo(118, 90, 100, 75);
    ctx.bezierCurveTo(100, 75, 90, 65, 80, 75);
    animatePathDrawing(ctx, 80, 75, 70, 85, 85, 94, 100);
    ctx.stroke();
    animatePathDrawing(ctx, 112, 100, 95, 68, 77, 85, 200);
    animatePathDrawing(ctx, 138, 100, 155, 68, 173, 85, 200);
    ctx.beginPath();
    ctx.moveTo(113, 100);
    ctx.bezierCurveTo(113, 100, 125, 78, 137, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(133, 135);
    ctx.lineCap = 'round';
    ctx.lineTo(133, 185);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(133, 110);
    ctx.lineTo(133, 125);
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(60, 130);
    ctx.lineTo(60, 188);
    ctx.arc(67, 188, 7, 3.14159, 1.5708, true);
    ctx.lineTo(bll, 195);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(190, 130);
    ctx.lineTo(190, 188);
    ctx.arc(183, 188, 7, 0, 1.5708, false);
    ctx.lineTo(blr, 195);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(110, 100);
    ctx.lineTo(110, 195);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(140, 100);
    ctx.lineTo(140, 195);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(57, 100);
    ctx.lineTo(193, 100);
    ctx.arc(193, 107, 7, Math.PI + Math.PI / 2, false);
    ctx.moveTo(200, 107);
    ctx.lineTo(200, slr);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(193, 130);
    ctx.lineTo(57, 130);
    ctx.arc(57, 123, 7, 1.5708, 3.14159, false);
    ctx.moveTo(50, 123);
    ctx.lineTo(50, sll);
    ctx.stroke();
    sll -= 2;
    slr += 2;
    bll += 6.8;
    blr -= 6.8;
    sbc1 -= 1.17;
    sbc2 += 1.17;
    sbc3 += 0.59;
};

let bra = 0;
const bottomRightAnime = (first, second) => {
    const bottomRightArc = (Math.PI * bra) / 50;
    const topLeftArc = (Math.PI * bra) / 50 + Math.PI;
    if (bra < 25) {
        requestAnimationFrame(() => bottomRightAnime(bottomRightArc, topLeftArc));
    }
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.moveTo(138, 100);
    ctx.quadraticCurveTo(132, 90, 150, 75);
    ctx.bezierCurveTo(150, 75, 160, 65, 170, 75);
    ctx.bezierCurveTo(170, 75, 180, 85, 165, 94);
    animatePathDrawing(ctx, 165, 94, 165, 94, 146, 100, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(112, 100);
    ctx.bezierCurveTo(112, 100, 95, 68, 77, 85);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(112, 100);
    ctx.quadraticCurveTo(118, 90, 100, 75);
    ctx.bezierCurveTo(100, 75, 90, 65, 80, 75);
    ctx.bezierCurveTo(80, 75, 70, 85, 85, 94);
    animatePathDrawing(ctx, 85, 94, 85, 94, 104, 100, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(113, 100);
    ctx.bezierCurveTo(113, 100, 125, 78, 137, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(133, 135);
    ctx.lineCap = 'round';
    ctx.lineTo(133, 185);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(133, 110);
    ctx.lineTo(133, 125);
    ctx.lineCap = 'round';
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(60, 130);
    ctx.lineTo(60, 188);
    ctx.arc(67, 188, 7, 3.14159, 1.5708, true);
    ctx.lineTo(125, 195);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(190, 130);
    ctx.lineTo(190, 188);
    ctx.arc(183, 188, 7, 0, 1.5708, false);
    ctx.lineTo(125, 195);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(110, 100);
    ctx.lineTo(110, 195);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(140, 100);
    ctx.lineTo(140, 195);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(57, 100);
    ctx.lineTo(193, 100);
    ctx.arc(193, 107, 7, Math.PI + Math.PI / 2, false);
    ctx.lineTo(200, 123);
    ctx.arc(193, 123, 7, 0, first, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(193, 130);
    ctx.lineTo(57, 130);
    ctx.arc(57, 123, 7, 1.5708, 3.14159, false);
    ctx.lineTo(50, 107);
    ctx.arc(57, 107, 7, 3.14159, second, false);
    ctx.stroke();
    bra += 4;
};

firstAnimation();

function animatePathDrawing(ctx, x0, y0, x1, y1, x2, y2, duration) {
    let start = null;

    let step = function animatePathDrawingStep(timestamp) {
        if (start === null) start = timestamp;
        let delta = timestamp - start;
        let progress = Math.min(delta / duration, 1);

        ctx.clearRect(x0, y0, 1, 1);

        drawBezierSplit(ctx, x0, y0, x1, y1, x2, y2, 0, progress);

        if (progress < 1) {
            requestAnimationFrame(step);
        }
    };

    requestAnimationFrame(step);
}

function drawBezierSplit(ctx, x0, y0, x1, y1, x2, y2, t0, t1) {
    ctx.beginPath();
    ctx.lineWidth = 2;

    if (0.0 == t0 && t1 == 1.0) {
        ctx.moveTo(x0, y0);
        ctx.quadraticCurveTo(x1, y1, x2, y2);
    } else if (t0 != t1) {
        let t00 = t0 * t0;
        let t01 = 1.0 - t0;
        let t02 = t01 * t01;
        let t03 = 2.0 * t0 * t01;

        let nx0 = t02 * x0 + t03 * x1 + t00 * x2;
        let ny0 = t02 * y0 + t03 * y1 + t00 * y2;

        t00 = t1 * t1;
        t01 = 1.0 - t1;
        t02 = t01 * t01;
        t03 = 2.0 * t1 * t01;

        let nx2 = t02 * x0 + t03 * x1 + t00 * x2;
        let ny2 = t02 * y0 + t03 * y1 + t00 * y2;

        let nx1 = lerp(lerp(x0, x1, t0), lerp(x1, x2, t0), t1);
        let ny1 = lerp(lerp(y0, y1, t0), lerp(y1, y2, t0), t1);

        ctx.moveTo(nx0, ny0);
        ctx.quadraticCurveTo(nx1, ny1, nx2, ny2);
    }

    ctx.stroke();
    ctx.lineWidth = 3;
}

function lerp(v0, v1, t) {
    return (1.0 - t) * v0 + t * v1;
}
