let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let template = PATH.split(/[\s,]+/);

let M = x => y => ctx.moveTo(x, y);
let L = x => y => ctx.lineTo(x, y);
let C = x1 => y1 => cx => cy => x2 => y2 => ctx.bezierCurveTo(x1, y1, cx, cy, x2, y2);

ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.beginPath();
for (let i = 0, f = undefined; i < template.length; i++) {
    if (f === undefined) switch (template[i]) {
    case "M": { f = M; break; }
    case "L": { f = L; break; }
    case "C": { f = C; break; }
    default: break;
    }
    else { f = f(template[i]) }
}
ctx.fill();