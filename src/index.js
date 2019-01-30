var ctx = document.getElementById("ctx").getContext("2d");
ctx.font = "60px Calibri";
ctx.strokeText("Hello World", 250, 250);

ctx.moveTo(100, 300);
ctx.lineTo(300, 400);
ctx.stroke();

ctx.fillStyle = "#fec385";
ctx.fillRect(300, 400, 150, 50);
