class object{
    constructor(x,y,xv,yv,l,dir,otp, et){
        this.x = x;
        this.y = y;
        this.length = l;
        this.xVelocity = xv;
        this.yVelocity = yv;
        this.direction = dir;
        this.objectType = otp;
        this.endTime = et;
    }
}

function doObject(object){
    if(object.objectType == "bone1"){ //first object type - a bone
        ctx.drawImage(document.getElementById("boneTip"), width*0.5+object.x*height, height*0.685+object.y*height, 0.016*height, 0.016*height);
        for(var i = 8; i < object.length*500-8; i++){
            ctx.drawImage(document.getElementById("boneChunk"), width*0.5+object.x*height, height*0.685+object.y*height+i/500*height, 0.016*height, 0.003*height);
        }
        ctx.scale(1,-1);
        ctx.drawImage(document.getElementById("boneTip"), width*0.5+object.x*height, -height*0.685-object.y*height-object.length*height+0.016*height,0.016*height,-0.016*height);
        ctx.scale(1,-1);
        object.x += object.xVelocity;
        if(object.endTime == battleTime){
            object = null;
            return true;
        }
        if(collide(object.x,object.y,0.016,object.length, soulX, soulY, 0.02, 0.02)){
            hp--;
        }
    }
}
