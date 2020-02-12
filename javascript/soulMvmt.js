//variables for soul movement
var blueSAcc = 0;


function moveSoul(state){
    if(state == "redSoul"){ //red soul mechanics
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
            if(soulX < -battles[battleIndex].width/2+0.01){
                soulX = -battles[battleIndex].width/2+0.01;
            }
        }
        if(rightPressed){
            soulX += 0.003;
            if(soulX > battles[battleIndex].width/2-0.03){
                soulX = battles[battleIndex].width/2-0.03;
            }
        }
    }
    if(state == "blueSoul"){ //blue soul mechanics
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
        blueSAcc -= 0.0003;
        if(soulY > battles[battleIndex].height/2-0.017){
            soulY = battles[battleIndex].height/2-0.017;
            blueSAcc = 0;
        }
        if(soulY < -battles[battleIndex].height/2+0.017){
            soulY = -battles[battleIndex].height/2+0.017;
            blueSAcc = 0;
        }
        if(upPressed && blueSAcc == 0){
            blueSAcc = 0.008;
        }
    }
}