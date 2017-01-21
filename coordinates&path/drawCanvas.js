var c= document.getElementById('myCanvas')
var ctx = c.getContext('2d');

ctx.beginPath();
ctx.strokeStyle="magenta";
ctx.moveTo(150,50);
ctx.lineTo(50,200);
ctx.lineTo(250,200);
ctx.closePath();
ctx.stroke();
ctx.fillStyle='orange';
ctx.fill();

var c2= document.getElementById('myCanvas2')
var ctx2 = c2.getContext('2d');
ctx2.beginPath();
ctx2.strokeStyle='green';
ctx2.moveTo(75,0);
ctx2.lineTo(0,150);
ctx2.lineTo(75,300);
ctx2.lineTo(150,150);
ctx2.closePath();
ctx2.stroke();

var c3= document.getElementById('myCanvas3')
var ctx3 = c3.getContext('2d');
ctx3.beginPath();
ctx3.moveTo(150,150);
ctx3.lineTo(0,0);
ctx3.lineTo(0,300);
ctx3.lineTo(300,0);
ctx3.lineTo(300,300);
ctx3.closePath();
ctx3.stroke();

var c4= document.getElementById('myCanvas4')
var ctx4 = c4.getContext('2d');

ctx4.beginPath();
ctx4.moveTo(150,150);
ctx4.lineTo(150,0);
ctx4.lineTo(300,150);
ctx4.lineTo(0,150);
ctx4.lineTo(150,300);
ctx4.lineTo(300,0);
ctx4.lineTo(300,300);
ctx4.lineTo(0,300);
ctx4.lineTo(0,0);
ctx4.closePath();
ctx4.stroke();

var c5= document.getElementById('myCanvas5')
var ctx5 = c5.getContext('2d');
ctx5.beginPath();
ctx5.strokeStyle='blue';
ctx5.arc(150,150,80,0,6.25);
ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle='blue';
ctx5.fill();

var c6= document.getElementById('myCanvas6')
var ctx6 = c6.getContext('2d');
ctx6.fillstyle='green';
ctx6.fillrect(0,350,800,150);
ctx6.fillStyle='cyan';
ctx6.fillrect(0,0,800,350);
ctx6.beginPath();
ctx6.arc(150,150,80,0,6.25);











