var canvas = document.getElementById("canvas");
var ctx = canvas.getContext('2d');





var sides = prompt("How many sides? (Default 5)");
var rad = prompt("What's the radius? (Default 50)")

if(sides == 0){
  sides = 5
}
if(rad == 0){
  rad = 50;
}
resize();

window.addEventListener("resize", resize)

function resize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for(i=0; i< 360; i+= 360/sides){
    ctx.moveTo(canvas.width/2+ rad*Math.cos((i*(Math.PI/180))), canvas.height/2+rad*Math.sin((i*(Math.PI/180))));
    ctx.lineTo(canvas.width/2+ rad*Math.cos(((i+(360/sides))*(Math.PI/180))), canvas.height/2+rad*Math.sin(((i+360/sides)*(Math.PI/180))));
    ctx.stroke();
  }
}


function drawDot(x,y,rad){
  ctx.beginPath();
  ctx.arc(x,y,rad,0,Math.PI*2)
  ctx.stroke();
  ctx.fill();
}
