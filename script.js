var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');

var sides = prompt("How many sides? (Default 5)");
var rad = prompt("What's the radius? (Default 100)");
if (sides == 0) {
  sides = 5
}
if (rad == 0) {
  rad = 100;
}
resize();
window.addEventListener("resize", resize);
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (i = 0; i < 360; i += 360 / sides) {
    var startX = canvas.width / 2 + rad * Math.cos(toRad(i));
    var startY = canvas.height / 2 + rad * Math.sin(toRad(i));
    var endX = canvas.width / 2 + rad * Math.cos(toRad(i+ 360/sides));
    var endY = canvas.height / 2 + rad * Math.sin(toRad(i+ 360/sides));
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }
}
function toRad(deg){
  return deg * (Math.PI / 180);
}
