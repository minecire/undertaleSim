//gets the game window canvas, and then its context, and stores them in variables
var game = document.getElementById("game");
var ctx = game.getContext("2d");
//runs the runFrame function every frame
var interval = setInterval(runFrame, 1000/60);
//create a variable to set to window width and height
var width = window.innerWidth;
var height = window.innerHeight;

var soulState = "redSoul";
var gameState = "Select";
//game data
var hp = 80; //health
var karma = 0; //karma
var soulMenuPos = 0; //Where is the soul on the menu?
var soulSubMenuPos = 0; //Where is the soul in a sub-menu?

var fightBarPos = 0; //Where is the "Fight" bar on the eye image thing?

var fightBarMoving = true;
var fightBarWait = 0; //delay after stopping fight bar before battle starts

var soulX = 0; //Where is the soul in the battle?
var soulY = 0;

class OBEvent{
    constructor(t, tp, x, y, dir, otp){
        this.time = t;
        this.type = tp;
        this.x = x;
        this.y = y;
        this.direction = dir;
        this.objectType = otp;
    }
}
class CBEvent{
    constructor(t, tp, c){
        this.time = t;
        this.type = tp;
        this.color = c;
    }
}
class EBEvent{
    constructor(t, tp){
        this.time = t;
        this.type = tp;
    }
}

class Battle {
    constructor(w, h, evs){
        this.width = w;
        this.height = h;
        this.events = evs
    }
}

var battles = [];
var battleIndex = 0;
var eventStore = [];
var eventIndex = 0;
eventStore.push(new OBEvent(400, "Object", 0, 0, 0, "Bone"));
eventStore.push(new CBEvent(600, "Color", "blueSoul"));
eventStore.push(new EBEvent(800, "End"));
battles.push(new Battle(0.4, 0.2, eventStore));

var battleTime = 0;

var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;


document.addEventListener("keydown", function(event){
    if(event.keyCode == 38){
        upPressed = true;
    }
    if(event.keyCode == 40){
        downPressed = true;
    }
    if(event.keyCode == 37){ //left key
        leftPressed = true;
        if(gameState == "Select")
            soulMenuPos--;
    }
    if(event.keyCode == 39){ //right key
        rightPressed = true;
        if(gameState == "Select")
            soulMenuPos++;
    }
    soulMenuPos += 4; // normalize menu position between the four buttons
    soulMenuPos %= 4;

    if(event.keyCode == 13 || event.key == 'z'){
        zPress(); //z key or enter key pressed; outsourcing this to a function to try to organize this unfolding mess
    }
    if(event.keyCode == 16 || event.key == 'x'){
        xPress();
    }
});
document.addEventListener("keyup", function(e){
    if(event.keyCode == 38){
        upPressed = false;
    }
    if(event.keyCode == 40){
        downPressed = false;
    }
    if(event.keyCode == 37){ //left key
        leftPressed = false;
    }
    if(event.keyCode == 39){ //right key
        rightPressed = false;
    }
})

function runFrame(){

    //reset width and height variables in case window size changed
    width = window.innerWidth;
    height = window.innerHeight;
    //resize the canvas to the size of the window
    game.width = width;
    game.height = height;
    //fill the screen with black
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,width, height);


    //Draw fighting options (fight, act, etc.)
    hollowBox(0.2,0.85,0.13,0.07,0.003,soulMenuPos==0 ? "#FFFF00" : "#FF7700", "Fight", 0.055); //Draw "Fight" box
    hollowBox(0.2+0.63/4,0.85,0.13,0.07,0.003,soulMenuPos==1 ? "#FFFF00" : "#FF7700", "Act", 0.055); //Draw "Act" box
    hollowBox(0.2+0.63/2,0.85,0.13,0.07,0.003,soulMenuPos==2 ? "#FFFF00" : "#FF7700", "Item", 0.055); //Draw "Item" box
    hollowBox(0.2+3*0.63/4,0.85,0.13,0.07,0.003,soulMenuPos==3 ? "#FFFF00" : "#FF7700", "Mercy", 0.055); //Draw "Mercy" box


    //Draw Health Bar
    ctx.fillStyle = "#FFFF00";
    ctx.fillRect(width*0.5,height*0.81, width*0.1*hp/92, height*0.03);
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(width*0.5+width*0.1*hp/92,height*0.81,width*0.1*(1-hp/92),height*0.03);

    //Text on bottom bar
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.font = 0.04*height+"px undertale";
    ctx.fillText("CHARA", width*0.2, height*0.805);
    ctx.fillText("LV 19", width*0.3, height*0.805);
    ctx.fillText(hp + "/92", width*0.63, height*0.805);
    ctx.font = 0.02*height+"px undertale";
    ctx.fillText("HP", width*0.48, height*0.815);
    ctx.fillText("KR", width*0.605, height*0.815);

    if(gameState == "Select"){
        selectScreen(); // putting these in their own functions so they don't get too clogged hopefully
    }
    if(gameState == "Fight"){
        fightScreen();
    }
    if(gameState == "Avoid"){
        avoidScreen();
    }

}

function hollowBox(x,y,w,h,t,color,text,textSize){
    ctx.fillStyle = color;
    ctx.fillRect(width*x,height*y,width*w,height*t); //top
    ctx.fillRect(width*x,height*y,height*t, height*h); //left
    ctx.fillRect(width*x,height*(y+h-t),width*w, height*t) //bottom
    ctx.fillRect(width*(x+w)-height*t,height*y,height*t,height*h); //right
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = textSize*height+"px undertale";
    ctx.fillText(text, x*width+width*w/2, height*y+height*h/2); // write text in center of box 
}

function fightBox(x,y,w,h,t,color){

    ctx.fillStyle = color;
    ctx.fillRect(width*x-height*w/2,height*y-height*h/2,height*w,height*t); //top
    ctx.fillRect(width*x-height*w/2,height*y-height*h/2,height*t, height*h); //left
    ctx.fillRect(width*x-height*w/2,height*(y+h/2-t),height*w, height*t) //bottom
    ctx.fillRect(width*x+height*w/2-height*t,height*y-height*h/2,height*t,height*h); //right
}


function zPress(){ //z key pressed
    if(gameState == "Fight"){
        fightBarMoving = false;
    }
    if(gameState == "Select"){
        if(soulMenuPos == 0){
            gameState = "Fight";
            fightBarMoving = true;
            fightBarWait = 0;
            fightBarPos = 0;
        }
        else if(soulMenuPos == 1){
            gameState = "Act";
        }
        else if(soulMenuPos == 2){
            gameState = "Item";
        }
        else{
            gameState = "Mercy";
        }
    }
}

function xPress(){ //x key pressed

}

function cPress(){ //c key presed

}

function selectScreen(){//draw stuff unique to select screen

    //Draw soul in menu
    ctx.drawImage(document.getElementById(soulState), width*0.21+soulMenuPos*width*0.1575, height*0.873,height*0.02,height*0.02);


    hollowBox(0.2,0.6,0.6,0.2,0.01,"#FFFFFF", "", 0); //Draw a hollow box for text or something in white in around the right place
}

function fightScreen(){//draw stuff unique to fight screen
    hollowBox(0.2,0.6,0.6,0.2,0.01,"#FFFFFF", "", 0); //Draw a hollow box for the eye thing in white in around the right place
    ctx.drawImage(document.getElementById("fightEye"), width*0.21,height*0.61,width*0.58,height*0.18);

    if(fightBarMoving){
        ctx.fillStyle = "#000000";
        ctx.fillRect(width*(0.21+fightBarPos),height*0.61,width*0.015,height*0.18); // draw the hit bar thing
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(width*(0.2125+fightBarPos),height*0.61,width*0.01,height*0.18);
    }
    else{
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(width*(0.21+fightBarPos),height*0.61,width*0.015,height*0.18); // draw the hit bar thing, inverted edition for hit
        ctx.fillStyle = "#000000";
        ctx.fillRect(width*(0.2125+fightBarPos),height*0.61,width*0.01,height*0.18);
        fightBarWait++;
        if(fightBarWait >= 20){
            gameState = "Avoid";
            battleTime = 0;
            eventIndex = 0;
        }
    }


    //functionality with fight bar
    if(fightBarMoving){
        fightBarPos += 0.01;
        if(fightBarPos >= 0.6){
            gameState = "Avoid";
            battleTime = 0;
            eventIndex = 0;
        }
    }
}

function avoidScreen(){
    fightBox(0.5,0.7,battles[battleIndex].width,battles[battleIndex].height,0.01,"#FFFFFF", "", 0);
    ctx.drawImage(document.getElementById(soulState), width*0.5-height*0.015+soulX*height, height*0.685+soulY*height, height*0.02, height*0.02);
    battleTime++;
    moveSoul(soulState);
    if(battles[battleIndex].events[eventIndex].time == battleTime){
        var currentEvent = battles[battleIndex].events[eventIndex];
        if(currentEvent.type == "Color"){
            soulState = currentEvent.color;
        }
        if(currentEvent.type == "End"){
            gameState = "Select";
            battleIndex++;
        }

        eventIndex++;
    }
}

var blueSAcc = 0;
function moveSoul(state){
    if(state == "redSoul"){
        if(upPressed){
            soulY -= 0.003;
            if(soulY < -battles[battleIndex].height/2+0.023){
                soulY = -battles[battleIndex].height/2+0.023;
            }
        }
        if(downPressed){
            soulY += 0.003;
            if(soulY > battles[battleIndex].height/2-0.017){
                soulY = battles[battleIndex].height/2-0.017;
            }
        }
        if(leftPressed){
            soulX -= 0.003;
            if(soulX < -battles[battleIndex].width/2+0.024){
                soulX = -battles[battleIndex].width/2+0.024;
            }
        }
        if(rightPressed){
            soulX += 0.003;
            if(soulX > battles[battleIndex].width/2-0.016){
                soulX = battles[battleIndex].width/2-0.016;
            }
        }
    }
    if(state == "blueSoul"){
        if(leftPressed){
            soulX -= 0.003;
            if(soulX < -battles[battleIndex].width/2+0.024){
                soulX = -battles[battleIndex].width/2+0.024;
            }
        }
        if(rightPressed){
            soulX += 0.003;
            if(soulX > battles[battleIndex].width/2-0.016){
                soulX = battles[battleIndex].width/2-0.016;
            }
        }
        
        soulY -= blueSAcc;
        blueSAcc -= 0.001;
        if(soulY > battles[battleIndex].height/2-0.017){
            soulY = battles[battleIndex].height/2-0.017;
            blueSAcc = 0;
        }
        if(soulY < -battles[battleIndex].height/2+0.017){
            soulY = -battles[battleIndex].height/2+0.017;
            blueSAcc = 0;
        }
        if(upPressed && blueSAcc == 0){
            blueSAcc = 0.015;
        }
    }
}