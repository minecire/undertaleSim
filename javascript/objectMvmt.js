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
        ctx.drawImage(document.getElementById("boneTip"), object.x*width, object.y*height, 0.016*height, 0.016*height);
        for(var i = 8; i < object.length*500-8; i++){
            ctx.drawImage(document.getElementById("boneChunk"), object.x*width, object.y*height+i/500*height, 0.016*height, 0.003*height);
        }
        ctx.scale(1,-1);
        ctx.drawImage(document.getElementById("boneTip"), object.x*width, -object.y*height-object.length*height+0.016*height,0.016*height,-0.016*height);
        ctx.scale(1,-1);
        object.x += object.xVelocity;
        if(object.endTime == battleTime){
            object = null;
            return true;
        }
    }
}