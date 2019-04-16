var canvas2 = document.querySelector('#canvas2');
canvas2.width = 500;
canvas2.height = 500;

var ctx = canvas2.getContext('2d');

ctx.lineWidth = 3;
ctx.strokeStyle = '#0272A2';

const firstLineArr = [];
for (let i = 57; i < 194; i++) {
    firstLineArr.push(i);
}

console.log('firstLineArr:', firstLineArr);

let f = 0;
const firstAnimation = () => {
    if (f < firstLineArr.length) {
        requestAnimationFrame(firstAnimation);
    } else {
        topLeftAnime();
    }
    ctx.beginPath();
    ctx.moveTo(firstLineArr[f] - 1, 100);
    ctx.lineTo(firstLineArr[f], 100);
    ctx.stroke();
    f++;
};

let s = firstLineArr.length;
const secondAnimation = () => {
    if (s > 0) {
        requestAnimationFrame(secondAnimation);
    }
    ctx.beginPath();
    ctx.moveTo(firstLineArr[s] + 1, 130);
    ctx.lineTo(firstLineArr[s], 130);
    ctx.stroke();
    s--;
};

let t = 0;
const topLeftAnime = drawTo => {
    if (t < 25) {
        requestAnimationFrame(() => topLeftAnime((Math.PI * 2 * t) / 100 + Math.PI / -2));
    }
    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.moveTo(57, 100);
    ctx.lineTo(193, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(193, 107, 7, Math.PI * 2, drawTo, false);
    ctx.stroke();
    t++;
};

firstAnimation();
secondAnimation();
