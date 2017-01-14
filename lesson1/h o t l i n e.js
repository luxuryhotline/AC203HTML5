alert('its working');
var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
ctx.moveTo(0,0); // move pen to coord 0,0
ctx.lineTo(150,150); //draw a line to this position
ctx.stroke(); //asking the pen to actually draw
//drawing on cnvass 2
var c2 = document.getElementById('myCanvas2');
var ctx2 = c2.getContext('2d');
ctx2.fillstyle='rgb(128,128,128)'; //this has tobe a string
ctx2.fillRect(100,100,100,100);
ctx2.strokeRect(80,80,140,140);
ctx2.clearRect(120,120,60,60)

var c3 = document.getElementById('myCanvas3');
var ctx3 = c3.getContext('2d');
ctx3.fillstyle='rgb(128,128,128)';
ctx3.fillRect(150,150,150,150);
ctx3.fillRect(0,0,150,150);

var c4 = document.getElementById('myCanvas4');
var ctx4 = c4.getContext('2d');
ctx4.fillstyle='rgb(128,128,128)';
ctx4.fillRect(0,0,300,300);

var c5 =document.getElementById('mycanvas5');
var ctx5 = c5.getContext('2d')
ctx5.fillstyle='rgb(128,128,128)'
var x = 0;
var y=0;
var width = 300;
var height = 300;
ctx5.fillRect(x,y,width,height)
while (width > 0){
	x=x+10;
	y=y+10;
	width=width-20;
	height=height-20;


ctx5.clearRect(x,y,width,height)
 	x=x+10;
	y=y+10;
	width=width-20;
height=height-20;
}

