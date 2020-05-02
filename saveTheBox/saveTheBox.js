var redGamePiece;
var myObstacles = [];
var myScore;
var redGamePieceW;
var redGamePieceH;
var cornerGap;
var redGamePieceX;
var redGamePieceY;
var canvasW;
var canvasH;
var redGamePieceColor;
var myObstacleX;
var myObstacleY;
var myObstacleW;
var myObstacleH;
var numberOfObstaclesPerFrame;
var myObstacleSpeed;
var redGamePieceSpeedLeft;
var redGamePieceSpeedRight;
var redGamePieceSpeedUp;
var redGamePieceSpeedDown;

var myGameArea = {
	canvas : document.getElementById("myCanvas"),
	start : function(){
		this.canvas.width = canvasW;
		this.canvas.height = canvasH;
		this.context = this.canvas.getContext("2d");
		this.interval = setInterval(updateGameArea, 20);
		this.frameNo = 0;
		window.addEventListener("keydown", function(e){
			myGameArea.keys = (myGameArea.keys || []);
			myGameArea.keys[e.keyCode] = true;
		});
		window.addEventListener("keyup", function(e){
			myGameArea.keys[e.keyCode] = false;
		});
	},
	clear : function(){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	},
	stop : function() {
		clearInterval(this.interval);
	}
}

function component(width, height, color, x, y, type) {
	this.width = width;
	this.height = height;
	this.speedX = 0;
    this.speedY = 0;
	this.x = x;
	this.y = y;
	this.update = function(){							
		ctx = myGameArea.context;
		if (	type == "text") {
		  ctx.font = this.width + " " + this.height;
		  ctx.fillStyle = color;
		  ctx.fillText(this.text, this.x, this.y);
		} else {
		  ctx.fillStyle = color;
		  ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	}
	this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
	this.crashWith = function(otherobj) {
		var myleft = this.x;
		var myright = this.x + (this.width);
		var mytop = this.y;
		var mybottom = this.y + (this.height);
		var otherleft = otherobj.x;
		var otherright = otherobj.x + (otherobj.width);
		var othertop = otherobj.y;
		var otherbottom = otherobj.y + (otherobj.height);
		var crash = true;
		if ((mybottom < othertop) ||
		(mytop > otherbottom) ||
		(myright < otherleft) ||
		(myleft > otherright)) {
		  crash = false;
		}
    return crash;
  }
}

function updateGameArea()
{
	for (i = 0; i < myObstacles.length; i += 1) {
		if (redGamePiece.crashWith(myObstacles[i])) {
		  myGameArea.stop();
		  return;
		}
	}
	myGameArea.clear();
	myGameArea.frameNo += 1;
	if (myGameArea.frameNo == 1 || everyinterval(numberOfObstaclesPerFrame)) {
		myObstacleX = Math.floor(Math.random() * canvasW);
		myObstacleY = 0;
		myObstacles.push(new component(myObstacleW, myObstacleH, "green", myObstacleX, myObstacleY));
	}
	for (i = 0; i < myObstacles.length; i += 1) {
		console.log();
		myObstacles[i].y += myObstacleSpeed;
		myObstacles[i].update();
	}
	redGamePiece.speedX = 0;
	redGamePiece.speedY = 0;
	if (myGameArea.keys && myGameArea.keys[37] && redGamePiece.x > cornerGap) 
	{
		redGamePiece.speedX = -redGamePieceSpeedLeft; 
	}
	if (myGameArea.keys && myGameArea.keys[39] && redGamePiece.x < myGameArea.canvas.width - myObstacleW - cornerGap) 
	{
		redGamePiece.speedX = redGamePieceSpeedRight; 
	}
	if (myGameArea.keys && myGameArea.keys[38] && redGamePiece.y > cornerGap) 
	{
		redGamePiece.speedY = -redGamePieceSpeedUp; 
	}
	if (myGameArea.keys && myGameArea.keys[40] && redGamePiece.y < myGameArea.canvas.height - myObstacleH - cornerGap) 
	{
		redGamePiece.speedY = redGamePieceSpeedDown	; 
	}
	myScore.text = "SCORE: " + myGameArea.frameNo;
	myScore.update();
	redGamePiece.newPos();
	redGamePiece.update();
}

function everyinterval(n) {
	if ((myGameArea.frameNo / n) % 1 == 0) 
	{
		return true;
	}
	return false;
}

function changeLevels()
{
	var level = document.getElementById("levels").value;
	if(level == 1)
	{
		level1();
	}
	else if(level == 2)
	{
		level2();
	}
	else
	{
		level3();
	}
}

function level1()
{
    redGamePiece;
	myObstacles = [];
	myScore;
	redGamePieceW = 15;
	redGamePieceH = 15;
	cornerGap = 5;
	redGamePieceX;
	redGamePieceY;
	canvasW = 200;
	canvasH = window.innerHeight - 20;
	redGamePieceColor = "red";
	myObstacleX;
	myObstacleY;
	myObstacleW = 10;
	myObstacleH = 10;
	numberOfObstaclesPerFrame = 20;
	myObstacleSpeed = 5;
	redGamePieceSpeedLeft = 5;
	redGamePieceSpeedRight = 5;
	redGamePieceSpeedUp = 3;
	redGamePieceSpeedDown = 6;
	startTheGame();
}

function level2()
{
	redGamePiece;
	myObstacles = [];
	myScore;
	redGamePieceW = 15;
	redGamePieceH = 15;
	cornerGap = 5;
	redGamePieceX;
	redGamePieceY;
	canvasW = 200;
	canvasH = window.innerHeight - 20;
	redGamePieceColor = "red";
	myObstacleX;
	myObstacleY;
	myObstacleW = 10;
	myObstacleH = 10;
	numberOfObstaclesPerFrame = 10;
	myObstacleSpeed = 10;
	redGamePieceSpeedLeft = 3;
	redGamePieceSpeedRight = 3;
	redGamePieceSpeedUp = 3;
	redGamePieceSpeedDown = 3;
	startTheGame();
}

function level3()
{
	redGamePiece;
	myObstacles = [];
	myScore;
	redGamePieceW = 15;
	redGamePieceH = 15;
	cornerGap = 5;
	redGamePieceX;
	redGamePieceY;
	canvasW = 200;
	canvasH = window.innerHeight - 20;
	redGamePieceColor = "red";
	myObstacleX;
	myObstacleY;
	myObstacleW = 10;
	myObstacleH = 10;
	numberOfObstaclesPerFrame = 10;
	myObstacleSpeed = 1;
	redGamePieceSpeedLeft = 2;
	redGamePieceSpeedRight = 2;
	redGamePieceSpeedUp = 2;
	redGamePieceSpeedDown = 2;
	startTheGame();
}

function startTheGame()
{
	myGameArea.stop();
	myGameArea.start();
	redGamePieceX = myGameArea.canvas.width/2;
	redGamePieceY = myGameArea.canvas.height - redGamePieceX - cornerGap;
	redGamePiece = new component(redGamePieceW, redGamePieceH, redGamePieceColor, redGamePieceX, redGamePieceY);
	myScore = new component("20px", "Consolas", "black", 10, 40, "text");
}

level1();