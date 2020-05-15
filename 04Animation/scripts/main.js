

 // changing individual properties with code and using setInterval
 var rotationSpeedX = 0.04;
 var rotationSpeedY = 0.01;
 var rotationSpeedZ = 0.04;
 var growthCheck = 0;
 var widthInc = 0.02;
 var heightInc = 0.02;
 var depthInc = 0.02;
 var decrease = 10;
 var myOtherBox = document.getElementById('myOtherBox');

 function spin(){
 	myOtherBox.object3D.rotation.x -= rotationSpeedX;
    myOtherBox.object3D.rotation.y += rotationSpeedY;
    myOtherBox.object3D.rotation.z += rotationSpeedZ;
    //myOtherBox.object3D.position.x -= rotationSpeedX;
 	console.log(myOtherBox.object3D.rotation.x);
 }

function grow(){
    if (growthCheck < 10){
        myOtherBox.object3D.width += widthInc;
        myOtherBox.object3D.height += heightInc;
        myOtherBox.object3D.depth += depthInc;
        growthCheck++;
        if (growthCheck == 9){
            decrease = 9;
        }
    }
    if (decrease < 10){
        myOtherBox.object3D.width -= widthInc;
        myOtherBox.object3D.height -= heightInc;
        myOtherBox.object3D.depth -= depthInc;
        decrease--;
        if (decrease == 0){
            growthCheck = 0;
        }
    }
}
 
 setInterval(spin, 16); //equivalent to 60 fps
 setInterval(grow, 16); 