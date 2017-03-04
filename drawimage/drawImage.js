

var c6= document.getElementById('myCanvas6')
var ctx6 = c6.getContext('2d');
ctx6.fillStyle='green';
ctx6.fillRect(0,350,800,150);
ctx6.fillStyle='cyan';
ctx6.fillRect(0,0,800,350);
ctx6.beginPath();
ctx6.arc(150,150,80,0,6.25);

var car =new Image();
var alex =new Image();
var russian =new Image();
var bigboi =new Image();

car.src = 'car.png';
alex.src = 'alex.png';
russian.src = 'russian.png';
bigboi.src = 'bigboi.png';

car.onload = function(){
 ctx6.drawImage(car,200,325,300,100)
}
alex.onload = function(){
	ctx6.drawImage(alex,200,200,100,200)
}











